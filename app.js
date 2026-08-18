// ==========================================
// 英検4級 合格クエスト 〜50日間の冒険〜
// ゲーム進行・ロジックファイル (app.js)
// ==========================================

// ==================== 音声読み上げエンジン ====================
let voiceSpeed = 0.8;
let isDialogueSpeaking = false;
let dialogueNextTimer = null;

function toggleVoiceSpeed() {
  voiceSpeed = (voiceSpeed === 0.8) ? 1.0 : 0.8;
  const el = document.getElementById('btnSpeedToggle');
  if (el) el.innerText = (voiceSpeed === 0.8) ? '🗣️ ゆっくり' : '🗣️ ふつう';
  speakText(voiceSpeed === 0.8 ? 'Slow speed' : 'Normal speed');
}

function speakText(text, onCompleteCallback) {
  if (!('speechSynthesis' in window)) {
    if (onCompleteCallback) onCompleteCallback();
    return;
  }
  try {
    window.speechSynthesis.cancel();
    const uttr = new SpeechSynthesisUtterance(text);
    uttr.lang = 'en-US';
    uttr.rate = voiceSpeed;
    
    let called = false;
    const completeOnce = () => {
      if (!called) {
        called = true;
        if (onCompleteCallback) onCompleteCallback();
      }
    };

    uttr.onend = completeOnce;
    uttr.onerror = completeOnce;
    setTimeout(completeOnce, 7000);

    window.speechSynthesis.speak(uttr);
  } catch(e) {
    console.error('Speech error', e);
    if (onCompleteCallback) onCompleteCallback();
  }
}

function playDialogueSpeech(dialogueArray, onCompleteCallback) {
  if (!('speechSynthesis' in window) || !dialogueArray || dialogueArray.length === 0) {
    if (onCompleteCallback) onCompleteCallback();
    return;
  }
  try {
    window.speechSynthesis.cancel();
    clearTimeout(dialogueNextTimer);
    isDialogueSpeaking = true;
    let index = 0;

    function speakNextSegment() {
      if (!isDialogueSpeaking) return;
      if (index >= dialogueArray.length) {
        isDialogueSpeaking = false;
        if (onCompleteCallback) onCompleteCallback();
        return;
      }
      const segment = dialogueArray[index];
      const uttr = new SpeechSynthesisUtterance(segment.text);
      uttr.lang = 'en-US';
      uttr.rate = voiceSpeed;

      if (segment.speaker === 'female') {
        uttr.pitch = 1.35;
      } else if (segment.speaker === 'male') {
        uttr.pitch = 0.78;
      } else {
        uttr.pitch = 1.05;
      }

      uttr.onend = () => {
        if (!isDialogueSpeaking) return;
        index++;
        dialogueNextTimer = setTimeout(speakNextSegment, 350);
      };
      uttr.onerror = () => {
        if (!isDialogueSpeaking) return;
        index++;
        speakNextSegment();
      };

      window.speechSynthesis.speak(uttr);
    }

    speakNextSegment();
  } catch(e) {
    console.error('Dialogue speech error', e);
    isDialogueSpeaking = false;
    if (onCompleteCallback) onCompleteCallback();
  }
}

// ==================== BGM & SE エンジン ====================
const AudioContext = window.AudioContext || window.webkitAudioContext;
let actx = null;
let isBgmEnabled = false;
let bgmTimer = null;
let currentSequence = [];
let currentStep = 0;

const noteFreq = { 'G3':196, 'A3':220, 'B3':246.9, 'C4':261.6, 'D4':293.7, 'E4':329.6, 'F4':349.2, 'G4':392.0, 'A4':440.0, 'B4':493.9, 'C5':523.3, 'D5':587.3, 'E5':659.3, 'G5':784.0, 'C6':1046.5 };

const BGM_DATA = {
  home: { seq: ['C4',null,'E4',null,'G4',null,'C5',null,'G4',null,'E4',null], speed: 280, type: 'triangle', vol: 0.03 },
  battle: { seq: ['A3','A3','C4','E4','D4','D4','F4','G4'], speed: 170, type: 'square', vol: 0.02 },
  boss: { seq: ['A3','C4','D4','F4','E4','D4','C4','B3'], speed: 140, type: 'sawtooth', vol: 0.025 },
  fever: { seq: ['C5','E5','G5','C6','E5','G5','C6','G5'], speed: 110, type: 'sawtooth', vol: 0.03 },
  result: { seq: ['C5','D5','E5','G5','C6','G5','E5','D5'], speed: 150, type: 'sine', vol: 0.04 }
};

function initAudio() {
  try {
    if(!actx && AudioContext) actx = new AudioContext();
    if(actx && actx.state === 'suspended') actx.resume();
  } catch(e) {}
}

function toggleBGM() {
  initAudio();
  isBgmEnabled = !isBgmEnabled;
  const btn = document.getElementById('btnBgmToggle');
  if (btn) {
    btn.innerHTML = isBgmEnabled ? '🎵 ON' : '🎵 OFF';
    btn.className = isBgmEnabled 
      ? "bg-amber-500 border border-amber-400 px-2 py-1 rounded-full text-[10px] font-black text-indigo-950 transition"
      : "bg-indigo-800 border border-indigo-600 px-2 py-1 rounded-full text-[10px] font-bold text-slate-300 transition";
  }
  if(isBgmEnabled) playBGM(isBossMode ? 'boss' : 'home');
  else stopBGM();
}

function playBGM(scene) {
  if(!isBgmEnabled || !actx) return;
  stopBGM();
  const track = BGM_DATA[scene];
  if (!track) return;
  currentSequence = track.seq;
  currentStep = 0;
  
  function schedule() {
    if(isBgmEnabled && currentSequence.length > 0 && actx) {
      try {
        const note = currentSequence[currentStep % currentSequence.length];
        if(note && noteFreq[note]) {
          const osc = actx.createOscillator();
          const gain = actx.createGain();
          osc.type = track.type;
          osc.frequency.value = noteFreq[note];
          osc.connect(gain);
          gain.connect(actx.destination);
          gain.gain.setValueAtTime(track.vol, actx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + (track.speed/1000)*0.8);
          osc.start(actx.currentTime);
          osc.stop(actx.currentTime + (track.speed/1000));
        }
      } catch(e) {}
      currentStep++;
      bgmTimer = setTimeout(schedule, track.speed);
    }
  }
  schedule();
}

function stopBGM() {
  clearTimeout(bgmTimer);
  currentSequence = [];
}

function playSE(type) {
  if(!actx) return;
  try {
    const now = actx.currentTime;
    const osc = actx.createOscillator();
    const gain = actx.createGain();
    osc.connect(gain);
    gain.connect(actx.destination);

    if(type === 'correct') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.setValueAtTime(659.25, now + 0.08);
      osc.frequency.setValueAtTime(783.99, now + 0.16);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.start(now); osc.stop(now + 0.35);
    } else if(type === 'critical') {
      osc.type = 'sawtooth';
      [523, 783, 1046, 1318, 1567].forEach((f, i) => {
        osc.frequency.setValueAtTime(f, now + i * 0.05);
      });
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.45);
      osc.start(now); osc.stop(now + 0.45);
    } else if(type === 'wrong') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.setValueAtTime(196, now + 0.15);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      osc.start(now); osc.stop(now + 0.3);
    } else if(type === 'levelup' || type === 'bonus' || type === 'chest') {
      osc.type = 'triangle';
      [523, 659, 783, 1046, 1318].forEach((freq, idx) => {
        osc.frequency.setValueAtTime(freq, now + idx * 0.09);
      });
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
      osc.start(now); osc.stop(now + 0.6);
    }
  } catch(e) {}
}

// ==================== ユーザーデータ管理 ====================
const STORAGE_KEY = 'eiken4_data_v32';
let userData = {
  level: 1,
  exp: 0,
  gems: 10,
  streak: 1,
  lastLoginDate: getTodayString(),
  weakList: [],
  vocabBook: [],
  bossUnlockedLevel: 1,
  bossClearedLevels: [],
  questRotation: { vocab: false, grammar: false, listening: false },
  dailyDone: { vocab: false, grammar: false, listening: false, allClaimed: false },
  inventory: { hint: 1, potion: 0 },
  equipped: { hat: '', weapon: '', aura: '' },
  unlockedEquips: [],
  totalAnswered: 0,
  totalCorrect: 0
};

