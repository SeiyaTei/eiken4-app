// ==========================================
// 英検4級 合格クエスト 〜50日間の冒険〜
// 完全連動スクリプト (app.js)
// ==========================================

const STORAGE_KEY = 'eiken4_quest_save_v3';
const MONSTERS = ['👾', '🦇', '🐺', '🐉', '💀', '👹', '🧙', '🧟'];

// --- ユーザーデータ管理 ---
let userData = {
  level: 1,
  exp: 0,
  gems: 30,
  streak: 1,
  lastLoginDate: '',
  equipped: { hat: null, weapon: null, aura: null },
  inventory: { hints: 3, potions: 1, equips: [] },
  dailyDone: { vocab: false, grammar: false, listening: false, reading: false, allClaimed: false },
  questRotation: { vocab: false, grammar: false, listening: false, reading: false },
  weakList: [],
  bossCleared: {},
  stats: { totalAnswered: 0, totalCorrect: 0 },
  voiceSpeed: 0.88,
  bgmEnabled: false
};

function sanitizeUserData(raw) {
  if (!raw || typeof raw !== 'object') return userData;

  // ボスクリアデータの多重互換復元処理
  let bossClearedMap = {};
  if (raw.bossCleared) {
    if (typeof raw.bossCleared === 'object' && !Array.isArray(raw.bossCleared)) {
      bossClearedMap = { ...raw.bossCleared };
    } else if (Array.isArray(raw.bossCleared)) {
      raw.bossCleared.forEach(lv => { bossClearedMap[lv] = true; });
    } else if (typeof raw.bossCleared === 'number') {
      for (let i = 1; i <= raw.bossCleared; i++) bossClearedMap[i] = true;
    }
  }
  const legacyProgress = Number(raw.bossProgress || raw.bossLevel || raw.maxBossLevel || 0);
  if (legacyProgress > 0) {
    for (let i = 1; i <= legacyProgress; i++) bossClearedMap[i] = true;
  }

  return {
    level: Number(raw.level) || 1,
    exp: Number(raw.exp) || 0,
    gems: Number(raw.gems) >= 0 ? Number(raw.gems) : 30,
    streak: Number(raw.streak) || 1,
    lastLoginDate: typeof raw.lastLoginDate === 'string' ? raw.lastLoginDate : '',
    equipped: {
      hat: raw.equipped?.hat || null,
      weapon: raw.equipped?.weapon || null,
      aura: raw.equipped?.aura || null
    },
    inventory: {
      hints: Number(raw.inventory?.hints) >= 0 ? Number(raw.inventory.hints) : 3,
      potions: Number(raw.inventory?.potions) >= 0 ? Number(raw.inventory.potions) : 1,
      equips: Array.isArray(raw.inventory?.equips) ? raw.inventory.equips : []
    },
    dailyDone: {
      vocab: !!raw.dailyDone?.vocab,
      grammar: !!raw.dailyDone?.grammar,
      listening: !!raw.dailyDone?.listening,
      reading: !!raw.dailyDone?.reading,
      allClaimed: !!raw.dailyDone?.allClaimed
    },
    questRotation: {
      vocab: !!raw.questRotation?.vocab,
      grammar: !!raw.questRotation?.grammar,
      listening: !!raw.questRotation?.listening,
      reading: !!raw.questRotation?.reading
    },
    weakList: Array.isArray(raw.weakList) ? raw.weakList : [],
    bossCleared: bossClearedMap,
    stats: {
      totalAnswered: Number(raw.stats?.totalAnswered) || 0,
      totalCorrect: Number(raw.stats?.totalCorrect) || 0
    },
    voiceSpeed: Number(raw.voiceSpeed) || 0.88,
    bgmEnabled: !!raw.bgmEnabled
  };
}

function loadUserData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) userData = sanitizeUserData(JSON.parse(raw));
  } catch (e) {
    console.error("Load error:", e);
  }
  checkDailyStreak();
}

function saveUserData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
  } catch (e) {
    console.error("Save error:", e);
  }
  updateUiState();
}

function checkDailyStreak() {
  const today = new Date().toISOString().slice(0, 10);
  if (!userData.lastLoginDate) {
    userData.lastLoginDate = today;
    userData.streak = 1;
  } else if (userData.lastLoginDate !== today) {
    const last = new Date(userData.lastLoginDate);
    const curr = new Date(today);
    const diffDays = Math.round((curr - last) / (1000 * 60 * 60 * 24));
    if (diffDays === 1) userData.streak += 1;
    else if (diffDays > 1) userData.streak = 1;
    userData.lastLoginDate = today;
    userData.dailyDone = { vocab: false, grammar: false, listening: false, reading: false, allClaimed: false };
  }
}

// --- ステータス計算 ---
function getHeroStats() {
  const lv = userData.level;
  let hp = 100 + lv * 25;
  let atk = 25 + lv * 6;
  let spd = 5 + Math.floor(lv * 1.5);

  const hat = SHOP_EQUIP_DATA.find(x => x.id === userData.equipped.hat);
  const wp = SHOP_EQUIP_DATA.find(x => x.id === userData.equipped.weapon);
  const aura = SHOP_EQUIP_DATA.find(x => x.id === userData.equipped.aura);

  if (hat) hp += hat.val;
  if (wp) atk += wp.val;
  if (aura) spd += aura.val;

  return { hp, atk, spd };
}

function getCurrentAvatar() {
  const lv = userData.level;
  let current = AVATARS[0];
  for (const av of AVATARS) {
    if (lv >= av.minLv) current = av;
  }
  return current;
}

// --- サウンド & BGM ---
let synth = window.speechSynthesis;
let audioCtx = null;
let bgmTimer = null;

function getAudioContext() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function playSound(type) {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    const now = ctx.currentTime;

    if (type === 'correct') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.setValueAtTime(659.25, now + 0.08);
      osc.frequency.setValueAtTime(783.99, now + 0.16);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === 'wrong') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.setValueAtTime(146.83, now + 0.12);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === 'levelup') {
      [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = 'triangle';
        o.frequency.value = f;
        o.connect(g);
        g.connect(ctx.destination);
        g.gain.setValueAtTime(0.18, now + i * 0.08);
        g.gain.exponentialRampToValueAtTime(0.01, now + i * 0.08 + 0.25);
        o.start(now + i * 0.08);
        o.stop(now + i * 0.08 + 0.25);
      });
    }
  } catch (e) {}
}

function toggleBGM() {
  userData.bgmEnabled = !userData.bgmEnabled;
  const btn = document.getElementById('btnBgmToggle');
  if (btn) btn.innerText = userData.bgmEnabled ? '🎵 ON' : '🎵 OFF';
  if (!userData.bgmEnabled && bgmTimer) {
    clearInterval(bgmTimer);
    bgmTimer = null;
  } else if (userData.bgmEnabled) {
    startSimpleBgm();
  }
}

