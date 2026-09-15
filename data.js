// ==========================================
// 英検4級 合格クエスト 〜50日間の冒険〜
// マスターデータ定義ファイル (data.js)
// ==========================================

// ==================== 5. 着せ替え・装備データベース (全33種) ====================
const SHOP_EQUIP_DATA = [
  // --- 👑 あたま (HP) ---
  { id: 'hat_grad', name: '学士帽', type: 'hat', icon: '🎓', price: 25, rank: '🌟 ノーマル', val: 50, desc: 'HP +50 / 学習の第一歩' },
  { id: 'hat_cap', name: '冒険者のキャップ', type: 'hat', icon: '🧢', price: 45, rank: '🌟 ノーマル', val: 120, desc: 'HP +120 / 元気いっぱい' },
  { id: 'hat_ribbon', name: '勝利のリボン', type: 'hat', icon: '🎀', price: 80, rank: '🔵 レア', val: 300, desc: 'HP +300 / やる気UP' },
  { id: 'hat_cat', name: 'ネコミミ', type: 'hat', icon: '🐱', price: 130, rank: '🔵 レア', val: 600, desc: 'HP +600 / 集中力UP' },
  { id: 'hat_wizard', name: '大魔導士の帽子', type: 'hat', icon: '🧙', price: 220, rank: '🟣 スーパーレア', val: 1200, desc: 'HP +1200 / 文法の魔力' },
  { id: 'hat_fox', name: '妖狐のお面', type: 'hat', icon: '🦊', price: 320, rank: '🟣 スーパーレア', val: 2000, desc: 'HP +2000 / 精神集中' },
  { id: 'hat_crown', name: '黄金の王冠', type: 'hat', icon: '👑', price: 550, rank: '🟡 レジェンド', val: 3500, desc: 'HP +3500 / 知識の王者' },
  { id: 'hat_space', name: '宇宙飛行士ヘルメット', type: 'hat', icon: '🪐', price: 800, rank: '🟡 レジェンド', val: 5000, desc: 'HP +5000 / 未知の領域' },
  { id: 'hat_tiara', name: '神話のダイヤティアラ', type: 'hat', icon: '💎', price: 1200, rank: '🌈 ゴッド', val: 8000, desc: 'HP +8000 / 完全制覇' },
  { id: 'hat_dragon_crown', name: '竜王の覇冠', type: 'hat', icon: '🐉👑', price: 9999, rank: '🎁 ボス限定ドロップ', val: 12000, desc: 'HP +12000 / 竜王の加護 (Lv.60以上)', reqLv: 60 },
  { id: 'hat_genesis_crown', name: '創世神の王冠', type: 'hat', icon: '👑✨🌌', price: 99999, rank: '🌌 創世神話級', val: 25000, desc: 'HP +25000 / 全次元を統べる神の王冠 (Lv.60以上)', reqLv: 60, isSecret: true },

  // --- ⚔️ ぶき (攻撃力) ---
  { id: 'wp_pencil', name: '巨大えんぴつ', type: 'weapon', icon: '✏️', price: 20, rank: '🌟 ノーマル', val: 20, desc: '攻撃 +20 / マークシート用' },
  { id: 'wp_wand', name: '初心者の杖', type: 'weapon', icon: '🪄', price: 50, rank: '🌟 ノーマル', val: 45, desc: '攻撃 +45 / 小さな魔法' },
  { id: 'wp_bow', name: '精霊の弓矢', type: 'weapon', icon: '🏹', price: 90, rank: '🔵 レア', val: 100, desc: '攻撃 +100 / 正解を射抜く' },
  { id: 'wp_sword', name: '勇者のソード', type: 'weapon', icon: '🗡️', price: 150, rank: '🔵 レア', val: 180, desc: '攻撃 +180 / 難問を断ち切る' },
  { id: 'wp_guitar', name: 'エレキギター', type: 'weapon', icon: '🎸', price: 240, rank: '🟣 スーパーレア', val: 300, desc: '攻撃 +300 / 英語のリズム' },
  { id: 'wp_axe', name: 'バトルアックス', type: 'weapon', icon: '🪓', price: 350, rank: '🟣 スーパーレア', val: 480, desc: '攻撃 +480 / 圧倒的粉砕' },
  { id: 'wp_trident', name: '海神の三叉槍', type: 'weapon', icon: '🔱', price: 600, rank: '🟡 レジェンド', val: 750, desc: '攻撃 +750 / 深い知識' },
  { id: 'wp_saber', name: '光線剣スターライト', type: 'weapon', icon: '🌌', price: 850, rank: '🟡 レジェンド', val: 1100, desc: '攻撃 +1100 / 光の剣' },
  { id: 'wp_excalibur', name: '聖剣エクスカリバー', type: 'weapon', icon: '⚜️', price: 1500, rank: '🌈 ゴッド', val: 1700, desc: '攻撃 +1700 / 絶対合格の聖剣' },
  { id: 'wp_dark_blade', name: '漆黒の魔剣', type: 'weapon', icon: '🗡️🖤', price: 9999, rank: '🎁 ボス限定ドロップ', val: 2400, desc: '攻撃 +2400 / ボス討伐の覇気 (Lv.60以上)', reqLv: 60 },
  { id: 'wp_genesis_blade', name: '創世神の聖剣', type: 'weapon', icon: '⚔️🌟🔥', price: 99999, rank: '🌌 創世神話級', val: 4000, desc: '攻撃 +4000 / 万物を創造し消滅させる究極剣 (Lv.60以上)', reqLv: 60, isSecret: true },

  // --- ✨ オーラ (速さ / 会心率) ---
  { id: 'aura_wind', name: '若葉のそよ風', type: 'aura', icon: '🍃', price: 30, rank: '🌟 ノーマル', val: 5, desc: '速さ +5 / 爽やかな風' },
  { id: 'aura_sakura', name: '桜の花吹雪', type: 'aura', icon: '🌸', price: 80, rank: '🔵 レア', val: 15, desc: '速さ +15 / 合格の桜' },
  { id: 'aura_angel', name: '天使の翼', type: 'aura', icon: '🪽', price: 180, rank: '🔵 レア', val: 30, desc: '速さ +30 / 高みへ飛翔' },
  { id: 'aura_devil', name: '暗黒の翼', type: 'aura', icon: '🦇', price: 280, rank: '🟣 スーパーレア', val: 55, desc: '速さ +55 / 秘めたる力' },
  { id: 'aura_thunder', name: '迅雷のイナズマ', type: 'aura', icon: '⚡', price: 450, rank: '🟣 スーパーレア', val: 85, desc: '速さ +85 / 電光石火' },
  { id: 'aura_fire', name: 'ドラゴンの炎', type: 'aura', icon: '🔥', price: 700, rank: '🟡 レジェンド', val: 120, desc: '速さ +120 / 燃える情熱' },
  { id: 'aura_rainbow', name: '奇跡のレインボー', type: 'aura', icon: '🌈', price: 950, rank: '🟡 レジェンド', val: 180, desc: '速さ +180 / 満点の架け橋' },
  { id: 'aura_cosmic', name: 'コズミックオーラ', type: 'aura', icon: '🌟', price: 1500, rank: '🌈 ゴッド', val: 260, desc: '速さ +260 / 全宇宙の叡智' },
  { id: 'aura_dragon_light', name: '神龍の天光', type: 'aura', icon: '🐉✨', price: 9999, rank: '🎁 ボス限定ドロップ', val: 365, desc: '速さ +365 / 神龍の加護。極限の素早さを宿す光 (Lv.60以上)', reqLv: 60 },
  { id: 'aura_genesis_light', name: '創世神の神光', type: 'aura', icon: '🌌✨👑', price: 99999, rank: '🌌 創世神話級', val: 515, desc: '速さ +515 / 時空を超越する絶対神の輝き (Lv.60以上)', reqLv: 60, isSecret: true }
];

// ==================== 6. ボスステージ (全11段階) ====================
const BOSS_STAGES = [
  { 
    lv: 1, 
    name: "邪竜の幼体", 
    icon: "🐲", 
    hp: 1200, 
    atk: 25, 
    exp: 60, 
    gems: 15, 
    desc: "まだ幼いドラゴンの子ども。基礎力で勝てる！",
    introMsg: "Gwaaah! (ボクの縄張りに何しに来た！キミの英語の力、見せてもらおう！)",
    defeatMsg: "Kyuuu... (強いや...！だけど次はもっと硬いウロコを持つヤツがいるぞ...！)"
  },
  { 
    lv: 2, 
    name: "黒曜石の飛竜", 
    icon: "🦖", 
    hp: 3500, 
    atk: 50, 
    exp: 90, 
    gems: 20, 
    desc: "硬いウロコを持つ飛竜。全問クリティカル近くで勝利！",
    introMsg: "You cannot pierce my black scales! (我が黒曜の鎧、貴様の英語力で貫けるかな！)",
    defeatMsg: "My armor is broken...!? (ウロコが砕かれた...！だが紅蓮の炎に焼き尽くされるがいい...！)"
  },
  { 
    lv: 3, 
    name: "紅蓮のワイバーン", 
    icon: "👺", 
    hp: 7000, 
    atk: 85, 
    exp: 130, 
    gems: 28, 
    desc: "炎を吐く強敵。Lv.20以上＆上位装備が必要。",
    introMsg: "Burn in my flame! (ここから先は灼熱の領域！貴様の覚悟を試してやろう！)",
    defeatMsg: "My flame extinguished... (炎が消えた...！？ だが嵐を呼ぶあの竜が貴様を吹き飛ばす！)"
  },
  { 
    lv: 4, 
    name: "嵐呼ぶ魔竜", 
    icon: "🌪️", 
    hp: 12000, 
    atk: 120, 
    exp: 180, 
    gems: 35, 
    desc: "猛烈な風を操る竜。文法でHPを強化して挑もう。",
    introMsg: "Feel the wrath of the storm! (吹き荒れる嵐を前に、貴様の知識など無力だ！)",
    defeatMsg: "Blown away... (嵐が切り裂かれた...！冥府の門が開くのを見るがいい...！)"
  },
  { 
    lv: 5, 
    name: "冥府の巨竜", 
    icon: "👿", 
    hp: 18000, 
    atk: 165, 
    exp: 240, 
    gems: 45, 
    desc: "【中ボス】強力な反撃を放つ。ミスを減らそう！",
    introMsg: "Welcome to the underworld! (ここが貴様の終着駅だ。闇の底へ沈むがいい！)",
    defeatMsg: "Light... in the dark...? (暗闇に光が...！？ だが深淵に潜む影はお前の光すら呑み込むぞ！)"
  },
  { 
    lv: 6, 
    name: "深淵の影竜", 
    icon: "🦹", 
    hp: 26000, 
    atk: 210, 
    exp: 310, 
    gems: 55, 
    desc: "闇に潜む古代の竜。装備を整えて挑もう。",
    introMsg: "Darkness will swallow you! (実体なき我が影を捉えられるか？迷宮で朽ち果てよ！)",
    defeatMsg: "My shadow faded... (影が消える...！破滅の双頭竜が貴様を引き裂くだろう！)"
  },
  { 
    lv: 7, 
    name: "破滅の双頭竜", 
    icon: "🐉", 
    hp: 36000, 
    atk: 265, 
    exp: 400, 
    gems: 68, 
    desc: "二つの頭を持つ凶暴な竜。素早さと会心が鍵！",
    introMsg: "Two heads, double destruction! (我ら双頭の猛攻に耐えられるか！一瞬で消し去ってやる！)",
    defeatMsg: "Both heads defeated...!? (二つの首が...！？ インフェルノの業火がお前を待っているぞ...！)"
  },
  { 
    lv: 8, 
    name: "インフェルノ・ドレイク", 
    icon: "🔥", 
    hp: 48000, 
    atk: 330, 
    exp: 500, 
    gems: 80, 
    desc: "灼熱の業火を纏う。上級装備が必須レベル！",
    introMsg: "I will incinerate everything! (すべてを灰にする絶対の業火！貴様の知識ごと燃やし尽くす！)",
    defeatMsg: "Such overwhelming power... (この炎を超えていくというのか...！終焉の闇が世界を包むぞ...！)"
  },
  { 
    lv: 9, 
    name: "終焉の暗黒竜", 
    icon: "⚡🐉", 
    hp: 62000, 
    atk: 400, 
    exp: 650, 
    gems: 100, 
    desc: "世界を闇に沈める竜。最高峰のステータスが必要！",
    introMsg: "The end of the world begins! (世界は終わる！最後の絶望を味わうがよい！)",
    defeatMsg: "Defeated at the end...!? (終焉が敗れるとは...！だが我が主、オメガエデン様が貴様を裁く！)"
  },
  { 
    lv: 10, 
    name: "覇天神龍・オメガエデン", 
    icon: "👑🐉✨", 
    hp: 80000, 
    atk: 500, 
    exp: 850, 
    gems: 150, 
    desc: "【表ラスボス】英検4級の頂点に君臨する神龍！",
    introMsg: "I am the supreme ruler! (我が名はオメガエデン！英検の頂点、その全てを賭けて挑んでくるがよい！)",
    defeatMsg: "Incredible... You are the true master! (見事だ...！貴様こそが真の英検マスターだ！)"
  },
  { 
    lv: 11, 
    name: "虚無を統べる終極神・ゼロインフィニティ", 
    icon: "🌌👁️⚡", 
    hp: 160000, 
    atk: 9999, 
    exp: 2000, 
    gems: 300, 
    desc: "【真・隠し裏ボス】Lv.100＆創世神装備＆全問クリティカルでのみ勝てる究極の神！", 
    isSecret: true,
    introMsg: "Everything returns to nothingness... (万物は虚無へ還る...。神話の装備を纏いし者よ、存在の限界を超えてみせよ！)",
    defeatMsg: "Light shines forever... You have conquered all dimensions! (虚無が...満たされた...。全次元の覇者よ、その栄光は永遠なり...！)"
  }
];