let currentShopTab = 'hat';
let isDailyCurrentSession = false;
let isBossMode = false;
let isFeverMode = false;
let currentBossStage = BOSS_STAGES[0];
let selectedNormalType = 'vocab';
let selectedNormalDiffLevel = 1;

function getTodayString() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function sanitizeUserData() {
  if (typeof userData.level !== 'number' || userData.level < 1 || isNaN(userData.level)) userData.level = 1;
  if (typeof userData.exp !== 'number' || isNaN(userData.exp)) userData.exp = 0;
  if (typeof userData.gems !== 'number' || isNaN(userData.gems)) userData.gems = 10;
  if (typeof userData.streak !== 'number' || isNaN(userData.streak)) userData.streak = 1;
  if (!Array.isArray(userData.weakList)) userData.weakList = [];
  if (!Array.isArray(userData.vocabBook)) userData.vocabBook = [];
  if (!Array.isArray(userData.unlockedEquips)) userData.unlockedEquips = [];
  
  if (typeof userData.bossUnlockedLevel !== 'number' || userData.bossUnlockedLevel < 1 || isNaN(userData.bossUnlockedLevel)) userData.bossUnlockedLevel = 1;
  if (!Array.isArray(userData.bossClearedLevels)) userData.bossClearedLevels = [];

  if (!userData.questRotation || typeof userData.questRotation !== 'object') {
    userData.questRotation = { vocab: false, grammar: false, listening: false };
  }

  if (!userData.inventory || typeof userData.inventory !== 'object') userData.inventory = { hint: 1, potion: 0 };
  userData.inventory.hint = Number(userData.inventory.hint) || 0;
  userData.inventory.potion = Number(userData.inventory.potion) || 0;

  if (!userData.equipped || typeof userData.equipped !== 'object') userData.equipped = { hat: '', weapon: '', aura: '' };
  if (typeof userData.equipped.hat !== 'string') userData.equipped.hat = '';
  if (typeof userData.equipped.weapon !== 'string') userData.equipped.weapon = '';
  if (typeof userData.equipped.aura !== 'string') userData.equipped.aura = '';

  if (!userData.dailyDone || typeof userData.dailyDone !== 'object') userData.dailyDone = { vocab: false, grammar: false, listening: false, allClaimed: false };
  if (typeof userData.dailyDone.allClaimed !== 'boolean') userData.dailyDone.allClaimed = false;

  if (typeof userData.totalAnswered !== 'number' || isNaN(userData.totalAnswered)) userData.totalAnswered = 0;
  if (typeof userData.totalCorrect !== 'number' || isNaN(userData.totalCorrect)) userData.totalCorrect = 0;
  if (!userData.lastLoginDate) userData.lastLoginDate = getTodayString();
}

function loadData() {
  try {
    let saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      const oldKeys = ['eiken4_data_v31', 'eiken4_data_v30', 'eiken4_data_v29', 'eiken4_data_v28', 'eiken4_data_v27', 'eiken4_data_v26', 'eiken4_data_v25', 'eiken4_data_v24', 'eiken4_data'];
      for (const key of oldKeys) {
        const old = localStorage.getItem(key);
        if (old) {
          saved = old;
          break;
        }
      }
    }
    if (saved) {
      const parsed = JSON.parse(saved);
      userData = { ...userData, ...parsed };
      if (parsed.questRotation) userData.questRotation = { ...userData.questRotation, ...parsed.questRotation };
      if (parsed.dailyDone) userData.dailyDone = { ...userData.dailyDone, ...parsed.dailyDone };
      if (parsed.inventory) userData.inventory = { ...userData.inventory, ...parsed.inventory };
      if (parsed.equipped) userData.equipped = { ...userData.equipped, ...parsed.equipped };
    }
  } catch(e) {
    console.error('Data load error:', e);
  }
  sanitizeUserData();
  checkDailyStreak();
  updateUiState();
}

function saveData() {
  sanitizeUserData();
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
  } catch(e) {
    console.error('Data save error:', e);
  }
  updateUiState();
}

function checkDailyStreak() {
  try {
    const today = getTodayString();
    if (userData.lastLoginDate !== today) {
      const lastStr = (userData.lastLoginDate || today).replace(/-/g, '/');
      const last = new Date(lastStr);
      const current = new Date(today.replace(/-/g, '/'));
      const diffDays = Math.round((current - last) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        userData.streak += 1;
      } else if (diffDays > 1) {
        userData.streak = 1;
      }
      userData.lastLoginDate = today;
      userData.dailyDone = { vocab: false, grammar: false, listening: false, allClaimed: false };
    }
  } catch(e) {
    userData.lastLoginDate = getTodayString();
  }
}

function calculatePlayerStats() {
  const baseAtk = 25 + (userData.level * 6);
  const baseHp = 120 + (userData.level * 15);
  const baseSpd = 5 + Math.floor(userData.level * 0.8);

  const eqHat = SHOP_EQUIP_DATA.find(e => e.id === userData.equipped.hat);
  const eqWp = SHOP_EQUIP_DATA.find(e => e.id === userData.equipped.weapon);
  const eqAura = SHOP_EQUIP_DATA.find(e => e.id === userData.equipped.aura);

  const totalHp = Math.round(baseHp + (eqHat ? eqHat.val : 0));
  const totalAtk = Math.round(baseAtk + (eqWp ? eqWp.val : 0));
  const totalSpd = Math.round(baseSpd + (eqAura ? eqAura.val : 0));

  return { hp: totalHp, atk: totalAtk, spd: totalSpd };
}

function addExp(amount) {
  let finalExp = amount;
  if (userData.inventory.potion > 0) {
    finalExp *= 2;
    userData.inventory.potion--;
    alert('🧪 EXPの秘薬の効果で獲得経験値が2倍になりました！');
  }

  userData.exp += finalExp;
  let needed = userData.level * 100;
  let leveledUp = false;
  while (userData.exp >= needed) {
    userData.exp -= needed;
    userData.level += 1;
    needed = userData.level * 100;
    leveledUp = true;
  }
  if (leveledUp) {
    playSE('levelup');
    const currentAvatar = [...AVATARS].reverse().find(a => userData.level >= a.minLv) || AVATARS[0];
    alert(`🎉 レベルアップ！ Lv.${userData.level} に到達しました！\n相棒の姿：【${currentAvatar.rank}】${currentAvatar.name}`);
  }
  saveData();
}