function startSimpleBgm() {
  if (bgmTimer) return;
  const notes = [261.63, 329.63, 392.00, 329.63, 293.66, 349.23, 440.00, 349.23];
  let noteIdx = 0;
  bgmTimer = setInterval(() => {
    if (!userData.bgmEnabled) return;
    try {
      const ctx = getAudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = notes[noteIdx % notes.length];
      osc.connect(gain);
      gain.connect(ctx.destination);
      gain.gain.setValueAtTime(0.02, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
      noteIdx++;
    } catch (e) {}
  }, 450);
}

function toggleVoiceSpeed() {
  userData.voiceSpeed = userData.voiceSpeed === 0.88 ? 0.72 : 0.88;
  const btn = document.getElementById('btnSpeedToggle');
  if (btn) btn.innerText = userData.voiceSpeed === 0.72 ? '🗣️ とてもゆっくり' : '🗣️ ゆっくり';
  saveUserData();
}

function playEnglishSpeech(text, onEnd = null) {
  if (!synth) { if (onEnd) onEnd(); return; }
  synth.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-US';
  utter.rate = userData.voiceSpeed;
  if (onEnd) { utter.onend = onEnd; utter.onerror = onEnd; }
  synth.speak(utter);
}

function playDialogueSpeech(dialogueArray, onEnd = null) {
  if (!dialogueArray || dialogueArray.length === 0) { if (onEnd) onEnd(); return; }
  synth.cancel();
  let idx = 0;
  function speakNext() {
    if (idx >= dialogueArray.length) { if (onEnd) onEnd(); return; }
    const it = dialogueArray[idx];
    const utter = new SpeechSynthesisUtterance(it.text);
    utter.lang = 'en-US';
    utter.rate = it.speaker === 'narrator' ? userData.voiceSpeed + 0.05 : userData.voiceSpeed;
    utter.pitch = it.speaker === 'female' ? 1.15 : (it.speaker === 'male' ? 0.9 : 1.0);
    utter.onend = () => { idx++; setTimeout(speakNext, 300); };
    utter.onerror = () => { idx++; setTimeout(speakNext, 300); };
    synth.speak(utter);
  }
  speakNext();
}

// --- クイズ出題データ生成処理 ---
function shuffleArray(arr) {
  const cloned = [...arr];
  for (let i = cloned.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}

function generateVocabQuiz(wordItem) {
  const [word, mean] = wordItem;
  const distractors = RAW_VOCAB_DATA.filter(x => x[0] !== word).map(x => x[1]);
  const shuffledOptions = shuffleArray([mean, ...shuffleArray(distractors).slice(0, 3)]);
  return {
    id: `vocab_${word}`,
    type: 'vocab',
    q: word,
    sub: '【英単語】意味を選ぼう',
    options: shuffledOptions,
    ans: shuffledOptions.indexOf(mean),
    explain: `【単語】${word}\n【意味】${mean}`,
    audio_complete: word
  };
}

function generateGrammarQuiz(item) {
  const correctOption = item.opt[item.ans];
  const shuffledOptions = shuffleArray(item.opt);
  return {
    id: `gram_${item.q.slice(0, 15)}`,
    type: 'grammar',
    q: item.q,
    sub: item.sub || '【文法】空所に入る語句を選ぼう',
    options: shuffledOptions,
    ans: shuffledOptions.indexOf(correctOption),
    explain: `${item.sub ? item.sub + '\n\n' : ''}${item.exp}`,
    audio_complete: item.q.replace(/\([^)]*\)/g, correctOption)
  };
}

function generateListeningQuiz(item) {
  const correctOption = item.opt[item.ans];
  const shuffledOptions = shuffleArray(item.opt);
  return {
    id: `listen_${item.sub.slice(0, 15)}`,
    type: 'listening',
    q: item.q,
    sub: item.sub,
    options: shuffledOptions,
    ans: shuffledOptions.indexOf(correctOption),
    explain: item.explain,
    dialogue: item.dialogue || null,
    audio_complete: item.aud_complete || null
  };
}

function generateReadingQuiz(item) {
  const correctOption = item.options[item.ans];
  const shuffledOptions = shuffleArray(item.options);
  return {
    id: item.id,
    type: 'reading',
    passage: item.passage,
    q: item.q,
    sub: item.sub || '📜 長文読解 (掲示・メール・説明文)',
    options: shuffledOptions,
    ans: shuffledOptions.indexOf(correctOption),
    explain: item.explain
  };
}

function getQuizDataById(id) {
  if (id.startsWith('vocab_')) {
    const word = id.replace('vocab_', '');
    const found = RAW_VOCAB_DATA.find(x => x[0] === word);
    if (found) return generateVocabQuiz(found);
  } else if (id.startsWith('gram_')) {
    const found = RAW_GRAMMAR_DATA.find(x => `gram_${x.q.slice(0, 15)}` === id);
    if (found) return generateGrammarQuiz(found);
  } else if (id.startsWith('listen_')) {
    const found = RAW_LISTENING_DATA.find(x => `listen_${x.sub.slice(0, 15)}` === id);
    if (found) return generateListeningQuiz(found);
  } else if (id.startsWith('read_')) {
    const found = RAW_READING_DATA.find(x => x.id === id);
    if (found) return generateReadingQuiz(found);
  } else if (id.startsWith('past_')) {
    const found = ACTUAL_PAST_EXAM_DATA.find(x => x.id === id);
    if (found) {
      const correctOption = found.options[found.ans];
      const shuffledOptions = shuffleArray(found.options);
      return {
        id: found.id,
        type: found.type,
        passage: found.passage || null,
        q: found.q,
        sub: found.sub,
        options: shuffledOptions,
        ans: shuffledOptions.indexOf(correctOption),
        explain: found.explain,
        dialogue: found.dialogue || null,
        audio_question: found.audio_question || null,
        audio_complete: found.audio_complete || null
      };
    }
  }
  return null;
}

// --- バトル進行ステート ---
let currentQueue = [];
let currentIndex = 0;
let quizScore = 0;
let currentMode = '';
let isBossMode = false;
let currentBossStage = null;
let selectedNormalType = '';
let isAnsweringLocked = false;
let comboCount = 0;
let isFeverActive = false;
let bossTimerInterval = null;
let bossRemainingTime = 0;

// バトルRPGパラメータ
let battleHeroHp = 100;
let battleHeroMaxHp = 100;
let battleEnemyHp = 100;
let battleEnemyMaxHp = 100;
let battleEnemyAtk = 20;

// --- 出撃エントリー ---
function startDailyQuest(type, count) {
  currentMode = type;
  isBossMode = false;
  currentBossStage = null;
  setupBattleStats(count * 50, 15 + userData.level * 3);
  startSessionInternal(type, count);
}

function openNormalQuestSelect(type) {
  selectedNormalType = type;
  const modal = document.getElementById('modalNormalSelect');
  const titleEl = document.getElementById('normalSelectTitle');
  if (titleEl) {
    if (type === 'vocab') titleEl.innerText = "📚 単語・熟語 難易度選択 (10問)";
    else if (type === 'grammar') titleEl.innerText = "🪄 文法・会話 難易度選択 (5問)";
    else if (type === 'listening') titleEl.innerText = "🎧 リスニング 難易度選択 (3問)";
    else if (type === 'reading') titleEl.innerText = "📜 長文読解 難易度選択 (2問)";
  }
  if (modal) modal.classList.remove('hidden');
}

function closeNormalQuestSelect() {
  const modal = document.getElementById('modalNormalSelect');
  if (modal) modal.classList.add('hidden');
}

function startNormalModeWithDiff(diff) {
  closeNormalQuestSelect();
  currentMode = selectedNormalType;
  isBossMode = false;
  currentBossStage = null;

  const count = (selectedNormalType === 'vocab') ? 10 : (selectedNormalType === 'grammar' ? 5 : (selectedNormalType === 'listening' ? 3 : 2));
  const hpTiers = [600, 4500, 15000, 45000];
  const atkTiers = [15, 60, 150, 350];
  setupBattleStats(hpTiers[diff - 1] || 1000, atkTiers[diff - 1] || 25);
  startSessionInternal(selectedNormalType, count, { diff });
}

function openBossSelectModal() {
  const modal = document.getElementById('modalBossSelect');
  const container = document.getElementById('bossStageList');
  if (!modal || !container) return;

  container.innerHTML = '';
  BOSS_STAGES.forEach(stage => {
    if (stage.isSecret && !userData.bossCleared[10]) return;
    const isCleared = !!userData.bossCleared[stage.lv];
    const prevCleared = stage.lv === 1 || !!userData.bossCleared[stage.lv - 1];

    // まだ登場していない先のボスは非表示（未登場演出）
    if (!isCleared && !prevCleared) return;

    const card = document.createElement('div');
    card.className = `p-3 rounded-2xl border flex items-center justify-between gap-2 transition ${
      isCleared
        ? 'bg-indigo-950/90 border-emerald-500/70 shadow'
        : 'bg-indigo-900/90 border-red-500/80 shadow-lg glow-red'
    }`;

    card.innerHTML = `
      <div class="flex items-center gap-2.5 min-w-0 flex-1">
        <span class="text-3xl flex-shrink-0">${stage.icon}</span>
        <div class="min-w-0">
          <div class="font-black text-xs text-white truncate">Lv.${stage.lv}: ${stage.name}</div>
          <div class="text-[9.5px] text-amber-300 font-bold truncate">${stage.desc}</div>
          <div class="text-[8.5px] text-slate-300">敵HP: ${stage.hp.toLocaleString()} / 攻撃: ${stage.atk}</div>
        </div>
      </div>
      <div class="flex-shrink-0">
        ${
          isCleared
            ? `<button onclick="confirmBossFight(${stage.lv})" class="bg-emerald-700 hover:bg-emerald-600 text-white font-bold px-2.5 py-1.5 rounded-xl text-[10.5px] shadow transition">再戦</button>`
            : `<button onclick="confirmBossFight(${stage.lv})" class="bg-gradient-to-r from-red-600 to-amber-500 hover:brightness-110 text-white font-black px-3 py-1.5 rounded-xl text-[11px] shadow-lg animate-pulse whitespace-nowrap">討伐</button>`
        }
      </div>
    `;
    container.appendChild(card);
  });

  modal.classList.remove('hidden');
}

function closeBossSelectModal() {
  const modal = document.getElementById('modalBossSelect');
  if (modal) modal.classList.add('hidden');
}

function confirmBossFight(stageLv) {
  const stage = BOSS_STAGES.find(s => s.lv === stageLv);
  if (!stage) return;
  closeBossSelectModal();

  const modal = document.getElementById('modalBossDialogue');
  const iconEl = document.getElementById('bossDialogueIcon');
  const titleEl = document.getElementById('bossDialogueTitle');
  const textEl = document.getElementById('bossDialogueText');
  const nextBtn = document.getElementById('btnBossDialogueNext');

  if (iconEl) iconEl.innerText = stage.icon;
  if (titleEl) titleEl.innerText = `Lv.${stage.lv} ${stage.name} 出現！`;
  if (textEl) textEl.innerText = stage.introMsg;
  if (modal) modal.classList.remove('hidden');

  if (nextBtn) {
    nextBtn.onclick = () => {
      modal.classList.add('hidden');
      startBossBattleInternal(stage);
    };
  }
}

function startBossBattleInternal(stage) {
  currentBossStage = stage;
  isBossMode = true;
  currentMode = 'boss';
  setupBattleStats(stage.hp, stage.atk);

  // ボス難易度に応じた出題プール編成（序盤は文法中心、中盤以降にリスニングや長文が加わる）
  let pool = [];
  if (stage.lv <= 3) {
    pool = ACTUAL_PAST_EXAM_DATA.filter(x => x.type === 'grammar');
  } else if (stage.lv <= 6) {
    pool = ACTUAL_PAST_EXAM_DATA.filter(x => x.type === 'grammar' || x.type === 'reading');
  } else {
    pool = ACTUAL_PAST_EXAM_DATA;
  }
  if (!pool || pool.length === 0) pool = ACTUAL_PAST_EXAM_DATA;

  const qCount = stage.lv >= 9 ? 12 : (stage.lv >= 5 ? 10 : 8);
  const selected = shuffleArray(pool).slice(0, qCount);

  currentQueue = selected.map(item => {
    const correctOption = item.options[item.ans];
    const shuffledOptions = shuffleArray(item.options);
    return {
      id: item.id,
      type: item.type,
      passage: item.passage || null,
      q: item.q,
      sub: item.sub,
      options: shuffledOptions,
      ans: shuffledOptions.indexOf(correctOption),
      explain: item.explain,
      dialogue: item.dialogue || null,
      audio_question: item.audio_question || null,
      audio_complete: item.audio_complete || null
    };
  });

  startQuizExecution();
}

function startWeakBattle() {
  const rotCount = (userData.questRotation.vocab ? 1 : 0) +
                   (userData.questRotation.grammar ? 1 : 0) +
                   (userData.questRotation.listening ? 1 : 0) +
                   (userData.questRotation.reading ? 1 : 0);
  if (rotCount < 4) {
    alert(`通常特訓の4分野をすべてクリアすると挑戦できます！（あと${4 - rotCount}分野）`);
    return;
  }
  if (userData.weakList.length === 0) {
    alert("現在、にがてリストに登録されている問題はありません！全問正解の素晴らしい状態です！");
    return;
  }
  currentMode = 'weakBattle';
  isBossMode = false;
  currentBossStage = null;
  setupBattleStats(userData.weakList.length * 250, 25);

  const shuffledWeakIds = shuffleArray(userData.weakList).slice(0, 5);
  currentQueue = shuffledWeakIds.map(id => getQuizDataById(id)).filter(item => item !== null);
  if (currentQueue.length === 0) { alert("問題の読み込みに失敗しました。"); return; }
  startQuizExecution();
}

function startWeakRetry(id) {
  const quizData = getQuizDataById(id);
  if (!quizData) { alert("問題が見つかりませんでした。"); return; }
  currentMode = 'weakRetry';
  isBossMode = false;
  currentBossStage = null;
  setupBattleStats(300, 15);
  currentQueue = [quizData];
  startQuizExecution();
}

function setupBattleStats(enemyHp, enemyAtk) {
  const hero = getHeroStats();
  battleHeroMaxHp = hero.hp;
  battleHeroHp = battleHeroMaxHp;
  battleEnemyMaxHp = enemyHp;
  battleEnemyHp = battleEnemyMaxHp;
  battleEnemyAtk = enemyAtk;
  comboCount = 0;
  isFeverActive = false;
}

function startSessionInternal(type, count, options = {}) {
  let list = [];
  if (type === 'vocab') {
    list = shuffleArray(RAW_VOCAB_DATA).slice(0, count).map(generateVocabQuiz);
  } else if (type === 'grammar') {
    list = shuffleArray(RAW_GRAMMAR_DATA).slice(0, count).map(generateGrammarQuiz);
  } else if (type === 'listening') {
    list = shuffleArray(RAW_LISTENING_DATA).slice(0, count).map(generateListeningQuiz);
  } else if (type === 'reading') {
    let pool = RAW_READING_DATA;
    if (options.diff === 1) pool = pool.filter(x => ['read_1', 'read_2', 'read_3', 'read_4'].includes(x.id));
    else if (options.diff === 2) pool = pool.filter(x => ['read_5', 'read_6', 'read_7', 'read_8', 'read_9', 'read_10'].includes(x.id));
    else if (options.diff >= 3) pool = pool.filter(x => parseInt(x.id.replace('read_', ''), 10) >= 11);
    if (!pool || pool.length === 0) pool = RAW_READING_DATA;
    list = shuffleArray(pool).slice(0, count).map(generateReadingQuiz);
  }
  if (list.length === 0) { alert("出題可能な問題がありません。"); return; }
  currentQueue = list;
  startQuizExecution();
}

function startQuizExecution() {
  currentIndex = 0;
  quizScore = 0;
  switchView('viewQuiz');
  updateBattleHpBars();
  renderQuestion();
}

function confirmExitQuiz() {
  if (confirm("クエストを中断して拠点に戻りますか？")) {
    stopCriticalTimer();
    if (synth) synth.cancel();
    showHome();
  }
}

// --- クイズ画面レンダリング ---
function renderQuestion() {
  isAnsweringLocked = false;
  const q = currentQueue[currentIndex];
  if (!q) return;

  const feedbackBox = document.getElementById('quizFeedback');
  if (feedbackBox) feedbackBox.classList.add('hidden');

  setText('quizProgress', `第 ${currentIndex + 1} / ${currentQueue.length} 問`);
  setText('hintStockCount', userData.inventory.hints);
  setText('comboCounter', `🔥 ${comboCount} 連続`);

  const avatar = getCurrentAvatar();
  setText('battleHeroName', avatar.name);
  if (isBossMode && currentBossStage) {
    setText('battleEnemyName', currentBossStage.name);
    setText('enemyAvatar', currentBossStage.icon);
  } else {
    setText('battleEnemyName', 'モンスター');
    setText('enemyAvatar', MONSTERS[currentIndex % MONSTERS.length]);
  }

  // 長文読解スクロール枠の制御
  const passageBox = document.getElementById('quizPassageBox');
  if (passageBox) {
    if (q.passage) {
      passageBox.innerText = q.passage;
      passageBox.classList.remove('hidden');
    } else {
      passageBox.classList.add('hidden');
    }
  }

  setText('quizQuestion', q.q);
  setText('quizSubText', q.sub || '');

  // 選択肢ボタン描画
  const optContainer = document.getElementById('quizOptions');
  optContainer.innerHTML = '';
  q.options.forEach((optText, idx) => {
    const btn = document.createElement('button');
    btn.className = "w-full text-left p-2.5 rounded-xl bg-indigo-900/80 hover:bg-indigo-800/90 border border-indigo-700 text-white font-semibold text-xs transition active:scale-[0.98] flex items-center gap-2 shadow";
    btn.innerHTML = `<span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-800 text-[10px] font-bold text-amber-300 border border-indigo-600 flex-shrink-0">${idx + 1}</span><span class="flex-1 whitespace-pre-line leading-relaxed">${optText}</span>`;
    btn.onclick = () => handleAnswer(idx);
    optContainer.appendChild(btn);
  });

  // 音声 & タイマー制御
  const audioContainer = document.getElementById('audioBtnContainer');
  const timerText = document.getElementById('timerText');
  const timerGauge = document.getElementById('timerGauge');
  if (timerGauge) timerGauge.style.width = '100%';

  if (q.type === 'listening') {
    if (audioContainer) audioContainer.classList.remove('hidden');
    if (timerText) timerText.innerText = '🎧 音声を再生中...';
    if (q.dialogue) playDialogueSpeech(q.dialogue, () => {
      if (isBossMode) startQuestionTimer();
      else if (timerText) timerText.innerText = '再生完了';
    });
    else {
      if (isBossMode) startQuestionTimer();
      else if (timerText) timerText.innerText = '';
    }
  } else {
    // リスニング以外の通常問題では音声ボタンを隠す
    if (audioContainer) audioContainer.classList.add('hidden');
    if (isBossMode) {
      startQuestionTimer();
    } else {
      stopCriticalTimer();
      if (timerText) timerText.innerText = '';
    }
  }
}

function playCurrentAudio() {
  const q = currentQueue[currentIndex];
  if (!q) return;
  if (q.dialogue) playDialogueSpeech(q.dialogue);
  else if (q.audio_complete) playEnglishSpeech(q.audio_complete);
  else if (q.type === 'vocab') playEnglishSpeech(q.q);
}

function startQuestionTimer() {
  stopCriticalTimer();
  if (!isBossMode) return;

  const timeLimit = 20;
  bossRemainingTime = timeLimit;
  const gauge = document.getElementById('timerGauge');
  const timerText = document.getElementById('timerText');
  if (timerText) timerText.innerText = `⏱️ 残り ${bossRemainingTime.toFixed(1)}秒`;

  const startTime = Date.now();
  bossTimerInterval = setInterval(() => {
    const elapsed = (Date.now() - startTime) / 1000;
    bossRemainingTime = Math.max(0, timeLimit - elapsed);
    if (timerText) timerText.innerText = `⏱️ 残り ${bossRemainingTime.toFixed(1)}秒`;
    if (gauge) gauge.style.width = `${(bossRemainingTime / timeLimit) * 100}%`;

    if (bossRemainingTime <= 0) {
      stopCriticalTimer();
      if (!isAnsweringLocked) handleAnswer(-1);
    }
  }, 100);
}

function stopCriticalTimer() {
  if (bossTimerInterval) {
    clearInterval(bossTimerInterval);
    bossTimerInterval = null;
  }
}

// ヒント機能（50:50）
function use5050Hint() {
  if (userData.inventory.hints <= 0) { alert("ヒントの書がありません！ショップで購入できます。"); return; }
  const q = currentQueue[currentIndex];
  if (!q || isAnsweringLocked) return;

  userData.inventory.hints--;
  setText('hintStockCount', userData.inventory.hints);
  saveUserData();

  const wrongIndices = [];
  q.options.forEach((_, idx) => { if (idx !== q.ans) wrongIndices.push(idx); });
  const toDisable = shuffleArray(wrongIndices).slice(0, 2);
  const buttons = document.querySelectorAll('#quizOptions button');
  toDisable.forEach(idx => {
    if (buttons[idx]) {
      buttons[idx].disabled = true;
      buttons[idx].classList.add('opacity-30', 'line-through');
    }
  });
}

// --- 解答判定 ---
function handleAnswer(selectedIndex) {
  if (isAnsweringLocked) return;
  isAnsweringLocked = true;
  stopCriticalTimer();

  const q = currentQueue[currentIndex];
  const isCorrect = (selectedIndex === q.ans);
  userData.stats.totalAnswered++;

  const hero = getHeroStats();
  if (isCorrect) {
    quizScore++;
    comboCount++;
    userData.stats.totalCorrect++;
    playSound('correct');

    if (comboCount >= 3 && !isFeverActive) {
      isFeverActive = true;
      const fv = document.getElementById('feverBanner');
      if (fv) fv.classList.remove('hidden');
    }

    const damageMultiplier = isFeverActive ? 2.0 : 1.0;
    const damage = Math.round(hero.atk * (1 + comboCount * 0.1) * damageMultiplier);
    battleEnemyHp = Math.max(0, battleEnemyHp - damage);
    triggerDamageEffect(`💥 ${damage} CRITICAL!`);

    if (currentMode === 'weakRetry' || currentMode === 'weakBattle') {
      userData.weakList = userData.weakList.filter(id => id !== q.id);
    }
  } else {
    comboCount = 0;
    isFeverActive = false;
    const fv = document.getElementById('feverBanner');
    if (fv) fv.classList.add('hidden');

    playSound('wrong');
    const taken = selectedIndex === -1 ? battleEnemyAtk * 1.5 : battleEnemyAtk;
    battleHeroHp = Math.max(0, battleHeroHp - Math.round(taken));
    triggerDamageEffect(`MISS / -${Math.round(taken)} HP`);
    shakeScreen();

    if (q.id && !userData.weakList.includes(q.id)) {
      userData.weakList.push(q.id);
    }
  }

  updateBattleHpBars();

  // ボタン色変化
  const optionButtons = document.querySelectorAll('#quizOptions button');
  optionButtons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.ans) {
      btn.classList.remove('bg-indigo-900/80', 'border-indigo-700');
      btn.classList.add('bg-emerald-700', 'border-emerald-400', 'text-white');
    } else if (idx === selectedIndex && !isCorrect) {
      btn.classList.remove('bg-indigo-900/80', 'border-indigo-700');
      btn.classList.add('bg-rose-800', 'border-rose-500', 'text-white', 'opacity-70');
    }
  });

  // フィードバック表示
  const feedbackBox = document.getElementById('quizFeedback');
  const iconEl = document.getElementById('feedbackIcon');
  const titleEl = document.getElementById('feedbackTitle');
  const explainEl = document.getElementById('feedbackExplain');
  if (feedbackBox && iconEl && titleEl && explainEl) {
    if (isCorrect) {
      iconEl.innerText = "⭕";
      titleEl.innerText = "正解！ ナイスアタック！";
      titleEl.className = "text-xs font-black text-emerald-300";
    } else {
      iconEl.innerText = "❌";
      titleEl.innerText = selectedIndex === -1 ? "時間切れ！" : "不正解...！";
      titleEl.className = "text-xs font-black text-rose-400";
    }
    explainEl.innerText = q.explain || (q.audio_complete ? `【英文】${q.audio_complete}` : '');
    feedbackBox.classList.remove('hidden');
  }

  if (q.audio_complete && q.type !== 'listening') {
    setTimeout(() => playEnglishSpeech(q.audio_complete), 400);
  }
}