// ==================== 7. レベル10ごとの進化ツリー ====================
const AVATARS = [
  { minLv: 1, emoji: '🐣', rank: '見習いヒナ', name: 'タマゴン' },
  { minLv: 10, emoji: '🐥', rank: '見習いバード', name: 'ピヨード' },
  { minLv: 20, emoji: '🦅', rank: '飛翔のファルコン', name: 'スカイホーク' },
  { minLv: 30, emoji: '⚡', rank: '雷鳴のグリフォン', name: 'サンダービーク' },
  { minLv: 40, emoji: '🔥', rank: '炎翼のフェニックス', name: 'フレイムバード' },
  { minLv: 50, emoji: '🐻', rank: '聖獣グリズリー', name: 'アーマーベア' },
  { minLv: 60, emoji: '🦊', rank: '幻影の白狐', name: 'ミラージュフォックス' },
  { minLv: 70, emoji: '🦖', rank: '天空の神龍（幼体）', name: 'ベビーレックス' },
  { minLv: 80, emoji: '🐲', rank: '覇王の双頭ドラゴン', name: 'ツイン・ドラゴニクス' },
  { minLv: 90, emoji: '🦁', rank: '銀河の守護星獣', name: 'コズミック・キマイラ' },
  { minLv: 100, emoji: '👑🐉', rank: '究極英検マスター', name: 'オメガドラゴン' }
];
// ==================== 1. 必須単語・重要熟語 (厳密に全700語) ====================
const RAW_VOCAB_DATA = [
  // --- 熟語・連語・定型表現 (70語) ---
  ["listen to ~", "〜を聞く"], ["look for ~", "〜をさがす"], ["look at ~", "〜を見る"], ["look after ~", "〜の世話をする"],
  ["take care of ~", "〜の世話をする"], ["arrive at ~", "〜に到着する"], ["arrive in ~", "〜（大都市など）に到着する"],
  ["enjoy ~ing", "〜するのを楽しむ"], ["decide to ~", "〜しようと決める"], ["want to ~", "〜したい"], ["hope to ~", "〜することを望む"],
  ["be good at ~", "〜が得意である"], ["be interested in ~", "〜に興味がある"], ["look forward to ~", "〜を楽しみに待つ"],
  ["give up", "あきらめる"], ["at first", "最初は"], ["at last", "ついに、最後に"], ["in front of ~", "〜の前に"],
  ["a lot of ~", "たくさんの〜"], ["take a picture", "写真を撮る"], ["get up", "起きる"], ["go to bed", "寝る"],
  ["be late for ~", "〜に遅刻する"], ["take a walk", "散歩する"], ["catch a cold", "風邪をひく"], ["all over the world", "世界中で"],
  ["by the way", "ところで"], ["on foot", "徒歩で、歩いて"], ["turn on ~", "（電気など）をつける"], ["turn off ~", "（電気など）を消す"],
  ["pick up ~", "〜を拾い上げる、車で迎えに行く"], ["get on ~", "（電車やバス）に乗る"], ["get off ~", "（電車やバス）を降りる"],
  ["put on ~", "〜を着る、身につける"], ["take off ~", "〜を脱ぐ、（飛行機が）離陸する"], ["run away", "逃げる"],
  ["for example", "たとえば"], ["after school", "放課後に"], ["one day", "ある日"], ["these days", "最近では"],
  ["all day", "一日中"], ["once a week", "週に1回"], ["twice a month", "月に2回"], ["have a good time", "楽しい時を過ごす"],
  ["take part in ~", "〜に参加する"], ["come from ~", "〜の出身である"], ["grow up", "成長する、大人になる"],
  ["stay at ~", "〜に滞在する"], ["ask for ~", "〜を求める、頼む"], ["fall in love", "恋に落ちる"],
  ["a few ~", "少しの〜（数えられる名詞）"], ["a little ~", "少しの〜（数えられない名詞）"], ["lots of ~", "たくさんの〜"],
  ["be proud of ~", "〜を誇りに思う"], ["be fond of ~", "〜が好きである"], ["be different from ~", "〜と異なっている"],
  ["be famous for ~", "〜で有名である"], ["be afraid of ~", "〜を恐れる"], ["far away", "遠く離れて"],
  ["for a long time", "長い間"], ["from now on", "これからは"], ["in the future", "将来は"], ["right now", "今すぐ"],
  ["so far", "これまでのところ"], ["some day", "いつか"], ["out of ~", "〜の外へ"], ["over there", "あそこに"],
  ["such as ~", "〜のような"], ["all the time", "いつも"], ["at that time", "その時"], ["at home", "家で"],

  // --- 施設・場所・街 (40語) ---
  ["library", "図書館"], ["museum", "博物館・美術館"], ["airport", "空港"], ["hospital", "病院"], ["stadium", "競技場・スタジアム"],
  ["factory", "工場"], ["village", "村"], ["island", "島"], ["station", "駅"], ["temple", "寺・寺院"], ["shrine", "神社"],
  ["castle", "城"], ["bridge", "橋"], ["aquarium", "水族館"], ["amusement park", "遊園地"], ["hotel", "ホテル"],
  ["post office", "郵便局"], ["police station", "警察署"], ["bank", "銀行"], ["bakery", "パン屋"], ["pharmacy", "薬局"],
  ["harbor", "港"], ["theater", "劇場・映画館"], ["gym", "体育館"], ["pool", "プール"], ["park", "公園"], ["farm", "農場"],
  ["supermarket", "スーパーマーケット"], ["restaurant", "レストラン"], ["department store", "デパート"], ["church", "教会"],
  ["bookstore", "書店・本屋"], ["palace", "宮殿"], ["tower", "塔・タワー"], ["garden", "庭・庭園"], ["zoo", "動物園"],
  ["beach", "浜辺・ビーチ"], ["cafe", "喫茶店・カフェ"], ["office", "事務所・会社"], ["kitchen", "台所・キッチン"],

  // --- 学校・教科・文房具 (35語) ---
  ["subject", "教科・科目"], ["science", "理科・科学"], ["math", "数学"], ["history", "歴史"], ["geography", "地理"],
  ["music", "音楽"], ["art", "美術・芸術"], ["English", "英語"], ["Japanese", "国語・日本語"], ["P.E.", "体育"],
  ["uniform", "制服"], ["calendar", "カレンダー"], ["dictionary", "辞書"], ["textbook", "教科書"], ["eraser", "消しゴム"],
  ["ruler", "定規"], ["scissors", "はさみ"], ["notebook", "ノート"], ["blackboard", "黒板"], ["grade", "学年・成績"],
  ["semester", "学期"], ["exam", "試験"], ["homework", "宿題"], ["vacation", "休暇・休み"], ["holiday", "祝日・休日"],
  ["club", "部活動"], ["speech", "演説・スピーチ"], ["classmate", "同級生"], ["schedule", "予定・時間割"],
  ["classroom", "教室"], ["desk", "机"], ["chair", "椅子"], ["pencil", "鉛筆"], ["pen", "ペン"], ["chalk", "チョーク"],

  // --- 自然・天候・地理 (35語) ---
  ["weather", "天気"], ["future", "未来・将来"], ["season", "季節"], ["spring", "春"], ["summer", "夏"], ["autumn", "秋"], ["winter", "冬"],
  ["temperature", "気温・温度"], ["typhoon", "台風"], ["rainbow", "虹"], ["cloud", "雲"], ["wind", "風"], ["earth", "地球"],
  ["forest", "森"], ["river", "川"], ["lake", "湖"], ["ocean", "大洋・海"], ["mountain", "山"], ["waterfall", "滝"],
  ["sunrise", "日の出"], ["sunset", "日の入り"], ["sun", "太陽"], ["moon", "月"], ["star", "星"], ["sky", "空"],
  ["rain", "雨"], ["snow", "雪"], ["storm", "嵐"], ["flower", "花"], ["tree", "木"], ["leaf", "葉"],
  ["grass", "草"], ["ground", "地面"], ["hill", "丘"], ["stone", "石"],

  // --- 人物・職業・家族 (40語) ---
  ["cousin", "いとこ"], ["scientist", "科学者"], ["neighbor", "隣人・近所の人"], ["passenger", "乗客"], ["pilot", "操縦士"],
  ["flight attendant", "客室乗務員"], ["nurse", "看護師"], ["dentist", "歯科医"], ["firefighter", "消防士"], ["police officer", "警察官"],
  ["lawyer", "弁護士"], ["actor", "俳優"], ["actress", "女優"], ["musician", "音楽家"], ["artist", "芸術家・画家"],
  ["carpenter", "大工"], ["engineer", "技術者・エンジニア"], ["clerk", "店員・事務員"], ["customer", "客・顧客"], ["guest", "招待客"],
  ["grandparent", "祖父母"], ["grandfather", "祖父"], ["grandmother", "祖母"], ["relative", "親戚"], ["twins", "双子"],
  ["president", "大統領・社長"], ["manager", "責任者・支配人"], ["doctor", "医者・医師"], ["teacher", "教師・先生"],
  ["student", "生徒・学生"], ["singer", "歌手"], ["writer", "作家"], ["cook", "料理人・コック"], ["driver", "運転手"],
  ["parent", "親"], ["father", "父"], ["mother", "母"], ["brother", "兄・弟"], ["sister", "姉・妹"], ["uncle", "叔父・伯父"],

  // --- 一般名詞・概念 (35語) ---
  ["hobby", "趣味"], ["passport", "パスポート"], ["vegetable", "野菜"], ["instrument", "楽器・道具"], ["festival", "祭り"],
  ["invitation", "招待状"], ["tradition", "伝統"], ["medicine", "薬"], ["traffic", "交通・往来"], ["accident", "事故"],
  ["advice", "助言・アドバイス"], ["chance", "機会・好機"], ["custom", "習慣・風習"], ["danger", "危険"], ["experience", "経験"],
  ["garbage", "ごみ"], ["habit", "個人の癖・習慣"], ["health", "健康"], ["information", "情報"], ["message", "伝言"],
  ["opinion", "意見"], ["problem", "問題"], ["reason", "理由"], ["result", "結果"], ["secret", "秘密"],
  ["ticket", "切符・チケット"], ["present", "贈り物・プレゼント"], ["letter", "手紙・文字"], ["picture", "写真・絵"],
  ["camera", "カメラ"], ["guitar", "ギター"], ["piano", "ピアノ"], ["money", "お金"], ["dollar", "ドル"], ["price", "価格・値段"],

  // --- 基本動詞 (80語) ---
  ["invite", "招待する"], ["remember", "覚えている・思い出す"], ["borrow", "（無料で）借りる"], ["lend", "貸す"],
  ["receive", "受け取る"], ["prepare", "準備する"], ["introduce", "紹介する"], ["improve", "上達する・改善する"],
  ["happen", "（出来事が）起こる"], ["collect", "集める"], ["practice", "練習する"], ["protect", "保護する・守る"],
  ["discover", "発見する"], ["invent", "発明する"], ["destroy", "破壊する"], ["repair", "修理する"], ["explain", "説明する"],
  ["agree", "賛成する"], ["disagree", "反対する"], ["promise", "約束する"], ["refuse", "断る"], ["suggest", "提案する"],
  ["express", "表現する"], ["pollute", "汚染する"], ["recycle", "再利用する"], ["waste", "浪費する"], ["save", "節約する・救う"],
  ["choose", "選ぶ"], ["prefer", "〜の方を好む"], ["repeat", "繰り返す"], ["translate", "翻訳する"], ["graduate", "卒業する"],
  ["belong to", "〜に所属する"], ["depend on", "〜に頼る・依存する"], ["succeed", "成功する"], ["fail", "失敗する"],
  ["understand", "理解する・わかる"], ["believe", "信じる"], ["forget", "忘れる"], ["clean", "掃除する"], ["wash", "洗う"],
  ["cook", "料理する"], ["swim", "泳ぐ"], ["climb", "登る"], ["leave", "出発する・残す"], ["arrive", "到着する"],
  ["visit", "訪問する・訪れる"], ["travel", "旅行する"], ["walk", "歩く"], ["run", "走る"], ["jump", "跳ぶ・ジャンプする"],
  ["study", "勉強する"], ["learn", "学ぶ・習う"], ["teach", "教える"], ["speak", "話す"], ["talk", "話す・語る"],
  ["tell", "伝える・教える"], ["say", "言う"], ["ask", "尋ねる・頼む"], ["answer", "答える"], ["hear", "聞こえる・聞く"],
  ["watch", "じっと見る"], ["see", "見える・会う"], ["look", "見る"], ["read", "読む"], ["write", "書く"],
  ["buy", "買う"], ["sell", "売る"], ["pay", "支払う"], ["spend", "（時間やお金を）費やす"], ["send", "送る"],
  ["bring", "持ってくる"], ["take", "連れて行く・乗る"], ["carry", "運ぶ"], ["hold", "持つ・開催する"], ["catch", "捕まえる"],
  ["eat", "食べる"], ["drink", "飲む"], ["sleep", "眠る"], ["wake", "目を覚ます"],

  // --- 形容詞・副詞 (55語) ---
  ["excited", "わくわくした"], ["famous", "有名な"], ["delicious", "おいしい"], ["convenient", "便利な"], ["traditional", "伝統的な"],
  ["dangerous", "危険な"], ["popular", "人気のある"], ["comfortable", "快適な"], ["healthy", "健康的な"], ["important", "重要な"],
  ["special", "特別な"], ["necessary", "必要な"], ["polite", "礼儀正しい"], ["impolite", "無礼な"], ["careful", "注意深い"],
  ["careless", "不注意な"], ["curious", "好奇心が強い"], ["nervous", "緊張した・不安な"], ["patient", "我慢強い"], ["honest", "正直な"],
  ["brave", "勇敢な"], ["clever", "賢い"], ["crowded", "混雑した"], ["peaceful", "平和な"], ["valuable", "貴重な・高価な"],
  ["foreign", "外国の"], ["ancient", "古代の"], ["modern", "現代の"], ["local", "地元の"], ["international", "国際的な"],
  ["finally", "ついに・最後に"], ["suddenly", "突然に"], ["especially", "特に"], ["probably", "おそらく・たぶん"], ["certainly", "確かに・その通り"],
  ["actually", "実際に・実は"], ["immediately", "直ちに・すぐに"], ["hardly", "ほとんど〜ない"], ["nearly", "ほぼ・もう少しで"], ["quietly", "静かに"],
  ["loudly", "大声で"], ["slowly", "ゆっくりと"], ["quickly", "素早く"], ["easily", "簡単に"], ["happily", "幸せそうに"],
  ["early", "早く"], ["late", "遅く・遅れて"], ["soon", "すぐに・まもなく"], ["already", "すでに"], ["yet", "まだ・もう"],
  ["always", "いつも・常に"], ["usually", "たいてい・普段は"], ["often", "よく・しばしば"], ["sometimes", "時々"], ["never", "決して〜ない"],

  // --- 食べ物・飲み物 (35語) ---
  ["apple", "りんご"], ["banana", "バナナ"], ["orange", "オレンジ"], ["grape", "ぶどう"], ["peach", "桃"], ["melon", "メロン"],
  ["strawberry", "いちご"], ["carrot", "にんじん"], ["potato", "じゃがいも"], ["tomato", "トマト"], ["onion", "たまねぎ"],
  ["beef", "牛肉"], ["pork", "豚肉"], ["chicken", "鶏肉"], ["fish", "魚"], ["egg", "卵"], ["bread", "パン"], ["rice", "米・ご飯"],
  ["soup", "スープ"], ["salad", "サラダ"], ["sandwich", "サンドイッチ"], ["pizza", "ピザ"], ["cake", "ケーキ"], ["cookie", "クッキー"],
  ["chocolate", "チョコレート"], ["ice cream", "アイスクリーム"], ["water", "水"], ["tea", "お茶・紅茶"], ["coffee", "コーヒー"],
  ["milk", "牛乳・ミルク"], ["juice", "ジュース"], ["butter", "バター"], ["cheese", "チーズ"], ["sugar", "砂糖"], ["salt", "塩"],

  // --- 動物・生き物 (25語) ---
  ["dog", "犬"], ["cat", "猫"], ["bird", "鳥"], ["rabbit", "うさぎ"], ["hamster", "ハムスター"], ["bear", "くま"], ["lion", "ライオン"],
  ["tiger", "トラ"], ["elephant", "ゾウ"], ["giraffe", "キリン"], ["monkey", "猿"], ["panda", "パンダ"], ["koala", "コアラ"],
  ["horse", "馬"], ["cow", "牛"], ["pig", "豚"], ["sheep", "羊"], ["duck", "アヒル・カモ"], ["penguin", "ペンギン"], ["whale", "クジラ"],
  ["dolphin", "イルカ"], ["shark", "サメ"], ["snake", "ヘビ"], ["frog", "カエル"], ["insect", "昆虫・虫"],

  // --- 乗り物・交通 (15語) ---
  ["car", "車・自動車"], ["bus", "バス"], ["train", "電車・列車"], ["bicycle", "自転車"], ["bike", "自転車・バイク"], ["airplane", "飛行機"],
  ["ship", "船"], ["boat", "ボート・小舟"], ["taxi", "タクシー"], ["truck", "トラック"], ["subway", "地下鉄"],
  ["rocket", "ロケット"], ["road", "道路・道"], ["street", "通り・街路"], ["map", "地図"],

  // --- 年月日・時間 (35語) ---
  ["January", "1月"], ["February", "2月"], ["March", "3月"], ["April", "4月"], ["May", "5月"], ["June", "6月"],
  ["July", "7月"], ["August", "8月"], ["September", "9月"], ["October", "10月"], ["November", "11月"], ["December", "12月"],
  ["Sunday", "日曜日"], ["Monday", "月曜日"], ["Tuesday", "火曜日"], ["Wednesday", "水曜日"], ["Thursday", "木曜日"], ["Friday", "金曜日"], ["Saturday", "土曜日"],
  ["morning", "朝・午前"], ["afternoon", "昼・午後"], ["evening", "夕方・晩"], ["night", "夜"], ["today", "今日"], ["tomorrow", "明日"], ["yesterday", "昨日"],
  ["week", "週"], ["month", "月"], ["year", "年"], ["hour", "時間"], ["minute", "分"], ["second", "秒"], ["clock", "時計"], ["watch", "腕時計"], ["midnight", "真夜中"],

  // --- 身体・健康・感情 (35語) ---
  ["head", "頭"], ["face", "顔"], ["eye", "目"], ["ear", "耳"], ["nose", "鼻"],
  ["mouth", "口"], ["tooth", "歯"], ["teeth", "歯（複数）"], ["hair", "髪・毛"], ["neck", "首"],
  ["shoulder", "肩"], ["arm", "腕"], ["hand", "手"], ["finger", "指"], ["leg", "脚"],
  ["foot", "足"], ["feet", "足（複数）"], ["knee", "膝"], ["body", "体・身体"], ["heart", "心・心臓"],
  ["fever", "熱・高熱"], ["headache", "頭痛"], ["stomachache", "腹痛・胃痛"], ["pain", "痛み"], ["voice", "声"],
  ["feeling", "気持ち・感情"], ["smile", "笑顔・ほほえみ"], ["laugh", "笑う・笑い"], ["cry", "泣く・叫ぶ"], ["shout", "叫ぶ・大声を出す"],
  ["worry", "心配する"], ["surprise", "驚かせる・驚き"], ["touch", "触る・触れる"], ["smell", "においをかぐ・におい"], ["taste", "味わう・味"],

  // --- 衣類・身の回り日用品 (30語) ---
  ["clothes", "服・衣服"], ["shirt", "シャツ"], ["T-shirt", "Tシャツ"], ["sweater", "セーター"], ["jacket", "上着・ジャケット"],
  ["coat", "コート"], ["pants", "ズボン・パンツ"], ["jeans", "ジーンズ"], ["skirt", "スカート"], ["dress", "ドレス・ワンピース"],
  ["suit", "スーツ"], ["shoes", "靴"], ["boots", "ブーツ"], ["sneakers", "スニーカー"], ["socks", "靴下"],
  ["hat", "帽子（つば付き）"], ["cap", "帽子（キャップ）"], ["gloves", "手袋"], ["bag", "かばん・バッグ"], ["pocket", "ポケット"],
  ["belt", "ベルト"], ["ring", "指輪"], ["glasses", "めがね"], ["umbrella", "傘"], ["towel", "タオル"],
  ["soap", "石鹸"], ["box", "箱"], ["bottle", "瓶・ボトル"], ["cup", "カップ・湯飲み"], ["glass", "コップ・ガラス"],

  // --- 家・部屋・家具 (30語) ---
  ["house", "家・住宅"], ["home", "家庭・我が家"], ["room", "部屋"], ["door", "ドア・扉"], ["window", "窓"],
  ["floor", "床・階"], ["wall", "壁"], ["roof", "屋根"], ["bed", "ベッド"], ["table", "テーブル・食卓"],
  ["living room", "居間・リビング"], ["bedroom", "寝室"], ["bathroom", "浴室・トイレ"], ["dining room", "食堂・ダイニング"], ["balcony", "バルコニー・ベランダ"],
  ["stairs", "階段"], ["gate", "門・ゲート"], ["fence", "フェンス・柵"], ["mirror", "鏡"], ["curtain", "カーテン"],
  ["cushion", "クッション"], ["trash can", "ごみ箱"], ["shelf", "棚・本棚"], ["sofa", "ソファ"], ["refrigerator", "冷蔵庫"],
  ["oven", "オーブン"], ["sink", "流し台・シンク"], ["key", "鍵・キー"], ["yard", "庭・中庭"], ["garage", "車庫・ガレージ"],

  // --- スポーツ・趣味・娯楽 (30語) ---
  ["sports", "スポーツ"], ["game", "試合・ゲーム"], ["player", "選手・競技者"], ["team", "チーム"], ["captain", "キャプテン・主将"],
  ["soccer", "サッカー"], ["baseball", "野球"], ["basketball", "バスケットボール"], ["tennis", "テニス"], ["volleyball", "バレーボール"],
  ["swimming", "水泳"], ["running", "ランニング・走ること"], ["skiing", "スキー"], ["skating", "スケート"], ["fishing", "釣り"],
  ["camping", "キャンプ"], ["hiking", "ハイキング"], ["picnic", "ピクニック"], ["party", "パーティー"], ["concert", "コンサート・演奏会"],
  ["movie", "映画"], ["cinema", "映画館"], ["song", "歌・楽曲"], ["dance", "ダンス・踊り"], ["drama", "演劇・ドラマ"],
  ["cartoon", "アニメ・漫画"], ["comic", "漫画・コミック本"], ["card", "カード・トランプ"], ["toy", "おもちゃ・玩具"], ["prize", "賞・賞品"],

  // --- 会話・連語表現 (35語) ---
  ["excuse me", "すみません・失礼します"], ["I'm sorry", "ごめんなさい"], ["you're welcome", "どういたしまして"], ["of course", "もちろん"], ["good luck", "幸運を祈る・頑張って"],
  ["congratulations", "おめでとう"], ["see you", "またね・さようなら"], ["take care", "気をつけて・お大事に"], ["have fun", "楽しんでね"], ["I see", "なるほど・わかりました"],
  ["pardon me", "もう一度おっしゃってください"], ["how much", "いくら・どのくらいの量"], ["how many", "いくつ・何人の"], ["how long", "どのくらいの長さ・期間"], ["how often", "どのくらいの頻度で・何回"],
  ["how about ~", "〜はどうですか"], ["why not", "なぜだめなのか・ぜひそうしよう"], ["all right", "了解・大丈夫"], ["no problem", "問題ない・どういたしまして"], ["not yet", "まだです"],
  ["just a minute", "少々お待ちください"], ["hold on", "（電話を）切らずに待つ"], ["over here", "こちらへ・ここに"], ["far from ~", "〜から遠い"], ["next to ~", "〜の隣に"],
  ["close to ~", "〜の近くに"], ["between A and B", "AとBの間に"], ["together with ~", "〜と一緒に"], ["by myself", "自分一人で・独力で"], ["in this way", "このようにして"],
  ["first of all", "まず第一に"], ["more and more", "ますます多くの"], ["again and again", "何度も何度も"], ["little by little", "少しずつ・徐々に"], ["side by side", "並んで・肩を並べて"],

  // --- 重要動詞・形容詞・名詞 (40語) 計700語 ---
  ["hope", "希望する・望む"], ["wish", "願う・祈る"], ["show", "見せる・示す"], ["point", "指差す・点"], ["draw", "（線で）描く・引く"],
  ["paint", "（絵の具で）描く・塗る"], ["sing", "歌う"], ["pass", "手渡す・合格する"], ["cross", "渡る・横断する"], ["follow", "従う・ついていく"],
  ["lead", "導く・案内する"], ["guide", "案内する・ガイド"], ["drop", "落とす・落ちる"], ["bright", "明るい・輝く"], ["dark", "暗い・濃い"],
  ["heavy", "重い"], ["light", "軽い・光"], ["soft", "柔らかい・穏やかな"], ["hard", "硬い・一生懸命な"], ["rich", "裕福な・豊かな"],
  ["poor", "貧しい・かわいそうな"], ["strong", "強い・丈夫な"], ["weak", "弱い"], ["warm", "暖かい"], ["cool", "涼しい・かっこいい"],
  ["dry", "乾いた・乾燥した"], ["wet", "濡れた・湿った"], ["safe", "安全な"], ["deep", "深い"], ["shallow", "浅い"],
  ["wild", "野生の・自然の"], ["stationery", "文房具"], ["envelope", "封筒"], ["postcard", "はがき"], ["stamp", "切手"],
  ["address", "住所"], ["diary", "日記"], ["story", "物語・お話"], ["newspaper", "新聞"], ["magazine", "雑誌"]
];
// ==================== 2. 文法・会話 100問 完全データベース ====================
const RAW_GRAMMAR_DATA = [
  { q: "I ( ) to the park yesterday.", sub: "【訳】私は昨日、公園に行きました。", opt: ["go", "went", "going", "goes"], ans: 1, exp: "yesterday（昨日）があるので過去形の went を使います。" },
  { q: "My father ( ) a new car last week.", sub: "【訳】私の父は先週、新しい車を買いました。", opt: ["buy", "buys", "bought", "buying"], ans: 2, exp: "buy の過去形は不規則変化の bought です。" },
  { q: "She ( ) an interesting movie last night.", sub: "【訳】彼女は昨夜、面白い映画を見ました。", opt: ["see", "saw", "seen", "sees"], ans: 1, exp: "see の過去形は saw です。" },
  { q: "We ( ) lunch together two hours ago.", sub: "【訳】私たちは2時間前、一緒に昼食を食べました。", opt: ["eat", "ate", "eaten", "eating"], ans: 1, exp: "eat の過去形は ate です。" },
  { q: "He ( ) a letter to his grandmother last Sunday.", sub: "【訳】彼はこの前の日曜日、祖母に手紙を書きました。", opt: ["write", "wrote", "written", "writing"], ans: 1, exp: "write の過去形は wrote です。" },
  { q: "They ( ) home late last night.", sub: "【訳】彼らは昨夜遅くに帰宅しました。", opt: ["come", "came", "coming", "comes"], ans: 1, exp: "come の過去形は came です。" },
  { q: "I ( ) my homework before dinner yesterday.", sub: "【訳】私は昨日、夕食前に宿題をしました。", opt: ["do", "did", "done", "doing"], ans: 1, exp: "do の過去形は did です。" },
  { q: "She ( ) her keys this morning.", sub: "【訳】彼女は今朝、鍵を見つけました。", opt: ["find", "found", "finding", "finds"], ans: 1, exp: "find の過去形は found です。" },
  { q: "We ( ) English hard for the test.", sub: "【訳】私たちはテストのために一生懸命英語を勉強しました。", opt: ["study", "studied", "studying", "studies"], ans: 1, exp: "study の過去形は y を i に変えて studied です。" },
  { q: "He ( ) soccer with his friends last Friday.", sub: "【訳】彼はこの前の金曜日、友達とサッカーをしました。", opt: ["play", "played", "playing", "plays"], ans: 1, exp: "play の過去形は規則変化の played です。" },

  { q: "We will ( ) soccer tomorrow afternoon.", sub: "【訳】私たちは明日の午後、サッカーをする予定です。", opt: ["play", "played", "playing", "plays"], ans: 0, exp: "助動詞 will の後は常に「動詞の原形」がきます。" },
  { q: "I am going to ( ) Kyoto next weekend.", sub: "【訳】私は来週末、京都を訪れる予定です。", opt: ["visit", "visited", "visiting", "visits"], ans: 0, exp: "be going to の後も「動詞の原形」を使います。" },
  { q: "They were ( ) TV when I called them.", sub: "【訳】私が電話した時、彼らはテレビを見ていました。", opt: ["watch", "watched", "watching", "watches"], ans: 2, exp: "過去進行形は was / were + 動詞のing形 です。" },
  { q: "Look! The baby is ( ) in the bed.", sub: "【訳】見て！赤ちゃんがベッドで眠っています。", opt: ["sleep", "slept", "sleeping", "sleeps"], ans: 2, exp: "現在進行形は is / am / are + 動詞のing形 です。" },
  { q: "What ( ) you doing at eight last night?", sub: "【訳】昨夜8時にあなたは何をしていましたか？", opt: ["were", "did", "are", "do"], ans: 0, exp: "過去のその時点でしていたことを聞くので were you doing となります。" },
  { q: "Is Ken ( ) a book in his room now?", sub: "【訳】ケンは今、部屋で本を読んでいますか？", opt: ["read", "reads", "reading", "readed"], ans: 2, exp: "now（今）があり、Is で始まっているので現在進行形 reading です。" },
  { q: "We ( ) not playing tennis then.", sub: "【訳】私たちはその時、テニスをしていませんでした。", opt: ["was", "were", "are", "did"], ans: 1, exp: "主語が We で過去進行形の否定文なので were not です。" },
  { q: "Are you ( ) to leave for school soon?", sub: "【訳】あなたはもうすぐ学校に出発する予定ですか？", opt: ["go", "goes", "went", "going"], ans: 3, exp: "be going to の疑問文なので going です。" },
  { q: "She will not ( ) here next Monday.", sub: "【訳】彼女は来週の月曜日にここに来ないでしょう。", opt: ["come", "came", "coming", "comes"], ans: 0, exp: "助動詞 will not の後は「動詞の原形」です。" },
  { q: "What time are you going to ( ) dinner tonight?", sub: "【訳】今夜は何時に夕食を食べる予定ですか？", opt: ["have", "had", "having", "has"], ans: 0, exp: "be going to の後は動詞の原形 have を使います。" },

  { q: "You ( ) wash your hands before eating.", sub: "【訳】食べる前に手を洗わなければなりません。", opt: ["must", "may", "can", "shall"], ans: 0, exp: "must は「〜しなければならない」という強い義務を表します。" },
  { q: "A: ( ) I use your dictionary?\nB: Sure, go ahead.", sub: "【訳】A: 辞書を使ってもいいですか？\nB: もちろん、どうぞ。", opt: ["May", "Must", "Should", "Will"], ans: 0, exp: "May I ~? で「〜してもよいですか？」という丁寧な許可求めになります。" },
  { q: "You ( ) eat too much sweet food.", sub: "【訳】甘い食べ物を食べ過ぎるべきではありません。", opt: ["should not", "must", "may", "can"], ans: 0, exp: "should not で「〜すべきではない」という忠告を表します。" },
  { q: "I ( ) swim across this river when I was young.", sub: "【訳】私は若い頃、この川を泳いで渡ることができました。", opt: ["could", "must", "may", "should"], ans: 0, exp: "can の過去形 could で「〜することができた」を表します。" },
  { q: "We have to ( ) early tomorrow morning.", sub: "【訳】私たちは明日、早起きしなければなりません。", opt: ["get up", "got up", "getting up", "gets up"], ans: 0, exp: "have to（〜しなければならない）の後は「動詞の原形」がきます。" },
  { q: "He ( ) to clean his room today.", sub: "【訳】彼は今日、部屋を掃除しなければなりません。", opt: ["have", "has", "had", "having"], ans: 1, exp: "主語が三人称単数（He）なので has to になります。" },
  { q: "You don't ( ) to go there today.", sub: "【訳】あなたは今日、そこへ行く必要はありません。", opt: ["must", "have", "need", "should"], ans: 1, exp: "don't have to で「〜する必要はない」という意味です。" },
  { q: "A: ( ) you open the window, please?\nB: All right.", sub: "【訳】A: 窓を開けてくれますか？\nB: いいですよ。", opt: ["Could", "Must", "Should", "May"], ans: 0, exp: "Could you ~? で「〜してくれますか？」という依頼になります。" },
  { q: "Shall we ( ) lunch together?", sub: "【訳】一緒に昼食を食べませんか？", opt: ["eat", "ate", "eating", "eats"], ans: 0, exp: "Shall we ~?（〜しましょうか）の後は「動詞の原形」です。" },
  { q: "You ( ) be quiet in the library.", sub: "【訳】図書館では静かにしなければなりません。", opt: ["must", "can", "may", "shall"], ans: 0, exp: "義務・ルールを表す must が適切です。" },

  { q: "I want ( ) a professional soccer player.", sub: "【訳】私は将来プロサッカー選手になりたいです。", opt: ["become", "became", "to become", "becoming"], ans: 2, exp: "want to + 動詞の原形で「〜になりたい」を表します。" },
  { q: "She decided ( ) abroad next year.", sub: "【訳】彼女は来年、留学することを決めました。", opt: ["study", "studied", "to study", "studying"], ans: 2, exp: "decide to + 原形で「〜することを決める」という意味です。" },
  { q: "He went to the station ( ) his friend.", sub: "【訳】彼は友達に会うために駅に行きました。", opt: ["meet", "met", "to meet", "meeting"], ans: 2, exp: "to + 原形で「〜するために」という目的（副詞的用法）を表します。" },
  { q: "I have a lot of homework ( ) today.", sub: "【訳】私には今日、やるべきたくさんの宿題があります。", opt: ["do", "did", "to do", "doing"], ans: 2, exp: "名詞 homework を後ろから修飾する不定詞 to do（形容詞的用法）です。" },
  { q: "It is important ( ) English every day.", sub: "【訳】毎日英語を勉強することは大切です。", opt: ["study", "studied", "to study", "studying"], ans: 2, exp: "It is ... to 〜 の構文で「〜することは…だ」を表します。" },
  { q: "I was very glad ( ) your letter.", sub: "【訳】あなたからの手紙を受け取ってとても嬉しかったです。", opt: ["receive", "to receive", "receiving", "received"], ans: 1, exp: "感情の原因を表す不定詞 to receive です。" },
  { q: "She went to the library ( ) some books.", sub: "【訳】彼女は本を借りるために図書館へ行きました。", opt: ["borrow", "to borrow", "borrowing", "borrowed"], ans: 1, exp: "目的を表す不定詞 to borrow です。" },
  { q: "I hope ( ) you again soon.", sub: "【訳】またすぐにお会いできることを望んでいます。", opt: ["see", "saw", "to see", "seeing"], ans: 2, exp: "hope to + 原形で「〜することを望む」です。" },
  { q: "He is learning ( ) the piano.", sub: "【訳】彼はピアノの弾き方を習っています。", opt: ["how to play", "playing", "played", "how play"], ans: 0, exp: "how to + 原形で「〜のやり方・弾き方」を表します。" },
  { q: "They began ( ) baseball after school.", sub: "【訳】彼らは放課後に野球を始めました。", opt: ["play", "to play", "played", "plays"], ans: 1, exp: "begin to + 原形で「〜し始める」です。" },

  { q: "Thank you for ( ) me with my homework.", sub: "【訳】宿題を手伝ってくれてありがとう。", opt: ["help", "helped", "helping", "to help"], ans: 2, exp: "前置詞 for の直後には動名詞 (〜ing) を使います。" },
  { q: "Stop ( ) so loudly in the library.", sub: "【訳】図書館の中でそんなに大声で話すのをやめなさい。", opt: ["talk", "talked", "talking", "to talk"], ans: 2, exp: "stop 〜ing で「〜するのをやめる」という意味になります。" },
  { q: "I enjoyed ( ) with my friends yesterday.", sub: "【訳】私は昨日、友達と泳ぐのを楽しみました。", opt: ["swim", "swimming", "swam", "to swim"], ans: 1, exp: "enjoy の目的語は動名詞（〜ing）になります。" },
  { q: "He finished ( ) his room before dinner.", sub: "【訳】彼は夕食前に部屋の掃除を終えました。", opt: ["clean", "cleaned", "cleaning", "to clean"], ans: 2, exp: "finish の後ろも動名詞（cleaning）を使います。" },
  { q: "How about ( ) soccer this afternoon?", sub: "【訳】今日の午後、サッカーをするのはどうですか？", opt: ["play", "played", "playing", "to play"], ans: 2, exp: "How about 〜ing? で「〜するのはどうですか？」という提案です。" },
  { q: "She is good at ( ) pictures.", sub: "【訳】彼女は絵を描くのが得意です。", opt: ["paint", "painted", "painting", "to paint"], ans: 2, exp: "be good at（〜が得意）の前置詞 at の後ろは動名詞です。" },
  { q: "I am looking forward to ( ) you next week.", sub: "【訳】来週あなたに会うのを楽しみにしています。", opt: ["see", "saw", "seeing", "to see"], ans: 2, exp: "look forward to の to は前置詞なので動名詞 seeing が正解です。" },
  { q: "He gave up ( ) the mountain because of rain.", sub: "【訳】彼は雨のため、山に登るのをあきらめました。", opt: ["climb", "climbing", "climbed", "to climb"], ans: 1, exp: "give up の後ろは動名詞 climbing です。" },
  { q: "( ) books is very interesting.", sub: "【訳】本を読むことはとても面白いです。", opt: ["Read", "Reads", "Reading", "Readed"], ans: 2, exp: "文の主語になる動名詞 Reading（読むこと）です。" },
  { q: "Thank you for ( ) to my birthday party.", sub: "【訳】私の誕生日パーティーに来てくれてありがとう。", opt: ["come", "came", "coming", "to come"], ans: 2, exp: "前置詞 for の後は動名詞 coming です。" },

  { q: "Ken is ( ) than Tom.", sub: "【訳】ケンはトムよりも背が高いです。", opt: ["tall", "taller", "tallest", "more tall"], ans: 1, exp: "than（〜より）があるので比較級の taller が正解です。" },
  { q: "Mount Fuji is the ( ) mountain in Japan.", sub: "【訳】富士山は日本で最も高い山です。", opt: ["high", "higher", "highest", "most high"], ans: 2, exp: "the + 最上級 (highest) で「最も高い」を表します。" },
  { q: "This comic is as ( ) as that movie.", sub: "【訳】この漫画はその映画と同じくらい面白いです。", opt: ["interesting", "more interesting", "most interesting", "interestingly"], ans: 0, exp: "as 〜 as の間には「原級」が入ります。" },
  { q: "English is ( ) difficult than Japanese for him.", sub: "【訳】彼にとって英語は日本語よりも難しいです。", opt: ["more", "most", "much", "very"], ans: 0, exp: "than があり長い形容詞 difficult なので more difficult です。" },
  { q: "This is the ( ) popular song in Japan now.", sub: "【訳】これは今、日本で最も人気のある歌です。", opt: ["more", "most", "much", "very"], ans: 1, exp: "the + most + 形容詞で最上級「最も〜」を表します。" },
  { q: "Summer is ( ) than winter.", sub: "【訳】夏は冬よりも暑いです。", opt: ["hot", "hotter", "hottest", "more hot"], ans: 1, exp: "hot の比較級は t を重ねて hotter です。" },
  { q: "Which is ( ), this dog or that cat?", sub: "【訳】この犬とあの猫では、どちらが大きいですか？", opt: ["big", "bigger", "biggest", "more big"], ans: 1, exp: "2つを比べる時は比較級 bigger を使います。" },
  { q: "Who runs the ( ) in your class?", sub: "【訳】あなたのクラスで誰が一番速く走りますか？", opt: ["fast", "faster", "fastest", "more fast"], ans: 2, exp: "クラス全体の中で一番なので最上級 fastest です。" },
  { q: "Ken is as ( ) as his brother.", sub: "【訳】ケンは兄（弟）と同じくらい背が高いです。", opt: ["tall", "taller", "tallest", "more tall"], ans: 0, exp: "as と as の間は原級 tall です。" },
  { q: "Math is ( ) than history for me.", sub: "【訳】私にとって数学は歴史よりも簡単です。", opt: ["easy", "easier", "easiest", "more easy"], ans: 1, exp: "easy の比較級は y を i に変えて easier です。" },

  { q: "I stayed at home yesterday ( ) it rained.", sub: "【訳】昨日は雨が降ったので、私は家にいました。", opt: ["because", "so", "but", "if"], ans: 0, exp: "理由を表す接続詞 because（〜だから）が正解です。" },
  { q: "( ) you are free tomorrow, let's go shopping.", sub: "【訳】もし明日暇なら、買い物に行きましょう。", opt: ["If", "When", "Because", "Before"], ans: 0, exp: "条件を表す If（もし〜なら）です。" },
  { q: "I was sleeping ( ) you called me.", sub: "【訳】あなたが電話をくれた時、私は眠っていました。", opt: ["when", "if", "because", "after"], ans: 0, exp: "時を表す when（〜した時）です。" },
  { q: "Wash your hands ( ) you eat dinner.", sub: "【訳】夕食を食べる前に手を洗いなさい。", opt: ["before", "after", "while", "during"], ans: 0, exp: "「〜する前に」を表す接続詞 before です。" },
  { q: "I know ( ) he is a famous soccer player.", sub: "【訳】私は彼が有名なサッカー選手であることを知っています。", opt: ["that", "which", "what", "who"], ans: 0, exp: "「〜ということ」を導く接続詞 that です。" },
  { q: "She was tired, ( ) she went to bed early.", sub: "【訳】彼女は疲れていたので、早く寝ました。", opt: ["so", "because", "if", "when"], ans: 0, exp: "「だから・それで」を表す接続詞 so です。" },
  { q: "He studied hard, ( ) he couldn't pass the exam.", sub: "【訳】彼は一生懸命勉強したが、試験に受かりませんでした。", opt: ["but", "so", "and", "or"], ans: 0, exp: "逆接を表す but（しかし）です。" },
  { q: "Brush your teeth ( ) you go to bed.", sub: "【訳】寝る前に歯を磨きなさい。", opt: ["before", "after", "when", "if"], ans: 0, exp: "「〜の前に」を表す before です。" },
  { q: "I will call you ( ) I arrive at the station.", sub: "【訳】駅に着いたらあなたに電話します。", opt: ["when", "because", "before", "so"], ans: 0, exp: "「〜する時」を表す when です。" },
  { q: "He thinks ( ) Japanese food is delicious.", sub: "【訳】彼は日本食はおいしいと思っています。", opt: ["that", "what", "which", "how"], ans: 0, exp: "接続詞の that です。" },

  { q: "A: ( ) is your birthday?\nB: It is May 5th.", sub: "【訳】A: あなたの誕生日はいつですか？\nB: 5月5日です。", opt: ["Where", "Who", "When", "What"], ans: 2, exp: "日付（いつ）を聞いているので When が正解です。" },
  { q: "A: ( ) notebook is this?\nB: It is mine.", sub: "【訳】A: これはだれのノートですか？\nB: 私のものです。", opt: ["Whose", "Which", "Who", "Where"], ans: 0, exp: "「だれの〜」を聞くときは Whose を使います。" },
  { q: "A: ( ) do you go to school?\nB: By bus.", sub: "【訳】A: どうやって通学していますか？\nB: バスです。", opt: ["How", "Why", "When", "Where"], ans: 0, exp: "手段・方法を聞くときは How を使います。" },
  { q: "A: ( ) are you late?\nB: Because I missed the bus.", sub: "【訳】A: なぜ遅刻したのですか？\nB: バスに乗り遅れたからです。", opt: ["Why", "How", "When", "What"], ans: 0, exp: "理由を聞くときは Why を使います。" },
  { q: "There ( ) three apples on the table.", sub: "【訳】テーブルの上にリンゴが3個あります。", opt: ["is", "are", "was", "be"], ans: 1, exp: "後ろに複数の three apples があるので are です。" },
  { q: "There ( ) a big park near my house.", sub: "【訳】私の家の近くに大きな公園があります。", opt: ["is", "are", "were", "be"], ans: 0, exp: "単数の a big park なので is です。" },
  { q: "A: ( ) books do you have?\nB: I have about twenty.", sub: "【訳】A: 何冊の本を持っていますか？\nB: 約20冊持っています。", opt: ["How many", "How much", "How long", "How often"], ans: 0, exp: "数を聞くときは How many です。" },
  { q: "A: ( ) is this jacket?\nB: It is fifty dollars.", sub: "【訳】A: この上着はいくらですか？\nB: 50ドルです。", opt: ["How much", "How many", "How old", "How tall"], ans: 0, exp: "値段を聞くときは How much です。" },
  { q: "A: ( ) season do you like best?\nB: I like spring.", sub: "【訳】A: どの季節が一番好きですか？\nB: 春が好きです。", opt: ["Which", "Whose", "Who", "Where"], ans: 0, exp: "選択肢の中から選ぶ時は Which（どちら・どの）を使います。" },
  { q: "( ) there any students in the classroom?", sub: "【訳】教室の中に生徒はいますか？", opt: ["Are", "Is", "Do", "Does"], ans: 0, exp: "複数形 students なので Are there ~? になります。" },

  { q: "My father ( ) me a new watch yesterday.", sub: "【訳】父は昨日、私に新しい腕時計をくれました。", opt: ["gave", "gives", "give", "giving"], ans: 0, exp: "「人にものをあげる」give 人 もの の過去形 gave です。" },
  { q: "Please ( ) me your new pictures.", sub: "【訳】私にあなたの新しい写真を見せてください。", opt: ["show", "shows", "showed", "showing"], ans: 0, exp: "命令文かつ show 人 もの の原形 show です。" },
  { q: "You look ( ) today. Are you OK?", sub: "【訳】今日は疲れているように見えますね。大丈夫ですか？", opt: ["tired", "tiring", "tire", "tiredly"], ans: 0, exp: "look + 形容詞で「〜に見える」を表します。" },
  { q: "This flower smells very ( ).", sub: "【訳】この花はとてもいい匂いがします。", opt: ["sweet", "sweetly", "sweetness", "sweets"], ans: 0, exp: "smell + 形容詞で「〜な匂いがする」です。" },
  { q: "The news made everyone ( ).", sub: "【訳】その知らせはみんなを幸せにしました。", opt: ["happy", "happily", "happiness", "happier"], ans: 0, exp: "make + 人 + 形容詞で「人を〜にする」です。" },
  { q: "Could you tell ( ) the way to the station?", sub: "【訳】駅への道を教えていただけますか？", opt: ["me", "I", "my", "mine"], ans: 0, exp: "tell 人 もの なので目的格 me です。" },
  { q: "He asked me ( ) him with his work.", sub: "【訳】彼は私に仕事を手伝ってくれるよう頼みました。", opt: ["to help", "help", "helping", "helped"], ans: 0, exp: "ask 人 to + 原形で「人に〜するよう頼む」です。" },
  { q: "My mother told me ( ) clean my room.", sub: "【訳】母は私に部屋を掃除するように言いました。", opt: ["to", "for", "with", "at"], ans: 0, exp: "tell 人 to + 原形で「人に〜するよう言う」です。" },
  { q: "This soup tastes ( ).", sub: "【訳】このスープはおいしい味がします。", opt: ["delicious", "deliciously", "goodness", "well"], ans: 0, exp: "taste + 形容詞で「〜の味がする」です。" },
  { q: "She bought ( ) sister a cute doll.", sub: "【訳】彼女は妹に可愛い人形を買ってあげました。", opt: ["her", "she", "hers", "herself"], ans: 0, exp: "buy 人 もの なので her sister です。" },

  { q: "A: Would you like another cup of tea?\nB: ( ), I'm full.", sub: "【訳】A: お茶をもう一杯いかがですか？\nB: いいえ、結構です。お腹いっぱいです。", opt: ["No, thank you", "Yes, please", "Here you are", "You are welcome"], ans: 0, exp: "丁寧な断りは No, thank you です。" },
  { q: "A: May I speak to Ken, please?\nB: ( ). I'll get him.", sub: "【訳】A: ケンはいらっしゃいますか？\nB: 少々お待ちください。呼んできます。", opt: ["Hold on, please", "Of course not", "Nice to meet you", "See you later"], ans: 0, exp: "電話での「少々お待ちください」は Hold on, please. です。" },
  { q: "A: How about going to the movies?\nB: ( ). Let's go!", sub: "【訳】A: 映画に行くのはどう？\nB: いいね！行こう！", opt: ["Sounds great", "I don't think so", "You're welcome", "I'm sorry"], ans: 0, exp: "提案に賛成する時は Sounds great. です。" },
  { q: "A: Excuse me, where is the station?\nB: ( ). Go straight and turn right.", sub: "【訳】A: すみません、駅はどこですか？\nB: まっすぐ行って右に曲がってください。", opt: ["Sure", "Never mind", "No problem", "I see"], ans: 0, exp: "道案内の呼びかけに快く応じる Sure です。" },
  { q: "A: Thank you for your help.\nB: ( ).", sub: "【訳】A: 手伝ってくれてありがとう。\nB: どういたしまして。", opt: ["You're welcome", "Excuse me", "Yes, I do", "That's right"], ans: 0, exp: "お礼に対する返事は You're welcome. です。" },
  { q: "A: Have a nice weekend!\nB: ( ).", sub: "【訳】A: 良い週末を！\nB: あなたもね！", opt: ["You, too", "Me, neither", "Yes, please", "I agree"], ans: 0, exp: "挨拶を返す時は You, too. です。" },
  { q: "A: What's the matter with you?\nB: ( ).", sub: "【訳】A: どうしたのですか？\nB: 頭が痛いです。", opt: ["I have a headache", "I am twenty", "At three", "By train"], ans: 0, exp: "体調を聞かれた時は症状（I have a headache）を答えます。" },
  { q: "A: Can I help you?\nB: ( ). I'm just looking.", sub: "【訳】A: いらっしゃいませ？\nB: いいえ、見ているだけです。", opt: ["No, thank you", "Yes, you can", "Here it is", "I'm fine"], ans: 0, exp: "お店での声かけに「見ているだけ」と断る表現です。" },
  { q: "A: I passed the English exam!\nB: ( )!", sub: "【訳】A: 英語の試験に合格したよ！\nB: おめでとう！", opt: ["Congratulations", "Good luck", "Excuse me", "Pardon me"], ans: 0, exp: "お祝いの言葉は Congratulations! です。" },
  { q: "A: Shall we meet at the station at ten?\nB: ( ). See you then.", sub: "【訳】A: 10時に駅で会いましょうか？\nB: 分かりました。ではその時に。", opt: ["All right", "No, we don't", "I'm busy", "Not at all"], ans: 0, exp: "約束に同意する All right. です。" }
];