function updateUiState() {
  sanitizeUserData();

  const setText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.innerText = val;
  };

  setText('headerLevel', `Lv.${userData.level}`);
  setText('levelLabel', `Lv.${userData.level}`);
  setText('streakCount', userData.streak);
  setText('gemCount', userData.gems);
  setText('weakBookCountBadge', `${userData.weakList.length}問`);
  setText('hintStockCount', userData.inventory.hint || 0);
  setText('shopHintCount', userData.inventory.hint || 0);
  setText('shopPotionCount', userData.inventory.potion || 0);
  setText('bossCurrentProgressBadge', `Lv.${userData.bossUnlockedLevel} 解放中`);

  const stats = calculatePlayerStats();
  setText('statAtkVal', stats.atk);
  setText('statHpVal', stats.hp);
  setText('statSpdVal', stats.spd);

  const needed = userData.level * 100;
  const pct = Math.min(100, Math.round((userData.exp / needed) * 100));
  const expBar = document.getElementById('expBar');
  if (expBar) expBar.style.width = `${pct}%`;
  setText('expText', `${userData.exp} / ${needed}`);

  const currentAvatar = [...AVATARS].reverse().find(a => userData.level >= a.minLv) || AVATARS[0];
  setText('heroAvatar', currentAvatar.emoji);
  setText('heroRank', currentAvatar.rank);
  setText('heroName', currentAvatar.name);

  const hatEquip = SHOP_EQUIP_DATA.find(e => e.id === userData.equipped.hat);
  setText('equipHatIcon', hatEquip ? hatEquip.icon : '');
  const weaponEquip = SHOP_EQUIP_DATA.find(e => e.id === userData.equipped.weapon);
  setText('equipWeaponIcon', weaponEquip ? weaponEquip.icon : '');
  const auraEquip = SHOP_EQUIP_DATA.find(e => e.id === userData.equipped.aura);
  setText('equipAuraIcon', auraEquip ? auraEquip.icon : '');

  try {
    const examDate = new Date(2026, 9, 4);
    const today = new Date();
    today.setHours(0,0,0,0);
    examDate.setHours(0,0,0,0);
    const diffTime = examDate.getTime() - today.getTime();
    const daysLeft = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
    setText('countdownDays', `${daysLeft} 日`);
  } catch(e) {
    setText('countdownDays', '49 日');
  }

  let doneCount = 0;
  if (userData.dailyDone.vocab) doneCount++;
  if (userData.dailyDone.grammar) doneCount++;
  if (userData.dailyDone.listening) doneCount++;
  setText('dailyProgressText', `${doneCount} / 3 完了`);

  const actVocab = document.getElementById('questActionVocab');
  if (actVocab) {
    actVocab.innerHTML = userData.dailyDone.vocab
      ? `<span class="bg-emerald-900/80 text-emerald-300 font-bold px-3 py-1.5 rounded-xl text-[10px] border border-emerald-600/50 whitespace-nowrap">✓ 達成済</span>`
      : `<button onclick="startDailyQuest('vocab', 5)" class="bg-gradient-to-r from-amber-500 to-yellow-400 hover:brightness-110 text-indigo-950 font-black px-3.5 py-1.5 rounded-xl text-xs shadow transition active:scale-95 whitespace-nowrap">挑戦</button>`;
  }

  const actGrammar = document.getElementById('questActionGrammar');
  if (actGrammar) {
    actGrammar.innerHTML = userData.dailyDone.grammar
      ? `<span class="bg-emerald-900/80 text-emerald-300 font-bold px-3 py-1.5 rounded-xl text-[10px] border border-emerald-600/50 whitespace-nowrap">✓ 達成済</span>`
      : `<button onclick="startDailyQuest('grammar', 3)" class="bg-gradient-to-r from-amber-500 to-yellow-400 hover:brightness-110 text-indigo-950 font-black px-3.5 py-1.5 rounded-xl text-xs shadow transition active:scale-95 whitespace-nowrap">挑戦</button>`;
  }

  const actListening = document.getElementById('questActionListening');
  if (actListening) {
    actListening.innerHTML = userData.dailyDone.listening
      ? `<span class="bg-emerald-900/80 text-emerald-300 font-bold px-3 py-1.5 rounded-xl text-[10px] border border-emerald-600/50 whitespace-nowrap">✓ 達成済</span>`
      : `<button onclick="startDailyQuest('listening', 3)" class="bg-gradient-to-r from-amber-500 to-yellow-400 hover:brightness-110 text-indigo-950 font-black px-3.5 py-1.5 rounded-xl text-xs shadow transition active:scale-95 whitespace-nowrap">挑戦</button>`;
  }

  const bonusArea = document.getElementById('dailyBonusArea');
  const bonusClaimedArea = document.getElementById('dailyBonusClaimedArea');
  if (bonusArea && bonusClaimedArea) {
    if (doneCount === 3 && !userData.dailyDone.allClaimed) {
      bonusArea.classList.remove('hidden');
      bonusClaimedArea.classList.add('hidden');
    } else if (doneCount === 3 && userData.dailyDone.allClaimed) {
      bonusArea.classList.add('hidden');
      bonusClaimedArea.classList.remove('hidden');
    } else {
      bonusArea.classList.add('hidden');
      bonusClaimedArea.classList.add('hidden');
    }
  }

  let rotCount = 0;
  if (userData.questRotation.vocab) rotCount++;
  if (userData.questRotation.grammar) rotCount++;
  if (userData.questRotation.listening) rotCount++;
  setText('rotationProgressBadge', `${rotCount}/3完了`);

  const updateRotBtn = (btnId, badgeId, isDone) => {
    const btn = document.getElementById(btnId);
    const badge = document.getElementById(badgeId);
    if (!btn || !badge) return;
    if (isDone) {
      badge.innerText = "✓ 達成済";
      badge.className = "text-[9px] font-bold bg-emerald-950 text-emerald-300 px-1.5 py-0.2 rounded border border-emerald-600";
      btn.classList.add('opacity-60');
    } else {
      badge.innerText = "未挑戦";
      badge.className = "text-[9px] font-bold bg-indigo-950 text-amber-300 px-1.5 py-0.2 rounded border border-indigo-600";
      btn.classList.remove('opacity-60');
    }
  };

  updateRotBtn('btnRotVocab', 'badgeRotVocab', userData.questRotation.vocab);
  updateRotBtn('btnRotGrammar', 'badgeRotGrammar', userData.questRotation.grammar);
  updateRotBtn('btnRotListening', 'badgeRotListening', userData.questRotation.listening);

  const btnWeak = document.getElementById('btnRotWeakBattle');
  const badgeWeak = document.getElementById('badgeRotWeak');
  if (btnWeak && badgeWeak) {
    if (rotCount === 3) {
      btnWeak.classList.remove('opacity-60');
      btnWeak.classList.add('glow-red');
      badgeWeak.innerText = "🔥 挑戦可能！";
      badgeWeak.className = "text-[9px] font-bold bg-rose-600 text-white px-1.5 py-0.2 rounded animate-pulse";
    } else {
      btnWeak.classList.add('opacity-60');
      btnWeak.classList.remove('glow-red');
      badgeWeak.innerText = `🔒 あと${3 - rotCount}種クリア`;
      badgeWeak.className = "text-[9px] font-bold bg-rose-950 text-rose-300 px-1.5 py-0.2 rounded border border-rose-800";
    }
  }

  setText('statTotalAnswers', `${userData.totalAnswered}問`);
  const acc = userData.totalAnswered > 0 ? Math.round((userData.totalCorrect / userData.totalAnswered) * 100) : 0;
  setText('statAccuracy', `(${acc}%)`);
  
  let passRate = '判定中 (15問以上で判定)';
  if (userData.totalAnswered >= 15) {
    if (acc >= 75) passRate = '💮 合格圏内 (A判定)';
    else if (acc >= 60) passRate = '✨ 合格可能 (B判定)';
    else passRate = '🔥 基礎強化中 (C判定)';
  }
  setText('statPassRate', passRate);

  renderShopEquips();
}

function claimDailyAllBonus() {
  initAudio();
  if (userData.dailyDone.allClaimed) return;
  userData.dailyDone.allClaimed = true;
  const bonusGems = 50;
  const bonusExp = 150;
  userData.gems += bonusGems;
  playSE('bonus');
  alert(`🎉 3大デイリークエスト完全制覇！\n\n【コンプリートボーナス】\n💎 ダイヤ +${bonusGems}個\n✨ 経験値 +${bonusExp} EXP\n\n素晴らしい集中力です！明日もこの調子で続けよう！`);
  addExp(bonusExp);
}

function openNormalQuestSelect(type) {
  initAudio();
  stopBattleTimers();
  if (userData.questRotation[type]) {
    alert('この分野は現在のサイクルで既にクリア済みです！他の分野をクリアして「にがて討伐」を突破すると再挑戦できます！');
    return;
  }
  selectedNormalType = type;
  const modal = document.getElementById('modalNormalSelect');
  const titleEl = document.getElementById('normalSelectTitle');
  if (titleEl) {
    if (type === 'vocab') titleEl.innerText = "📚 単語・熟語 特訓難易度選択 (10問)";
    if (type === 'grammar') titleEl.innerText = "🪄 文法・会話 特訓難易度選択 (5問)";
    if (type === 'listening') titleEl.innerText = "🎧 リスニング 特訓難易度選択 (3問)";
  }
  if (modal) modal.classList.remove('hidden');
}

function closeNormalQuestSelect() {
  const modal = document.getElementById('modalNormalSelect');
  if (modal) modal.classList.add('hidden');
}

function startNormalModeWithDiff(diffLevel) {
  closeNormalQuestSelect();
  isBossMode = false;
  isDailyCurrentSession = false;
  isFeverMode = false;
  selectedNormalDiffLevel = diffLevel;
  const count = (selectedNormalType === 'vocab') ? 10 : (selectedNormalType === 'grammar' ? 5 : 3);
  startSessionInternal(selectedNormalType, count);
}