function updateBattleHpBars() {
  const heroPct = Math.max(0, (battleHeroHp / battleHeroMaxHp) * 100);
  const enemyPct = Math.max(0, (battleEnemyHp / battleEnemyMaxHp) * 100);

  const heroBar = document.getElementById('battleHeroHpBar');
  const enemyBar = document.getElementById('battleEnemyHpBar');
  if (heroBar) heroBar.style.width = `${heroPct}%`;
  if (enemyBar) enemyBar.style.width = `${enemyPct}%`;

  setText('battleHeroHpText', `${battleHeroHp}/${battleHeroMaxHp}`);
  setText('battleEnemyHpText', `${battleEnemyHp}/${battleEnemyMaxHp}`);
}

function triggerDamageEffect(text) {
  const area = document.getElementById('damageEffectArea');
  if (!area) return;
  const el = document.createElement('div');
  el.className = "text-base font-black text-amber-300 animate-bounce drop-shadow-md";
  el.innerText = text;
  area.appendChild(el);
  setTimeout(() => el.remove(), 700);
}

function shakeScreen() {
  const card = document.getElementById('enemyCardBox');
  if (!card) return;
  card.classList.add('animate-shake');
  setTimeout(() => card.classList.remove('animate-shake'), 400);
}

function nextQuestion() {
  if (battleHeroHp <= 0 || battleEnemyHp <= 0) {
    showResultScreen();
    return;
  }
  currentIndex++;
  if (currentIndex < currentQueue.length) {
    renderQuestion();
  } else {
    showResultScreen();
  }
}