// ==================== 3. リスニング 60問 データベース ====================
const RAW_LISTENING_DATA = [
  // ==================== 2026年度版 (No.11 〜 No.30 全20問) ====================
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2026-1 No.11】(⚡速UP)", 
    opt: ["She can’t find the report.", "She forgot to call Max.", "The report is too long.", "Her desk is broken."], 
    ans: 0, 
    explain: "【会話】\nGirl: Did you finish your report, Max?\nBoy: Yes. I put it on your desk.\nGirl: Really? I can’t find it.\n\n【会話の訳】\n女子: レポートは終わった、マックス？\n男子: うん。君の机の上に置いておいたよ。\n女子: 本当に？見当たらないんだけど。\n\n【質問】What is the woman’s problem?\n（女性の困りごとは何ですか？）\n\n【正解の訳】\n1. 彼女はレポートを見つけることができない。\n\n【解説】机の上にあるはずのレポートが見つからず困っています。", 
    dialogue: [{ speaker: 'female', text: "Did you finish your report, Max?" }, { speaker: 'male', text: "Yes. I put it on your desk." }, { speaker: 'female', text: "Really? I can’t find it." }, { speaker: 'male', text: "Oh no." }, { speaker: 'narrator', text: "Question. What is the woman’s problem?" }], 
    aud_complete: "What is the woman’s problem? She can’t find the report." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2026-1 No.12】(⚡速UP)", 
    opt: ["Ken.", "Ken’s mother.", "Ken’s father.", "Ken’s friend."], 
    ans: 1, 
    explain: "【会話】\nGirl: How was your weekend, Ken?\nBoy: Not so good. My mom was sick, so my dad took her to the doctor.\n\n【会話の訳】\n女子: 週末はどうだった、ケン？\n男子: あんまり良くなかったよ。母さんが病気だったから、父さんが病院へ連れて行ったんだ。\n\n【質問】Who was sick?\n（誰が病気でしたか？）\n\n【正解の訳】\n2. ケンの母親。\n\n【解説】My mom was sick（僕の母が病気だった）と言っています。", 
    dialogue: [{ speaker: 'female', text: "How was your weekend, Ken?" }, { speaker: 'male', text: "Not so good. My mom was sick, so my dad took her to the doctor." }, { speaker: 'narrator', text: "Question. Who was sick?" }], 
    aud_complete: "Who was sick? Ken’s mother." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2026-1 No.13】(⚡速UP)", 
    opt: ["Kim’s friends.", "Kim’s father.", "His friends.", "His father."], 
    ans: 2, 
    explain: "【会話】\nGirl: Hi, Joe. Is that a new camera?\nBoy: Yes, Kim. My dad gave it to me. I just took some pictures of my friends.\n\n【会話の訳】\n女子: やあ、ジョー。それ新しいカメラ？\n男子: うん、キム。父さんがくれたんだ。友達の写真を何枚か撮ったところだよ。\n\n【質問】Who did Joe take pictures of?\n（ジョーは誰の写真を撮りましたか？）\n\n【正解の訳】\n3. 彼の友達。\n\n【解説】I took some pictures of my friends（友達の写真を撮った）と答えています。", 
    dialogue: [{ speaker: 'female', text: "Hi, Joe. Is that a new camera?" }, { speaker: 'male', text: "Yes, Kim. My dad gave it to me. I just took some pictures of my friends." }, { speaker: 'narrator', text: "Question. Who did Joe take pictures of?" }], 
    aud_complete: "Who did Joe take pictures of? His friends." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2026-1 No.14】(⚡速UP)", 
    opt: ["Because he is sick.", "Because he broke his leg.", "To talk to his doctor.", "To visit his grandmother."], 
    ans: 3, 
    explain: "【会話】\nGirl: Where are you going?\nBoy: I’m going to the hospital. My grandmother broke her leg, so I’m going to visit her.\n\n【会話の訳】\n女子: どこへ行くの？\n男子: 病院へ行くところだよ。おばあちゃんが足を骨折したから、お見舞いに行くんだ。\n\n【質問】Why is the man going to the hospital?\n（男性はなぜ病院へ行くのですか？）\n\n【正解の訳】\n4. 彼の祖母をお見舞いするため。\n\n【解説】visit her（彼女をお見舞いする・訪ねる）が目的です。", 
    dialogue: [{ speaker: 'female', text: "Where are you going?" }, { speaker: 'male', text: "I’m going to the hospital. My grandmother broke her leg, so I’m going to visit her." }, { speaker: 'narrator', text: "Question. Why is the man going to the hospital?" }], 
    aud_complete: "Why is the man going to the hospital? To visit his grandmother." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2026-1 No.15】(⚡速UP)", 
    opt: ["Take a test.", "Talk to their history teacher.", "Clean their classroom.", "Finish their reports."], 
    ans: 3, 
    explain: "【会話】\nGirl: We need to finish our history reports by Friday.\nBoy: I’ll write mine before class tomorrow.\n\n【会話の訳】\n女子: 私たち、金曜日までに歴史のレポートを終わらせなきゃ。\n男子: 僕は明日の授業の前に書くよ。\n\n【質問】What do they need to do by Friday?\n（彼らは金曜日までに何をする必要がありますか？）\n\n【正解の訳】\n4. レポートを終わらせること。\n\n【解説】finish our history reports（歴史のレポートを終わらせる）必要があります。", 
    dialogue: [{ speaker: 'female', text: "We need to finish our history reports by Friday." }, { speaker: 'male', text: "I’ll write mine before class tomorrow." }, { speaker: 'narrator', text: "Question. What do they need to do by Friday?" }], 
    aud_complete: "What do they need to do by Friday? Finish their reports." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2026-1 No.16】(⚡速UP)", 
    opt: ["A toy dog.", "A robot.", "A toy car.", "A toy plane."], 
    ans: 2, 
    explain: "【会話】\nGirl: You can pick one toy from here.\nBoy: I want a toy car.\n\n【会話の訳】\n女子: ここからおもちゃを1つ選んでいいよ。\n男子: おもちゃの車がいいな。\n\n【質問】Which toy does the boy want?\n（男の子はどのおもちゃを欲しがっていますか？）\n\n【正解の訳】\n3. おもちゃの車。\n\n【解説】I want a toy car と直接答えています。", 
    dialogue: [{ speaker: 'female', text: "You can pick one toy from here." }, { speaker: 'male', text: "I want a toy car." }, { speaker: 'narrator', text: "Question. Which toy does the boy want?" }], 
    aud_complete: "Which toy does the boy want? A toy car." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2026-1 No.17】(⚡速UP)", 
    opt: ["A tennis game.", "A soccer game.", "A basketball game.", "A baseball game."], 
    ans: 3, 
    explain: "【会話】\nBoy: You have a baseball game today, right?\nGirl: Yes. I also have a soccer game on Wednesday.\n\n【会話の訳】\n男子: 今日は野球の試合があるんだよね？\n女子: うん。水曜日にはサッカーの試合もあるよ。\n\n【質問】Which game does the girl have today?\n（女の子は今日、何の試合がありますか？）\n\n【正解の訳】\n4. 野球の試合。\n\n【解説】today（今日）あるのは baseball game（野球の試合）です。", 
    dialogue: [{ speaker: 'male', text: "You have a baseball game today, right?" }, { speaker: 'female', text: "Yes. I also have a soccer game on Wednesday." }, { speaker: 'narrator', text: "Question. Which game does the girl have today?" }], 
    aud_complete: "Which game does the girl have today? A baseball game." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2026-1 No.18】(⚡速UP)", 
    opt: ["One.", "Two.", "Three.", "Four."], 
    ans: 2, 
    explain: "【会話】\nBoy: What pets do you have, Mia?\nGirl: A dog, a cat, and a bird. So I have three pets.\n\n【会話の訳】\n男子: ミア、どんなペットを飼っているの？\n女子: 犬と猫と鳥だよ。だから3匹飼っているの。\n\n【質問】How many pets does Mia have?\n（ミアは何匹のペットを飼っていますか？）\n\n【正解の訳】\n3. 3匹。\n\n【解説】犬・猫・鳥で合計 three（3匹）です。", 
    dialogue: [{ speaker: 'male', text: "What pets do you have, Mia?" }, { speaker: 'female', text: "A dog, a cat, and a bird. So I have three pets." }, { speaker: 'narrator', text: "Question. How many pets does Mia have?" }], 
    aud_complete: "How many pets does Mia have? Three." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2026-1 No.19】(⚡速UP)", 
    opt: ["To a Chinese restaurant.", "To a Japanese restaurant.", "To a Spanish restaurant.", "To an Italian restaurant."], 
    ans: 3, 
    explain: "【会話】\nBoy: Where should we go for dinner?\nGirl: Let’s go to an Italian restaurant.\n\n【会話の訳】\n男子: 夕食はどこへ行こうか？\n女子: イタリア料理のレストランに行こうよ。\n\n【質問】Where will they go for dinner?\n（彼らは夕食にどこへ行きますか？）\n\n【正解の訳】\n4. イタリア料理のレストラン。\n\n【解説】Italian restaurant（イタリア料理店）に行こうと提案しています。", 
    dialogue: [{ speaker: 'male', text: "Where should we go for dinner?" }, { speaker: 'female', text: "Let’s go to an Italian restaurant." }, { speaker: 'narrator', text: "Question. Where will they go for dinner?" }], 
    aud_complete: "Where will they go for dinner? To an Italian restaurant." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2026-1 No.20】(⚡速UP)", 
    opt: ["At school.", "At the girl’s house.", "At the library.", "At the boy’s house."], 
    ans: 0, 
    explain: "【会話】\nGirl: How about studying tomorrow? We can meet at school.\nBoy: OK. Let’s meet at two.\n\n【会話の訳】\n女子: 明日勉強するのはどう？学校で会えるよ。\n男子: いいね。2時に会おう。\n\n【質問】Where will they meet tomorrow?\n（彼らは明日どこで会いますか？）\n\n【正解の訳】\n1. 学校で。\n\n【解説】meet at school（学校で会う）と約束しています。", 
    dialogue: [{ speaker: 'female', text: "How about studying tomorrow? We can meet at school." }, { speaker: 'male', text: "OK. Let’s meet at two." }, { speaker: 'narrator', text: "Question. Where will they meet tomorrow?" }], 
    aud_complete: "Where will they meet tomorrow? At school." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2026-1 No.21】(⚡速UP)", 
    opt: ["Visit her friend.", "Go shopping.", "Go to a party.", "Make a cake."], 
    ans: 1, 
    explain: "【英文】\nEmma enjoys shopping. This weekend she will go to the new shopping center with her friend.\n\n【英文の訳】\nエマは買い物が好きです。今週末、彼女は友達と新しいショッピングセンターに行く予定です。\n\n【質問】What will Emma do this weekend?\n（エマは今週末、何をしますか？）\n\n【正解の訳】\n2. 買い物に行くこと。\n\n【解説】ショッピングセンターへ買い物に行きます。", 
    dialogue: [{ speaker: 'female', text: "Emma enjoys shopping. This weekend she will go to the new shopping center with her friend." }, { speaker: 'narrator', text: "Question. What will Emma do this weekend?" }], 
    aud_complete: "What will Emma do this weekend? Go shopping." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2026-1 No.22】(⚡速UP)", 
    opt: ["Her vegetable garden.", "A cooking class.", "A restaurant.", "Her new house."], 
    ans: 2, 
    explain: "【英文】\nMy parents and I went to my favorite curry restaurant last night. The vegetable curry is really good.\n\n【英文の訳】\n昨夜、両親と私はお気に入りのカレーレストランに行きました。野菜カレーが本当においしいです。\n\n【質問】What is the girl talking about?\n（女の子は何について話していますか？）\n\n【正解の訳】\n3. レストラン。\n\n【解説】お気に入りのカレー店（レストラン）について話しています。", 
    dialogue: [{ speaker: 'female', text: "My parents and I went to my favorite curry restaurant last night. The vegetable curry is really good." }, { speaker: 'narrator', text: "Question. What is the girl talking about?" }], 
    aud_complete: "What is the girl talking about? A restaurant." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2026-1 No.23】(⚡速UP)", 
    opt: ["They played tennis.", "They saw a movie.", "They went shopping.", "They went to the library."], 
    ans: 2, 
    explain: "【英文】\nKathy and Mary play tennis on Saturdays. Today it rained, so they went to a shopping mall.\n\n【英文の訳】\nキャシーとメアリーは土曜日にテニスをします。今日は雨が降ったので、ショッピングモールに行きました。\n\n【質問】What did Kathy and Mary do today?\n（キャシーとメアリーは今日、何をしましたか？）\n\n【正解の訳】\n3. 彼女たちは買い物に行った。\n\n【解説】雨のためテニスではなくショッピングモールへ買い物に行きました。", 
    dialogue: [{ speaker: 'male', text: "Kathy and Mary play tennis on Saturdays. Today it rained, so they went to a shopping mall." }, { speaker: 'narrator', text: "Question. What did Kathy and Mary do today?" }], 
    aud_complete: "What did Kathy and Mary do today? They went shopping." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2026-1 No.24】(⚡速UP)", 
    opt: ["To the library.", "To a big game.", "To the computer club.", "To his friend’s house."], 
    ans: 3, 
    explain: "【英文】\nAfter school, I often go to my friend Andrew’s house, and we study together.\n\n【英文の訳】\n放課後、私はよく友達のアンドリューの家に行き、一緒に勉強します。\n\n【質問】Where does the boy often go after school?\n（男の子は放課後、よくどこへ行きますか？）\n\n【正解の訳】\n4. 彼の友達の家。\n\n【解説】friend Andrew's house（友達の家）へ行きます。", 
    dialogue: [{ speaker: 'male', text: "After school, I often go to my friend Andrew’s house, and we study together." }, { speaker: 'narrator', text: "Question. Where does the boy often go after school?" }], 
    aud_complete: "Where does the boy often go after school? To his friend’s house." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2026-1 No.25】(⚡速UP)", 
    opt: ["Wendy.", "Wendy’s husband.", "Julie.", "Julie’s husband."], 
    ans: 1, 
    explain: "【英文】\nWendy had a party. She made pasta, and her husband made vegetable soup.\n\n【英文の訳】\nウェンディはパーティーを開きました。彼女はパスタを作り、彼女の夫は野菜スープを作りました。\n\n【質問】Who made vegetable soup?\n（誰が野菜スープを作りましたか？）\n\n【正解の訳】\n2. ウェンディの夫。\n\n【解説】her husband made vegetable soup（彼女の夫が野菜スープを作った）と述べています。", 
    dialogue: [{ speaker: 'male', text: "Wendy had a party. She made pasta, and her husband made vegetable soup." }, { speaker: 'narrator', text: "Question. Who made vegetable soup?" }], 
    aud_complete: "Who made vegetable soup? Wendy’s husband." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2026-1 No.26】(⚡速UP)", 
    opt: ["Go to the library.", "Help her mother.", "Call her friend.", "Read a book at home."], 
    ans: 3, 
    explain: "【英文】\nEmi likes reading. Today, she will read a book at home after school.\n\n【英文の訳】\nエミは読書が好きです。今日、彼女は放課後、家で本を読む予定です。\n\n【質問】What will Emi do today?\n（エミは今日、何をしますか？）\n\n【正解の訳】\n4. 家で本を読むこと。\n\n【解説】read a book at home（家で本を読む）と明述されています。", 
    dialogue: [{ speaker: 'female', text: "Emi likes reading. Today, she will read a book at home after school." }, { speaker: 'narrator', text: "Question. What will Emi do today?" }], 
    aud_complete: "What will Emi do today? Read a book at home." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2026-1 No.27】(⚡速UP)", 
    opt: ["He read books.", "He rode his bike.", "He played soccer.", "He did his homework."], 
    ans: 0, 
    explain: "【英文】\nIt rained yesterday, so Jack stayed at home and read books in the afternoon.\n\n【英文の訳】\n昨日は雨だったので、ジャックは午後、家にいて本を読みました。\n\n【質問】What did Jack do yesterday afternoon?\n（ジャックは昨日の午後、何をしましたか？）\n\n【正解の訳】\n1. 彼は本を読んだ。\n\n【解説】read books in the afternoon（午後に本を読んだ）が正解です。", 
    dialogue: [{ speaker: 'male', text: "It rained yesterday, so Jack stayed at home and read books in the afternoon." }, { speaker: 'narrator', text: "Question. What did Jack do yesterday afternoon?" }], 
    aud_complete: "What did Jack do yesterday afternoon? He read books." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2026-1 No.28】(⚡速UP)", 
    opt: ["She made lunch.", "She visited her grandmother.", "She cleaned her house.", "She met Anna’s father."], 
    ans: 2, 
    explain: "【英文】\nMy grandmother came to visit me, so I cleaned my house. Anna helped me.\n\n【英文の訳】\n祖母が訪ねてくることになったので、私は家を掃除しました。アンナが手伝ってくれました。\n\n【質問】What did the girl do yesterday?\n（女の子は昨日、何をしましたか？）\n\n【正解の訳】\n3. 彼女は家を掃除した。\n\n【解説】cleaned my house（家を掃除した）が行動の内容です。", 
    dialogue: [{ speaker: 'female', text: "My grandmother came to visit me, so I cleaned my house. Anna helped me." }, { speaker: 'narrator', text: "Question. What did the girl do yesterday?" }], 
    aud_complete: "What did the girl do yesterday? She cleaned her house." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2026-1 No.29】(⚡速UP)", 
    opt: ["By bike.", "By bus.", "By train.", "By car."], 
    ans: 0, 
    explain: "【英文】\nJack usually rides his bike to school when the weather is nice.\n\n【英文の訳】\nジャックは天気が良いとき、普段は自転車に乗って登校します。\n\n【質問】How does Jack usually go to school?\n（ジャックは普段、どうやって学校に行きますか？）\n\n【正解の訳】\n1. 自転車で。\n\n【解説】rides his bike（自転車に乗る）ので By bike です。", 
    dialogue: [{ speaker: 'male', text: "Jack usually rides his bike to school when the weather is nice." }, { speaker: 'narrator', text: "Question. How does Jack usually go to school?" }], 
    aud_complete: "How does Jack usually go to school? By bike." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2026-1 No.30】(⚡速UP)", 
    opt: ["Three dollars.", "Five dollars.", "Eight dollars.", "Ten dollars."], 
    ans: 3, 
    explain: "【英文】\nWelcome to the city art museum. The fees are three dollars for kids, and ten dollars for adults.\n\n【英文の訳】\n市立美術館へようこそ。入場料は子ども3ドル、大人10ドルです。\n\n【質問】How much is the fee for adults?\n（大人料金はいくらですか？）\n\n【正解の訳】\n4. 10ドル。\n\n【解説】ten dollars for adults（大人は10ドル）と案内されています。", 
    dialogue: [{ speaker: 'female', text: "Welcome to the city art museum. The fees are three dollars for kids, and ten dollars for adults." }, { speaker: 'narrator', text: "Question. How much is the fee for adults?" }], 
    aud_complete: "How much is the fee for adults? Ten dollars." 
  },
  // ==================== 2025年第3回 (No.11 〜 No.30 全20問) ====================
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-3 No.11】(⚡速UP)", 
    opt: ["She went skiing.", "She met Mr. Brown.", "She stayed at home.", "She studied at school."], 
    ans: 0, 
    explain: "【会話】\nMan: Did you go skiing at your uncle's house, Meg?\nGirl: Yes, every day. It was fun!\n\n【会話の訳】\n男性: メグ、おじさんの家でスキーに行ったかい？\n女子: はい、毎日行きました。とても楽しかったです！\n\n【質問】What did Meg do on her holiday?\n（メグは休日に何をしましたか？）\n\n【正解の訳】\n1. 彼女はスキーに行った。\n\n【解説】go skiing（スキーに行く）と答えています。", 
    dialogue: [{ speaker: 'male', text: "Did you go skiing at your uncle's house, Meg?" }, { speaker: 'female', text: "Yes, every day. It was fun!" }, { speaker: 'narrator', text: "Question. What did Meg do on her holiday?" }], 
    aud_complete: "What did Meg do on her holiday? She went skiing." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-3 No.12】(⚡速UP)", 
    opt: ["Tommy’s birthday present.", "Their homework.", "Their new friend.", "Lisa’s new bicycle."], 
    ans: 0, 
    explain: "【会話】\nGirl: What did you get for your birthday, Tommy?\nBoy: A new bicycle, Lisa.\n\n【会話の訳】\n女子: トミー、誕生日に何をもらったの？\n男子: 新しい自転車だよ、リサ。\n\n【質問】What are they talking about?\n（彼らは何について話していますか？）\n\n【正解の訳】\n1. トミーの誕生日プレゼント。\n\n【解説】誕生日に何をもらったか（プレゼント）について話しています。", 
    dialogue: [{ speaker: 'female', text: "What did you get for your birthday, Tommy?" }, { speaker: 'male', text: "A new bicycle, Lisa." }, { speaker: 'narrator', text: "Question. What are they talking about?" }], 
    aud_complete: "What are they talking about? Tommy’s birthday present." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-3 No.13】(⚡速UP)", 
    opt: ["To the movies.", "To Japan.", "To school.", "To the airport."], 
    ans: 3, 
    explain: "【会話】\nBoy: Will you go somewhere tomorrow?\nGirl: Yes, to the airport to meet a friend from Japan.\n\n【会話の訳】\n男子: 明日はどこかへ行くの？\n女子: ええ、日本から来る友達を出迎えるために空港へ行くわ。\n\n【質問】Where will the girl go tomorrow?\n（女の子は明日どこへ行きますか？）\n\n【正解の訳】\n4. 空港へ。\n\n【解説】to the airport（空港へ）行くと答えています。", 
    dialogue: [{ speaker: 'male', text: "Will you go somewhere tomorrow?" }, { speaker: 'female', text: "Yes, to the airport to meet a friend from Japan." }, { speaker: 'narrator', text: "Question. Where will the girl go tomorrow?" }], 
    aud_complete: "Where will the girl go tomorrow? To the airport." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-3 No.14】(⚡速UP)", 
    opt: ["The boy.", "The girl.", "The boy’s sister.", "The girl’s sister."], 
    ans: 1, 
    explain: "【会話】\nBoy: Do you want to see a movie tomorrow?\nGirl: I can’t. I’ll go fishing alone.\n\n【会話の訳】\n男子: 明日映画を見に行かない？\n女子: 無理なの。一人で釣りに行く予定なの。\n\n【質問】Who will go fishing tomorrow?\n（誰が明日釣りに行きますか？）\n\n【正解の訳】\n2. 女の子。\n\n【解説】女子が I’ll go fishing alone（一人で釣りに行く）と話しています。", 
    dialogue: [{ speaker: 'male', text: "Do you want to see a movie tomorrow?" }, { speaker: 'female', text: "I can’t. I’ll go fishing alone." }, { speaker: 'narrator', text: "Question. Who will go fishing tomorrow?" }], 
    aud_complete: "Who will go fishing tomorrow? The girl." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-3 No.15】(⚡速UP)", 
    opt: ["Go home.", "Go to school.", "Meet Mike.", "Buy a present."], 
    ans: 0, 
    explain: "【会話】\nGirl: Bye, Mike. I’m going home now.\nBoy: Thanks for coming to my party.\n\n【会話の訳】\n女子: さようなら、マイク。もう家に帰るわね。\n男子: 僕のパーティーに来てくれてありがとう。\n\n【質問】What is the girl going to do now?\n（女の子は今から何をしますか？）\n\n【正解の訳】\n1. 家に帰ること。\n\n【解説】I'm going home now（今から家に帰る）と言っています。", 
    dialogue: [{ speaker: 'female', text: "Bye, Mike. I’m going home now." }, { speaker: 'male', text: "Thanks for coming to my party." }, { speaker: 'narrator', text: "Question. What is the girl going to do now?" }], 
    aud_complete: "What is the girl going to do now? Go home." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-3 No.16】(⚡速UP)", 
    opt: ["Eating an apple.", "Buying a banana.", "Eating a banana.", "Making lunch for the girl."], 
    ans: 0, 
    explain: "【会話】\nGirl: What are you eating, Mark?\nBoy: An apple.\n\n【会話の訳】\n女子: 何を食べているの、マーク？\n男子: リンゴだよ。\n\n【質問】What is Mark doing now?\n（マークは今何をしていますか？）\n\n【正解の訳】\n1. リンゴを食べている。\n\n【解説】An apple（リンゴ）を食べています。", 
    dialogue: [{ speaker: 'female', text: "What are you eating, Mark?" }, { speaker: 'male', text: "An apple." }, { speaker: 'narrator', text: "Question. What is Mark doing now?" }], 
    aud_complete: "What is Mark doing now? Eating an apple." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-3 No.17】(⚡速UP)", 
    opt: ["At school.", "At home.", "In Peter’s bag.", "In Peter’s room."], 
    ans: 1, 
    explain: "【会話】\nBoy: Where is your eraser?\nGirl: I left it at home. Maybe on the desk in my room.\n\n【会話の訳】\n男子: 君の消しゴムはどこにあるの？\n女子: 家に置いてきちゃった。たぶん私の部屋の机の上よ。\n\n【質問】Where is the girl’s eraser?\n（女の子の消しゴムはどこにありますか？）\n\n【正解の訳】\n2. 家に。\n\n【解説】left it at home（家に置いてきた）と答えています。", 
    dialogue: [{ speaker: 'male', text: "Where is your eraser?" }, { speaker: 'female', text: "I left it at home. Maybe on the desk in my room." }, { speaker: 'narrator', text: "Question. Where is the girl’s eraser?" }], 
    aud_complete: "Where is the girl’s eraser? At home." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-3 No.18】(⚡速UP)", 
    opt: ["Next week.", "This week.", "This month.", "Next month."], 
    ans: 3, 
    explain: "【会話】\nGirl: I will go on a trip to Italy next month.\nBoy: How long will you be there?\n\n【会話の訳】\n女子: 来月、イタリアへ旅行に行くの。\n男子: どのくらい滞在するの？\n\n【質問】When will the girl go on a trip?\n（女の子はいつ旅行に行きますか？）\n\n【正解の訳】\n4. 来月。\n\n【解説】next month（来月）旅行に行きます。", 
    dialogue: [{ speaker: 'female', text: "I will go on a trip to Italy next month." }, { speaker: 'male', text: "How long will you be there?" }, { speaker: 'narrator', text: "Question. When will the girl go on a trip?" }], 
    aud_complete: "When will the girl go on a trip? Next month." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-3 No.19】(⚡速UP)", 
    opt: ["He missed a bus.", "He was busy.", "He was sick.", "He got up late."], 
    ans: 3, 
    explain: "【会話】\nGirl: Why is Ken late for school today?\nBoy: He got up late today.\n\n【会話の訳】\n女子: ケンはどうして今日学校に遅刻したの？\n男子: 今日は起きるのが遅かったんだよ。\n\n【質問】Why is Ken late for school today?\n（ケンはなぜ今日学校に遅刻したのですか？）\n\n【正解の訳】\n4. 彼は起きるのが遅かったから。\n\n【解説】got up late（遅く起きた・寝坊した）ことが原因です。", 
    dialogue: [{ speaker: 'female', text: "Why is Ken late for school today?" }, { speaker: 'male', text: "He got up late today." }, { speaker: 'narrator', text: "Question. Why is Ken late for school today?" }], 
    aud_complete: "Why is Ken late for school today? He got up late." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-3 No.20】(⚡速UP)", 
    opt: ["She lived in America.", "Her mother is from America.", "She took English lessons.", "The boy taught it to her."], 
    ans: 0, 
    explain: "【会話】\nBoy: Where did you learn English, Sara?\nGirl: When I was younger, I lived in America for three years.\n\n【会話の訳】\n男子: サラ、どこで英語を習ったの？\n女子: もっと小さい頃、アメリカに3年間住んでいたの。\n\n【質問】How did Sara learn English?\n（サラはどうやって英語を学びましたか？）\n\n【正解の訳】\n1. 彼女はアメリカに住んでいた。\n\n【解説】lived in America（アメリカに住んでいた）から身につけました。", 
    dialogue: [{ speaker: 'male', text: "Where did you learn English, Sara?" }, { speaker: 'female', text: "When I was younger, I lived in America for three years." }, { speaker: 'narrator', text: "Question. How did Sara learn English?" }], 
    aud_complete: "How did Sara learn English? She lived in America." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-3 No.21】(⚡速UP)", 
    opt: ["At home.", "At a restaurant.", "At a clothes shop.", "At a bank."], 
    ans: 1, 
    explain: "【英文】\nWelcome to Tony’s Burger Shop. Today’s special is a cheeseburger with a salad.\n\n【英文の訳】\nトニーズ・バーガーショップへようこそ。本日のスペシャルはサラダ付きチーズバーガーです。\n\n【質問】Where is the man talking?\n（男性はどこで話していますか？）\n\n【正解の訳】\n2. レストラン（飲食店）で。\n\n【解説】Burger Shop（ハンバーガー店）で話しています。", 
    dialogue: [{ speaker: 'male', text: "Welcome to Tony’s Burger Shop. Today’s special is a cheeseburger with a salad." }, { speaker: 'narrator', text: "Question. Where is the man talking?" }], 
    aud_complete: "Where is the man talking? At a restaurant." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-3 No.22】(⚡速UP)", 
    opt: ["He made a new friend.", "He ate with his girlfriend.", "He watched TV.", "He played soccer."], 
    ans: 1, 
    explain: "【英文】\nLast Saturday, I ate dinner with my girlfriend. On Sunday, I played soccer.\n\n【英文の訳】\nこの前の土曜日、私はガールフレンドと夕食を食べました。日曜日にはサッカーをしました。\n\n【質問】What did the man do on Saturday?\n（男性は土曜日に何をしましたか？）\n\n【正解の訳】\n2. ガールフレンドと食事をした。\n\n【解説】土曜日は ate dinner with my girlfriend です。", 
    dialogue: [{ speaker: 'male', text: "Last Saturday, I ate dinner with my girlfriend. On Sunday, I played soccer." }, { speaker: 'narrator', text: "Question. What did the man do on Saturday?" }], 
    aud_complete: "What did the man do on Saturday? He ate with his girlfriend." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-3 No.23】(⚡速UP)", 
    opt: ["A brush.", "Some pictures.", "Some paper.", "A bicycle."], 
    ans: 2, 
    explain: "【英文】\nToday, Tina will go and buy some nice paper. She’s going to paint a picture of her bicycle.\n\n【英文の訳】\n今日、ティナは素敵な紙を買いに行きます。彼女は自分の自転車の絵を描く予定です。\n\n【質問】What will Tina buy today?\n（ティナは今日、何を買いますか？）\n\n【正解の訳】\n3. 紙。\n\n【解説】buy some nice paper（紙を買う）と述べています。", 
    dialogue: [{ speaker: 'female', text: "Today, Tina will go and buy some nice paper. She’s going to paint a picture of her bicycle." }, { speaker: 'narrator', text: "Question. What will Tina buy today?" }], 
    aud_complete: "What will Tina buy today? Some paper." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-3 No.24】(⚡速UP)", 
    opt: ["His favorite sport.", "His family trip.", "His favorite animal.", "His new car."], 
    ans: 1, 
    explain: "【英文】\nMy family went on a trip to the beach last week. We went by car.\n\n【英文の訳】\n私の家族は先週、ビーチへ旅行に行きました。車で行きました。\n\n【質問】What is the boy talking about?\n（男の子は何について話していますか？）\n\n【正解の訳】\n2. 家族旅行。\n\n【解説】trip to the beach（ビーチへの家族旅行）について話しています。", 
    dialogue: [{ speaker: 'male', text: "My family went on a trip to the beach last week. We went by car." }, { speaker: 'narrator', text: "Question. What is the boy talking about?" }], 
    aud_complete: "What is the boy talking about? His family trip." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-3 No.25】(⚡速UP)", 
    opt: ["Her favorite fruit.", "Her favorite flower.", "Her spring vacation.", "Her family’s garden."], 
    ans: 3, 
    explain: "【英文】\nMy family has a beautiful garden. We have many cherry trees and flowers.\n\n【英文の訳】\n私の家には美しい庭があります。たくさんの桜の木や花があります。\n\n【質問】What is the girl talking about?\n（女の子は何について話していますか？）\n\n【正解の訳】\n4. 家族の庭。\n\n【解説】beautiful garden（家の庭）について話しています。", 
    dialogue: [{ speaker: 'female', text: "My family has a beautiful garden. We have many cherry trees and flowers." }, { speaker: 'narrator', text: "Question. What is the girl talking about?" }], 
    aud_complete: "What is the girl talking about? Her family’s garden." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-3 No.26】(⚡速UP)", 
    opt: ["Sunny.", "Cloudy.", "Windy.", "Rainy."], 
    ans: 0, 
    explain: "【英文】\nYesterday, it was cloudy in the morning but sunny in the afternoon.\n\n【英文の訳】\n昨日は午前中は曇りでしたが、午後は晴れました。\n\n【質問】How was the weather yesterday afternoon?\n（昨日の午後の天気はどうでしたか？）\n\n【正解の訳】\n1. 晴れ。\n\n【解説】in the afternoon（午後）は sunny（晴れ）でした。", 
    dialogue: [{ speaker: 'male', text: "Yesterday, it was cloudy in the morning but sunny in the afternoon." }, { speaker: 'narrator', text: "Question. How was the weather yesterday afternoon?" }], 
    aud_complete: "How was the weather yesterday afternoon? Sunny." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-3 No.27】(⚡速UP)", 
    opt: ["Two.", "Three.", "Four.", "Five."], 
    ans: 1, 
    explain: "【英文】\nSarah bought two oranges, three pineapples, and five peaches.\n\n【英文の訳】\nサラはオレンジを2個、パイナップルを3個、そして桃を5個買いました。\n\n【質問】How many pineapples did Sarah buy yesterday?\n（サラは昨日パイナップルを何個買いましたか？）\n\n【正解の訳】\n2. 3個。\n\n【解説】three pineapples（パイナップル3個）です。", 
    dialogue: [{ speaker: 'male', text: "Sarah bought two oranges, three pineapples, and five peaches." }, { speaker: 'narrator', text: "Question. How many pineapples did Sarah buy yesterday?" }], 
    aud_complete: "How many pineapples did Sarah buy yesterday? Three." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-3 No.28】(⚡速UP)", 
    opt: ["In her bag.", "In her car.", "At work.", "At home."], 
    ans: 2, 
    explain: "【英文】\nI lost my keys yesterday. I found them at work.\n\n【英文の訳】\n私は昨日、鍵をなくしました。職場でそれを見つけました。\n\n【質問】Where were the woman’s keys?\n（女性の鍵はどこにありましたか？）\n\n【正解の訳】\n3. 職場で。\n\n【解説】found them at work（職場でそれらを見つけた）と答えています。", 
    dialogue: [{ speaker: 'female', text: "I lost my keys yesterday. I found them at work." }, { speaker: 'narrator', text: "Question. Where were the woman’s keys?" }], 
    aud_complete: "Where were the woman’s keys? At work." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-3 No.29】(⚡速UP)", 
    opt: ["His father.", "His brother.", "His mother.", "His grandmother."], 
    ans: 2, 
    explain: "【英文】\nDaniel lives alone. Yesterday, he called his mother many times, but she didn’t answer.\n\n【英文の訳】\nダニエルは一人暮らしをしています。昨日、彼は母親に何度も電話をかけましたが、出ませんでした。\n\n【質問】Who did Daniel call yesterday?\n（ダニエルは昨日、誰に電話をかけましたか？）\n\n【正解の訳】\n3. 彼の母親。\n\n【解説】called his mother（母親に電話した）と述べています。", 
    dialogue: [{ speaker: 'male', text: "Daniel lives alone. Yesterday, he called his mother many times, but she didn’t answer." }, { speaker: 'narrator', text: "Question. Who did Daniel call yesterday?" }], 
    aud_complete: "Who did Daniel call yesterday? His mother." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-3 No.30】(⚡速UP)", 
    opt: ["He will join a baseball game.", "He will play with his dog.", "He will join a running event.", "He will look for quiet places."], 
    ans: 1, 
    explain: "【英文】\nI’ll go to the park next Sunday to play with my dog. I’ll bring a ball for him.\n\n【英文の訳】\n私は次の日曜日、愛犬と遊ぶために公園に行きます。犬のためにボールを持って行きます。\n\n【質問】Why will the man go to the park next Sunday?\n（男性はなぜ次の日曜日、公園に行くのですか？）\n\n【正解の訳】\n2. 彼の犬と遊ぶため。\n\n【解説】to play with my dog（犬と遊ぶため）が目的です。", 
    dialogue: [{ speaker: 'male', text: "I’ll go to the park next Sunday to play with my dog. I’ll bring a ball for him." }, { speaker: 'narrator', text: "Question. Why will the man go to the park next Sunday?" }], 
    aud_complete: "Why will the man go to the park next Sunday? He will play with his dog." 
  },
  // ==================== 2025年第2回 (No.11 〜 No.30 全20問) ====================
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-2 No.11】(⚡速UP)", 
    opt: ["History.", "Math.", "English.", "Science."], 
    ans: 0, 
    explain: "【会話】\nBoy: What’s our next class, Gina?\nGirl: History.\n\n【会話の訳】\n男子: 次の授業は何だっけ、ジーナ？\n女子: 歴史だよ。\n\n【質問】Which class do they have next?\n（彼らは次に何の授業がありますか？）\n\n【正解の訳】\n1. 歴史。\n\n【解説】next class（次の授業）は History（歴史）と答えています。", 
    dialogue: [{ speaker: 'male', text: "What’s our next class, Gina?" }, { speaker: 'female', text: "History." }, { speaker: 'narrator', text: "Question. Which class do they have next?" }], 
    aud_complete: "Which class do they have next? History." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-2 No.12】(⚡速UP)", 
    opt: ["Tomorrow.", "This weekend.", "Next month.", "Next winter."], 
    ans: 1, 
    explain: "【会話】\nBoy: Can you ski?\nGirl: My father will teach me this weekend.\n\n【会話の訳】\n男子: スキーはできる？\n女子: 今週末にお父さんが教えてくれる予定なの。\n\n【質問】When will the girl learn to ski?\n（女の子はいつスキーを習いますか？）\n\n【正解の訳】\n2. 今週末。\n\n【解説】this weekend（今週末）に習う予定です。", 
    dialogue: [{ speaker: 'male', text: "Can you ski?" }, { speaker: 'female', text: "My father will teach me this weekend." }, { speaker: 'narrator', text: "Question. When will the girl learn to ski?" }], 
    aud_complete: "When will the girl learn to ski? This weekend." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-2 No.13】(⚡速UP)", 
    opt: ["Their favorite movie.", "The boy’s book.", "The girl’s bedroom.", "The library."], 
    ans: 1, 
    explain: "【会話】\nBoy: Did you bring my book?\nGirl: Sorry. I left it in my bedroom.\n\n【会話の訳】\n男子: 僕の本を持ってきてくれた？\n女子: ごめんね。自分の部屋に置いてきちゃった。\n\n【質問】What are they talking about?\n（彼らは何について話していますか？）\n\n【正解の訳】\n2. 男の子の本。\n\n【解説】my book（男の子の本）を忘れたことについて話しています。", 
    dialogue: [{ speaker: 'male', text: "Did you bring my book?" }, { speaker: 'female', text: "Sorry. I left it in my bedroom." }, { speaker: 'narrator', text: "Question. What are they talking about?" }], 
    aud_complete: "What are they talking about? The boy’s book." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-2 No.14】(⚡速UP)", 
    opt: ["For one day.", "For five days.", "For one week.", "For five weeks."], 
    ans: 1, 
    explain: "【会話】\nGirl: Ted, how long will you stay in Europe?\nBoy: I’ll stay in France for one week and Spain for five days.\n\n【会話の訳】\n女子: テッド、ヨーロッパにはどのくらい滞在するの？\n男子: フランスに1週間、スペインに5日間滞在する予定だよ。\n\n【質問】How long will Ted stay in Spain?\n（テッドはスペインにどのくらいの期間滞在しますか？）\n\n【正解の訳】\n2. 5日間。\n\n【解説】Spain for five days（スペインに5日間）と答えています。", 
    dialogue: [{ speaker: 'female', text: "Ted, how long will you stay in Europe?" }, { speaker: 'male', text: "I’ll stay in France for one week and Spain for five days." }, { speaker: 'narrator', text: "Question. How long will Ted stay in Spain?" }], 
    aud_complete: "How long will Ted stay in Spain? For five days." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-2 No.15】(⚡速UP)", 
    opt: ["The cafeteria.", "The gym.", "Her teachers.", "Her friends."], 
    ans: 0, 
    explain: "【会話】\nBoy: What do you like the best about your new school?\nGirl: The cafeteria. It’s big.\n\n【会話の訳】\n男子: 新しい学校で一番気に入っているところは何？\n女子: カフェテリア（学食）よ。広いの。\n\n【質問】What does the girl like the best about her new school?\n（女の子は新しい学校の何が一番好きですか？）\n\n【正解の訳】\n1. カフェテリア（学食）。\n\n【解説】The cafeteria が一番のお気に入りです。", 
    dialogue: [{ speaker: 'male', text: "What do you like the best about your new school?" }, { speaker: 'female', text: "The cafeteria. It’s big." }, { speaker: 'narrator', text: "Question. What does the girl like the best about her new school?" }], 
    aud_complete: "What does the girl like the best about her new school? The cafeteria." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-2 No.16】(⚡速UP)", 
    opt: ["The science homework.", "The English homework.", "The history homework.", "The math homework."], 
    ans: 3, 
    explain: "【会話】\nGirl: Can you help me with the math homework?\nBoy: Sorry, I’m doing my science homework.\n\n【会話の訳】\n女子: 数学の宿題を手伝ってくれない？\n男子: ごめん、僕はいま理科の宿題をやっているところなんだ。\n\n【質問】What does the girl need help with?\n（女の子は何を手伝ってほしいのですか？）\n\n【正解の訳】\n4. 数学の宿題。\n\n【解説】math homework（数学の宿題）の手助けを求めています。", 
    dialogue: [{ speaker: 'female', text: "Can you help me with the math homework?" }, { speaker: 'male', text: "Sorry, I’m doing my science homework." }, { speaker: 'narrator', text: "Question. What does the girl need help with?" }], 
    aud_complete: "What does the girl need help with? The math homework." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-2 No.17】(⚡速UP)", 
    opt: ["Sandwiches.", "Toast.", "Soup.", "Noodles."], 
    ans: 1, 
    explain: "【会話】\nGirl: I had toast for breakfast. I don’t want sandwiches for lunch.\nBoy: OK, we’ll have noodles.\n\n【会話の訳】\n女子: 朝食にトーストを食べたの。昼食にサンドイッチは食べたくないな。\n男子: 分かった、麺類を食べよう。\n\n【質問】What did the girl have for breakfast?\n（女の子は朝食に何を食べましたか？）\n\n【正解の訳】\n2. トースト。\n\n【解説】toast for breakfast（朝食にトースト）を食べました。", 
    dialogue: [{ speaker: 'female', text: "I had toast for breakfast. I don’t want sandwiches for lunch." }, { speaker: 'male', text: "OK, we’ll have noodles." }, { speaker: 'narrator', text: "Question. What did the girl have for breakfast?" }], 
    aud_complete: "What did the girl have for breakfast? Toast." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-2 No.18】(⚡速UP)", 
    opt: ["Next Friday.", "Next Saturday.", "Next month.", "Next Sunday."], 
    ans: 0, 
    explain: "【会話】\nGirl: Is the class trip next month?\nBoy: No. It’s next Friday.\n\n【会話の訳】\n女子: クラス旅行は来月だっけ？\n男子: ううん。来週の金曜日だよ。\n\n【質問】When is the class trip?\n（クラス旅行はいつですか？）\n\n【正解の訳】\n1. 来週の金曜日。\n\n【解説】next Friday（来週の金曜日）です。", 
    dialogue: [{ speaker: 'female', text: "Is the class trip next month?" }, { speaker: 'male', text: "No. It’s next Friday." }, { speaker: 'narrator', text: "Question. When is the class trip?" }], 
    aud_complete: "When is the class trip? Next Friday." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-2 No.19】(⚡速UP)", 
    opt: ["Some new shoes.", "Some pants.", "Some socks.", "Some gloves."], 
    ans: 3, 
    explain: "【会話】\nBoy: I bought you a present. I bought black gloves for you.\nGirl: How nice!\n\n【会話の訳】\n男子: プレゼントを買ってきたよ。黒い手袋を買ったんだ。\n女子: 素敵ね！\n\n【質問】What did Oliver buy for the woman?\n（オリバーは女性のために何を買いましたか？）\n\n【正解の訳】\n4. 手袋。\n\n【解説】black gloves（黒い手袋）を買いました。", 
    dialogue: [{ speaker: 'male', text: "I bought you a present. I bought black gloves for you." }, { speaker: 'female', text: "How nice!" }, { speaker: 'narrator', text: "Question. What did Oliver buy for the woman?" }], 
    aud_complete: "What did Oliver buy for the woman? Some gloves." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-2 No.20】(⚡速UP)", 
    opt: ["One minute.", "Five minutes.", "Seven minutes.", "Fifteen minutes."], 
    ans: 1, 
    explain: "【会話】\nMan: How long does it take to walk to the nearest station?\nWoman: It takes five minutes to walk there.\n\n【会話の訳】\n男性: 最寄り駅まで歩いてどのくらい時間がかかりますか？\n女性: そこまで歩いて5分かかります。\n\n【質問】How long does it take to walk to the station?\n（駅まで歩いてどのくらいかかりますか？）\n\n【正解の訳】\n2. 5分。\n\n【解説】five minutes to walk（歩いて5分）かかります。", 
    dialogue: [{ speaker: 'male', text: "How long does it take to walk to the nearest station?" }, { speaker: 'female', text: "It takes five minutes to walk there." }, { speaker: 'narrator', text: "Question. How long does it take to walk to the station?" }], 
    aud_complete: "How long does it take to walk to the station? Five minutes." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-2 No.21】(⚡速UP)", 
    opt: ["They made a cake.", "They looked for a present.", "They went to a restaurant.", "They cooked some steak."], 
    ans: 2, 
    explain: "【英文】\nLast Saturday was my wife’s birthday, so we went to a nice restaurant.\n\n【英文の訳】\nこの前の土曜日は妻の誕生日だったので、私たちは素敵なレストランに行きました。\n\n【質問】What did the man and his wife do last Saturday?\n（男性と妻はこの前の土曜日、何をしましたか？）\n\n【正解の訳】\n3. 彼らはレストランに行った。\n\n【解説】went to a nice restaurant（レストランに行った）と述べています。", 
    dialogue: [{ speaker: 'male', text: "Last Saturday was my wife’s birthday, so we went to a nice restaurant." }, { speaker: 'narrator', text: "Question. What did the man and his wife do last Saturday?" }], 
    aud_complete: "What did the man and his wife do last Saturday? They went to a restaurant." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-2 No.22】(⚡速UP)", 
    opt: ["One.", "Two.", "Three.", "Four."], 
    ans: 3, 
    explain: "【英文】\nJack gave Sally four apples. She ate one and gave the other three to her brother.\n\n【英文の訳】\nジャックはサリーにリンゴを4個あげました。彼女は1個食べ、残りの3個を弟にあげました。\n\n【質問】How many apples did Jack give to Sally?\n（ジャックはサリーにリンゴを何個あげましたか？）\n\n【正解の訳】\n4. 4個。\n\n【解説】four apples（4個のリンゴ）をあげました。", 
    dialogue: [{ speaker: 'female', text: "Jack gave Sally four apples. She ate one and gave the other three to her brother." }, { speaker: 'narrator', text: "Question. How many apples did Jack give to Sally?" }], 
    aud_complete: "How many apples did Jack give to Sally? Four." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-2 No.23】(⚡速UP)", 
    opt: ["In a coffee shop.", "In the park.", "At home.", "At the station."], 
    ans: 0, 
    explain: "【英文】\nOn Sunday mornings, I read the newspaper in a coffee shop near the station.\n\n【英文の訳】\n日曜日の朝、私は駅の近くのカフェで新聞を読みます。\n\n【質問】Where does the man read the newspaper?\n（男性はどこで新聞を読みますか？）\n\n【正解の訳】\n1. カフェ（喫茶店）で。\n\n【解説】in a coffee shop（カフェで）新聞を読みます。", 
    dialogue: [{ speaker: 'male', text: "On Sunday mornings, I read the newspaper in a coffee shop near the station." }, { speaker: 'narrator', text: "Question. Where does the man read the newspaper?" }], 
    aud_complete: "Where does the man read the newspaper? In a coffee shop." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-2 No.24】(⚡速UP)", 
    opt: ["Hamsters.", "Ducks.", "Pandas.", "Rabbits."], 
    ans: 1, 
    explain: "【英文】\nTom is writing about ducks, and Steve is writing about hamsters.\n\n【英文の訳】\nトムはカモ（アヒル）について書いており、スティーブはハムスターについて書いています。\n\n【質問】Which animal is Tom writing his report about?\n（トムはどの動物についてレポートを書いていますか？）\n\n【正解の訳】\n2. カモ（アヒル）。\n\n【解説】Tom is writing about ducks（トムはカモについて書いている）です。", 
    dialogue: [{ speaker: 'female', text: "Tom is writing about ducks, and Steve is writing about hamsters." }, { speaker: 'narrator', text: "Question. Which animal is Tom writing his report about?" }], 
    aud_complete: "Which animal is Tom writing his report about? Ducks." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-2 No.25】(⚡速UP)", 
    opt: ["Play baseball.", "Go to a baseball game.", "Watch a musical.", "Play the piano."], 
    ans: 2, 
    explain: "【英文】\nMy birthday is next week. This year, I want to watch a musical.\n\n【英文の訳】\n私の誕生日は来週です。今年はミュージカルを見に行きたいです。\n\n【質問】What does the boy want to do on his birthday this year?\n（男の子は今年、誕生日に何をしたいですか？）\n\n【正解の訳】\n3. ミュージカルを見ること。\n\n【解説】watch a musical（ミュージカルを見る）ことを希望しています。", 
    dialogue: [{ speaker: 'male', text: "My birthday is next week. This year, I want to watch a musical." }, { speaker: 'narrator', text: "Question. What does the boy want to do on his birthday this year?" }], 
    aud_complete: "What does the boy want to do on his birthday this year? Watch a musical." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-2 No.26】(⚡速UP)", 
    opt: ["The girl.", "The girl’s brother.", "The girl’s sister.", "The girl’s mother."], 
    ans: 2, 
    explain: "【英文】\nMy sister was practicing the piano, so I asked my mother for help.\n\n【英文の訳】\n姉（妹）がピアノを練習していたので、私は母に助けを求めました。\n\n【質問】Who was practicing the piano?\n（誰がピアノを練習していましたか？）\n\n【正解の訳】\n3. 女の子の姉（妹）。\n\n【解説】My sister was practicing the piano と述べています。", 
    dialogue: [{ speaker: 'female', text: "My sister was practicing the piano, so I asked my mother for help." }, { speaker: 'narrator', text: "Question. Who was practicing the piano?" }], 
    aud_complete: "Who was practicing the piano? The girl’s sister." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-2 No.27】(⚡速UP)", 
    opt: ["One book.", "Two books.", "Three books.", "Four books."], 
    ans: 1, 
    explain: "【英文】\nAlice can read one book in three hours. She reads two books every week.\n\n【英文の訳】\nアリスは3時間で本を1冊読むことができます。彼女は毎週2冊の本を読みます。\n\n【質問】How many books does Alice read every week?\n（アリスは毎週何冊の本を読みますか？）\n\n【正解の訳】\n2. 2冊。\n\n【解説】reads two books every week（毎週2冊読む）です。", 
    dialogue: [{ speaker: 'male', text: "Alice can read one book in three hours. She reads two books every week." }, { speaker: 'narrator', text: "Question. How many books does Alice read every week?" }], 
    aud_complete: "How many books does Alice read every week? Two books." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-2 No.28】(⚡速UP)", 
    opt: ["At 3:00.", "At 3:30.", "At 4:30.", "At 5:00."], 
    ans: 0, 
    explain: "【英文】\nOlivia will go to a concert at five o’clock. She will leave her house at three o’clock.\n\n【英文の訳】\nオリビアは5時にコンサートに行きます。彼女は3時に家を出る予定です。\n\n【質問】When will Olivia leave her house?\n（オリビアはいつ家を出ますか？）\n\n【正解の訳】\n1. 3時に。\n\n【解説】leave her house at three o’clock（3時に家を出る）です。", 
    dialogue: [{ speaker: 'female', text: "Olivia will go to a concert at five o’clock. She will leave her house at three o’clock." }, { speaker: 'narrator', text: "Question. When will Olivia leave her house?" }], 
    aud_complete: "When will Olivia leave her house? At 3:00." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-2 No.29】(⚡速UP)", 
    opt: ["By bike.", "By bus.", "By taxi.", "On foot."], 
    ans: 3, 
    explain: "【英文】\nIt snowed a lot, so I couldn’t ride my bike or take a bus. I had to walk to his house.\n\n【英文の訳】\n雪がたくさん降ったので、自転車に乗ることもバスに乗ることもできませんでした。彼（おじ）の家まで歩かなければなりませんでした。\n\n【質問】How did the boy go to his uncle’s house?\n（男の子はどうやっておじさんの家に行きましたか？）\n\n【正解の訳】\n4. 徒歩で。\n\n【解説】had to walk（歩かなければならなかった）ので On foot（徒歩で）です。", 
    dialogue: [{ speaker: 'male', text: "It snowed a lot, so I couldn’t ride my bike or take a bus. I had to walk to his house." }, { speaker: 'narrator', text: "Question. How did the boy go to his uncle’s house?" }], 
    aud_complete: "How did the boy go to his uncle’s house? On foot." 
  },
  { 
    q: "音声を聞いて、質問に答えよう。", 
    sub: "🎧 【2025-2 No.30】(⚡速UP)", 
    opt: ["Make a song.", "Join a music school.", "Meet a singer.", "Go to a concert."], 
    ans: 1, 
    explain: "【英文】\nI want to be a singer in the future, so I decided to join a music school next month.\n\n【英文の訳】\n私は将来歌手になりたいので、来月音楽学校に入ることに決めました。\n\n【質問】What will the girl do next month?\n（女の子は来月何をしますか？）\n\n【正解の訳】\n2. 音楽学校に入ること。\n\n【解説】decided to join a music school（音楽学校に入ることを決めた）と述べています。", 
    dialogue: [{ speaker: 'female', text: "I want to be a singer in the future, so I decided to join a music school next month." }, { speaker: 'narrator', text: "Question. What will the girl do next month?" }], 
    aud_complete: "What will the girl do next month? Join a music school." 
  }
];
// ==================== 4. 本番過去問模試 データベース (全130問) ====================
const ACTUAL_PAST_EXAM_DATA = [
  // ---------- 第1弾 (No.1 〜 No.25) ----------
  {
    id: "past_1",
    type: "grammar",
    q: "I went to the library to ( ) some books.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["borrow", "borrows", "borrowed", "borrowing"],
    ans: 0,
    explain: "【解説】「本を借りるために（不定詞の副詞的用法）」は〈to ＋ 動詞の原形〉で表します。to の後ろなので原形の borrow が正解です。\n\n【訳】私は何冊か本を借りるために図書館へ行きました。",
    audio_question: "I went to the library to ... some books.",
    audio_complete: "I went to the library to borrow some books."
  },
  {
    id: "past_2",
    type: "grammar",
    q: "Ken is ( ) than his older brother.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["tall", "taller", "tallest", "more tall"],
    ans: 1,
    explain: "【解説】後ろに than（〜よりも）があるため、比較級の taller が正解です。\n\n【訳】ケンはお兄さんよりも背が高いです。",
    audio_question: "Ken is ... than his older brother.",
    audio_complete: "Ken is taller than his older brother."
  },
  {
    id: "past_3",
    type: "grammar",
    q: "A: ( ) did you buy this camera?\nB: Last week.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["Where", "When", "Who", "Which"],
    ans: 1,
    explain: "【解説】相手が Last week（先週）と「時」を答えているため、「いつ」を尋ねる When が正解です。\n\n【訳】A: いつこのカメラを買ったのですか？\nB: 先週です。",
    audio_question: "When did you buy this camera?",
    audio_complete: "When did you buy this camera? Last week."
  },
  {
    id: "past_4",
    type: "grammar",
    q: "My sister enjoys ( ) pictures on weekends.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["take", "takes", "taking", "took"],
    ans: 2,
    explain: "【解説】enjoy（楽しむ）の後ろには動名詞（〜ing）が続きます。正解は taking です。\n\n【訳】私の妹（姉）は週末に写真を撮ることを楽しんでいます。",
    audio_question: "My sister enjoys ... pictures on weekends.",
    audio_complete: "My sister enjoys taking pictures on weekends."
  },
  {
    id: "past_5",
    type: "grammar",
    q: "You ( ) not play soccer in the classroom.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["must", "can", "will", "have"],
    ans: 0,
    explain: "【解説】「教室でサッカーをしてはいけません（強い禁止）」を表すには must not を使います。\n\n【訳】教室でサッカーをしてはいけません。",
    audio_question: "You must not play soccer in the classroom.",
    audio_complete: "You must not play soccer in the classroom."
  },
  {
    id: "past_6",
    type: "grammar",
    q: "A: May I speak to Ms. Green, please?\nB: ( ), please. I'll call her.",
    sub: "⚔️ 本番過去問 (会話文応答)",
    options: ["Hold on", "Hurry up", "Look out", "Take off"],
    ans: 0,
    explain: "【解説】電話で「少々お待ちください」と伝える定番表現は Hold on, please. です。\n\n【訳】A: グリーン先生とお話しできますか？\nB: 少々お待ちください。呼んでまいります。",
    audio_question: "May I speak to Ms. Green, please?",
    audio_complete: "Hold on, please. I'll call her."
  },
  {
    id: "past_7",
    type: "grammar",
    q: "We arrived ( ) the station at nine o'clock.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["at", "on", "with", "for"],
    ans: 0,
    explain: "【解説】「（駅や学校など特定の地点に）到着する」は arrive at 〜 を用います。\n\n【訳】私たちは9時に駅に到着しました。",
    audio_question: "We arrived ... the station at nine o'clock.",
    audio_complete: "We arrived at the station at nine o'clock."
  },
  {
    id: "past_8",
    type: "grammar",
    q: "It is important ( ) English every day.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["practice", "to practice", "practiced", "practicing"],
    ans: 1,
    explain: "【解説】〈It is ＋ 形容詞 ＋ to ＋ 動詞の原形〉で「〜することは…だ」を表す構文です。正解は to practice です。\n\n【訳】毎日英語を練習することは大切です。",
    audio_question: "It is important ... English every day.",
    audio_complete: "It is important to practice English every day."
  },
  {
    id: "past_9",
    type: "grammar",
    q: "Mt. Fuji is the ( ) mountain in Japan.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["high", "higher", "highest", "most high"],
    ans: 2,
    explain: "【解説】the と in Japan（日本で）があるため、最上級の highest（最も高い）が正解です。\n\n【訳】富士山は日本で最も高い山です。",
    audio_question: "Mt. Fuji is the ... mountain in Japan.",
    audio_complete: "Mt. Fuji is the highest mountain in Japan."
  },
  {
    id: "past_10",
    type: "grammar",
    q: "I will ( ) to Okinawa with my family next summer.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["go", "goes", "went", "going"],
    ans: 0,
    explain: "【解説】助動詞 will の後ろには動詞の原形が続きます。正解は go です。\n\n【訳】私は来年の夏、家族と沖縄に行くつもりです。",
    audio_question: "I will ... to Okinawa with my family next summer.",
    audio_complete: "I will go to Okinawa with my family next summer."
  },
  {
    id: "past_11",
    type: "grammar",
    q: "She was ( ) dinner when I called her.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["cook", "cooks", "cooked", "cooking"],
    ans: 3,
    explain: "【解説】過去進行形〈was ＋ 動詞の ing 形〉で「〜しているところだった」を表します。正解は cooking です。\n\n【訳】私が電話したとき、彼女は夕食を作っているところでした。",
    audio_question: "She was ... dinner when I called her.",
    audio_complete: "She was cooking dinner when I called her."
  },
  {
    id: "past_12",
    type: "grammar",
    q: "A: ( ) bag is this?\nB: It's mine.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["Whose", "What", "Why", "How"],
    ans: 0,
    explain: "【解説】Bが It's mine（私のです）と持ち主を答えているため、「誰の〜」を尋ねる Whose が正解です。\n\n【訳】A: これは誰のかばんですか？\nB: 私のです。",
    audio_question: "Whose bag is this?",
    audio_complete: "Whose bag is this? It's mine."
  },
  {
    id: "past_13",
    type: "grammar",
    q: "My mother made ( ) a delicious cake.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["me", "my", "mine", "I"],
    ans: 0,
    explain: "【解説】〈make ＋ 人 ＋ もの〉で「人にものを作ってあげる」を表します。「私に」にあたる目的格の me が正解です。\n\n【訳】母は私においしいケーキを作ってくれました。",
    audio_question: "My mother made ... a delicious cake.",
    audio_complete: "My mother made me a delicious cake."
  },
  {
    id: "past_14",
    type: "grammar",
    q: "I didn't go to school yesterday ( ) I had a cold.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["so", "because", "if", "but"],
    ans: 1,
    explain: "【解説】後ろに「風邪をひいていた」という理由が続いているため、「なぜなら〜だから」を表す接続詞 because が正解です。\n\n【訳】私は風邪をひいていたので、昨日は学校に行きませんでした。",
    audio_question: "I didn't go to school yesterday ... I had a cold.",
    audio_complete: "I didn't go to school yesterday because I had a cold."
  },
  {
    id: "past_15",
    type: "grammar",
    q: "Tom wants ( ) a doctor in the future.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["be", "is", "to be", "being"],
    ans: 2,
    explain: "【解説】「〜になりたい」は〈want to be 〜〉で表します。正解は to be です。\n\n【訳】トムは将来、医者になりたいと思っています。",
    audio_question: "Tom wants ... a doctor in the future.",
    audio_complete: "Tom wants to be a doctor in the future."
  },
  {
    id: "past_16",
    type: "grammar",
    q: "A: Thank you for helping me with my homework.\nB: ( ).",
    sub: "⚔️ 本番過去問 (会話文応答)",
    options: ["You're welcome", "I'm sorry", "Never mind", "Me, too"],
    ans: 0,
    explain: "【解説】お礼（Thank you 〜）に対する返答は You're welcome.（どういたしまして）が適切です。\n\n【訳】A: 宿題を手伝ってくれてありがとう。\nB: どういたしまして。",
    audio_question: "Thank you for helping me with my homework.",
    audio_complete: "You're welcome."
  },
  {
    id: "past_17",
    type: "grammar",
    q: "We decided ( ) the museum this afternoon.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["visit", "to visit", "visited", "visiting"],
    ans: 1,
    explain: "【解説】decide（決める）の後ろには不定詞〈to ＋ 動詞の原形〉が続きます。正解は to visit です。\n\n【訳】私たちは今日の午後、博物館を訪れることに決めました。",
    audio_question: "We decided ... the museum this afternoon.",
    audio_complete: "We decided to visit the museum this afternoon."
  },
  {
    id: "past_18",
    type: "grammar",
    q: "( ) there any dogs in the park yesterday?",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["Are", "Is", "Was", "Were"],
    ans: 3,
    explain: "【解説】yesterday（昨日）があり、主語が dogs（複数形）なので、過去形・複数の Were が正解です。\n\n【訳】昨日、公園に犬はいましたか？",
    audio_question: "Were there any dogs in the park yesterday?",
    audio_complete: "Were there any dogs in the park yesterday?"
  },
  {
    id: "past_19",
    type: "grammar",
    q: "My brother is good ( ) playing the piano.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["at", "on", "in", "to"],
    ans: 0,
    explain: "【解説】「〜が得意である」は熟語 be good at 〜 で表します。\n\n【訳】私の兄（弟）はピアノを弾くのが得意です。",
    audio_question: "My brother is good ... playing the piano.",
    audio_complete: "My brother is good at playing the piano."
  },
  {
    id: "past_20",
    type: "grammar",
    q: "A: How ( ) is that new computer?\nB: It's about 50,000 yen.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["many", "much", "long", "old"],
    ans: 1,
    explain: "【解説】値段（50,000 yen）を尋ねる表現は How much です。\n\n【訳】A: あの新しいコンピュータはいくらですか？\nB: 約5万円です。",
    audio_question: "How much is that new computer?",
    audio_complete: "How much is that new computer? It's about 50,000 yen."
  },
  {
    id: "past_21",
    type: "grammar",
    q: "This movie is ( ) interesting than that one.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["more", "most", "very", "much"],
    ans: 0,
    explain: "【解説】interesting のような長い形容詞の比較級は、直前に more を置きます（more interesting than 〜）。\n\n【訳】この映画はあの映画よりも面白いです。",
    audio_question: "This movie is ... interesting than that one.",
    audio_complete: "This movie is more interesting than that one."
  },
  {
    id: "past_22",
    type: "grammar",
    q: "Please stop ( ) so loudly. The baby is sleeping.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["talk", "talks", "talking", "to talk"],
    ans: 2,
    explain: "【解説】「〜するのをやめる」は〈stop ＋ 動名詞（〜ing）〉で表します。正解は talking です。\n\n【訳】そんなに大声で話すのをやめてください。赤ちゃんが眠っています。",
    audio_question: "Please stop ... so loudly. The baby is sleeping.",
    audio_complete: "Please stop talking so loudly. The baby is sleeping."
  },
  {
    id: "past_23",
    type: "grammar",
    q: "( ) you open the door for me, please?",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["Could", "Shall", "Must", "Are"],
    ans: 0,
    explain: "【解説】人に丁寧にお願いするときは Could you 〜?（〜していただけますか？）を用います。\n\n【訳】ドアを開けていただけますか？",
    audio_question: "Could you open the door for me, please?",
    audio_complete: "Could you open the door for me, please?"
  },
  {
    id: "past_24",
    type: "grammar",
    q: "I have a lot of things ( ) today.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["do", "does", "to do", "did"],
    ans: 2,
    explain: "【解説】「今日やるべきこと（不定詞の形容詞的用法）」は things to do で表します。\n\n【訳】私は今日、やるべきことがたくさんあります。",
    audio_question: "I have a lot of things ... today.",
    audio_complete: "I have a lot of things to do today."
  },
  {
    id: "past_25",
    type: "grammar",
    q: "A: Would you like another cup of tea?\nB: No, thank you. ( ).",
    sub: "⚔️ 本番過去問 (会話文応答)",
    options: ["I'm hungry", "I'm full", "I'm late", "I'm busy"],
    ans: 1,
    explain: "【解説】お代わりの勧めを断る理由として、「お腹いっぱいです（満足です）」を表す I'm full. が適切です。\n\n【訳】A: お茶をもう一杯いかがですか？\nB: いいえ、結構です。お腹がいっぱいです。",
    audio_question: "Would you like another cup of tea?",
    audio_complete: "No, thank you. I'm full."
  },
  // ---------- 第2弾 (No.26 〜 No.50) ----------
  {
    id: "past_26",
    type: "grammar",
    q: "I have to ( ) my room before dinner.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["clean", "cleans", "cleaned", "cleaning"],
    ans: 0,
    explain: "【解説】義務を表す〈have to ＋ 動詞の原形〉（〜しなければならない）の形です。to の後ろなので原形の clean が正解です。\n\n【訳】私は夕食の前に部屋を掃除しなければなりません。",
    audio_question: "I have to ... my room before dinner.",
    audio_complete: "I have to clean my room before dinner."
  },
  {
    id: "past_27",
    type: "grammar",
    q: "A: ( ) you ever been to Kyoto?\nB: Yes, twice.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["Have", "Did", "Do", "Are"],
    ans: 0,
    explain: "【解説】過去の経験「〜に行ったことがありますか」を尋ねる〈Have you ever been to 〜?〉の定番表現です。\n\n【訳】A: 京都に行ったことがありますか？\nB: はい、2回あります。",
    audio_question: "Have you ever been to Kyoto?",
    audio_complete: "Have you ever been to Kyoto? Yes, twice."
  },
  {
    id: "past_28",
    type: "grammar",
    q: "This book is as ( ) as that one.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["useful", "more useful", "most useful", "usefully"],
    ans: 0,
    explain: "【解説】同等比較〈as ＋ 原級 ＋ as〉（同じくらい〜）では、形容詞の原級（useful）を挟みます。\n\n【訳】この本はあの本と同じくらい役に立ちます。",
    audio_question: "This book is as ... as that one.",
    audio_complete: "This book is as useful as that one."
  },
  {
    id: "past_29",
    type: "grammar",
    q: "A: How about ( ) a movie this Saturday?\nB: Sounds great!",
    sub: "⚔️ 本番過去問 (会話文応答)",
    options: ["watch", "watches", "watched", "watching"],
    ans: 3,
    explain: "【解説】提案を表す〈How about ＋ 動名詞（〜ing）?〉（〜するのはどうですか？）を用います。正解は watching です。\n\n【訳】A: 今週の土曜日に映画を見るのはどう？\nB: いいね！",
    audio_question: "How about watching a movie this Saturday?",
    audio_complete: "How about watching a movie this Saturday? Sounds great!"
  },
  {
    id: "past_30",
    type: "grammar",
    q: "My father told me ( ) up early tomorrow.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["get", "gets", "to get", "getting"],
    ans: 2,
    explain: "【解説】〈tell ＋ 人 ＋ to ＋ 動詞の原形〉で「人に〜するように言う」を表します。正解は to get です。\n\n【訳】父は私に明日早く起きるように言いました。",
    audio_question: "My father told me ... up early tomorrow.",
    audio_complete: "My father told me to get up early tomorrow."
  },
  {
    id: "past_31",
    type: "grammar",
    q: "She looked ( ) when she heard the news.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["happy", "happily", "happiness", "happier"],
    ans: 0,
    explain: "【解説】〈look ＋ 形容詞〉で「〜そうに見える」を表します。直後に置くのは形容詞の happy です。\n\n【訳】その知らせを聞いたとき、彼女は嬉しそうに見えました。",
    audio_question: "She looked ... when she heard the news.",
    audio_complete: "She looked happy when she heard the news."
  },
  {
    id: "past_32",
    type: "grammar",
    q: "I am looking forward to ( ) you next week.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["see", "saw", "seeing", "seen"],
    ans: 2,
    explain: "【解説】熟語 look forward to 〜（〜を楽しみに待つ）の to は前置詞なので、後ろには動名詞（seeing）が続きます。\n\n【訳】来週あなたにお会いできるのを楽しみにしています。",
    audio_question: "I am looking forward to ... you next week.",
    audio_complete: "I am looking forward to seeing you next week."
  },
  {
    id: "past_33",
    type: "grammar",
    q: "A: What time does the train ( )?\nB: At ten thirty.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["leave", "leaves", "left", "leaving"],
    ans: 0,
    explain: "【解説】助動詞 does を使った疑問文では、動詞は原形（leave）になります。\n\n【訳】A: 電車は何時に出発しますか？\nB: 10時30分です。",
    audio_question: "What time does the train leave?",
    audio_complete: "What time does the train leave? At ten thirty."
  },
  {
    id: "past_34",
    type: "grammar",
    q: "He didn't know ( ) to use this camera.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["what", "how", "who", "which"],
    ans: 1,
    explain: "【解説】「カメラの使い方（どのように使うべきか）」は〈how to ＋ 動詞の原形〉で表します。\n\n【訳】彼はこのカメラの使い方を知りませんでした。",
    audio_question: "He didn't know ... to use this camera.",
    audio_complete: "He didn't know how to use this camera."
  },
  {
    id: "past_35",
    type: "grammar",
    q: "A: Can I help you?\nB: ( ). I'm just looking.",
    sub: "⚔️ 本番過去問 (会話文応答)",
    options: ["No, thank you", "Yes, please", "Here you are", "Of course"],
    ans: 0,
    explain: "【解説】お店で店員から「いらっしゃいませ」と声をかけられ、「見てるだけです」と断る定番の返答は No, thank you. です。\n\n【訳】A: いらっしゃいませ（何かお手伝いしましょうか？）。\nB: いいえ、結構です。見ているだけです。",
    audio_question: "Can I help you?",
    audio_complete: "No, thank you. I'm just looking."
  },
  {
    id: "past_36",
    type: "grammar",
    q: "We must ( ) quiet in the hospital.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["be", "is", "are", "were"],
    ans: 0,
    explain: "【解説】助動詞 must の後ろには動詞の原形が続きます。be動詞の原形は be です。\n\n【訳】病院では静かにしていなければなりません。",
    audio_question: "We must ... quiet in the hospital.",
    audio_complete: "We must be quiet in the hospital."
  },
  {
    id: "past_37",
    type: "grammar",
    q: "English is ( ) in many countries around the world.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["speak", "speaks", "spoke", "spoken"],
    ans: 3,
    explain: "【解説】「英語は〜で話されている（受動態）」は〈be動詞 ＋ 過去分詞〉で表します。speak の過去分詞は spoken です。\n\n【訳】英語は世界中の多くの国で話されています。",
    audio_question: "English is ... in many countries around the world.",
    audio_complete: "English is spoken in many countries around the world."
  },
  {
    id: "past_38",
    type: "grammar",
    q: "I was born ( ) August 15th, 2012.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["in", "at", "on", "by"],
    ans: 2,
    explain: "【解説】特定の日付（8月15日）の前には前置詞 on を用います。\n\n【訳】私は2012年8月15日に生まれました。",
    audio_question: "I was born ... August 15th, 2012.",
    audio_complete: "I was born on August 15th, 2012."
  },
  {
    id: "past_39",
    type: "grammar",
    q: "A: Which do you like ( ), summer or winter?\nB: I like winter better.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["good", "well", "better", "best"],
    ans: 2,
    explain: "【解説】2つのうち「どちらがより好きか」を比較して尋ねるため、better が正解です。\n\n【訳】A: 夏と冬ではどちらが好きですか？\nB: 冬のほうが好きです。",
    audio_question: "Which do you like better, summer or winter?",
    audio_complete: "Which do you like better, summer or winter? I like winter better."
  },
  {
    id: "past_40",
    type: "grammar",
    q: "If it ( ) sunny tomorrow, we will go to the zoo.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["is", "will be", "was", "be"],
    ans: 0,
    explain: "【解説】条件を表す if 節の中では、未来のことであっても現在形（is）を使います。\n\n【訳】もし明日晴れたら、私たちは動物園に行きます。",
    audio_question: "If it ... sunny tomorrow, we will go to the zoo.",
    audio_complete: "If it is sunny tomorrow, we will go to the zoo."
  },
  {
    id: "past_41",
    type: "grammar",
    q: "A: I passed the English test!\nB: ( )!",
    sub: "⚔️ 本番過去問 (会話文応答)",
    options: ["Congratulations", "Good luck", "Excuse me", "Pardon me"],
    ans: 0,
    explain: "【解説】試験合格などの喜ばしい報告に対して「おめでとう！」と祝福する表現は Congratulations! です。\n\n【訳】A: 英語のテストに合格したよ！\nB: おめでとう！",
    audio_question: "I passed the English test!",
    audio_complete: "Congratulations!"
  },
  {
    id: "past_42",
    type: "grammar",
    q: "My grandfather gave this watch ( ) me.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["to", "for", "with", "at"],
    ans: 0,
    explain: "【解説】〈give ＋ もの ＋ to ＋ 人〉で「人にものをあげる」を表します。\n\n【訳】祖父が私にこの腕時計をくれました。",
    audio_question: "My grandfather gave this watch ... me.",
    audio_complete: "My grandfather gave this watch to me."
  },
  {
    id: "past_43",
    type: "grammar",
    q: "Lucy is the ( ) student in our class.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["smart", "smarter", "smartest", "most smart"],
    ans: 2,
    explain: "【解説】the と in our class（私たちのクラスで）があるため、最上級の smartest が正解です。\n\n【訳】ルーシーは私たちのクラスで最も頭が良い生徒です。",
    audio_question: "Lucy is the ... student in our class.",
    audio_complete: "Lucy is the smartest student in our class."
  },
  {
    id: "past_44",
    type: "grammar",
    q: "I am ( ) because I worked all day.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["tire", "tired", "tiring", "tiredly"],
    ans: 1,
    explain: "【解説】人が「疲れている」状態を表す形容詞は tired です。\n\n【訳】一日中働いたので、私は疲れています。",
    audio_question: "I am ... because I worked all day.",
    audio_complete: "I am tired because I worked all day."
  },
  {
    id: "past_45",
    type: "grammar",
    q: "A: Shall we meet at the station at ten?\nB: ( ). See you then.",
    sub: "⚔️ 本番過去問 (会話文応答)",
    options: ["All right", "Not yet", "Never mind", "You're welcome"],
    ans: 0,
    explain: "【解説】待ち合わせの提案に対して「了解です／分かりました」と同意する表現は All right. です。\n\n【訳】A: 10時に駅で会いましょうか？\nB: 了解です。ではその時に。",
    audio_question: "Shall we meet at the station at ten?",
    audio_complete: "All right. See you then."
  },
  {
    id: "past_46",
    type: "grammar",
    q: "He ( ) his homework before he went to bed.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["finish", "finishes", "finished", "finishing"],
    ans: 2,
    explain: "【解説】文全体の時制が過去（went to bed）なので、動詞も過去形の finished にします。\n\n【訳】彼は寝る前に宿題を終わらせました。",
    audio_question: "He ... his homework before he went to bed.",
    audio_complete: "He finished his homework before he went to bed."
  },
  {
    id: "past_47",
    type: "grammar",
    q: "A: ( ) is your favorite subject?\nB: Science.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["What", "Who", "Where", "When"],
    ans: 0,
    explain: "【解説】好きな科目（もの・事柄）を尋ねているため、What が正解です。\n\n【訳】A: あなたの好きな科目は何ですか？\nB: 理科です。",
    audio_question: "What is your favorite subject?",
    audio_complete: "What is your favorite subject? Science."
  },
  {
    id: "past_48",
    type: "grammar",
    q: "Thank you for ( ) me such a wonderful letter.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["send", "sends", "sent", "sending"],
    ans: 3,
    explain: "【解説】前置詞 for の後ろには動名詞（〜ing）が続きます。正解は sending です。\n\n【訳】こんなに素晴らしい手紙を送ってくれてありがとう。",
    audio_question: "Thank you for ... me such a wonderful letter.",
    audio_complete: "Thank you for sending me such a wonderful letter."
  },
  {
    id: "past_49",
    type: "grammar",
    q: "There ( ) many people in the park this morning.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["is", "are", "was", "were"],
    ans: 3,
    explain: "【解説】this morning（今朝＝過去）の出来事で、主語が many people（複数）なので were が正解です。\n\n【訳】今朝、公園にはたくさんの人がいました。",
    audio_question: "There were many people in the park this morning.",
    audio_complete: "There were many people in the park this morning."
  },
  {
    id: "past_50",
    type: "grammar",
    q: "A: What's the matter with you?\nB: I have a bad ( ).",
    sub: "⚔️ 本番過去問 (会話文応答)",
    options: ["headache", "camera", "homework", "station"],
    ans: 0,
    explain: "【解説】「どうしたのですか？（体調の尋ね）」に対して症状を答えるため、headache（頭痛）が適切です。\n\n【訳】A: どうしたのですか？\nB: ひどい頭痛がします。",
    audio_question: "What's the matter with you?",
    audio_complete: "I have a bad headache."
  },
  // ---------- 第3弾 (No.51 〜 No.75) ----------
  {
    id: "past_51",
    type: "grammar",
    q: "I was listening to music ( ) my brother opened the door.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["when", "which", "because", "so"],
    ans: 0,
    explain: "【解説】「兄がドアを開けたとき」という時を表す接続詞 when が正解です。\n\n【訳】兄がドアを開けたとき、私は音楽を聴いているところでした。",
    audio_question: "I was listening to music ... my brother opened the door.",
    audio_complete: "I was listening to music when my brother opened the door."
  },
  {
    id: "past_52",
    type: "grammar",
    q: "Would you like something ( )? It's very hot today.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["drink", "drinks", "to drink", "drinking"],
    ans: 2,
    explain: "【解説】「何か冷たい飲み物（飲むための何か）」は〈something ＋ to ＋ 動詞の原形〉で表します。正解は to drink です。\n\n【訳】何か飲むものはいかがですか？ 今日はとても暑いですね。",
    audio_question: "Would you like something ...? It's very hot today.",
    audio_complete: "Would you like something to drink? It's very hot today."
  },
  {
    id: "past_53",
    type: "grammar",
    q: "Mr. Davis usually goes to work ( ) train.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["in", "on", "by", "with"],
    ans: 2,
    explain: "【解説】交通手段「電車で」を表すときは〈by ＋ 交通機関（無冠詞）〉を用います。正解は by です。\n\n【訳】デイビス先生は普段、電車で仕事に行きます。",
    audio_question: "Mr. Davis usually goes to work ... train.",
    audio_complete: "Mr. Davis usually goes to work by train."
  },
  {
    id: "past_54",
    type: "grammar",
    q: "( ) I carry that heavy bag for you?",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["Shall", "Will", "Must", "Are"],
    ans: 0,
    explain: "【解説】「（私が）〜しましょうか？」と申し出るときは〈Shall I ＋ 動詞の原形?〉を用います。\n\n【訳】その重いかばんをお持ちしましょうか？",
    audio_question: "Shall I carry that heavy bag for you?",
    audio_complete: "Shall I carry that heavy bag for you?"
  },
  {
    id: "past_55",
    type: "grammar",
    q: "This test was ( ) difficult than the last one.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["more", "most", "much", "very"],
    ans: 0,
    explain: "【解説】後ろに than（〜よりも）があり、difficult は長い形容詞のため more を前に置いて比較級を作ります。\n\n【訳】このテストは前回のものよりも難しかったです。",
    audio_question: "This test was ... difficult than the last one.",
    audio_complete: "This test was more difficult than the last one."
  },
  {
    id: "past_56",
    type: "grammar",
    q: "He gave up ( ) the guitar because it was too difficult.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["play", "plays", "played", "playing"],
    ans: 3,
    explain: "【解説】give up（あきらめる）の後ろには動名詞（〜ing）が続きます。正解は playing です。\n\n【訳】あまりに難しかったので、彼はギターを弾くのを諦めました。",
    audio_question: "He gave up ... the guitar because it was too difficult.",
    audio_complete: "He gave up playing the guitar because it was too difficult."
  },
  {
    id: "past_57",
    type: "grammar",
    q: "My sister is very interested ( ) Japanese history.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["at", "in", "on", "for"],
    ans: 1,
    explain: "【解説】「〜に興味・関心がある」は熟語 be interested in 〜 で表します。\n\n【訳】私の妹（姉）は日本の歴史にとても興味があります。",
    audio_question: "My sister is very interested ... Japanese history.",
    audio_complete: "My sister is very interested in Japanese history."
  },
  {
    id: "past_58",
    type: "grammar",
    q: "A: Can you pass me the salt, please?\nB: Sure. ( ).",
    sub: "⚔️ 本番過去問 (会話文応答)",
    options: ["Here you are", "Here is it", "You are here", "It is here"],
    ans: 0,
    explain: "【解説】物を手渡すときの定番表現は Here you are.（はい、どうぞ）です。\n\n【訳】A: 塩を取っていただけますか？\nB: もちろん。はい、どうぞ。",
    audio_question: "Can you pass me the salt, please?",
    audio_complete: "Sure. Here you are."
  },
  {
    id: "past_59",
    type: "grammar",
    q: "How long does it take ( ) to the airport by bus?",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["get", "got", "to get", "getting"],
    ans: 2,
    explain: "【解説】「〜するのに（時間が）かかる」は〈It takes ＋ 時間 ＋ to ＋ 動詞の原形〉で表します。正解は to get です。\n\n【訳】バスで空港に行くのにどのくらい時間がかかりますか？",
    audio_question: "How long does it take ... to the airport by bus?",
    audio_complete: "How long does it take to get to the airport by bus?"
  },
  {
    id: "past_60",
    type: "grammar",
    q: "We have to ( ) off the bus at the next stop.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["get", "gets", "got", "getting"],
    ans: 0,
    explain: "【解説】have to の後ろは動詞の原形が続きます。また get off 〜 で「（バス・電車を）降りる」という重要熟語です。\n\n【訳】私たちは次の停留所でバスを降りなければなりません。",
    audio_question: "We have to ... off the bus at the next stop.",
    audio_complete: "We have to get off the bus at the next stop."
  },
  {
    id: "past_61",
    type: "grammar",
    q: "A: ( ) is the weather like in Tokyo today?\nB: It's cloudy.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["What", "How", "When", "Where"],
    ans: 0,
    explain: "【解説】天気を尋ねる〈What is the weather like?〉（天気はどうですか？）の構文です（※How is the weather? と同じ意味）。\n\n【訳】A: 今日の東京の天気はどうですか？\nB: 曇りです。",
    audio_question: "What is the weather like in Tokyo today?",
    audio_complete: "What is the weather like in Tokyo today? It's cloudy."
  },
  {
    id: "past_62",
    type: "grammar",
    q: "The students are ( ) in the schoolyard now.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["run", "ran", "running", "runs"],
    ans: 2,
    explain: "【解説】now があり、現在進行形〈are ＋ 動詞の ing 形〉の文です。run は n を重ねて running になります。\n\n【訳】生徒たちは今、校庭を走っています。",
    audio_question: "The students are ... in the schoolyard now.",
    audio_complete: "The students are running in the schoolyard now."
  },
  {
    id: "past_63",
    type: "grammar",
    q: "A: Have you finished your lunch?\nB: No, not ( ).",
    sub: "⚔️ 本番過去問 (会話文応答)",
    options: ["already", "yet", "still", "just"],
    ans: 1,
    explain: "【解説】否定の返答で「まだ〜ない」を表すときは not yet を用います。\n\n【訳】A: お昼ご飯はもう食べ終わった？\nB: ううん、まだだよ。",
    audio_question: "Have you finished your lunch?",
    audio_complete: "No, not yet."
  },
  {
    id: "past_64",
    type: "grammar",
    q: "She asked me ( ) help her with the dishes.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["to", "for", "with", "at"],
    ans: 0,
    explain: "【解説】〈ask ＋ 人 ＋ to ＋ 動詞の原形〉で「人に〜するよう頼む」を表します。正解は to です。\n\n【訳】彼女は私にお皿洗いを手伝ってくれるよう頼みました。",
    audio_question: "She asked me ... help her with the dishes.",
    audio_complete: "She asked me to help her with the dishes."
  },
  {
    id: "past_65",
    type: "grammar",
    q: "A: Where is the nearest post office?\nB: Go straight. It's ( ) your right.",
    sub: "⚔️ 本番過去問 (会話文応答)",
    options: ["in", "at", "on", "to"],
    ans: 2,
    explain: "【解説】道案内で「あなたの右手にあります」と言うときは前置詞 on を用いて on your right と言います。\n\n【訳】A: 最寄りの郵便局はどこですか？\nB: まっすぐ行ってください。右手にあります。",
    audio_question: "Where is the nearest post office?",
    audio_complete: "Go straight. It's on your right."
  },
  {
    id: "past_66",
    type: "grammar",
    q: "My grandfather is three years ( ) than my grandmother.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["old", "older", "oldest", "elder"],
    ans: 1,
    explain: "【解説】than があるため比較級の older を用いて「3歳年上だ」を表します。\n\n【訳】私の祖父は祖母より3歳年上です。",
    audio_question: "My grandfather is three years ... than my grandmother.",
    audio_complete: "My grandfather is three years older than my grandmother."
  },
  {
    id: "past_67",
    type: "grammar",
    q: "I stayed at home all day ( ) of the heavy rain.",
    sub: "⚔️ 本番理由 (短文空所補充)",
    options: ["because", "so", "why", "if"],
    ans: 0,
    explain: "【解説】後ろに名詞句（the heavy rain）があるため、〈because of ＋ 名詞〉（〜が原因で／〜のために）の形になります。\n\n【訳】大雨のため、私は一日中家にいました。",
    audio_question: "I stayed at home all day ... of the heavy rain.",
    audio_complete: "I stayed at home all day because of the heavy rain."
  },
  {
    id: "past_68",
    type: "grammar",
    q: "A: Have a nice weekend!\nB: ( )!",
    sub: "⚔️ 本番過去問 (会話文応答)",
    options: ["You, too", "Me, neither", "Yes, please", "I agree"],
    ans: 0,
    explain: "【解説】「良い週末を！」という挨拶に対して「あなたもね！」と返す表現は You, too! です。\n\n【訳】A: 良い週末を！\nB: あなたもね！",
    audio_question: "Have a nice weekend!",
    audio_complete: "You, too!"
  },
  {
    id: "past_69",
    type: "grammar",
    q: "She wants to learn how ( ) French food.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["cook", "cooks", "to cook", "cooking"],
    ans: 2,
    explain: "【解説】「料理の作り方」は〈how to ＋ 動詞の原形〉（how to cook）で表します。\n\n【訳】彼女はフランス料理の作り方を学びたいと思っています。",
    audio_question: "She wants to learn how ... French food.",
    audio_complete: "She wants to learn how to cook French food."
  },
  {
    id: "past_70",
    type: "grammar",
    q: "My brother bought two ( ) of shoes yesterday.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["pair", "pairs", "piece", "pieces"],
    ans: 1,
    explain: "【解説】靴の数え方は pair を用います。2足（複数）なので two pairs of shoes となります。\n\n【訳】私の兄（弟）は昨日、靴を2足買いました。",
    audio_question: "My brother bought two ... of shoes yesterday.",
    audio_complete: "My brother bought two pairs of shoes yesterday."
  },
  {
    id: "past_71",
    type: "grammar",
    q: "A: Did you see Ken today?\nB: No, I didn't see ( ) today.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["he", "his", "him", "himself"],
    ans: 2,
    explain: "【解説】動詞 see の目的語になるため、男性の目的格 him（彼を）が正解です。\n\n【訳】A: 今日ケンを見かけた？\nB: ううん、今日は彼を見かけなかったよ。",
    audio_question: "Did you see Ken today?",
    audio_complete: "No, I didn't see him today."
  },
  {
    id: "past_72",
    type: "grammar",
    q: "It takes about twenty minutes ( ) to the station.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["walk", "walks", "to walk", "walking"],
    ans: 2,
    explain: "【解説】〈It takes ＋ 時間 ＋ to ＋ 動詞の原形〉で「駅まで歩くのに約20分かかる」を表します。正解は to walk です。\n\n【訳】駅まで歩いて約20分かかります。",
    audio_question: "It takes about twenty minutes ... to the station.",
    audio_complete: "It takes about twenty minutes to walk to the station."
  },
  {
    id: "past_73",
    type: "grammar",
    q: "Please take ( ) of yourself during the cold winter.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["care", "look", "time", "part"],
    ans: 0,
    explain: "【解説】「お体に気をつけて／お大事に」を表す決まり文句は take care of 〜 です。\n\n【訳】寒い冬の間、体に気をつけて過ごしてください。",
    audio_question: "Please take ... of yourself during the cold winter.",
    audio_complete: "Please take care of yourself during the cold winter."
  },
  {
    id: "past_74",
    type: "grammar",
    q: "A: Let's go to the art museum tomorrow.\nB: ( ). What time shall we meet?",
    sub: "⚔️ 本番過去問 (会話文応答)",
    options: ["Good idea", "I'm sorry", "Not at all", "Excuse me"],
    ans: 0,
    explain: "【解説】相手の誘い（Let's 〜）に快く賛成する表現は Good idea.（いい考えですね）が適切です。\n\n【訳】A: 明日美術館に行こうよ。\nB: いいね！ 何時に会おうか？",
    audio_question: "Let's go to the art museum tomorrow.",
    audio_complete: "Good idea. What time shall we meet?"
  },
  {
    id: "past_75",
    type: "grammar",
    q: "This is the ( ) movie I have ever seen.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["good", "better", "best", "well"],
    ans: 2,
    explain: "【解説】the と I have ever seen（今までに見た中で）があるため、good の最上級 best（最高の）が正解です。\n\n【訳】これは私が今まで見た中で一番素晴らしい映画です。",
    audio_question: "This is the ... movie I have ever seen.",
    audio_complete: "This is the best movie I have ever seen."
  },
  // ---------- 第4弾 (No.76 〜 No.100) ----------
  {
    id: "past_76",
    type: "grammar",
    q: "My grandfather came to Japan ( ) study architecture.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["to", "for", "with", "at"],
    ans: 0,
    explain: "【解説】「建築を勉強するために（不定詞の副詞的用法）」は〈to ＋ 動詞の原形〉で表します。正解は to です。\n\n【訳】私の祖父は建築を勉強するために日本に来ました。",
    audio_question: "My grandfather came to Japan ... study architecture.",
    audio_complete: "My grandfather came to Japan to study architecture."
  },
  {
    id: "past_77",
    type: "grammar",
    q: "A: What did you do last night?\nB: I ( ) an email to my friend in Canada.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["write", "writes", "wrote", "writing"],
    ans: 2,
    explain: "【解説】last night（昨夜）の出来事なので、write の過去形 wrote が正解です。\n\n【訳】A: 昨夜は何をしましたか？\nB: カナダの友達にメールを書きました。",
    audio_question: "What did you do last night?",
    audio_complete: "I wrote an email to my friend in Canada."
  },
  {
    id: "past_78",
    type: "grammar",
    q: "( ) soccer is a lot of fun.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["Play", "Plays", "Playing", "Played"],
    ans: 2,
    explain: "【解説】文の主語として「サッカーをすること」を表すため、動名詞の Playing が正解です。\n\n【訳】サッカーをすることはとても楽しいです。",
    audio_question: "Playing soccer is a lot of fun.",
    audio_complete: "Playing soccer is a lot of fun."
  },
  {
    id: "past_79",
    type: "grammar",
    q: "He ( ) his father very much.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["looks like", "looks", "look like", "looking"],
    ans: 0,
    explain: "【解説】「〜に似ている」は〈look like ＋ 名詞〉で表します。主語が三人称単数（He）なので looks like が正解です。\n\n【訳】彼は父親によく似ています。",
    audio_question: "He ... his father very much.",
    audio_complete: "He looks like his father very much."
  },
  {
    id: "past_80",
    type: "grammar",
    q: "A: Are you ready to order?\nB: Yes. ( ) I have a cheeseburger, please?",
    sub: "⚔️ 本番過去問 (会話文応答)",
    options: ["May", "Must", "Shall", "Should"],
    ans: 0,
    explain: "【解説】注文の際「〜をいただけますか？」と丁寧に頼む表現は May I have 〜? を用います。\n\n【訳】A: ご注文はお決まりですか？\nB: はい。チーズバーガーをいただけますか？",
    audio_question: "Are you ready to order?",
    audio_complete: "Yes. May I have a cheeseburger, please?"
  },
  {
    id: "past_81",
    type: "grammar",
    q: "She ran as ( ) as she could to catch the bus.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["fast", "faster", "fastest", "fastly"],
    ans: 0,
    explain: "【解説】〈as ＋ 原級 ＋ as one can〉で「できるだけ〜」を表します。原形の fast が正解です。\n\n【訳】彼女はバスに間に合うようにできるだけ速く走りました。",
    audio_question: "She ran as ... as she could to catch the bus.",
    audio_complete: "She ran as fast as she could to catch the bus."
  },
  {
    id: "past_82",
    type: "grammar",
    q: "Don't ( ) the pictures in the museum.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["touch", "touches", "touched", "touching"],
    ans: 0,
    explain: "【解説】否定の命令文〈Don't ＋ 動詞の原形〉（〜してはいけません）の形です。正解は touch です。\n\n【訳】博物館の絵に触れてはいけません。",
    audio_question: "Don't ... the pictures in the museum.",
    audio_complete: "Don't touch the pictures in the museum."
  },
  {
    id: "past_83",
    type: "grammar",
    q: "A: ( ) is that tall man over there?\nB: He is our new English teacher.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["Who", "What", "Which", "Where"],
    ans: 0,
    explain: "【解説】人物（新しい英語の先生）について尋ねているため、Who（誰）が正解です。\n\n【訳】A: あそこにいる背の高い男の人は誰ですか？\nB: 私たちの新しい英語の先生です。",
    audio_question: "Who is that tall man over there?",
    audio_complete: "Who is that tall man over there? He is our new English teacher."
  },
  {
    id: "past_84",
    type: "grammar",
    q: "My brother decided ( ) a new computer next month.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["buy", "buys", "to buy", "buying"],
    ans: 2,
    explain: "【解説】decide の後ろには不定詞〈to ＋ 動詞の原形〉（〜することを決める）が続きます。正解は to buy です。\n\n【訳】兄（弟）は来月、新しいコンピュータを買うことに決めました。",
    audio_question: "My brother decided ... a new computer next month.",
    audio_complete: "My brother decided to buy a new computer next month."
  },
  {
    id: "past_85",
    type: "grammar",
    q: "I always brush my teeth ( ) going to bed.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["before", "during", "while", "since"],
    ans: 0,
    explain: "【解説】前置詞 before の後ろに動名詞 going が続き、「寝る前に」を表します。\n\n【訳】私はいつも寝る前に歯を磨きます。",
    audio_question: "I always brush my teeth ... going to bed.",
    audio_complete: "I always brush my teeth before going to bed."
  },
  {
    id: "past_86",
    type: "grammar",
    q: "A: How far is it from here to the station?\nB: It's about two ( ).",
    sub: "⚔️ 本番過去問 (会話文応答)",
    options: ["kilometers", "hours", "minutes", "dollars"],
    ans: 0,
    explain: "【解説】距離（How far）を尋ねられているため、距離の単位 kilometers（キロメートル）が正解です。\n\n【訳】A: ここから駅までどのくらい距離がありますか？\nB: 約2キロメートルです。",
    audio_question: "How far is it from here to the station?",
    audio_complete: "It's about two kilometers."
  },
  {
    id: "past_87",
    type: "grammar",
    q: "The news made everyone in the room ( ).",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["happy", "happily", "happiness", "happier"],
    ans: 0,
    explain: "【解説】〈make ＋ 人 ＋ 形容詞〉で「人を〜な状態にする」を表します。形容詞の happy が正解です。\n\n【訳】その知らせは部屋にいたみんなを幸せにしました。",
    audio_question: "The news made everyone in the room ...",
    audio_complete: "The news made everyone in the room happy."
  },
  {
    id: "past_88",
    type: "grammar",
    q: "Soccer is the ( ) popular sport in this school.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["most", "more", "much", "very"],
    ans: 0,
    explain: "【解説】the と in this school があり、popular の最上級を作るため the most popular となります。\n\n【訳】サッカーはこの学校で最も人気のあるスポーツです。",
    audio_question: "Soccer is the ... popular sport in this school.",
    audio_complete: "Soccer is the most popular sport in this school."
  },
  {
    id: "past_89",
    type: "grammar",
    q: "A: Would you like to come to my birthday party?\nB: ( ). Thank you for inviting me.",
    sub: "⚔️ 本番過去問 (会話文応答)",
    options: ["I'd love to", "I don't think so", "I'm busy now", "You're welcome"],
    ans: 0,
    explain: "【解説】パーティーの招待（Would you like to come 〜?）に対して「喜んで！」と受ける定番表現は I'd love to. です。\n\n【訳】A: 私の誕生日パーティーに来ませんか？\nB: 喜んで！ 招待してくれてありがとう。",
    audio_question: "Would you like to come to my birthday party?",
    audio_complete: "I'd love to. Thank you for inviting me."
  },
  {
    id: "past_90",
    type: "grammar",
    q: "I looked ( ) my glasses everywhere, but I couldn't find them.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["for", "at", "after", "like"],
    ans: 0,
    explain: "【解説】「〜を探す」は熟語 look for 〜 で表します。\n\n【訳】私はメガネをあちこち探しましたが、見つけることができませんでした。",
    audio_question: "I looked ... my glasses everywhere, but I couldn't find them.",
    audio_complete: "I looked for my glasses everywhere, but I couldn't find them."
  },
  {
    id: "past_91",
    type: "grammar",
    q: "My father told me that he ( ) a new car next month.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["would buy", "buys", "buy", "buying"],
    ans: 0,
    explain: "【解説】主節の動詞が過去形（told）なので、that 節内の will も時制の一致により過去形 would に変化します。\n\n【訳】父は来月新しい車を買うつもりだと私に言いました。",
    audio_question: "My father told me that he ... a new car next month.",
    audio_complete: "My father told me that he would buy a new car next month."
  },
  {
    id: "past_92",
    type: "grammar",
    q: "It was too cold for us ( ) outside yesterday.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["play", "to play", "played", "playing"],
    ans: 1,
    explain: "【解説】〈too ＋ 形容詞 ＋ for 人 ＋ to ＋ 動詞の原形〉（人が〜するには…すぎる）の構文です。正解は to play です。\n\n【訳】昨日はあまりに寒くて、私たちは外で遊べませんでした。",
    audio_question: "It was too cold for us ... outside yesterday.",
    audio_complete: "It was too cold for us to play outside yesterday."
  },
  {
    id: "past_93",
    type: "grammar",
    q: "A: What are you going to do this Sunday?\nB: I'm going to ( ) part in the marathon.",
    sub: "⚔️ 本番過去問 (会話文応答)",
    options: ["take", "make", "have", "get"],
    ans: 0,
    explain: "【解説】「〜に参加する」は熟語 take part in 〜 で表します。\n\n【訳】A: 今度の日曜日は何をする予定ですか？\nB: マラソン大会に参加する予定です。",
    audio_question: "What are you going to do this Sunday?",
    audio_complete: "I'm going to take part in the marathon."
  },
  {
    id: "past_94",
    type: "grammar",
    q: "This old house was ( ) by my great-grandfather.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["build", "builds", "built", "building"],
    ans: 2,
    explain: "【解説】受動態〈be動詞 ＋ 過去分詞〉（〜によって建てられた）の文です。build の過去分詞は built です。\n\n【訳】この古い家は私の曾祖父によって建てられました。",
    audio_question: "This old house was ... by my great-grandfather.",
    audio_complete: "This old house was built by my great-grandfather."
  },
  {
    id: "past_95",
    type: "grammar",
    q: "A: Excuse me, where is the restroom?\nB: ( ) me. I'll show you.",
    sub: "⚔️ 本番過去問 (会話文応答)",
    options: ["Follow", "Help", "Bring", "Take"],
    ans: 0,
    explain: "【解説】「私についてきてください（案内します）」と言うときは Follow me. を用います。\n\n【訳】A: すみません、お手洗いはどこですか？\nB: 私についてきてください。ご案内します。",
    audio_question: "Excuse me, where is the restroom?",
    audio_complete: "Follow me. I'll show you."
  },
  {
    id: "past_96",
    type: "grammar",
    q: "I have known Lucy ( ) five years.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["for", "since", "during", "at"],
    ans: 0,
    explain: "【解説】「5年間（期間）」を表すときは前置詞 for を用います。\n\n【訳】私はルーシーと知り合って5年になります。",
    audio_question: "I have known Lucy ... five years.",
    audio_complete: "I have known Lucy for five years."
  },
  {
    id: "past_97",
    type: "grammar",
    q: "She was so tired ( ) she couldn't walk anymore.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["that", "because", "so", "if"],
    ans: 0,
    explain: "【解説】〈so ＋ 形容詞 ＋ that 節〉で「とても〜なので…だ」を表す構文です。正解は that です。\n\n【訳】彼女はとても疲れていたので、これ以上歩けませんでした。",
    audio_question: "She was so tired ... she couldn't walk anymore.",
    audio_complete: "She was so tired that she couldn't walk anymore."
  },
  {
    id: "past_98",
    type: "grammar",
    q: "A: ( ) do you play tennis with your friends?\nB: Twice a week.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["How often", "How long", "How many", "How much"],
    ans: 0,
    explain: "【解説】頻度（Twice a week＝週2回）を尋ねる表現は How often（どのくらいの頻度で）が正解です。\n\n【訳】A: 友達とどのくらいの頻度でテニスをしますか？\nB: 週に2回です。",
    audio_question: "How often do you play tennis with your friends?",
    audio_complete: "How often do you play tennis with your friends? Twice a week."
  },
  {
    id: "past_99",
    type: "grammar",
    q: "My mother told me ( ) watch TV before finishing my homework.",
    sub: "⚔️ 本番過去問 (短文空所補充)",
    options: ["not to", "to not", "don't", "no to"],
    ans: 0,
    explain: "【解説】否定の不定詞〈tell ＋ 人 ＋ not to ＋ 動詞の原形〉で「人に〜しないように言う」を表します。not to が正解です。\n\n【訳】母は私に宿題を終える前にテレビを見ないように言いました。",
    audio_question: "My mother told me ... watch TV before finishing my homework.",
    audio_complete: "My mother told me not to watch TV before finishing my homework."
  },
  {
    id: "past_100",
    type: "grammar",
    q: "A: See you tomorrow!\nB: ( )!",
    sub: "⚔️ 本番過去問 (会話文応答)",
    options: ["See you", "Thank you", "I agree", "Not at all"],
    ans: 0,
    explain: "【解説】別れの挨拶「また明日ね！」に対して返す定番表現は See you!（またね！）です。\n\n【訳】A: また明日ね！\nB: またね！",
    audio_question: "See you tomorrow!",
    audio_complete: "See you!"
  },
  // ---------- リスニング第1弾 (No.101 〜 No.115) ----------
  {
    id: "past_101",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 本番過去問 (対話リスニング)",
    options: ["At 2:30.", "At 3:00.", "At 3:30.", "At 4:00."],
    ans: 2,
    explain: "【会話】\nBoy: Shall we meet at three o'clock tomorrow?\nGirl: I have a piano lesson until three. How about three thirty?\nBoy: That sounds fine.\n\n【会話の訳】\n男子: 明日、3時に会おうか？\n女子: 3時までピアノのレッスンがあるの。3時半はどう？\n男子: それでいいね。\n\n【質問】What time will they meet tomorrow?\n（彼らは明日何時に会いますか？）\n\n【正解の訳】\n3. 3時30分に。\n\n【解説】女子が提案した three thirty（3時30分）で合意しています。",
    dialogue: [
      { speaker: 'male', text: "Shall we meet at three o'clock tomorrow?" },
      { speaker: 'female', text: "I have a piano lesson until three. How about three thirty?" },
      { speaker: 'male', text: "That sounds fine." },
      { speaker: 'narrator', text: "Question. What time will they meet tomorrow?" }
    ],
    aud_complete: "What time will they meet tomorrow? At 3:30."
  },
  {
    id: "past_102",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 本番過去問 (対話リスニング)",
    options: ["A red sweater.", "A blue jacket.", "A black coat.", "A green cap."],
    ans: 1,
    explain: "【会話】\nWoman: May I help you?\nBoy: Yes, I'm looking for a blue jacket for my brother.\nWoman: Here are some nice ones.\n\n【会話の訳】\n店員: いらっしゃいませ。\n男子: はい、弟のために青いジャケットを探しているんです。\n店員: こちらに素敵なものがございますよ。\n\n【質問】What is the boy looking for?\n（男の子は何を探していますか？）\n\n【正解の訳】\n2. 青いジャケット。\n\n【解説】I'm looking for a blue jacket と述べています。",
    dialogue: [
      { speaker: 'female', text: "May I help you?" },
      { speaker: 'male', text: "Yes, I'm looking for a blue jacket for my brother." },
      { speaker: 'female', text: "Here are some nice ones." },
      { speaker: 'narrator', text: "Question. What is the boy looking for?" }
    ],
    aud_complete: "What is the boy looking for? A blue jacket."
  },
  {
    id: "past_103",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 本番過去問 (対話リスニング)",
    options: ["Because he lost his key.", "Because he missed the bus.", "Because he was sick.", "Because it rained heavily."],
    ans: 1,
    explain: "【会話】\nGirl: You're late, Dan. Did you wake up late?\nBoy: No, but I missed the eight o'clock bus, so I had to wait for the next one.\n\n【会話の訳】\n女子: 遅いよ、ダン。寝坊したの？\n男子: ううん、でも8時のバスに乗り遅れちゃって、次のを待たなきゃいけなかったんだ。\n\n【質問】Why was Dan late?\n（ダンはなぜ遅れたのですか？）\n\n【正解の訳】\n2. バスに乗り遅れたから。\n\n【解説】missed the eight o'clock bus（8時のバスに乗り遅れた）ことが原因です。",
    dialogue: [
      { speaker: 'female', text: "You're late, Dan. Did you wake up late?" },
      { speaker: 'male', text: "No, but I missed the eight o'clock bus, so I had to wait for the next one." },
      { speaker: 'narrator', text: "Question. Why was Dan late?" }
    ],
    aud_complete: "Why was Dan late? Because he missed the bus."
  },
  {
    id: "past_104",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 本番過去問 (対話リスニング)",
    options: ["To Canada.", "To Australia.", "To the United States.", "To the UK."],
    ans: 1,
    explain: "【会話】\nGirl: Where are you going for your summer vacation, Paul?\nBoy: I'm going to Australia to visit my uncle. He lives in Sydney.\n\n【会話の訳】\n女子: ポール、夏休みはどこへ行くの？\n男子: おじさんを訪ねてオーストラリアに行く予定だよ。シドニーに住んでいるんだ。\n\n【質問】Where is Paul going for his summer vacation?\n（ポールは夏休みにどこへ行きますか？）\n\n【正解の訳】\n2. オーストラリアへ。\n\n【解説】going to Australia と答えています。",
    dialogue: [
      { speaker: 'female', text: "Where are you going for your summer vacation, Paul?" },
      { speaker: 'male', text: "I'm going to Australia to visit my uncle. He lives in Sydney." },
      { speaker: 'narrator', text: "Question. Where is Paul going for his summer vacation?" }
    ],
    aud_complete: "Where is Paul going for his summer vacation? To Australia."
  },
  {
    id: "past_105",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 本番過去問 (対話リスニング)",
    options: ["History.", "Science.", "Math.", "Music."],
    ans: 2,
    explain: "【会話】\nBoy: Did you finish the math homework, Yuka?\nGirl: Not yet. Question five is very difficult for me.\nBoy: I can help you after class.\n\n【会話の訳】\n男子: ユカ、数学の宿題は終わった？\n女子: まだだよ。問5が私にはとても難しくて。\n男子: 授業のあとに教えてあげるよ。\n\n【質問】Which homework is difficult for Yuka?\n（ユカにとってどの宿題が難しいですか？）\n\n【正解の訳】\n3. 数学。\n\n【解説】math homework（数学の宿題）について話しています。",
    dialogue: [
      { speaker: 'male', text: "Did you finish the math homework, Yuka?" },
      { speaker: 'female', text: "Not yet. Question five is very difficult for me." },
      { speaker: 'male', text: "I can help you after class." },
      { speaker: 'narrator', text: "Question. Which homework is difficult for Yuka?" }
    ],
    aud_complete: "Which homework is difficult for Yuka? Math."
  },
  {
    id: "past_106",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 本番過去問 (対話リスニング)",
    options: ["Eat Chinese food.", "Cook Italian pasta.", "Go to a Japanese restaurant.", "Make sandwiches at home."],
    ans: 0,
    explain: "【会話】\nGirl: What do you want to eat for dinner tonight?\nBoy: How about Chinese food? A new Chinese restaurant opened near the station.\nGirl: Good idea. Let's go there.\n\n【会話の訳】\n女子: 今夜の夕食は何が食べたい？\n男子: 中華料理はどう？駅の近くに新しい中華料理店がオープンしたんだ。\n女子: いい考えね。そこへ行きましょう。\n\n【質問】What will they eat for dinner tonight?\n（彼らは今夜の夕食に何を食べますか？）\n\n【正解の訳】\n1. 中華料理を食べる。\n\n【解説】Chinese food（中華料理）を食べに行くことで一致しています。",
    dialogue: [
      { speaker: 'female', text: "What do you want to eat for dinner tonight?" },
      { speaker: 'male', text: "How about Chinese food? A new Chinese restaurant opened near the station." },
      { speaker: 'female', text: "Good idea. Let's go there." },
      { speaker: 'narrator', text: "Question. What will they eat for dinner tonight?" }
    ],
    aud_complete: "What will they eat for dinner tonight? Eat Chinese food."
  },
  {
    id: "past_107",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 本番過去問 (対話リスニング)",
    options: ["By bike.", "By bus.", "By train.", "On foot."],
    ans: 3,
    explain: "【会話】\nMan: Excuse me. How long does it take to walk to the post office?\nWoman: It takes only about five minutes from here.\nMan: Thank you very much.\n\n【会話の訳】\n男性: すみません。郵便局まで歩いてどのくらいかかりますか？\n女性: ここから歩いて約5分しかかかりませんよ。\n男性: どうもありがとうございます。\n\n【質問】How will the man go to the post office?\n（男性はどうやって郵便局へ行きますか？）\n\n【正解の訳】\n4. 徒歩で。\n\n【解説】walk（歩いて行く）時間を尋ねているため On foot です。",
    dialogue: [
      { speaker: 'male', text: "Excuse me. How long does it take to walk to the post office?" },
      { speaker: 'female', text: "It takes only about five minutes from here." },
      { speaker: 'male', text: "Thank you very much." },
      { speaker: 'narrator', text: "Question. How will the man go to the post office?" }
    ],
    aud_complete: "How will the man go to the post office? On foot."
  },
  {
    id: "past_108",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 本番過去問 (対話リスニング)",
    options: ["A soccer player.", "An English teacher.", "A doctor.", "A scientist."],
    ans: 2,
    explain: "【会話】\nBoy: What do you want to be in the future, Lisa?\nGirl: I want to be a doctor to help sick children.\nBoy: That's wonderful!\n\n【会話の訳】\n男子: 将来は何になりたいの、リサ？\n女子: 病気の子どもたちを助けるために医者になりたいの。\n男子: 素晴らしいね！\n\n【質問】What does Lisa want to be in the future?\n（リサは将来何になりたいですか？）\n\n【正解の訳】\n3. 医者。\n\n【解説】I want to be a doctor と答えています。",
    dialogue: [
      { speaker: 'male', text: "What do you want to be in the future, Lisa?" },
      { speaker: 'female', text: "I want to be a doctor to help sick children." },
      { speaker: 'male', text: "That's wonderful!" },
      { speaker: 'narrator', text: "Question. What does Lisa want to be in the future?" }
    ],
    aud_complete: "What does Lisa want to be in the future? A doctor."
  },
  {
    id: "past_109",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 本番過去問 (短文リスニング)",
    options: ["Cleaned his room.", "Read books in the library.", "Rode his bicycle.", "Played soccer in the park."],
    ans: 1,
    explain: "【英文】\nLast Saturday was rainy all day, so Kenji stayed in the city library and read three books about space.\n\n【英文の訳】\nこの前の土曜日は一日中雨だったので、ケンジは市立図書館にいて宇宙に関する本を3冊読みました。\n\n【質問】What did Kenji do last Saturday?\n（ケンジはこの前の土曜日に何をしましたか？）\n\n【正解の訳】\n2. 図書館で本を読んだ。\n\n【解説】read three books in the library が行った内容です。",
    dialogue: [
      { speaker: 'male', text: "Last Saturday was rainy all day, so Kenji stayed in the city library and read three books about space." },
      { speaker: 'narrator', text: "Question. What did Kenji do last Saturday?" }
    ],
    aud_complete: "What did Kenji do last Saturday? Read books in the library."
  },
  {
    id: "past_110",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 本番過去問 (短文リスニング)",
    options: ["At 8:00.", "At 8:30.", "At 9:00.", "At 9:30."],
    ans: 1,
    explain: "【英文】\nEmi usually leaves her house at eight o'clock and arrives at school at eight thirty every morning.\n\n【英文の訳】\nエミは毎朝たいてい8時に家を出て、8時30分に学校に到着します。\n\n【質問】What time does Emi arrive at school?\n（エミは何時に学校に着きますか？）\n\n【正解の訳】\n2. 8時30分に。\n\n【解説】arrives at school at eight thirty（8時30分に到着する）と述べています。",
    dialogue: [
      { speaker: 'female', text: "Emi usually leaves her house at eight o'clock and arrives at school at eight thirty every morning." },
      { speaker: 'narrator', text: "Question. What time does Emi arrive at school?" }
    ],
    aud_complete: "What time does Emi arrive at school? At 8:30."
  },
  {
    id: "past_111",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 本番過去問 (短文リスニング)",
    options: ["A pair of gloves.", "A watch.", "A new cap.", "A digital camera."],
    ans: 1,
    explain: "【英文】\nYesterday was Tom's fourteenth birthday. His grandfather gave him a nice watch.\n\n【英文の訳】\n昨日はトムの14歳の誕生日でした。祖父が素敵な腕時計を彼にプレゼントしました。\n\n【質問】What did Tom's grandfather give him?\n（トムの祖父は彼に何をあげましたか？）\n\n【正解の訳】\n2. 腕時計。\n\n【解説】gave him a nice watch（腕時計をあげた）です。",
    dialogue: [
      { speaker: 'male', text: "Yesterday was Tom's fourteenth birthday. His grandfather gave him a nice watch." },
      { speaker: 'narrator', text: "Question. What did Tom's grandfather give him?" }
    ],
    aud_complete: "What did Tom's grandfather give him? A watch."
  },
  {
    id: "past_112",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 本番過去問 (短文リスニング)",
    options: ["By bus.", "By train.", "By car.", "By plane."],
    ans: 0,
    explain: "【英文】\nOur class went to the science museum yesterday. We took a big bus from the school gate.\n\n【英文の訳】\n私たちのクラスは昨日科学博物館に行きました。校門から大型バスに乗って行きました。\n\n【質問】How did the class go to the science museum?\n（クラスのみんなはどうやって科学博物館に行きましたか？）\n\n【正解の訳】\n1. バスで。\n\n【解説】took a big bus（バスに乗った）ので By bus です。",
    dialogue: [
      { speaker: 'female', text: "Our class went to the science museum yesterday. We took a big bus from the school gate." },
      { speaker: 'narrator', text: "Question. How did the class go to the science museum?" }
    ],
    aud_complete: "How did the class go to the science museum? By bus."
  },
  {
    id: "past_113",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 本番過去問 (短文リスニング)",
    options: ["Two dogs.", "Three dogs.", "A dog and a cat.", "Two cats."],
    ans: 0,
    explain: "【英文】\nMikako loves animals. She has two big white dogs, and she walks them every evening.\n\n【英文の訳】\nミカコは動物が大好きです。彼女は大きな白い犬を2匹飼っていて、毎晩散歩させています。\n\n【質問】What pets does Mikako have?\n（ミカコはどんなペットを飼っていますか？）\n\n【正解の訳】\n1. 2匹の犬。\n\n【解説】two big white dogs（2匹の犬）を飼っています。",
    dialogue: [
      { speaker: 'female', text: "Mikako loves animals. She has two big white dogs, and she walks them every evening." },
      { speaker: 'narrator', text: "Question. What pets does Mikako have?" }
    ],
    aud_complete: "What pets does Mikako have? Two dogs."
  },
  {
    id: "past_114",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 本番過去問 (短文リスニング)",
    options: ["Sunny.", "Cloudy.", "Rainy.", "Snowy."],
    ans: 2,
    explain: "【英文】\nIt was sunny on Friday, but it started to rain heavily on Saturday morning.\n\n【英文の訳】\n金曜日は晴れていましたが、土曜日の朝に大雨が降り始めました。\n\n【質問】How was the weather on Saturday morning?\n（土曜日の朝の天気はどうでしたか？）\n\n【正解の訳】\n3. 雨。\n\n【解説】started to rain heavily（激しく雨が降り始めた）ので Rainy です。",
    dialogue: [
      { speaker: 'male', text: "It was sunny on Friday, but it started to rain heavily on Saturday morning." },
      { speaker: 'narrator', text: "Question. How was the weather on Saturday morning?" }
    ],
    aud_complete: "How was the weather on Saturday morning? Rainy."
  },
  {
    id: "past_115",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 本番過去問 (短文リスニング)",
    options: ["Five dollars.", "Ten dollars.", "Twelve dollars.", "Twenty dollars."],
    ans: 1,
    explain: "【英文】\nWelcome to Green City Zoo. The entrance ticket is five dollars for students and ten dollars for adults.\n\n【英文の訳】\nグリーン市立動物園へようこそ。入場券は学生5ドル、大人10ドルです。\n\n【質問】How much is the ticket for adults?\n（大人の入場券はいくらですか？）\n\n【正解の訳】\n2. 10ドル。\n\n【解説】ten dollars for adults（大人は10ドル）です。",
    dialogue: [
      { speaker: 'female', text: "Welcome to Green City Zoo. The entrance ticket is five dollars for students and ten dollars for adults." },
      { speaker: 'narrator', text: "Question. How much is the ticket for adults?" }
    ],
    aud_complete: "How much is the ticket for adults? Ten dollars."
  },
  // ---------- リスニング第2弾 (No.116 〜 No.130) ----------
  {
    id: "past_116",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 本番過去問 (対話リスニング)",
    options: ["At 5:00.", "At 5:30.", "At 6:00.", "At 6:30."],
    ans: 1,
    explain: "【会話】\nGirl: What time does the soccer practice end today?\nBoy: It usually ends at six, but today it finishes at five thirty.\nGirl: OK, let's go home together then.\n\n【会話の訳】\n女子: 今日のサッカーの練習は何時に終わるの？\n男子: 普段は6時に終わるけど、今日は5時半に終わるよ。\n女子: わかった、じゃあ一緒に帰ろう。\n\n【質問】What time will the soccer practice finish today?\n（今日のサッカーの練習は何時に終わりますか？）\n\n【正解の訳】\n2. 5時30分に。\n\n【解説】today it finishes at five thirty（今日は5時半に終わる）と述べています。",
    dialogue: [
      { speaker: 'female', text: "What time does the soccer practice end today?" },
      { speaker: 'male', text: "It usually ends at six, but today it finishes at five thirty." },
      { speaker: 'female', text: "OK, let's go home together then." },
      { speaker: 'narrator', text: "Question. What time will the soccer practice finish today?" }
    ],
    aud_complete: "What time will the soccer practice finish today? At 5:30."
  },
  {
    id: "past_117",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 本番過去問 (対話リスニング)",
    options: ["Tennis.", "Baseball.", "Basketball.", "Soccer."],
    ans: 2,
    explain: "【会話】\nBoy: Which club did you join, Mayu?\nGirl: I joined the basketball club. I practice every Tuesday and Thursday.\nBoy: Good luck!\n\n【会話の訳】\n男子: マユ、どの部活に入ったの？\n女子: バスケットボール部に入ったよ。毎週火曜日と木曜日に練習しているの。\n男子: 頑張ってね！\n\n【質問】Which club did Mayu join?\n（マユはどの部活に入りましたか？）\n\n【正解の訳】\n3. バスケットボール。\n\n【解説】I joined the basketball club（バスケ部に入った）と答えています。",
    dialogue: [
      { speaker: 'male', text: "Which club did you join, Mayu?" },
      { speaker: 'female', text: "I joined the basketball club. I practice every Tuesday and Thursday." },
      { speaker: 'male', text: "Good luck!" },
      { speaker: 'narrator', text: "Question. Which club did Mayu join?" }
    ],
    aud_complete: "Which club did Mayu join? Basketball."
  },
  {
    id: "past_118",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 本番過去問 (対話リスニング)",
    options: ["Under the desk.", "On the kitchen table.", "In her school bag.", "In her bedroom."],
    ans: 1,
    explain: "【会話】\nGirl: Dad, I can't find my notebook. Did you see it?\nMan: Yes, you left it on the kitchen table this morning.\nGirl: Oh, thank you!\n\n【会話の訳】\n女子: お父さん、ノートが見当たらないの。見かけなかった？\n男性: ああ、今朝キッチンのテーブルの上に置いてあったよ。\n女子: あ、ありがとう！\n\n【質問】Where is the girl's notebook?\n（女の子のノートはどこにありますか？）\n\n【正解の訳】\n2. キッチンのテーブルの上。\n\n【解説】on the kitchen table（台所のテーブルの上）にあります。",
    dialogue: [
      { speaker: 'female', text: "Dad, I can't find my notebook. Did you see it?" },
      { speaker: 'male', text: "Yes, you left it on the kitchen table this morning." },
      { speaker: 'female', text: "Oh, thank you!" },
      { speaker: 'narrator', text: "Question. Where is the girl's notebook?" }
    ],
    aud_complete: "Where is the girl's notebook? On the kitchen table."
  },
  {
    id: "past_119",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 本番過去問 (対話リスニング)",
    options: ["His brother.", "His mother.", "His teacher.", "His friend."],
    ans: 0,
    explain: "【会話】\nGirl: Who helped you with this computer project, Ken?\nBoy: My older brother. He knows a lot about computers.\nGirl: That's great.\n\n【会話の訳】\n女子: ケン、このコンピュータの課題は誰が手伝ってくれたの？\n男子: 僕の兄だよ。コンピュータにとても詳しいんだ。\n女子: すごいね。\n\n【質問】Who helped Ken with his project?\n（誰がケンの課題を手伝いましたか？）\n\n【正解の訳】\n1. 彼の兄（弟）。\n\n【解説】My older brother（兄）が手伝ってくれました。",
    dialogue: [
      { speaker: 'female', text: "Who helped you with this computer project, Ken?" },
      { speaker: 'male', text: "My older brother. He knows a lot about computers." },
      { speaker: 'female', text: "That's great." },
      { speaker: 'narrator', text: "Question. Who helped Ken with his project?" }
    ],
    aud_complete: "Who helped Ken with his project? His brother."
  },
  {
    id: "past_120",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 本番過去問 (対話リスニング)",
    options: ["Go to the beach.", "Study at the library.", "Watch a movie at home.", "Go to a concert."],
    ans: 2,
    explain: "【会話】\nBoy: It's raining outside. We can't play tennis in the park.\nGirl: Then, let's watch a movie at my house.\nBoy: Sounds good!\n\n【会話の訳】\n男子: 外は雨が降っているね。公園でテニスはできないよ。\n女子: それなら、私の家で映画を見ましょうよ。\n男子: いいね！\n\n【質問】What will they do today?\n（彼らは今日何をしますか？）\n\n【正解の訳】\n3. 家で映画を見ること。\n\n【解説】watch a movie at my house（私の家で映画を見る）ことで決まりました。",
    dialogue: [
      { speaker: 'male', text: "It's raining outside. We can't play tennis in the park." },
      { speaker: 'female', text: "Then, let's watch a movie at my house." },
      { speaker: 'male', text: "Sounds good!" },
      { speaker: 'narrator', text: "Question. What will they do today?" }
    ],
    aud_complete: "What will they do today? Watch a movie at home."
  },
  {
    id: "past_121",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 本番過去問 (対話リスニング)",
    options: ["By bike.", "By bus.", "By train.", "By car."],
    ans: 2,
    explain: "【会話】\nGirl: Did you come to the stadium by bus, Shin?\nBoy: No, the bus was crowded, so I took the rapid train.\nGirl: I see.\n\n【会話の訳】\n女子: シン、スタジアムにはバスで来たの？\n男子: ううん、バスが混んでいたから、快速電車に乗ってきたんだ。\n女子: そうなんだ。\n\n【質問】How did Shin come to the stadium?\n（シンはどうやってスタジアムに来ましたか？）\n\n【正解の訳】\n3. 電車で。\n\n【解説】took the rapid train（快速電車に乗った）ので By train です。",
    dialogue: [
      { speaker: 'female', text: "Did you come to the stadium by bus, Shin?" },
      { speaker: 'male', text: "No, the bus was crowded, so I took the rapid train." },
      { speaker: 'female', text: "I see." },
      { speaker: 'narrator', text: "Question. How did Shin come to the stadium?" }
    ],
    aud_complete: "How did Shin come to the stadium? By train."
  },
  {
    id: "past_122",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 本番過去問 (対話リスニング)",
    options: ["Orange juice.", "Hot chocolate.", "Green tea.", "Apple juice."],
    ans: 1,
    explain: "【会話】\nWoman: What would you like to drink?\nBoy: Can I have a cup of hot chocolate, please?\nWoman: Sure. Anything else?\nBoy: No, that's all.\n\n【会話の訳】\n店員: お飲み物は何になさいますか？\n男子: 温かいココア（ホットチョコレート）を1杯いただけますか？\n店員: かしこまりました。他にご注文はございますか？\n男子: いいえ、それだけです。\n\n【質問】What did the boy order?\n（男の子は何を注文しましたか？）\n\n【正解の訳】\n2. ホットチョコレート（ココア）。\n\n【解説】hot chocolate を注文しています。",
    dialogue: [
      { speaker: 'female', text: "What would you like to drink?" },
      { speaker: 'male', text: "Can I have a cup of hot chocolate, please?" },
      { speaker: 'female', text: "Sure. Anything else?" },
      { speaker: 'male', text: "No, that's all." },
      { speaker: 'narrator', text: "Question. What did the boy order?" }
    ],
    aud_complete: "What did the boy order? Hot chocolate."
  },
  {
    id: "past_123",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 本番過去問 (短文リスニング)",
    options: ["Baked a chocolate cake.", "Went to an Italian restaurant.", "Bought a new guitar.", "Cleaned the garden."],
    ans: 0,
    explain: "【英文】\nYesterday was my sister's birthday party. My mother and I baked a big chocolate cake for her.\n\n【英文の訳】\n昨日は妹（姉）の誕生日パーティーでした。母と私は彼女のために大きなチョコレートケーキを焼きました。\n\n【質問】What did the girl do for her sister?\n（女の子は妹（姉）のために何をしましたか？）\n\n【正解の訳】\n1. チョコレートケーキを焼いた。\n\n【解説】baked a big chocolate cake（ケーキを焼いた）が行動内容です。",
    dialogue: [
      { speaker: 'female', text: "Yesterday was my sister's birthday party. My mother and I baked a big chocolate cake for her." },
      { speaker: 'narrator', text: "Question. What did the girl do for her sister?" }
    ],
    aud_complete: "What did the girl do for her sister? Baked a chocolate cake."
  },
  {
    id: "past_124",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 本番過去問 (短文リスニング)",
    options: ["In Hokkaido.", "In Okinawa.", "In Tokyo.", "In Kyoto."],
    ans: 1,
    explain: "【英文】\nDuring the spring vacation, my family visited Okinawa. We enjoyed swimming in the beautiful blue ocean.\n\n【英文の訳】\n春休みの間、私の家族は沖縄を訪れました。私たちは美しい青い海で泳ぐのを楽しみました。\n\n【質問】Where did the family go during the spring vacation?\n（その家族は春休みの間どこへ行きましたか？）\n\n【正解の訳】\n2. 沖縄へ。\n\n【解説】visited Okinawa（沖縄を訪れた）と述べています。",
    dialogue: [
      { speaker: 'male', text: "During the spring vacation, my family visited Okinawa. We enjoyed swimming in the beautiful blue ocean." },
      { speaker: 'narrator', text: "Question. Where did the family go during the spring vacation?" }
    ],
    aud_complete: "Where did the family go during the spring vacation? In Okinawa."
  },
  {
    id: "past_125",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 本番過去問 (短文リスニング)",
    options: ["Plays the violin.", "Practices the piano.", "Plays soccer.", "Reads English books."],
    ans: 1,
    explain: "【英文】\nDaiki wants to become a pianist in the future. He practices the piano for two hours every day after school.\n\n【英文の訳】\nダイキは将来ピアニストになりたいと思っています。彼は放課後、毎日2時間ピアノを練習しています。\n\n【質問】What does Daiki do every day after school?\n（ダイキは放課後、毎日何をしていますか？）\n\n【正解の訳】\n2. ピアノを練習する。\n\n【解説】practices the piano（ピアノを練習する）と述べています。",
    dialogue: [
      { speaker: 'female', text: "Daiki wants to become a pianist in the future. He practices the piano for two hours every day after school." },
      { speaker: 'narrator', text: "Question. What does Daiki do every day after school?" }
    ],
    aud_complete: "What does Daiki do every day after school? Practices the piano."
  },
  {
    id: "past_126",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 本番過去問 (短文リスニング)",
    options: ["A red sweater.", "A pair of yellow boots.", "A warm winter coat.", "A blue backpack."],
    ans: 2,
    explain: "【英文】\nWinter is coming soon, so Julia went to the department store yesterday and bought a warm winter coat.\n\n【英文の訳】\nもうすぐ冬が来るので、ジュリアは昨日デパートへ行き、暖かい冬用コートを買いました。\n\n【質問】What did Julia buy yesterday?\n（ジュリアは昨日何を買いましたか？）\n\n【正解の訳】\n3. 暖かい冬用コート。\n\n【解説】bought a warm winter coat（冬用コートを買った）です。",
    dialogue: [
      { speaker: 'female', text: "Winter is coming soon, so Julia went to the department store yesterday and bought a warm winter coat." },
      { speaker: 'narrator', text: "Question. What did Julia buy yesterday?" }
    ],
    aud_complete: "What did Julia buy yesterday? A warm winter coat."
  },
  {
    id: "past_127",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 本番過去問 (短文リスニング)",
    options: ["To an amusement park.", "To a science museum.", "To a soccer stadium.", "To a famous library."],
    ans: 0,
    explain: "【英文】\nNext Sunday is my little brother's birthday. My father will drive us to a big amusement park.\n\n【英文の訳】\n次の日曜日は私の弟の誕生日です。父が車で私たちを大きな遊園地へ連れて行ってくれます。\n\n【質問】Where will the family go next Sunday?\n（家族は次の日曜日、どこへ行きますか？）\n\n【正解の訳】\n1. 遊園地へ。\n\n【解説】drive us to a big amusement park（遊園地へ行く）です。",
    dialogue: [
      { speaker: 'male', text: "Next Sunday is my little brother's birthday. My father will drive us to a big amusement park." },
      { speaker: 'narrator', text: "Question. Where will the family go next Sunday?" }
    ],
    aud_complete: "Where will the family go next Sunday? To an amusement park."
  },
  {
    id: "past_128",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 本番過去問 (短文リスニング)",
    options: ["An English teacher.", "A flight attendant.", "A tour guide.", "A news reporter."],
    ans: 1,
    explain: "【英文】\nSaki loves traveling to different countries. She is studying English hard to become a flight attendant.\n\n【英文の訳】\nサキは様々な国へ旅行することが大好きです。彼女は客室乗務員（キャビンアテンダント）になるために一生懸命英語を勉強しています。\n\n【質問】What does Saki want to be?\n（サキは何になりたいと思っていますか？）\n\n【正解の訳】\n2. 客室乗務員（フライトアテンダント）。\n\n【解説】become a flight attendant（客室乗務員になる）ことを目指しています。",
    dialogue: [
      { speaker: 'female', text: "Saki loves traveling to different countries. She is studying English hard to become a flight attendant." },
      { speaker: 'narrator', text: "Question. What does Saki want to be?" }
    ],
    aud_complete: "What does Saki want to be? A flight attendant."
  },
  {
    id: "past_129",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 本番過去問 (短文リスニング)",
    options: ["Every day.", "Twice a week.", "Once a month.", "Three times a year."],
    ans: 1,
    explain: "【英文】\nKenta likes reading English books. He goes to the city library on Tuesdays and Fridays.\n\n【英文の訳】\nケンタは英語の本を読むことが好きです。彼は毎週火曜日と金曜日に市立図書館に行きます。\n\n【質問】How often does Kenta go to the library?\n（ケンタはどのくらいの頻度で図書館に行きますか？）\n\n【正解の訳】\n2. 週に2回。\n\n【解説】火曜日と金曜日なので Twice a week（週2回）です。",
    dialogue: [
      { speaker: 'male', text: "Kenta likes reading English books. He goes to the city library on Tuesdays and Fridays." },
      { speaker: 'narrator', text: "Question. How often does Kenta go to the library?" }
    ],
    aud_complete: "How often does Kenta go to the library? Twice a week."
  },
  {
    id: "past_130",
    type: "listening",
    q: "音声を聞いて、質問に答えよう。",
    sub: "🎧 本番過去問 (短文リスニング)",
    options: ["At 4:00 p.m.", "At 5:00 p.m.", "At 6:00 p.m.", "At 7:00 p.m."],
    ans: 1,
    explain: "【英文】\nAttention please, museum visitors. The museum will close at five o'clock today. Please return audio guides to the desk.\n\n【英文の訳】\n博物館へお越しの皆様にご案内申し上げます。本日の閉館時間は午後5時です。音声ガイドをカウンターまでご返却ください。\n\n【質問】What time will the museum close today?\n（博物館は本日何時に閉館しますか？）\n\n【正解の訳】\n2. 午後5時に。\n\n【解説】close at five o'clock（5時に閉館する）とアナウンスされています。",
    dialogue: [
      { speaker: 'female', text: "Attention please, museum visitors. The museum will close at five o'clock today. Please return audio guides to the desk." },
      { speaker: 'narrator', text: "Question. What time will the museum close today?" }
    ],
    aud_complete: "What time will the museum close today? At 5:00 p.m."
  }
];