function startWeakBattle() {
  initAudio();
  stopBattleTimers();
  let rotCount = 0;
  if (userData.questRotation.vocab) rotCount++;
  if (userData.questRotation.grammar) rotCount++;
  if (userData.questRotation.listening) rotCount++;

  if (rotCount < 3) {
    alert(`単語・文法・リスニングの3分野をすべて1回ずつクリアすると「にがて討伐バトル」に挑戦できます！（残り ${3 - rotCount} 分野）`);
    return;
  }

  isBossMode = false;
  isDailyCurrentSession = false;
  isFeverMode = false;
  currentMode = 'weakBattle';

  currentQueue = [];
  if (userData.weakList.length > 0) {
    const selectedIds = shuffleArray(userData.weakList).slice(0, 5);
    selectedIds.forEach(id => {
      if (id.startsWith('v_')) {
        const word = id.replace('v_', '');
        const found = RAW_VOCAB_DATA.find(x => x[0] === word);
        if (found) currentQueue.push(generateVocabQuiz(found));
      } else if (id.startsWith('g_')) {
        const idx = parseInt(id.replace('g_', ''));
        if (RAW_GRAMMAR_DATA[idx]) currentQueue.push(generateGrammarQuiz(RAW_GRAMMAR_DATA[idx], idx));
      } else if (id.startsWith('l_')) {
        const idx = parseInt(id.replace('l_', ''));
        if (RAW_LISTENING_DATA[idx]) currentQueue.push(generateListeningQuiz(RAW_LISTENING_DATA[idx], idx));
      } else if (id.startsWith('past_')) {
        const found = ACTUAL_PAST_EXAM_DATA.find(x => x.id === id);
        if (found) {
          const correctOption = found.options[found.ans];
          const shuffledOptions = shuffleArray(found.options);
          currentQueue.push({
            id: found.id,
            type: found.type,
            q: found.q,
            sub: found.sub,
            options: shuffledOptions,
            ans: shuffledOptions.indexOf(correctOption),
            explain: found.explain,
            dialogue: found.dialogue || null,
            audio_complete: found.audio_complete || null
          });
        }
      }
    });
  }
  
  while (currentQueue.length < 5) {
    const randG = Math.floor(Math.random() * RAW_GRAMMAR_DATA.length);
    currentQueue.push(generateGrammarQuiz(RAW_GRAMMAR_DATA[randG], randG));
  }

  currentQueue = shuffleArray(currentQueue);
  startSession();
}

function openBossSelectModal() {
  initAudio();
  stopBattleTimers();
  const modal = document.getElementById('modalBossSelect');
  const container = document.getElementById('bossStageList');
  if (!modal || !container) return;
  container.innerHTML = '';

  BOSS_STAGES.forEach(stage => {
    const isUnlocked = (stage.lv <= userData.bossUnlockedLevel);
    const isCleared = userData.bossClearedLevels.includes(stage.lv);

    const card = document.createElement('div');
    card.className = `p-3 rounded-2xl border flex items-center justify-between transition ${
      isUnlocked 
        ? (isCleared ? 'bg-indigo-900/90 border-amber-400/80 shadow' : 'bg-gradient-to-r from-red-950 to-indigo-950 border-red-500/80 shadow-lg')
        : 'bg-indigo-950/60 border-indigo-900 opacity-60'
    }`;

    if (isUnlocked) {
      card.innerHTML = `
        <div class="flex items-center gap-2.5 min-w-0 flex-1 mr-2">
          <span class="text-3xl flex-shrink-0">${stage.icon}</span>
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="text-xs font-black text-amber-300">Lv.${stage.lv} ${stage.name}</span>
              ${isCleared ? `<span class="text-[9px] bg-amber-500 text-indigo-950 font-black px-1.5 py-0.2 rounded">👑 討伐済</span>` : `<span class="text-[9px] bg-red-600 text-white font-black px-1.5 py-0.2 rounded">🔥 TARGET</span>`}
            </div>
            <div class="text-[9.5px] text-slate-300 mt-0.5 leading-tight">${stage.desc}</div>
            <div class="text-[9.5px] font-bold text-rose-300 mt-0.5">
              HP: <span class="text-white">${stage.hp}</span> / 攻: <span class="text-white">${stage.atk}</span>
              <span class="text-emerald-400 ml-1.5">+${stage.exp}EXP / 💎+${stage.gems}</span>
            </div>
          </div>
        </div>
        <div class="flex-shrink-0">
          <button onclick="startBossBattleWithStage(${stage.lv})" class="bg-gradient-to-r from-red-500 to-amber-500 hover:brightness-110 text-white font-black px-3.5 py-2 rounded-xl text-xs shadow transition active:scale-95 whitespace-nowrap">
            ⚔️ 出撃
          </button>
        </div>
      `;
    } else {
      card.innerHTML = `
        <div class="flex items-center gap-2.5 min-w-0 flex-1 mr-2">
          <span class="text-3xl flex-shrink-0 opacity-50">❓</span>
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-1.5">
              <span class="text-xs font-black text-slate-400">Lv.${stage.lv} ？？？？？？</span>
              <span class="text-[9px] bg-indigo-900 text-indigo-300 font-bold px-1.5 py-0.2 rounded">🔒 未到達</span>
            </div>
            <div class="text-[9.5px] text-indigo-400 mt-0.5 leading-tight">？？？（Lv.${stage.lv - 1} 撃破で正体が判明！）</div>
            <div class="text-[9.5px] font-bold text-indigo-500 mt-0.5">
              HP: ？？？ / 攻: ？？？
            </div>
          </div>
        </div>
        <div class="flex-shrink-0">
          <span class="text-[9.5px] bg-indigo-950 border border-indigo-800 text-indigo-400 font-bold px-2.5 py-1.5 rounded-xl whitespace-nowrap">🔒 封印中</span>
        </div>
      `;
    }
    container.appendChild(card);
  });
  modal.classList.remove('hidden');
}

function closeBossSelectModal() {
  const modal = document.getElementById('modalBossSelect');
  if (modal) modal.classList.add('hidden');
}