// --- リザルト処理 ---
function showResultScreen() {
  stopCriticalTimer();
  switchView('viewResult');

  const totalQ = currentQueue.length;
  const isWin = battleHeroHp > 0 && (battleEnemyHp <= 0 || (quizScore / totalQ) >= 0.6);
  let earnedExp = 0;
  let earnedGems = 0;
  let resTitle = isWin ? "クエストクリア！" : "バトル敗北...";
  let resComment = isWin ? "見事な集中力です！この調子で合格を目指そう！" : "HPが尽きてしまった...装備を整えて再挑戦しよう！";
  let hasRareDrop = false;
  let dropItemName = '';

  if (isBossMode && currentBossStage) {
    if (isWin) {
      resTitle = `👑 ${currentBossStage.name} 討伐成功！`;
      earnedExp = currentBossStage.exp + quizScore * 10;
      earnedGems = currentBossStage.gems;
      userData.bossCleared[currentBossStage.lv] = true;
      playSound('levelup');

      if (currentBossStage.lv === 5 && !userData.inventory.equips.includes('wp_dark_blade')) {
        hasRareDrop = true;
        dropItemName = "【漆黒の魔剣】";
        userData.inventory.equips.push('wp_dark_blade');
      } else if (currentBossStage.lv === 7 && !userData.inventory.equips.includes('hat_dragon_crown')) {
        hasRareDrop = true;
        dropItemName = "【竜王の覇冠】";
        userData.inventory.equips.push('hat_dragon_crown');
      } else if (currentBossStage.lv === 10) {
        setTimeout(triggerNormalEnding, 1200);
      }
    } else {
      earnedExp = quizScore * 8;
      earnedGems = 3;
    }
  } else if (currentMode === 'weakBattle') {
    if (isWin) {
      resTitle = "✨ にがて討伐 成功！";
      resComment = "苦手分野を克服しました！通常特訓サイクルがリセットされます！";
      earnedExp = 120 + quizScore * 10;
      earnedGems = 35;
      userData.questRotation = { vocab: false, grammar: false, listening: false, reading: false };
      playSound('levelup');
    }
  } else {
    // デイリー & 通常特訓
    if (currentMode === 'vocab') {
      userData.dailyDone.vocab = true;
      if (selectedNormalType === 'vocab') userData.questRotation.vocab = true;
      earnedExp = 50 + quizScore * 5;
      earnedGems = 15;
    } else if (currentMode === 'grammar') {
      userData.dailyDone.grammar = true;
      if (selectedNormalType === 'grammar') userData.questRotation.grammar = true;
      earnedExp = 60 + quizScore * 8;
      earnedGems = 20;
    } else if (currentMode === 'listening') {
      userData.dailyDone.listening = true;
      if (selectedNormalType === 'listening') userData.questRotation.listening = true;
      earnedExp = 80 + quizScore * 10;
      earnedGems = 25;
    } else if (currentMode === 'reading') {
      userData.dailyDone.reading = true;
      if (selectedNormalType === 'reading') userData.questRotation.reading = true;
      earnedExp = 80 + quizScore * 10;
      earnedGems = 25;
    }
    if (quizScore === totalQ && totalQ > 0) {
      earnedExp += 30;
      earnedGems += 10;
      resComment = "パーフェクトクリア達成！ボーナス獲得！";
      playSound('levelup');
    }
  }

  addExpAndGems(earnedExp, earnedGems);

  setText('resultTitle', resTitle);
  setText('resultComment', resComment);
  setText('resultScore', `${quizScore} / ${totalQ}`);
  setText('resultExp', `+${earnedExp}`);
  setText('resultGems', `💎+${earnedGems}`);

  const dropArea = document.getElementById('rareDropArea');
  const dropText = document.getElementById('rareDropItemText');
  if (dropArea && dropText) {
    if (hasRareDrop) {
      dropText.innerText = `${dropItemName} を手に入れた！`;
      dropArea.classList.remove('hidden');
    } else {
      dropArea.classList.add('hidden');
    }
  }

  saveUserData();
}

