// ==========================================
// 英検4級 総合対策アプリ app.js (Part 1/3)
// ==========================================

const STORAGE_KEY = 'eiken4_saveData_v2';
const MONSTERS = ['👾', '🦇', '🐺', '🐉', '💀', '👹', '🧙', '🧟'];

const BOSS_STAGES = [
  { id: 1, name: "見習いガーディアン", title: "基礎総合 (短文・対話)", count: 5, time: 25, exp: 120, gems: 40, icon: "🛡️" },
  { id: 2, name: "古代の石像", title: "実践総合 (短文・リスニング)", count: 7, time: 22, exp: 160, gems: 60, icon: "🗿" },
  { id: 3, name: "嵐のワイバーン", title: "読解演習 (短文・長文A/B)", count: 8, time: 20, exp: 200, gems: 80, icon: "🦅" },
  { id: 4, name: "黒銀のゴーレム", title: "長文強化 (メール・物語文)", count: 10, time: 18, exp: 250, gems: 100, icon: "🦾" },
  { id: 5, name: "冥府の魔道士", title: "本番過去問 総力戦", count: 12, time: 16, exp: 320, gems: 150, icon: "🧙‍♂️" },
  { id: 6, name: "真・覇竜エグゼディオス", title: "英検4級 最終決戦", count: 15, time: 15, exp: 500, gems: 300, icon: "🐉" }
];

// --- ユーザーデータ管理 ---
let userData = {
  level: 1,
  exp: 0,
  gems: 0,
  streak: 1,
  lastLoginDate: '',
  dailyDone: { vocab: false, grammar: false, listening: false, reading: false, allClaimed: false },
  questRotation: { vocab: false, grammar: false, listening: false, reading: false },
  weakList: [],
  bossCleared: {},
  stats: { totalAnswered: 0, totalCorrect: 0 }
};

function sanitizeUserData(raw) {
  if (!raw || typeof raw !== 'object') return userData;
  return {
    level: Number(raw.level) || 1,
    exp: Number(raw.exp) || 0,
    gems: Number(raw.gems) || 0,
    streak: Number(raw.streak) || 1,
    lastLoginDate: typeof raw.lastLoginDate === 'string' ? raw.lastLoginDate : '',
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
    bossCleared: raw.bossCleared && typeof raw.bossCleared === 'object' ? raw.bossCleared : {},
    stats: {
      totalAnswered: Number(raw.stats?.totalAnswered) || 0,
      totalCorrect: Number(raw.stats?.totalCorrect) || 0
    }
  };
}

function loadUserData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      userData = sanitizeUserData(JSON.parse(raw));
    }
  } catch (e) {
    console.error("Failed to load user data:", e);
  }
  checkDailyStreak();
}

function saveUserData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
  } catch (e) {
    console.error("Failed to save user data:", e);
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

    if (diffDays === 1) {
      userData.streak += 1;
    } else if (diffDays > 1) {
      userData.streak = 1;
    }
    userData.lastLoginDate = today;
    userData.dailyDone = { vocab: false, grammar: false, listening: false, reading: false, allClaimed: false };
  }
}

// --- 音声エンジン (TTS & Web Audio SE) ---
let synth = window.speechSynthesis;
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
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
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.setValueAtTime(880.00, now + 0.1); // A5
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === 'wrong') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.setValueAtTime(164.81, now + 0.12);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
      osc.start(now);
      osc.stop(now + 0.4);
    } else if (type === 'levelup') {
      osc.type = 'triangle';
      [440, 554.37, 659.25, 880].forEach((freq, i) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = 'triangle';
        o.frequency.value = freq;
        o.connect(g);
        g.connect(ctx.destination);
        g.gain.setValueAtTime(0.15, now + i * 0.08);
        g.gain.exponentialRampToValueAtTime(0.01, now + i * 0.08 + 0.25);
        o.start(now + i * 0.08);
        o.stop(now + i * 0.08 + 0.25);
      });
    }
  } catch (e) {
    console.log("Audio not allowed yet:", e);
  }
}