function startBossBattleWithStage(lv) {
  closeBossSelectModal();
  const stage = BOSS_STAGES.find(s => s.lv === lv) || BOSS_STAGES[0];
  currentBossStage = stage;
  
  initAudio();
  stopBattleTimers();
  isBossMode = true;
  isDailyCurrentSession = false;
  isFeverMode = false;
  currentMode = 'boss';

  const shuffledPastExams = shuffleArray(ACTUAL_PAST_EXAM_DATA).slice(0, 10);
  currentQueue = shuffledPastExams.map(item => {
    const correctOption = item.options[item.ans];
    const shuffledOptions = shuffleArray(item.options);
    return {
      id: item.id,
      type: item.type,
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
  startSession();
}

function showWeakBook() {
  stopBattleTimers();
  hideAllViews();
  document.getElementById('viewWeakBook').classList.remove('hidden');
  stopBGM();
  updateNavHighlight('weak');
  renderWeakBookList();
}

function renderWeakBookList() {
  const container = document.getElementById('weakBookItemList');
  const badge = document.getElementById('weakBookCountBadge');
  if (!container) return;
  container.innerHTML = '';
  if (badge) badge.innerText = `${userData.weakList.length}問`;

  if (userData.weakList.length === 0) {
    container.innerHTML = `
      <div class="bg-indigo-900/40 border border-indigo-800 p-6 rounded-2xl text-center space-y-2">
        <span class="text-4xl">✨</span>
        <div class="font-black text-sm text-amber-300">現在、苦手な問題はありません！</div>
        <div class="text-xs text-indigo-300">クエストで間違えた問題がここに自動蓄積されます。</div>
      </div>
    `;
    return;
  }

  userData.weakList.forEach(id => {
    let qData = null;
    if (id.startsWith('v_')) {
      const word = id.replace('v_', '');
      const found = RAW_VOCAB_DATA.find(x => x[0] === word);
      if (found) qData = generateVocabQuiz(found);
    } else if (id.startsWith('g_')) {
      const idx = parseInt(id.replace('g_', ''));
      if (RAW_GRAMMAR_DATA[idx]) qData = generateGrammarQuiz(RAW_GRAMMAR_DATA[idx], idx);
    } else if (id.startsWith('l_')) {
      const idx = parseInt(id.replace('l_', ''));
      if (RAW_LISTENING_DATA[idx]) qData = generateListeningQuiz(RAW_LISTENING_DATA[idx], idx);
    } else if (id.startsWith('past_')) {
      const found = ACTUAL_PAST_EXAM_DATA.find(x => x.id === id);
      if (found) {
        qData = {
          q: found.q,
          sub: found.sub,
          options: found.options,
          ans: found.ans,
          explain: found.explain
        };
      }
    }

    if (qData) {
      const card = document.createElement('div');
      card.className = "bg-indigo-900/80 border border-rose-500/50 p-3 rounded-2xl space-y-2 shadow";
      const correctText = qData.options[qData.ans];
      card.innerHTML = `
        <div class="flex justify-between items-start gap-2">
          <div class="min-w-0 flex-1">
            <span class="text-[9px] font-black bg-rose-950 text-rose-300 px-1.5 py-0.2 rounded border border-rose-800">${qData.sub || '要復習'}</span>
            <div class="font-black text-xs text-white mt-1 leading-snug whitespace-pre-line">${qData.q}</div>
          </div>
          <button onclick="removeWeakItem('${id}')" class="bg-indigo-950 hover:bg-rose-900 text-rose-300 border border-rose-700/60 font-bold px-2 py-1 rounded-lg text-[10px] transition active:scale-95 flex-shrink-0">
            🗑️ 覚えた
          </button>
        </div>
        <div class="bg-indigo-950/70 p-2 rounded-xl border border-indigo-800/80 text-[11px] space-y-1">
          <div class="font-bold text-emerald-400">【正解】 ${correctText}</div>
          <div class="text-[10px] text-slate-300 leading-relaxed whitespace-pre-line">${qData.explain || ''}</div>
        </div>
      `;
      container.appendChild(card);
    }
  });
}

function removeWeakItem(id) {
  userData.weakList = userData.weakList.filter(item => item !== id);
  saveData();
  renderWeakBookList();
}

function showBook() {
  stopBattleTimers();
  hideAllViews();
  document.getElementById('viewBook').classList.remove('hidden');
  stopBGM();
  updateNavHighlight('book');
  renderVocabBook();
}

function renderVocabBook() {
  const container = document.getElementById('vocabBookList');
  if (!container) return;
  container.innerHTML = '';

  const query = (document.getElementById('bookSearchInput')?.value || '').toLowerCase().trim();
  const totalVocabCount = RAW_VOCAB_DATA.length; // 700語
  const collectedCount = userData.vocabBook.length;
  const pct = totalVocabCount > 0 ? Math.round((collectedCount / totalVocabCount) * 100) : 0;

  document.getElementById('bookProgressText').innerText = `${collectedCount} / ${totalVocabCount} 語 (${pct}%)`;
  document.getElementById('bookProgressBar').style.width = `${pct}%`;

  const filtered = RAW_VOCAB_DATA.filter(item => {
    if (!query) return true;
    return item[0].toLowerCase().includes(query) || item[1].includes(query);
  });

  filtered.forEach((item, idx) => {
    const isCollected = userData.vocabBook.includes(item[0]);
    const card = document.createElement('div');
    card.className = `p-2.5 rounded-xl border flex flex-col justify-between ${isCollected ? 'bg-indigo-900/90 border-amber-400/60' : 'bg-indigo-950/60 border-indigo-900 opacity-60'}`;
    card.innerHTML = `
      <div>
        <div class="flex justify-between items-center mb-1">
          <span class="text-[9px] font-bold text-indigo-300">No.${idx + 1}</span>
          <span>${isCollected ? '💮 討伐済' : '❓ 未発見'}</span>
        </div>
        <div class="font-black text-white text-xs mb-0.5">${isCollected ? item[0] : '？？？'}</div>
        <div class="text-[10px] text-amber-300">${isCollected ? item[1] : '問題に正解して解放！'}</div>
      </div>
      ${isCollected ? `
        <button onclick="speakText('${item[0]}')" class="mt-2 bg-indigo-800 hover:bg-indigo-700 py-1 rounded text-[9px] text-indigo-200 font-bold">
          🔊 はつおん
        </button>
      ` : ''}
    `;
    container.appendChild(card);
  });
}

let currentQueue = [];
let currentIndex = 0;
let currentMode = '';
let quizScore = 0;
let answeredQuestionsCount = 0;
let combo = 0;
let maxCombo = 0;
let isAnswered = false;

let playerMaxHp = 100;
let playerCurHp = 100;
let enemyMaxHp = 100;
let enemyCurHp = 100;
let enemyAtk = 20;
let questionStartTime = 0;
let timerGaugeInterval = null;

const MONSTERS = ['👹', '👾', '🧟', '🎃', '🐺'];

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function stopBattleTimers() {
  if (timerGaugeInterval) {
    clearInterval(timerGaugeInterval);
    timerGaugeInterval = null;
  }
  isDialogueSpeaking = false;
  clearTimeout(dialogueNextTimer);
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

function generateVocabQuiz(item) {
  const correctMeaning = item[1];
  const otherMeanings = RAW_VOCAB_DATA.filter(x => x[1] !== correctMeaning).map(x => x[1]);
  const wrongThree = shuffleArray(otherMeanings).slice(0, 3);
  const options = shuffleArray([correctMeaning, ...wrongThree]);
  return {
    id: 'v_' + item[0],
    rawWord: item[0],
    type: 'vocab',
    q: item[0],
    sub: '📖 正しい日本語の意味を選ぼう',
    options: options,
    ans: options.indexOf(correctMeaning),
    explain: `「${item[0]}」は「${correctMeaning}」という意味です。`,
    audio_question: item[0],
    audio_complete: item[0]
  };
}

function generateGrammarQuiz(item, idx) {
  const correctOption = item.opt[item.ans];
  const shuffledOptions = shuffleArray(item.opt);
  const newAnsIndex = shuffledOptions.indexOf(correctOption);
  const questionAudioText = item.q.replace(/\([^)]*\)/g, ' , ');
  const completeSentence = item.q.replace(/\([^)]*\)/g, correctOption);

  return {
    id: 'g_' + idx,
    type: 'grammar',
    q: item.q,
    sub: item.sub || '🪄 正しい英語を選ぼう',
    options: shuffledOptions,
    ans: newAnsIndex,
    explain: item.exp + `\n\n【正解の英文】\n${completeSentence}`,
    audio_question: questionAudioText,
    audio_complete: completeSentence
  };
}

function generateListeningQuiz(item, idx) {
  const correctOption = item.opt[item.ans];
  const shuffledOptions = shuffleArray(item.opt);
  const newAnsIndex = shuffledOptions.indexOf(correctOption);
  return {
    id: 'l_' + idx,
    type: 'listening',
    q: item.q,
    sub: item.sub || '🎧 音声を聞いて答えよう',
    options: shuffledOptions,
    ans: newAnsIndex,
    explain: item.exp,
    dialogue: item.dialogue,
    audio_complete: item.aud_complete
  };
}

function startDailyQuest(type, count) {
  if (userData.dailyDone[type]) {
    alert('本日のこのデイリークエストは既にクリア済みです！通常特訓コースやボスバトルに挑戦しよう！');
    return;
  }
  isBossMode = false;
  isDailyCurrentSession = true;
  isFeverMode = false;
  startSessionInternal(type, count);
}

function startSessionInternal(type, count) {
  initAudio();
  stopBattleTimers();
  currentMode = type;
  if (type === 'vocab') {
    const selectedItems = shuffleArray(RAW_VOCAB_DATA).slice(0, count);
    currentQueue = selectedItems.map(item => generateVocabQuiz(item));
  } else if (type === 'grammar') {
    const selected = shuffleArray(RAW_GRAMMAR_DATA).slice(0, count);
    currentQueue = selected.map((item, i) => generateGrammarQuiz(item, i));
  } else if (type === 'listening') {
    const selected = shuffleArray(RAW_LISTENING_DATA).slice(0, count);
    currentQueue = selected.map((item, i) => generateListeningQuiz(item, i));
  }
  startSession();
}

function startSession() {
  currentIndex = 0;
  quizScore = 0;
  answeredQuestionsCount = 0;
  combo = 0;
  maxCombo = 0;
  isFeverMode = false;
  
  const pStats = calculatePlayerStats();
  playerMaxHp = pStats.hp;
  playerCurHp = pStats.hp;

  if (isBossMode) {
    enemyMaxHp = currentBossStage.hp;
    enemyCurHp = currentBossStage.hp;
    enemyAtk = currentBossStage.atk;
  } else if (isDailyCurrentSession) {
    if (currentMode === 'vocab') { enemyMaxHp = 600; enemyAtk = 18; }
    else if (currentMode === 'grammar') { enemyMaxHp = 400; enemyAtk = 22; }
    else if (currentMode === 'listening') { enemyMaxHp = 350; enemyAtk = 22; }
    else { enemyMaxHp = 500; enemyAtk = 20; }
    enemyCurHp = enemyMaxHp;
  } else if (currentMode === 'weakBattle') {
    enemyMaxHp = 800;
    enemyCurHp = 800;
    enemyAtk = 25;
  } else {
    if (selectedNormalDiffLevel === 1) {
      enemyMaxHp = (selectedNormalType === 'vocab') ? 600 : ((selectedNormalType === 'grammar') ? 350 : 250);
      enemyAtk = 15;
    } else if (selectedNormalDiffLevel === 2) {
      enemyMaxHp = (selectedNormalType === 'vocab') ? 4500 : ((selectedNormalType === 'grammar') ? 2300 : 1400);
      enemyAtk = 60;
    } else if (selectedNormalDiffLevel === 3) {
      enemyMaxHp = (selectedNormalType === 'vocab') ? 15000 : ((selectedNormalType === 'grammar') ? 8000 : 5000);
      enemyAtk = 150;
    } else {
      enemyMaxHp = (selectedNormalType === 'vocab') ? 45000 : ((selectedNormalType === 'grammar') ? 24000 : 15000);
      enemyAtk = 350;
    }
    enemyCurHp = enemyMaxHp;
  }

  hideAllViews();
  document.getElementById('viewQuiz').classList.remove('hidden');

  if (isBossMode) {
    playBGM('boss');
    document.getElementById('enemyCardBox').className = "bg-gradient-to-b from-red-950 via-purple-950 to-indigo-950 border-2 border-red-500 rounded-3xl p-4 shadow-2xl relative glow-red overflow-hidden";
    document.getElementById('battleEnemyName').innerText = `Lv.${currentBossStage.lv} ${currentBossStage.name}`;
  } else if (currentMode === 'weakBattle') {
    playBGM('battle');
    document.getElementById('enemyCardBox').className = "bg-gradient-to-b from-rose-950 via-purple-950 to-indigo-950 border-2 border-rose-500 rounded-3xl p-4 shadow-2xl relative overflow-hidden";
    document.getElementById('battleEnemyName').innerText = "👾 にがてマスター";
  } else {
    playBGM('battle');
    document.getElementById('enemyCardBox').className = "bg-gradient-to-b from-indigo-900 to-indigo-950 border-2 border-indigo-700 rounded-3xl p-4 shadow-2xl relative overflow-hidden";
    document.getElementById('battleEnemyName').innerText = "英語モンスター";
  }

  const avatarObj = [...AVATARS].reverse().find(a => userData.level >= a.minLv) || AVATARS[0];
  document.getElementById('battleHeroName').innerText = avatarObj.name;
  updateBattleHpUi();
  renderQuestion();
}

function updateBattleHpUi() {
  const heroPct = Math.max(0, Math.min(100, Math.round((playerCurHp / playerMaxHp) * 100)));
  const enemyPct = Math.max(0, Math.min(100, Math.round((enemyCurHp / enemyMaxHp) * 100)));
  document.getElementById('battleHeroHpBar').style.width = `${heroPct}%`;
  document.getElementById('battleHeroHpText').innerText = `${playerCurHp}/${playerMaxHp}`;
  document.getElementById('battleEnemyHpBar').style.width = `${enemyPct}%`;
  document.getElementById('battleEnemyHpText').innerText = `${enemyCurHp}/${enemyMaxHp}`;
}

function startCriticalTimer() {
  questionStartTime = Date.now();
  const gauge = document.getElementById('timerGauge');
  const timerText = document.getElementById('timerText');
  if (gauge) gauge.style.width = '100%';
  if (timerText) timerText.innerText = '⚡ 3秒以内即答でクリティカル！';

  if (timerGaugeInterval) clearInterval(timerGaugeInterval);
  timerGaugeInterval = setInterval(() => {
    const elapsed = Date.now() - questionStartTime;
    const remainPct = Math.max(0, 100 - (elapsed / 3000) * 100);
    if (gauge) gauge.style.width = `${remainPct}%`;
    if (remainPct <= 0) {
      clearInterval(timerGaugeInterval);
      timerGaugeInterval = null;
      if (timerText) timerText.innerText = '⏱️ 通常解答時間';
    }
  }, 50);
}

function renderQuestion() {
  isAnswered = false;
  stopBattleTimers();

  const q = currentQueue[currentIndex];
  document.getElementById('quizFeedback').classList.add('hidden');
  document.getElementById('quizProgress').innerText = `第 ${currentIndex + 1} / ${currentQueue.length} 問`;
  document.getElementById('comboCounter').innerText = `🔥 ${combo} 連続`;

  const feverBanner = document.getElementById('feverBanner');
  if (isFeverMode) {
    feverBanner.classList.remove('hidden');
    document.getElementById('enemyCardBox').classList.add('fever-active');
  } else {
    feverBanner.classList.add('hidden');
    document.getElementById('enemyCardBox').classList.remove('fever-active');
  }
  
  if (isBossMode) {
    document.getElementById('enemyAvatar').innerText = currentBossStage.icon;
  } else if (currentMode === 'weakBattle') {
    document.getElementById('enemyAvatar').innerText = '👾';
  } else {
    document.getElementById('enemyAvatar').innerText = MONSTERS[currentIndex % MONSTERS.length];
  }

  document.getElementById('quizQuestion').innerText = q.q;
  document.getElementById('quizSubText').innerText = q.sub || '';

  const audioBtnContainer = document.getElementById('audioBtnContainer');
  const gauge = document.getElementById('timerGauge');
  const timerText = document.getElementById('timerText');
  if (gauge) gauge.style.width = '100%';

  if (isBossMode) {
    if (q.type === 'listening') {
      audioBtnContainer.classList.remove('hidden');
      if (timerText) timerText.innerText = '🎧 音声を再生中...';
      if (q.dialogue) playDialogueSpeech(q.dialogue, () => startCriticalTimer());
      else startCriticalTimer();
    } else {
      audioBtnContainer.classList.add('hidden');
      startCriticalTimer();
    }
  } else {
    audioBtnContainer.classList.remove('hidden');
    if (q.type === 'listening' && q.dialogue) {
      if (timerText) timerText.innerText = '🎧 音声を再生中...';
      playDialogueSpeech(q.dialogue, () => startCriticalTimer());
    } else if (q.audio_question) {
      if (timerText) timerText.innerText = '🗣️ 音声を再生中...';
      speakText(q.audio_question, () => startCriticalTimer());
    } else {
      startCriticalTimer();
    }
  }

  const optContainer = document.getElementById('quizOptions');
  optContainer.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = "w-full bg-indigo-900/90 hover:bg-indigo-800 border-2 border-indigo-700/80 hover:border-amber-400 p-2.5 rounded-2xl text-sm font-bold text-slate-100 text-left transition active:scale-98 flex items-center justify-between";
    btn.innerHTML = `<span><strong class="text-amber-400 mr-2">${idx + 1}.</strong> ${opt}</span> <span class="text-xs opacity-40">⚔️</span>`;
    btn.onclick = () => handleAnswer(idx);
    optContainer.appendChild(btn);
  });
}