function addExpAndGems(expGain, gemGain) {
  userData.exp += expGain;
  userData.gems += gemGain;

  let reqExp = getRequiredExp(userData.level);
  while (userData.exp >= reqExp) {
    userData.exp -= reqExp;
    userData.level += 1;
    userData.gems += 50;
    playSound('levelup');
    reqExp = getRequiredExp(userData.level);
  }
}

function getRequiredExp(level) {
  return 100 + (level - 1) * 60;
}

// --- エンディング制御 ---
function triggerNormalEnding() {
  const modal = document.getElementById('modalEnding');
  const hero = getCurrentAvatar();
  setText('endingHeroEmoji', hero.emoji);
  setText('endingHeroName', hero.name);

  ['hat_genesis_crown', 'wp_genesis_blade', 'aura_genesis_light'].forEach(id => {
    if (!userData.inventory.equips.includes(id)) userData.inventory.equips.push(id);
  });
  saveUserData();

  if (modal) modal.classList.remove('hidden');
}

function triggerEndingTeaser() {
  const p1 = document.getElementById('endingPhase1');
  const p2 = document.getElementById('endingPhase2');
  if (p1 && p2) {
    p1.classList.add('hidden');
    p2.classList.remove('hidden');
  }
}

function finishEndingSequence() {
  const modal = document.getElementById('modalEnding');
  if (modal) modal.classList.add('hidden');
  showHome();
}