function playEnglishSpeech(text, rate = 0.9, onEnd = null) {
  if (!synth) {
    if (onEnd) onEnd();
    return;
  }
  synth.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-US';
  utter.rate = rate;
  if (onEnd) {
    utter.onend = onEnd;
    utter.onerror = onEnd;
  }
  synth.speak(utter);
}

function playDialogueSpeech(dialogueArray, onEnd = null) {
  if (!dialogueArray || dialogueArray.length === 0) {
    if (onEnd) onEnd();
    return;
  }
  synth.cancel();
  let index = 0;

  function speakNext() {
    if (index >= dialogueArray.length) {
      if (onEnd) onEnd();
      return;
    }
    const item = dialogueArray[index];
    const utter = new SpeechSynthesisUtterance(item.text);
    utter.lang = 'en-US';
    utter.rate = item.speaker === 'narrator' ? 0.95 : 0.88;
    utter.pitch = item.speaker === 'female' ? 1.15 : (item.speaker === 'male' ? 0.9 : 1.0);

    utter.onend = () => {
      index++;
      setTimeout(speakNext, 300);
    };
    utter.onerror = () => {
      index++;
      setTimeout(speakNext, 300);
    };
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
  const distractors = RAW_VOCAB_DATA
    .filter(x => x[0] !== word)
    .map(x => x[1]);
  const shuffledDistractors = shuffleArray(distractors).slice(0, 3);
  const options = shuffleArray([mean, ...shuffledDistractors]);
  return {
    id: `vocab_${word}`,
    type: 'vocab',
    q: word,
    sub: '意味を選ぼう',
    options: options,
    ans: options.indexOf(mean),
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
    sub: item.sub || '空所に入る正しい語句を選ぼう',
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
    sub: item.sub || '📜 長文を読んで答えよう',
    options: shuffledOptions,
    ans: shuffledOptions.indexOf(correctOption),
    explain: item.explain
  };
}

function getQuizDataById(id) {
  if (id.startsWith('vocab_')) {
    const targetWord = id.replace('vocab_', '');
    const found = RAW_VOCAB_DATA.find(x => x[0] === targetWord);
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
// ==========================================
// 英検4級 総合対策アプリ app.js (Part 2/3)
// ==========================================

// --- セッション進行ステート ---
let currentQueue = [];
let currentIndex = 0;
let quizScore = 0;
let currentMode = ''; // 'vocab', 'grammar', 'listening', 'reading', 'boss', 'weakBattle', 'weakRetry'
let isBossMode = false;
let currentBossStage = null;
let selectedNormalType = '';
let isAnsweringLocked = false;
let bossTimerInterval = null;
let bossRemainingTime = 0;

// --- 出撃エントリー関数 ---
function startDailyQuest(type, count) {
  currentMode = type;
  isBossMode = false;
  currentBossStage = null;
  startSessionInternal(type, count);
}

function openNormalQuestSelect(type) {
  selectedNormalType = type;
  const modal = document.getElementById('modalNormalSelect');
  const titleEl = document.getElementById('modalNormalTitle');
  if (titleEl) {
    if (type === 'vocab') titleEl.innerText = "📖 英単語 難易度選択 (10問)";
    else if (type === 'grammar') titleEl.innerText = "✍️ 文法・会話 難易度選択 (5問)";
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
  startSessionInternal(selectedNormalType, count, { diff });
}

function startBossBattle(stageId) {
  const stage = BOSS_STAGES.find(s => s.id === stageId);
  if (!stage) return;
  currentBossStage = stage;
  isBossMode = true;
  currentMode = 'boss';
  closeBossModal();

  const shuffledPastExams = shuffleArray(ACTUAL_PAST_EXAM_DATA).slice(0, stage.count);
  currentQueue = shuffledPastExams.map(item => {
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

  currentIndex = 0;
  quizScore = 0;
  showScreen('quizView');
  renderQuestion();
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

  const shuffledWeakIds = shuffleArray(userData.weakList).slice(0, 5);
  currentQueue = shuffledWeakIds
    .map(id => getQuizDataById(id))
    .filter(item => item !== null);

  if (currentQueue.length === 0) {
    alert("問題データの読み込みに失敗しました。");
    return;
  }

  currentIndex = 0;
  quizScore = 0;
  showScreen('quizView');
  renderQuestion();
}

function startWeakRetry(id) {
  const quizData = getQuizDataById(id);
  if (!quizData) {
    alert("問題データが見つかりませんでした。");
    return;
  }
  closeWeakListModal();
  currentMode = 'weakRetry';
  isBossMode = false;
  currentBossStage = null;
  currentQueue = [quizData];
  currentIndex = 0;
  quizScore = 0;
  showScreen('quizView');
  renderQuestion();
}

function startSessionInternal(type, count, options = {}) {
  let list = [];
  if (type === 'vocab') {
    let pool = RAW_VOCAB_DATA;
    if (options.diff === 'easy') pool = pool.slice(0, 70);
    else if (options.diff === 'normal') pool = pool.slice(70, 140);
    else if (options.diff === 'hard') pool = pool.slice(140);
    list = shuffleArray(pool).slice(0, count).map(generateVocabQuiz);
  } else if (type === 'grammar') {
    let pool = RAW_GRAMMAR_DATA;
    if (options.diff === 'easy') pool = pool.slice(0, 35);
    else if (options.diff === 'normal') pool = pool.slice(35, 70);
    else if (options.diff === 'hard') pool = pool.slice(70);
    list = shuffleArray(pool).slice(0, count).map(generateGrammarQuiz);
  } else if (type === 'listening') {
    let pool = RAW_LISTENING_DATA;
    if (options.diff === 'easy') pool = pool.slice(0, 20);
    else if (options.diff === 'normal') pool = pool.slice(20, 40);
    else if (options.diff === 'hard') pool = pool.slice(40);
    list = shuffleArray(pool).slice(0, count).map(generateListeningQuiz);
  } else if (type === 'reading') {
    let pool = RAW_READING_DATA;
    if (options.diff === 'easy') pool = pool.filter(x => ['read_1', 'read_2', 'read_3', 'read_4'].includes(x.id));
    else if (options.diff === 'normal') pool = pool.filter(x => ['read_5', 'read_6', 'read_7', 'read_8', 'read_9', 'read_10'].includes(x.id));
    else if (options.diff === 'hard') pool = pool.filter(x => parseInt(x.id.replace('read_', ''), 10) >= 11);
    if (!pool || pool.length === 0) pool = RAW_READING_DATA;
    list = shuffleArray(pool).slice(0, count).map(generateReadingQuiz);
  }

  if (list.length === 0) {
    alert("出題可能な問題がありません。");
    return;
  }

  currentQueue = list;
  currentIndex = 0;
  quizScore = 0;
  showScreen('quizView');
  renderQuestion();
}

// --- クイズ画面レンダリング ---
function renderQuestion() {
  isAnsweringLocked = false;
  const q = currentQueue[currentIndex];
  if (!q) return;

  // フィードバック非表示
  const feedbackBox = document.getElementById('quizFeedback');
  if (feedbackBox) feedbackBox.classList.add('hidden');

  // アバター表示
  const avatarEl = document.getElementById('enemyAvatar');
  if (avatarEl) {
    if (isBossMode && currentBossStage) {
      avatarEl.innerText = currentBossStage.icon;
    } else if (currentMode === 'weakBattle' || currentMode === 'weakRetry') {
      avatarEl.innerText = '👾';
    } else {
      avatarEl.innerText = MONSTERS[currentIndex % MONSTERS.length];
    }
  }

  // 長文読解枠の表示切り替え
  const passageBox = document.getElementById('quizPassageBox');
  if (passageBox) {
    if (q.passage) {
      passageBox.innerText = q.passage;
      passageBox.classList.remove('hidden');
    } else {
      passageBox.classList.add('hidden');
    }
  }

  document.getElementById('quizQuestion').innerText = q.q;
  document.getElementById('quizSubText').innerText = q.sub || '';

  const audioBtnContainer = document.getElementById('audioBtnContainer');
  const gauge = document.getElementById('timerGauge');
  const timerText = document.getElementById('timerText');
  if (gauge) gauge.style.width = '100%';

  // 選択肢ボタンの生成
  const optionsContainer = document.getElementById('quizOptions');
  optionsContainer.innerHTML = '';
  q.options.forEach((optText, idx) => {
    const btn = document.createElement('button');
    btn.className = "w-full text-left p-2.5 rounded-xl bg-indigo-900/80 hover:bg-indigo-800/90 border border-indigo-700 text-white font-semibold text-xs transition active:scale-[0.98] flex items-center gap-2";
    btn.innerHTML = `<span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-800 text-[10px] font-bold text-amber-300 border border-indigo-600 flex-shrink-0">${idx + 1}</span><span class="flex-1 whitespace-pre-line leading-relaxed">${optText}</span>`;
    btn.onclick = () => handleAnswer(idx);
    optionsContainer.appendChild(btn);
  });

  // 音声 & タイマーの制御
  if (isBossMode) {
    if (q.type === 'listening') {
      if (audioBtnContainer) audioBtnContainer.classList.remove('hidden');
      if (timerText) timerText.innerText = '🎧 音声を再生中...';
      if (q.dialogue) playDialogueSpeech(q.dialogue, () => startCriticalTimer());
      else startCriticalTimer();
    } else {
      if (audioBtnContainer) audioBtnContainer.classList.add('hidden');
      startCriticalTimer();
    }
  } else {
    if (q.type === 'listening') {
      if (audioBtnContainer) audioBtnContainer.classList.remove('hidden');
      if (timerText) timerText.innerText = '🎧 音声再生中...';
      if (q.dialogue) playDialogueSpeech(q.dialogue, () => { if (timerText) timerText.innerText = '再生完了'; });
    } else {
      if (audioBtnContainer) audioBtnContainer.classList.add('hidden');
      if (timerText) timerText.innerText = '';
    }
  }
}

function playCurrentAudio() {
  const q = currentQueue[currentIndex];
  if (!q) return;
  if (q.dialogue) {
    playDialogueSpeech(q.dialogue);
  } else if (q.audio_complete) {
    playEnglishSpeech(q.audio_complete);
  } else if (q.type === 'vocab') {
    playEnglishSpeech(q.q);
  }
}

// --- ボス戦タイマー ---
function startCriticalTimer() {
  stopCriticalTimer();
  if (!isBossMode || !currentBossStage) return;

  const totalTime = currentBossStage.time || 20;
  bossRemainingTime = totalTime;
  const gauge = document.getElementById('timerGauge');
  const timerText = document.getElementById('timerText');

  if (timerText) timerText.innerText = `⏱️ 残り ${bossRemainingTime.toFixed(1)}秒`;
  if (gauge) gauge.style.width = '100%';

  const startTime = Date.now();
  bossTimerInterval = setInterval(() => {
    const elapsed = (Date.now() - startTime) / 1000;
    bossRemainingTime = Math.max(0, totalTime - elapsed);

    if (timerText) timerText.innerText = `⏱️ 残り ${bossRemainingTime.toFixed(1)}秒`;
    if (gauge) {
      const pct = (bossRemainingTime / totalTime) * 100;
      gauge.style.width = `${pct}%`;
    }

    if (bossRemainingTime <= 0) {
      stopCriticalTimer();
      onTimerExpire();
    }
  }, 100);
}

function stopCriticalTimer() {
  if (bossTimerInterval) {
    clearInterval(bossTimerInterval);
    bossTimerInterval = null;
  }
}

function onTimerExpire() {
  if (isAnsweringLocked) return;
  handleAnswer(-1);
}

// --- 解答処理 ---
function handleAnswer(selectedIndex) {
  if (isAnsweringLocked) return;
  isAnsweringLocked = true;
  stopCriticalTimer();

  const q = currentQueue[currentIndex];
  const isCorrect = (selectedIndex === q.ans);

  userData.stats.totalAnswered++;
  if (isCorrect) {
    quizScore++;
    userData.stats.totalCorrect++;
    playSound('correct');
    triggerDamageEffect('💥 CRITICAL HIT!');
    if (currentMode === 'weakRetry' || currentMode === 'weakBattle') {
      userData.weakList = userData.weakList.filter(id => id !== q.id);
    }
  } else {
    playSound('wrong');
    triggerDamageEffect('MISS / DAMAGE!');
    if (q.id && !userData.weakList.includes(q.id)) {
      userData.weakList.push(q.id);
    }
  }

  // 選択肢のハイライト
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

  // 解説フィードバック表示
  const feedbackBox = document.getElementById('quizFeedback');
  const iconEl = document.getElementById('feedbackIcon');
  const titleEl = document.getElementById('feedbackTitle');
  const explainEl = document.getElementById('feedbackExplain');

  if (feedbackBox && iconEl && titleEl && explainEl) {
    if (isCorrect) {
      iconEl.innerText = "⭕";
      titleEl.innerText = "正解！ 素晴らしい！";
      titleEl.className = "text-xs font-black text-emerald-300";
    } else {
      iconEl.innerText = "❌";
      titleEl.innerText = selectedIndex === -1 ? "時間切れ！" : "不正解...";
      titleEl.className = "text-xs font-black text-rose-400";
    }
    explainEl.innerText = q.explain || (q.audio_complete ? `【英文】${q.audio_complete}` : '');
    feedbackBox.classList.remove('hidden');
  }

  if (q.audio_complete && q.type !== 'listening') {
    setTimeout(() => playEnglishSpeech(q.audio_complete), 400);
  }
}

function triggerDamageEffect(text) {
  const area = document.getElementById('damageEffectArea');
  if (!area) return;
  const el = document.createElement('div');
  el.className = "text-base font-black text-amber-300 animate-bounce drop-shadow-md";
  el.innerText = text;
  area.appendChild(el);
  setTimeout(() => el.remove(), 800);
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < currentQueue.length) {
    renderQuestion();
  } else {
    showResultScreen();
  }
}
// ==========================================
// 英検4級 総合対策アプリ app.js (Part 3/3)
// ==========================================

// --- リザルト画面処理 ---
function showResultScreen() {
  showScreen('resultView');
  const totalQ = currentQueue.length;
  const isPerfect = (quizScore === totalQ && totalQ > 0);
  const isPass = (quizScore / totalQ) >= 0.6;

  let earnedExp = 0;
  let earnedGems = 0;
  let resultTitleText = isPass ? "クエストクリア！" : "修練完了";
  let resultMsgText = "";

  if (isBossMode && currentBossStage) {
    if (isPass) {
      resultTitleText = `👑 ${currentBossStage.name} 討伐成功！`;
      earnedExp = currentBossStage.exp + (quizScore * 15);
      earnedGems = currentBossStage.gems;
      userData.bossCleared[currentBossStage.id] = true;
      resultMsgText = "見事な実力です！本番過去問の試練を突破しました！";
      playSound('levelup');
    } else {
      resultTitleText = `💀 ${currentBossStage.name} 討伐失敗...`;
      earnedExp = quizScore * 10;
      earnedGems = 5;
      resultMsgText = "時間切れやミスに気をつけて、弱点を復習して再挑戦しましょう！";
    }
  } else if (currentMode === 'weakBattle') {
    if (isPass) {
      resultTitleText = "✨ にがて討伐 成功！";
      earnedExp = 120 + (quizScore * 10);
      earnedGems = 40;
      resultMsgText = "苦手分野を克服しました！通常特訓サイクルがリセットされ、再挑戦可能になります！";
      // 4分野サイクルをリセット
      userData.questRotation = { vocab: false, grammar: false, listening: false, reading: false };
      playSound('levelup');
    } else {
      resultTitleText = "にがて討伐 完了";
      earnedExp = quizScore * 10;
      earnedGems = 10;
      resultMsgText = "復習を重ねて、苦手をゼロに近づけていきましょう！";
    }
  } else if (currentMode === 'weakRetry') {
    resultTitleText = isPass ? "復習完了！にがて克服！" : "復習完了";
    earnedExp = quizScore * 15;
    earnedGems = 5;
    resultMsgText = isPass ? "リストから問題が削除されました！" : "もう一度解説を確認してみましょう。";
  } else {
    // デイリー & 通常特訓
    if (currentMode === 'vocab') {
      userData.dailyDone.vocab = true;
      if (selectedNormalType === 'vocab') userData.questRotation.vocab = true;
      earnedExp = 40 + (quizScore * 5);
      earnedGems = 10;
    } else if (currentMode === 'grammar') {
      userData.dailyDone.grammar = true;
      if (selectedNormalType === 'grammar') userData.questRotation.grammar = true;
      earnedExp = 60 + (quizScore * 8);
      earnedGems = 20;
    } else if (currentMode === 'listening') {
      userData.dailyDone.listening = true;
      if (selectedNormalType === 'listening') userData.questRotation.listening = true;
      earnedExp = 80 + (quizScore * 10);
      earnedGems = 25;
    } else if (currentMode === 'reading') {
      userData.dailyDone.reading = true;
      if (selectedNormalType === 'reading') userData.questRotation.reading = true;
      earnedExp = 80 + (quizScore * 10);
      earnedGems = 25;
    }

    if (isPerfect) {
      earnedExp += 30;
      earnedGems += 10;
      resultMsgText = "パーフェクト達成！ボーナス獲得！";
      playSound('levelup');
    } else {
      resultMsgText = `正解数: ${quizScore} / ${totalQ}`;
    }
  }

  // 経験値・レベル加算
  addExpAndGems(earnedExp, earnedGems);

  // 画面へ反映
  setText('resultTitle', resultTitleText);
  setText('resultScore', `${quizScore} / ${totalQ}`);
  setText('resultExp', `+${earnedExp} EXP`);
  setText('resultGems', `+${earnedGems} 💎`);
  setText('resultMsg', resultMsgText);

  saveUserData();
}

function addExpAndGems(expGain, gemGain) {
  userData.exp += expGain;
  userData.gems += gemGain;

  let reqExp = getRequiredExp(userData.level);
  while (userData.exp >= reqExp) {
    userData.exp -= reqExp;
    userData.level += 1;
    userData.gems += 50; // レベルアップボーナス
    playSound('levelup');
    reqExp = getRequiredExp(userData.level);
  }
}

function getRequiredExp(level) {
  return 100 + (level - 1) * 50;
}

// --- UIステート同期 ---
function updateUiState() {
  // ステータスヘッダー
  setText('userLevel', `Lv.${userData.level}`);
  setText('userGems', userData.gems);
  setText('userStreak', userData.streak);

  const reqExp = getRequiredExp(userData.level);
  const expPct = Math.min(100, Math.round((userData.exp / reqExp) * 100));
  const gaugeEl = document.getElementById('userExpGauge');
  if (gaugeEl) gaugeEl.style.width = `${expPct}%`;
  setText('userExpText', `${userData.exp} / ${reqExp}`);

  // にがてリストバッジ
  const weakCount = userData.weakList.length;
  setText('weakBadgeHeader', weakCount);
  setText('weakCountBadge', `${weakCount}問`);

  // デイリーミッション進捗
  let doneCount = 0;
  if (userData.dailyDone.vocab) doneCount++;
  if (userData.dailyDone.grammar) doneCount++;
  if (userData.dailyDone.listening) doneCount++;
  if (userData.dailyDone.reading) doneCount++;
  setText('dailyProgressText', `${doneCount} / 4`);

  updateDailyQuestButton('questActionVocab', userData.dailyDone.vocab, 'vocab', 10);
  updateDailyQuestButton('questActionGrammar', userData.dailyDone.grammar, 'grammar', 3);
  updateDailyQuestButton('questActionListening', userData.dailyDone.listening, 'listening', 3);

  const actReading = document.getElementById('questActionReading');
  if (actReading) {
    actReading.innerHTML = userData.dailyDone.reading
      ? `<span class="bg-indigo-950 text-emerald-300 font-bold px-2 py-1 rounded-xl text-[10px] border border-emerald-600 whitespace-nowrap">✓ 済</span>`
      : `<button onclick="startDailyQuest('reading', 2)" class="bg-gradient-to-r from-amber-500 to-yellow-400 hover:brightness-110 text-indigo-950 font-black px-3 py-1 rounded-xl text-[11px] shadow transition active:scale-95 whitespace-nowrap">挑戦</button>`;
  }

  // デイリー全制覇ボーナス判定 (4分野)
  const bonusArea = document.getElementById('dailyBonusArea');
  const bonusClaimedArea = document.getElementById('dailyBonusClaimedArea');
  if (bonusArea && bonusClaimedArea) {
    if (doneCount === 4 && !userData.dailyDone.allClaimed) {
      bonusArea.classList.remove('hidden');
      bonusClaimedArea.classList.add('hidden');
    } else if (doneCount === 4 && userData.dailyDone.allClaimed) {
      bonusArea.classList.add('hidden');
      bonusClaimedArea.classList.remove('hidden');
    } else {
      bonusArea.classList.add('hidden');
      bonusClaimedArea.classList.add('hidden');
    }
  }

  // 通常特訓サイクル進捗 (4分野)
  let rotCount = 0;
  if (userData.questRotation.vocab) rotCount++;
  if (userData.questRotation.grammar) rotCount++;
  if (userData.questRotation.listening) rotCount++;
  if (userData.questRotation.reading) rotCount++;
  setText('rotationProgressBadge', `${rotCount}/4完了`);

  updateRotBtn('btnRotVocab', 'badgeRotVocab', userData.questRotation.vocab);
  updateRotBtn('btnRotGrammar', 'badgeRotGrammar', userData.questRotation.grammar);
  updateRotBtn('btnRotListening', 'badgeRotListening', userData.questRotation.listening);
  updateRotBtn('btnRotReading', 'badgeRotReading', userData.questRotation.reading);

  // にがて討伐ボタンの解放状態
  const btnWeak = document.getElementById('btnRotWeakBattle');
  const badgeWeak = document.getElementById('badgerRotWeak');
  if (btnWeak && badgeWeak) {
    if (rotCount === 4) {
      btnWeak.classList.remove('opacity-60');
      btnWeak.classList.add('glow-red');
      badgeWeak.innerText = "🔥 挑戦可能";
      badgeWeak.className = "text-[8px] font-bold bg-rose-600 text-white px-1.5 py-0.2 rounded animate-pulse";
    } else {
      btnWeak.classList.add('opacity-60');
      btnWeak.classList.remove('glow-red');
      badgeWeak.innerText = `🔒 あと${4 - rotCount}`;
      badgeWeak.className = "text-[8px] font-bold bg-rose-950 text-rose-300 px-1.5 py-0.2 rounded border border-rose-800";
    }
  }
}

function updateDailyQuestButton(containerId, isDone, type, count) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = isDone
    ? `<span class="bg-indigo-950 text-emerald-300 font-bold px-2 py-1 rounded-xl text-[10px] border border-emerald-600 whitespace-nowrap">✓ 済</span>`
    : `<button onclick="startDailyQuest('${type}', ${count})" class="bg-gradient-to-r from-amber-500 to-yellow-400 hover:brightness-110 text-indigo-950 font-black px-3 py-1 rounded-xl text-[11px] shadow transition active:scale-95 whitespace-nowrap">挑戦</button>`;
}

function updateRotBtn(btnId, badgeId, isDone) {
  const btn = document.getElementById(btnId);
  const badge = document.getElementById(badgeId);
  if (!btn || !badge) return;
  if (isDone) {
    btn.classList.add('opacity-75');
    badge.innerText = "✓ 完了";
    badge.className = "text-[8px] font-bold bg-emerald-950 text-emerald-300 px-1.5 py-0.2 rounded border border-emerald-600";
  } else {
    btn.classList.remove('opacity-75');
    badge.innerText = "未挑戦";
    badge.className = "text-[8px] font-bold bg-indigo-950 text-slate-300 px-1.5 py-0.2 rounded border border-indigo-700";
  }
}

function claimDailyAllBonus() {
  if (userData.dailyDone.allClaimed) return;
  userData.dailyDone.allClaimed = true;
  addExpAndGems(150, 50);
  playSound('levelup');
  saveUserData();
  alert("🎉 デイリー全制覇ボーナス（+150 EXP / 💎+50）を獲得しました！");
}

// --- モーダル制御 ---
function openBossModal() {
  const modal = document.getElementById('modalBossSelect');
  const container = document.getElementById('bossStageList');
  if (!modal || !container) return;

  container.innerHTML = '';
  BOSS_STAGES.forEach(stage => {
    const isCleared = !!userData.bossCleared[stage.id];
    const prevCleared = stage.id === 1 || !!userData.bossCleared[stage.id - 1];
    const card = document.createElement('div');
    card.className = `p-3 rounded-2xl border flex items-center justify-between gap-2 transition ${
      isCleared
        ? 'bg-indigo-950/80 border-emerald-500/60 shadow'
        : prevCleared
        ? 'bg-indigo-900/90 border-amber-400/80 shadow-lg'
        : 'bg-indigo-950/50 border-indigo-800 opacity-50'
    }`;

    card.innerHTML = `
      <div class="flex items-center gap-2.5 min-w-0 flex-1">
        <span class="text-2xl flex-shrink-0">${stage.icon}</span>
        <div class="min-w-0">
          <div class="font-black text-xs text-white truncate">STAGE ${stage.id}: ${stage.name}</div>
          <div class="text-[9.5px] text-amber-300 font-semibold truncate">${stage.title}</div>
          <div class="text-[8.5px] text-slate-300">制限時間: ${stage.time}秒 / 出題: ${stage.count}問</div>
        </div>
      </div>
      <div class="flex-shrink-0">
        ${
          isCleared
            ? `<button onclick="startBossBattle(${stage.id})" class="bg-emerald-700 hover:bg-emerald-600 text-white font-bold px-2.5 py-1 rounded-xl text-[10px] shadow transition">再戦</button>`
            : prevCleared
            ? `<button onclick="startBossBattle(${stage.id})" class="bg-gradient-to-r from-rose-600 to-amber-500 hover:brightness-110 text-white font-black px-3 py-1 rounded-xl text-[11px] shadow glow-gold transition active:scale-95 animate-pulse">討伐</button>`
            : `<span class="text-[10px] font-bold text-slate-500 bg-indigo-950 px-2 py-0.5 rounded border border-indigo-800">🔒 ロック</span>`
        }
      </div>
    `;
    container.appendChild(card);
  });

  modal.classList.remove('hidden');
}

function closeBossModal() {
  const modal = document.getElementById('modalBossSelect');
  if (modal) modal.classList.add('hidden');
}

function openWeakListModal() {
  const modal = document.getElementById('modalWeakList');
  const listContainer = document.getElementById('weakListContainer');
  if (!modal || !listContainer) return;

  listContainer.innerHTML = '';
  if (userData.weakList.length === 0) {
    listContainer.innerHTML = `<div class="text-center py-6 text-xs text-slate-400">現在、にがてリストに問題はありません。<br>全問正解中です！</div>`;
  } else {
    userData.weakList.forEach(id => {
      const q = getQuizDataById(id);
      if (!q) return;

      const itemEl = document.createElement('div');
      itemEl.className = "p-2.5 rounded-xl bg-indigo-950/90 border border-indigo-700 flex items-center justify-between gap-2 shadow-sm";
      itemEl.innerHTML = `
        <div class="min-w-0 flex-1">
          <div class="text-[9.5px] text-amber-300 font-bold truncate">${q.sub || ''}</div>
          <div class="text-xs font-black text-white truncate">${q.q}</div>
        </div>
        <button onclick="startWeakRetry('${id}')" class="bg-gradient-to-r from-amber-500 to-yellow-400 text-indigo-950 font-black px-2.5 py-1 rounded-lg text-[10px] shadow flex-shrink-0 transition active:scale-95">特訓</button>
      `;
      listContainer.appendChild(itemEl);
    });
  }

  modal.classList.remove('hidden');
}

function closeWeakListModal() {
  const modal = document.getElementById('modalWeakList');
  if (modal) modal.classList.add('hidden');
}

function clearAllWeakList() {
  if (userData.weakList.length === 0) return;
  if (confirm("にがてリストをすべてクリアしますか？")) {
    userData.weakList = [];
    saveUserData();
    openWeakListModal();
  }
}

// --- 画面切り替え ---
function showScreen(screenId) {
  const screens = ['homeView', 'quizView', 'resultView'];
  screens.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (id === screenId) el.classList.remove('hidden');
    else el.classList.add('hidden');
  });
}

function backToHome() {
  stopCriticalTimer();
  if (synth) synth.cancel();
  showScreen('homeView');
  updateUiState();
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.innerText = text;
}

// --- 初期化起動 ---
window.addEventListener('DOMContentLoaded', () => {
  loadUserData();
  updateUiState();
  showScreen('homeView');
});