function playCurrentAudio() {
  const q = currentQueue[currentIndex];
  if (!q) return;
  if (isAnswered && q.audio_complete) speakText(q.audio_complete);
  else if (q.type === 'listening' && q.dialogue) playDialogueSpeech(q.dialogue);
  else if (!isBossMode && q.audio_question) speakText(q.audio_question);
}

function showDamagePopup(text, isCritical, isEnemyDamage) {
  const area = document.getElementById('damageEffectArea');
  if (!area) return;
  const el = document.createElement('div');
  el.className = `damage-popup text-base font-black px-3 py-1 rounded-2xl shadow-2xl ${
    isEnemyDamage 
      ? (isCritical ? 'bg-amber-400 text-indigo-950 border-2 border-white scale-110' : 'bg-rose-600 text-white')
      : 'bg-red-800 text-white border border-red-500'
  }`;
  el.innerText = text;
  area.appendChild(el);
  setTimeout(() => el.remove(), 800);
}

function use5050Hint() {
  if (isAnswered) return;
  if (userData.inventory.hint <= 0) {
    alert('ヒントの書がありません！ショップで購入できます。');
    return;
  }
  userData.inventory.hint--;
  updateUiState();
  
  const q = currentQueue[currentIndex];
  const buttons = Array.from(document.getElementById('quizOptions').children);
  const wrongIndices = [];
  buttons.forEach((btn, idx) => {
    if (idx !== q.ans && !btn.disabled) wrongIndices.push(idx);
  });

  const toDisable = shuffleArray(wrongIndices).slice(0, 2);
  toDisable.forEach(idx => {
    buttons[idx].disabled = true;
    buttons[idx].classList.add('opacity-30');
  });
  playSE('chest');
}