// --- UI同期 ---
function updateUiState() {
  setText('headerLevel', `Lv.${userData.level}`);
  setText('levelLabel', `Lv.${userData.level}`);
  setText('gemCount', userData.gems);
  setText('streakCount', userData.streak);

  const hero = getCurrentAvatar();
  const stats = getHeroStats();
  setText('heroName', hero.name);
  setText('heroRank', hero.rank);
  setText('heroAvatar', hero.emoji);
  setText('statAtkVal', stats.atk);
  setText('statHpVal', stats.hp);
  setText('statSpdVal', stats.spd);

  const hat = SHOP_EQUIP_DATA.find(x => x.id === userData.equipped.hat);
  const wp = SHOP_EQUIP_DATA.find(x => x.id === userData.equipped.weapon);
  const aura = SHOP_EQUIP_DATA.find(x => x.id === userData.equipped.aura);
  setText('equipHatIcon', hat ? hat.icon : '');
  setText('equipWeaponIcon', wp ? wp.icon : '');
  setText('equipAuraIcon', aura ? aura.icon : '');

  const reqExp = getRequiredExp(userData.level);
  const pct = Math.min(100, Math.round((userData.exp / reqExp) * 100));
  const expBar = document.getElementById('expBar');
  if (expBar) expBar.style.width = `${pct}%`;
  setText('expText', `${userData.exp} / ${reqExp}`);

  const targetDate = new Date('2026-10-04T00:00:00');
  const now = new Date();
  const diffDays = Math.max(0, Math.ceil((targetDate - now) / (1000 * 60 * 60 * 24)));
  setText('countdownDays', `${diffDays} 日`);

  // ボス進捗バッジの正確な反映
  const clearedCount = Object.keys(userData.bossCleared).filter(k => userData.bossCleared[k]).length;
  setText('bossCurrentProgressBadge', `Lv.${Math.min(11, clearedCount + 1)} 解放中`);

  let dCount = 0;
  if (userData.dailyDone.vocab) dCount++;
  if (userData.dailyDone.grammar) dCount++;
  if (userData.dailyDone.listening) dCount++;
  if (userData.dailyDone.reading) dCount++;
  setText('dailyProgressText', `${dCount} / 4`);

  updateDailyButton('questActionVocab', userData.dailyDone.vocab, 'vocab', 5);
  updateDailyButton('questActionGrammar', userData.dailyDone.grammar, 'grammar', 3);
  updateDailyButton('questActionListening', userData.dailyDone.listening, 'listening', 3);
  updateDailyButton('questActionReading', userData.dailyDone.reading, 'reading', 2);

  const bArea = document.getElementById('dailyBonusArea');
  const bClaimed = document.getElementById('dailyBonusClaimedArea');
  if (bArea && bClaimed) {
    if (dCount === 4 && !userData.dailyDone.allClaimed) {
      bArea.classList.remove('hidden');
      bClaimed.classList.add('hidden');
    } else if (dCount === 4 && userData.dailyDone.allClaimed) {
      bArea.classList.add('hidden');
      bClaimed.classList.remove('hidden');
    } else {
      bArea.classList.add('hidden');
      bClaimed.classList.add('hidden');
    }
  }

  let rCount = 0;
  if (userData.questRotation.vocab) rCount++;
  if (userData.questRotation.grammar) rCount++;
  if (userData.questRotation.listening) rCount++;
  if (userData.questRotation.reading) rCount++;
  setText('rotationProgressBadge', `${rCount}/4完了`);

  updateRotBadge('badgeRotVocab', 'btnRotVocab', userData.questRotation.vocab);
  updateRotBadge('badgeRotGrammar', 'btnRotGrammar', userData.questRotation.grammar);
  updateRotBadge('badgeRotListening', 'btnRotListening', userData.questRotation.listening);
  updateRotBadge('badgeRotReading', 'btnRotReading', userData.questRotation.reading);

  const btnWeak = document.getElementById('btnRotWeakBattle');
  const badgeWeak = document.getElementById('badgeRotWeak');
  if (btnWeak && badgeWeak) {
    if (rCount === 4) {
      btnWeak.classList.remove('opacity-60');
      btnWeak.classList.add('glow-red');
      badgeWeak.innerText = "🔥 挑戦可能";
      badgeWeak.className = "text-[8px] font-bold bg-rose-600 text-white px-1.5 py-0.2 rounded animate-pulse";
    } else {
      btnWeak.classList.add('opacity-60');
      btnWeak.classList.remove('glow-red');
      badgeWeak.innerText = `🔒 あと${4 - rCount}`;
      badgeWeak.className = "text-[8px] font-bold bg-rose-950 text-rose-200 px-1.5 py-0.2 rounded border border-rose-600";
    }
  }

  setText('weakBookCountBadge', `${userData.weakList.length}問`);
}