function handleAnswer(selectedIdx) {
  if (isAnswered) return;
  isAnswered = true;
  stopBattleTimers();

  const q = currentQueue[currentIndex];
  const isCorrect = (selectedIdx === q.ans);
  const answerDuration = Date.now() - questionStartTime;
  const isQuickAnswer = (answerDuration <= 3000);
  
  answeredQuestionsCount += 1;
  userData.totalAnswered += 1;
  const feedbackModal = document.getElementById('quizFeedback');
  const feedbackTitle = document.getElementById('feedbackTitle');
  const feedbackIcon = document.getElementById('feedbackIcon');
  const feedbackExplain = document.getElementById('feedbackExplain');

  Array.from(document.getElementById('quizOptions').children).forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.ans) btn.classList.add('!bg-emerald-700', '!border-emerald-400');
    if (idx === selectedIdx && !isCorrect) btn.classList.add('!bg-rose-800', '!border-rose-500');
  });

  const pStats = calculatePlayerStats();

  if (isCorrect) {
    quizScore += 1;
    combo += 1;
    if (combo > maxCombo) maxCombo = combo;
    userData.totalCorrect += 1;

    if (combo >= 5 && !isFeverMode) {
      isFeverMode = true;
      playBGM('fever');
    }

    let dmg = Math.round(pStats.atk * (0.9 + Math.random() * 0.3));
    const isCrit = isQuickAnswer || (Math.random() < (pStats.spd / 150));
    if (isCrit) dmg = Math.round(dmg * 2.0);
    if (isFeverMode) dmg = Math.round(dmg * 1.5);

    enemyCurHp = Math.max(0, enemyCurHp - dmg);
    updateBattleHpUi();

    if (isCrit) {
      playSE('critical');
      showDamagePopup(`💥 CRITICAL! -${dmg} HP`, true, true);
    } else {
      playSE('correct');
      showDamagePopup(`⚔️ -${dmg} HP`, false, true);
    }

    if (q.rawWord && !userData.vocabBook.includes(q.rawWord)) {
      userData.vocabBook.push(q.rawWord);
    }

    feedbackIcon.innerText = '⭕';
    feedbackTitle.innerText = isCrit 
      ? `⚡ クリティカル正解！ Excellent! (${combo}連続)`
      : `正解！ Great! (${combo}連続)`;
    feedbackTitle.className = isCrit ? "text-sm font-black text-amber-400" : "text-sm font-black text-emerald-400";

    if (q.audio_complete) {
      setTimeout(() => speakText(q.audio_complete), 300);
    }
  } else {
    playSE('wrong');
    combo = 0;
    if (isFeverMode) {
      isFeverMode = false;
      playBGM(isBossMode ? 'boss' : 'battle');
    }

    const enemyDmg = Math.round(enemyAtk * (0.8 + Math.random() * 0.4));
    playerCurHp = Math.max(0, playerCurHp - enemyDmg);
    updateBattleHpUi();
    showDamagePopup(`⚠️ 反撃被弾! -${enemyDmg} HP`, false, false);

    if (!userData.weakList.includes(q.id)) {
      userData.weakList.push(q.id);
    }

    feedbackIcon.innerText = '❌';
    feedbackTitle.innerText = 'おしい！ Review';
    feedbackTitle.className = "text-sm font-black text-rose-400";
  }

  feedbackExplain.innerText = q.explain;
  feedbackModal.classList.remove('hidden');
  saveData();
}

function nextQuestion() {
  currentIndex += 1;
  if (currentIndex < currentQueue.length && playerCurHp > 0 && enemyCurHp > 0) {
    renderQuestion();
  } else {
    finishSession();
  }
}

function finishSession() {
  stopBattleTimers();
  document.getElementById('viewQuiz').classList.add('hidden');
  document.getElementById('viewResult').classList.remove('hidden');
  playBGM('result');

  let earnedExp = 0;
  let earnedGems = 0;
  const rareDropArea = document.getElementById('rareDropArea');
  rareDropArea.classList.add('hidden');

  const isPlayerDead = (playerCurHp <= 0);
  const isEnemyDefeated = (enemyCurHp <= 0);

  if (isPlayerDead) {
    document.getElementById('resultModeBadge').innerText = '💀 クエスト失敗...';
    document.getElementById('resultModeBadge').className = 'text-[10px] font-black bg-rose-700 text-white px-3 py-1 rounded-full inline-block mb-1';
    document.getElementById('resultEmoji').innerText = '🪦';
    document.getElementById('resultTitle').innerText = '力尽きてしまった！';
    document.getElementById('resultComment').innerText = '敵の攻撃に耐えきれなかった。HPや装備を強化してリベンジしよう！';
    earnedExp = Math.max(5, Math.round(quizScore * 2));
    earnedGems = 1;
  } else if (!isEnemyDefeated) {
    document.getElementById('resultModeBadge').innerText = '💨 討伐失敗 (時間切れ)';
    document.getElementById('resultModeBadge').className = 'text-[10px] font-black bg-slate-700 text-slate-200 px-3 py-1 rounded-full inline-block mb-1';
    document.getElementById('resultEmoji').innerText = '💨';
    document.getElementById('resultTitle').innerText = '敵が逃げてしまった！';
    document.getElementById('resultComment').innerText = '出題数内にHPを削りきれなかった！3秒即答クリティカルや攻撃力UPで討伐を目指そう！';

    if (isBossMode) {
      earnedExp = Math.round(currentBossStage.exp * 0.25);
      earnedGems = 2;
    } else {
      earnedExp = Math.max(10, Math.round((quizScore * 5) * 0.5));
      earnedGems = 1;
    }
  } else if (isBossMode && isEnemyDefeated) {
    document.getElementById('resultModeBadge').innerText = `👑 Lv.${currentBossStage.lv} BOSS 討伐完全勝利！`;
    document.getElementById('resultModeBadge').className = 'text-[10px] font-black bg-red-600 text-white px-3 py-1 rounded-full inline-block mb-1 shadow';
    document.getElementById('resultEmoji').innerText = currentBossStage.icon;
    document.getElementById('resultTitle').innerText = `【${currentBossStage.name}】を完全撃破！`;
    document.getElementById('resultComment').innerText = '見事な英語力と攻撃力です！次のボスレベルが解放されました！';

    earnedExp = currentBossStage.exp + (quizScore * 5);
    earnedGems = currentBossStage.gems;

    if (!userData.bossClearedLevels.includes(currentBossStage.lv)) {
      userData.bossClearedLevels.push(currentBossStage.lv);
    }
    if (currentBossStage.lv >= userData.bossUnlockedLevel && userData.bossUnlockedLevel < 10) {
      userData.bossUnlockedLevel = currentBossStage.lv + 1;
      alert(`🎉 新たなボス【Lv.${userData.bossUnlockedLevel} ${BOSS_STAGES[userData.bossUnlockedLevel - 1].name}】が解放されました！`);
    }

    const dropChance = 0.3 + (currentBossStage.lv * 0.07);
    const bossDrops = ['hat_dragon_crown', 'wp_dark_blade'];
    const availableDrops = bossDrops.filter(id => !userData.unlockedEquips.includes(id));
    if (availableDrops.length > 0 && Math.random() < dropChance) {
      const dropId = availableDrops[Math.floor(Math.random() * availableDrops.length)];
      userData.unlockedEquips.push(dropId);
      const dropEquip = SHOP_EQUIP_DATA.find(e => e.id === dropId);
      document.getElementById('rareDropItemText').innerText = `【${dropEquip.name}】(${dropEquip.desc}) を獲得！`;
      rareDropArea.classList.remove('hidden');
      playSE('chest');
    }
  } else if (isDailyCurrentSession && isEnemyDefeated) {
    document.getElementById('resultEmoji').innerText = '🏆';
    document.getElementById('resultTitle').innerText = 'デイリークエスト撃破完了！';
    document.getElementById('resultModeBadge').innerText = '🌟 デイリー限定ボーナス獲得！';
    document.getElementById('resultModeBadge').className = 'text-[10px] font-black bg-amber-400 text-indigo-950 px-2.5 py-0.5 rounded-full inline-block mb-1 shadow';

    if (currentMode === 'vocab') {
      userData.dailyDone.vocab = true;
      earnedExp = 50 + (quizScore * 5);
      earnedGems = 15;
    } else if (currentMode === 'grammar') {
      userData.dailyDone.grammar = true;
      earnedExp = 60 + (quizScore * 10);
      earnedGems = 20;
    } else if (currentMode === 'listening') {
      userData.dailyDone.listening = true;
      earnedExp = 80 + (quizScore * 10);
      earnedGems = 25;
    }
  } else if (currentMode === 'weakBattle' && isEnemyDefeated) {
    document.getElementById('resultEmoji').innerText = '🎉';
    document.getElementById('resultTitle').innerText = 'にがて討伐完了！';
    document.getElementById('resultModeBadge').innerText = '🔄 通常特訓サイクルがリセット！';
    document.getElementById('resultModeBadge').className = 'text-[10px] font-black bg-emerald-500 text-indigo-950 px-2.5 py-0.5 rounded-full inline-block mb-1 shadow';
    document.getElementById('resultComment').innerText = '見事に苦手を克服しました！通常特訓（単語・文法・リスニング）に再び挑戦できます！';
    userData.questRotation = { vocab: false, grammar: false, listening: false };
    earnedExp = 100;
    earnedGems = 20;
  } else if (isEnemyDefeated) {
    document.getElementById('resultEmoji').innerText = '🏆';
    document.getElementById('resultTitle').innerText = 'モンスター討伐完了！';
    document.getElementById('resultModeBadge').innerText = '⚔️ 通常特訓クリア';
    document.getElementById('resultModeBadge').className = 'text-[10px] font-black bg-indigo-700 text-indigo-200 px-2 py-0.5 rounded-full inline-block mb-1';
    
    if (selectedNormalType) {
      userData.questRotation[selectedNormalType] = true;
    }

    const diffMulti = [1.0, 1.5, 2.3, 3.8][selectedNormalDiffLevel - 1] || 1.0;
    const baseExp = (quizScore * 8 + (maxCombo * 2));
    earnedExp = Math.round(baseExp * diffMulti);
    earnedGems = Math.max(1, Math.round((quizScore / 2) * (diffMulti * 0.8)));
  }

  const totalDone = Math.max(1, answeredQuestionsCount);
  document.getElementById('resultScore').innerText = `${quizScore} / ${totalDone}`;
  document.getElementById('resultExp').innerText = `+${earnedExp}`;
  document.getElementById('resultGems').innerText = `💎+${earnedGems}`;

  userData.gems += earnedGems;
  addExp(earnedExp);
}

function confirmExitQuiz() {
  if (confirm('学習をとちゅうで終了してホームにもどりますか？')) {
    stopBattleTimers();
    showHome();
  }
}

// ==================== ショップ & 装備（ガチャ完全撤廃版） ====================
function switchEquipTab(tab) {
  currentShopTab = tab;
  const tHat = document.getElementById('tabEquipHat');
  const tWp = document.getElementById('tabEquipWeapon');
  const tAu = document.getElementById('tabEquipAura');
  [tHat, tWp, tAu].forEach(el => {
    if (el) el.className = "flex-1 py-1.5 rounded-lg text-slate-300 hover:text-white transition";
  });
  if (tab === 'hat' && tHat) tHat.className = "flex-1 py-1.5 rounded-lg bg-indigo-800 text-amber-300 shadow transition";
  if (tab === 'weapon' && tWp) tWp.className = "flex-1 py-1.5 rounded-lg bg-indigo-800 text-amber-300 shadow transition";
  if (tab === 'aura' && tAu) tAu.className = "flex-1 py-1.5 rounded-lg bg-indigo-800 text-amber-300 shadow transition";
  renderShopEquips();
}

function renderShopEquips() {
  const container = document.getElementById('equipShopList');
  if (!container) return;
  container.innerHTML = '';

  const items = SHOP_EQUIP_DATA.filter(e => e.type === currentShopTab);
  items.forEach(eq => {
    const isUnlocked = userData.unlockedEquips.includes(eq.id);
    const isEquipped = (userData.equipped[eq.type] === eq.id);

    const card = document.createElement('div');
    card.className = `p-2.5 rounded-2xl border flex flex-col justify-between ${
      isEquipped ? 'bg-indigo-800 border-amber-400 shadow-md' : 'bg-indigo-950/80 border-indigo-800'
    }`;

    card.innerHTML = `
      <div>
        <div class="flex justify-between items-center mb-1">
          <span class="text-[9px] font-bold text-indigo-300">${eq.rank}</span>
          <span class="text-xl">${eq.icon}</span>
        </div>
        <div class="font-black text-xs text-white truncate">${eq.name}</div>
        <div class="text-[9.5px] text-amber-300 mt-0.5 leading-tight">${eq.desc}</div>
      </div>
      <div class="mt-2.5 pt-1.5 border-t border-indigo-800/80 flex justify-between items-center">
        ${isEquipped ? `
          <button onclick="unequipItem('${eq.type}')" class="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-1 rounded-lg text-[10px] transition">
            はずす
          </button>
        ` : (isUnlocked ? `
          <button onclick="equipItem('${eq.id}', '${eq.type}')" class="w-full bg-amber-500 hover:bg-amber-400 text-indigo-950 font-black py-1 rounded-lg text-[10px] transition active:scale-95">
            そうび
          </button>
        ` : (eq.price > 9000 ? `
          <span class="w-full text-center text-[9px] text-rose-300 font-bold bg-rose-950/80 border border-rose-800/60 py-1 rounded-lg">
            ボス限定
          </span>
        ` : `
          <button onclick="buyEquip('${eq.id}', ${eq.price})" class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-1 rounded-lg text-[10px] flex items-center justify-center gap-1 transition active:scale-95">
            <span>💎 ${eq.price}</span> <span>購入</span>
          </button>
        `))}
      </div>
    `;
    container.appendChild(card);
  });
}

function equipItem(id, type) {
  userData.equipped[type] = id;
  playSE('levelup');
  saveData();
}

function unequipItem(type) {
  userData.equipped[type] = '';
  playSE('wrong');
  saveData();
}

function buyEquip(id, price) {
  if (userData.gems < price) {
    alert('ダイヤが足りません！クエストをクリアしてダイヤを集めよう！');
    return;
  }
  userData.gems -= price;
  userData.unlockedEquips.push(id);
  playSE('chest');
  saveData();
}

function buyItem(type, price) {
  if (userData.gems < price) {
    alert('ダイヤが足りません！');
    return;
  }
  userData.gems -= price;
  if (type === 'hint') userData.inventory.hint += 1;
  if (type === 'potion') userData.inventory.potion += 1;
  playSE('chest');
  saveData();
}

function hideAllViews() {
  ['viewHome', 'viewQuiz', 'viewResult', 'viewShop', 'viewParent', 'viewBook', 'viewWeakBook', 'modalBossSelect', 'modalNormalSelect'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });
}

function showHome() {
  stopBattleTimers();
  hideAllViews();
  document.getElementById('viewHome').classList.remove('hidden');
  playBGM('home');
  updateNavHighlight('home');
}

function showShop() {
  stopBattleTimers();
  hideAllViews();
  document.getElementById('viewShop').classList.remove('hidden');
  stopBGM();
  updateNavHighlight('shop');
  renderShopEquips();
}

function showParent() {
  stopBattleTimers();
  hideAllViews();
  document.getElementById('viewParent').classList.remove('hidden');
  stopBGM();
  updateNavHighlight('parent');
}

function updateNavHighlight(active) {
  ['Home', 'Book', 'Weak', 'Shop', 'Parent'].forEach(name => {
    const btn = document.getElementById('nav' + name);
    if (btn) btn.className = "flex flex-col items-center gap-0.5 text-indigo-400 hover:text-indigo-200";
  });
  const keyMap = { home: 'navHome', book: 'navBook', weak: 'navWeak', shop: 'navShop', parent: 'navParent' };
  const target = document.getElementById(keyMap[active]);
  if (target) target.className = "flex flex-col items-center gap-0.5 text-amber-400";
}

function exportData() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(userData));
  const dlAnchor = document.createElement('a');
  dlAnchor.setAttribute("href", dataStr);
  dlAnchor.setAttribute("download", `eiken4_backup_${getTodayString()}.json`);
  dlAnchor.click();
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    let imported = null;
    try {
      imported = JSON.parse(e.target.result);
    } catch (parseErr) {
      alert('ファイルの読み込みに失敗しました（有効なJSONバックアップファイルではありません）。');
      return;
    }
    try {
      userData = { ...userData, ...imported };
      sanitizeUserData();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
      updateUiState();
      alert('データの復元が完了しました！');
      location.reload();
    } catch (err) {
      console.error(err);
      alert('データの反映中にエラーが発生しました。');
    }
  };
  reader.readAsText(file);
}

function resetAllProgress() {
  if (confirm('すべての学習記録、レベル、獲得ダイヤを初期化しますか？')) {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch(e) {}
    location.reload();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  loadData();
});
document.body.addEventListener('click', initAudio, { once: true });