function updateDailyButton(containerId, isDone, type, count) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = isDone
    ? `<span class="bg-indigo-950 text-emerald-300 font-bold px-2 py-1 rounded-xl text-[10px] border border-emerald-600 whitespace-nowrap">✓ 済</span>`
    : `<button onclick="startDailyQuest('${type}', ${count})" class="bg-gradient-to-r from-amber-500 to-yellow-400 hover:brightness-110 text-indigo-950 font-black px-3 py-1 rounded-xl text-[11px] shadow transition active:scale-95 whitespace-nowrap">挑戦</button>`;
}

function updateRotBadge(badgeId, btnId, isDone) {
  const badge = document.getElementById(badgeId);
  const btn = document.getElementById(btnId);
  if (!badge || !btn) return;
  if (isDone) {
    btn.classList.add('opacity-75');
    badge.innerText = "✓ 完了";
    badge.className = "text-[8px] font-bold bg-emerald-950 text-emerald-300 px-1.5 py-0.2 rounded border border-emerald-600 whitespace-nowrap";
  } else {
    btn.classList.remove('opacity-75');
    badge.innerText = "未挑戦";
    badge.className = "text-[8px] font-bold bg-indigo-950 text-slate-300 px-1.5 py-0.2 rounded border border-indigo-700 whitespace-nowrap";
  }
}

function claimDailyAllBonus() {
  if (userData.dailyDone.allClaimed) return;
  userData.dailyDone.allClaimed = true;
  addExpAndGems(150, 50);
  playSound('levelup');
  saveUserData();
  alert("🎉 4大デイリー全制覇ボーナス（+150 EXP / 💎+50）を獲得しました！");
}

// --- 画面切り替え ---
function switchView(viewId) {
  const views = ['viewHome', 'viewQuiz', 'viewResult', 'viewBook', 'viewWeakBook', 'viewShop', 'viewParent'];
  views.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (id === viewId) el.classList.remove('hidden');
    else el.classList.add('hidden');
  });

  const navIds = ['navHome', 'navBook', 'navWeak', 'navShop', 'navParent'];
  navIds.forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.className = "flex flex-col items-center gap-0.5 text-indigo-400 hover:text-indigo-200";
  });

  const activeNavMap = {
    viewHome: 'navHome',
    viewBook: 'navBook',
    viewWeakBook: 'navWeak',
    viewShop: 'navShop',
    viewParent: 'navParent'
  };
  const activeNavId = activeNavMap[viewId];
  if (activeNavId) {
    const el = document.getElementById(activeNavId);
    if (el) el.className = "flex flex-col items-center gap-0.5 text-amber-400";
  }
}

function showHome() {
  stopCriticalTimer();
  if (synth) synth.cancel();
  switchView('viewHome');
  updateUiState();
}

function showBook() {
  switchView('viewBook');
  renderVocabBook();
}

function showWeakBook() {
  switchView('viewWeakBook');
  renderWeakBook();
}

function showShop() {
  switchView('viewShop');
  renderShop();
}

function showParent() {
  switchView('viewParent');
  renderParentStats();
}

// --- 単語図鑑レンダリング ---
function renderVocabBook() {
  const container = document.getElementById('vocabBookList');
  const input = document.getElementById('bookSearchInput');
  if (!container) return;

  const query = (input?.value || '').toLowerCase().trim();
  const list = RAW_VOCAB_DATA.filter(([w, m]) => w.toLowerCase().includes(query) || m.includes(query));

  setText('bookProgressText', `${RAW_VOCAB_DATA.length} 語中 収録`);
  const bar = document.getElementById('bookProgressBar');
  if (bar) bar.style.width = '100%';

  container.innerHTML = '';
  list.slice(0, 100).forEach(([word, mean]) => {
    const card = document.createElement('div');
    card.className = "bg-indigo-950/80 border border-indigo-800 p-2 rounded-xl flex items-center justify-between gap-1 shadow-sm";
    card.innerHTML = `
      <div class="min-w-0 flex-1">
        <div class="font-black text-[11px] text-white truncate">${word}</div>
        <div class="text-[9.5px] text-amber-300 truncate">${mean}</div>
      </div>
      <button onclick="playEnglishSpeech('${word.replace(/'/g, "\\'")}')" class="bg-indigo-800 hover:bg-indigo-700 text-amber-300 p-1 rounded-lg text-xs flex-shrink-0">🔊</button>
    `;
    container.appendChild(card);
  });
}

// --- にがて帳レンダリング ---
function renderWeakBook() {
  const container = document.getElementById('weakBookItemList');
  if (!container) return;
  container.innerHTML = '';

  if (userData.weakList.length === 0) {
    container.innerHTML = `<div class="text-center py-8 text-xs text-slate-400">現在、にがてリストに登録された問題はありません。<br>全問正解の素晴らしい状態です！</div>`;
    return;
  }

  userData.weakList.forEach(id => {
    const q = getQuizDataById(id);
    if (!q) return;

    const card = document.createElement('div');
    card.className = "bg-indigo-950/90 border border-rose-500/50 p-2.5 rounded-2xl flex items-center justify-between gap-2 shadow";
    card.innerHTML = `
      <div class="min-w-0 flex-1">
        <div class="text-[9px] text-rose-300 font-bold truncate">${q.sub || ''}</div>
        <div class="font-black text-xs text-white truncate">${q.q}</div>
      </div>
      <div class="flex items-center gap-1 flex-shrink-0">
        <button onclick="startWeakRetry('${id}')" class="bg-gradient-to-r from-amber-500 to-yellow-400 text-indigo-950 font-black px-2.5 py-1 rounded-xl text-[10px] shadow active:scale-95">特訓</button>
        <button onclick="removeWeakItem('${id}')" class="bg-indigo-900 border border-indigo-700 text-slate-300 font-bold px-2 py-1 rounded-xl text-[10px]">削除</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function removeWeakItem(id) {
  userData.weakList = userData.weakList.filter(x => x !== id);
  saveUserData();
  renderWeakBook();
}

// --- ダイヤショップ ---
let currentEquipTab = 'hat';

function switchEquipTab(tab) {
  currentEquipTab = tab;
  ['tabEquipHat', 'tabEquipWeapon', 'tabEquipAura'].forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.className = "flex-1 py-1 rounded-lg text-slate-300 hover:text-white transition";
  });

  const activeBtnId = tab === 'hat' ? 'tabEquipHat' : (tab === 'weapon' ? 'tabEquipWeapon' : 'tabEquipAura');
  const activeBtn = document.getElementById(activeBtnId);
  if (activeBtn) activeBtn.className = "flex-1 py-1 rounded-lg bg-indigo-800 text-amber-300 shadow transition";

  renderShop();
}

function renderShop() {
  setText('shopHintCount', userData.inventory.hints);
  setText('shopPotionCount', userData.inventory.potions);

  const container = document.getElementById('equipShopList');
  if (!container) return;
  container.innerHTML = '';

  const items = SHOP_EQUIP_DATA.filter(x => x.type === currentEquipTab);
  items.forEach(it => {
    if (it.isSecret && !userData.bossCleared[10]) return;
    const isOwned = userData.inventory.equips.includes(it.id);
    const isEquipped = userData.equipped[it.type] === it.id;

    const card = document.createElement('div');
    card.className = `p-2 rounded-2xl border flex flex-col justify-between gap-1 transition ${
      isEquipped
        ? 'bg-amber-950/40 border-amber-400 shadow-md'
        : isOwned
        ? 'bg-indigo-950 border-emerald-600'
        : 'bg-indigo-950/80 border-indigo-800'
    }`;

    card.innerHTML = `
      <div class="flex items-center gap-1.5">
        <span class="text-2xl">${it.icon}</span>
        <div class="min-w-0 flex-1">
          <div class="font-black text-[10.5px] text-white truncate">${it.name}</div>
          <div class="text-[8.5px] text-amber-300">${it.desc}</div>
        </div>
      </div>
      <div class="flex justify-between items-center pt-1 border-t border-indigo-900 mt-0.5">
        <span class="text-[9px] text-indigo-300 font-bold">${isOwned ? '所持済み' : `💎 ${it.price}`}</span>
        ${
          isEquipped
            ? `<span class="bg-amber-400 text-indigo-950 font-black px-2 py-0.5 rounded-lg text-[9px]">装備中</span>`
            : isOwned
            ? `<button onclick="equipItem('${it.id}')" class="bg-indigo-800 hover:bg-indigo-700 text-white font-bold px-2 py-0.5 rounded-lg text-[9px]">装備</button>`
            : `<button onclick="buyEquip('${it.id}', ${it.price})" class="bg-emerald-600 hover:bg-emerald-500 text-white font-black px-2 py-0.5 rounded-lg text-[9px]">購入</button>`
        }
      </div>
    `;
    container.appendChild(card);
  });
}

function buyItem(type, price) {
  if (userData.gems < price) { alert("ダイヤが足りません！クエストをクリアして集めよう！"); return; }
  userData.gems -= price;
  if (type === 'hint') userData.inventory.hints++;
  else if (type === 'potion') userData.inventory.potions++;
  playSound('correct');
  saveUserData();
  renderShop();
}

function buyEquip(id, price) {
  if (userData.gems < price) { alert("ダイヤが足りません！"); return; }
  userData.gems -= price;
  userData.inventory.equips.push(id);
  equipItem(id);
}

function equipItem(id) {
  const item = SHOP_EQUIP_DATA.find(x => x.id === id);
  if (!item) return;
  userData.equipped[item.type] = id;
  playSound('correct');
  saveUserData();
  renderShop();
}

// --- 保護者画面 ---
function renderParentStats() {
  const ans = userData.stats.totalAnswered;
  const cor = userData.stats.totalCorrect;
  const rate = ans > 0 ? Math.round((cor / ans) * 100) : 0;

  setText('statTotalAnswers', `${ans} 問`);
  setText('statAccuracy', `(${rate}%)`);

  let evalText = "データ収集中";
  if (ans >= 20) {
    if (rate >= 80) evalText = "🎯 合格可能性 95%以上（安全圏）";
    else if (rate >= 65) evalText = "✨ 合格可能性 75%（順調）";
    else evalText = "⚠️ 基礎復習を強化推奨";
  }
  setText('statPassRate', evalText);
}

function exportData() {
  const json = JSON.stringify(userData, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `eiken4_backup_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importData(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      userData = sanitizeUserData(data);
      saveUserData();
      alert("データを正常に復元しました！");
      showHome();
    } catch (err) {
      alert("データの読み込みに失敗しました。");
    }
  };
  reader.readAsText(file);
}

function resetAllProgress() {
  if (confirm("本当にすべての学習データを初期化しますか？この操作は取り消せません。")) {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  }
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.innerText = text;
}

// --- 初期起動 ---
window.addEventListener('DOMContentLoaded', () => {
  loadUserData();
  updateUiState();
  showHome();
});
