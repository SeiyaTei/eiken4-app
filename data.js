// ==========================================
// 英検4級 合格クエスト 〜50日間の冒険〜
// マスターデータ定義ファイル (data.js)
// ==========================================

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
  // 2026-1 (20問)
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2026-1 No.11】(⚡速UP)", opt: ["She can’t find the report.", "She forgot to call Max.", "The report is too long.", "Her desk is broken."], ans: 0, exp: "【対話】\nGirl: Did you finish your report, Max?\nBoy: Yes. I put it on your desk.\nGirl: Really? I can’t find it.\nQuestion: What is the woman’s problem?\n\n【解説】女性は「レポートが見つからない(can't find the report)」と困っています。", dialogue: [{ speaker: 'female', text: "Did you finish your report, Max?" }, { speaker: 'male', text: "Yes. I put it on your desk." }, { speaker: 'female', text: "Really? I can’t find it." }, { speaker: 'male', text: "Oh no." }, { speaker: 'narrator', text: "Question. What is the woman’s problem?" }], aud_complete: "What is the woman’s problem? She can’t find the report." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2026-1 No.12】(⚡速UP)", opt: ["Ken.", "Ken’s mother.", "Ken’s father.", "Ken’s friend."], ans: 1, exp: "【対話】\nGirl: How was your weekend, Ken?\nBoy: Not so good. My mom was sick, so my dad took her to the doctor.\nQuestion: Who was sick?\n\n【解説】ケンのお母さんが病気でした。", dialogue: [{ speaker: 'female', text: "How was your weekend, Ken?" }, { speaker: 'male', text: "Not so good. My mom was sick, so my dad took her to the doctor." }, { speaker: 'narrator', text: "Question. Who was sick?" }], aud_complete: "Who was sick? Ken’s mother." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2026-1 No.13】(⚡速UP)", opt: ["Kim’s friends.", "Kim’s father.", "His friends.", "His father."], ans: 2, exp: "【対話】\nGirl: Hi, Joe. Is that a new camera?\nBoy: Yes, Kim. My dad gave it to me. I just took some pictures of my friends.\nQuestion: Who did Joe take pictures of?\n\n【解説】ジョーは「友達の写真(His friends)」を撮りました。", dialogue: [{ speaker: 'female', text: "Hi, Joe. Is that a new camera?" }, { speaker: 'male', text: "Yes, Kim. My dad gave it to me. I just took some pictures of my friends." }, { speaker: 'narrator', text: "Question. Who did Joe take pictures of?" }], aud_complete: "Who did Joe take pictures of? His friends." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2026-1 No.14】(⚡速UP)", opt: ["Because he is sick.", "Because he broke his leg.", "To talk to his doctor.", "To visit his grandmother."], ans: 3, exp: "【対話】\nGirl: Where are you going?\nBoy: I’m going to the hospital. My grandmother broke her leg, so I’m going to visit her.\nQuestion: Why is the man going to the hospital?\n\n【解説】祖母のお見舞いに行くためです。", dialogue: [{ speaker: 'female', text: "Where are you going?" }, { speaker: 'male', text: "I’m going to the hospital. My grandmother broke her leg, so I’m going to visit her." }, { speaker: 'narrator', text: "Question. Why is the man going to the hospital?" }], aud_complete: "Why is the man going to the hospital? To visit his grandmother." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2026-1 No.15】(⚡速UP)", opt: ["Take a test.", "Talk to their history teacher.", "Clean their classroom.", "Finish their reports."], ans: 3, exp: "【対話】\nGirl: We need to finish our history reports by Friday.\nBoy: I’ll write mine before class tomorrow.\nQuestion: What do they need to do by Friday?\n\n【解説】金曜日までにレポートを終わらせる必要があります。", dialogue: [{ speaker: 'female', text: "We need to finish our history reports by Friday." }, { speaker: 'male', text: "I’ll write mine before class tomorrow." }, { speaker: 'narrator', text: "Question. What do they need to do by Friday?" }], aud_complete: "What do they need to do by Friday? Finish their reports." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2026-1 No.16】(⚡速UP)", opt: ["A toy dog.", "A robot.", "A toy car.", "A toy plane."], ans: 2, exp: "【対話】\nGirl: You can pick one toy from here.\nBoy: I want a toy car.\nQuestion: Which toy does the boy want?\n\n【解説】おもちゃの車(A toy car)です。", dialogue: [{ speaker: 'female', text: "You can pick one toy from here." }, { speaker: 'male', text: "I want a toy car." }, { speaker: 'narrator', text: "Question. Which toy does the boy want?" }], aud_complete: "Which toy does the boy want? A toy car." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2026-1 No.17】(⚡速UP)", opt: ["A tennis game.", "A soccer game.", "A basketball game.", "A baseball game."], ans: 3, exp: "【対話】\nBoy: You have a baseball game today, right?\nGirl: Yes. I also have a soccer game on Wednesday.\nQuestion: Which game does the girl have today?\n\n【解説】今日あるのは野球(A baseball game)です。", dialogue: [{ speaker: 'male', text: "You have a baseball game today, right?" }, { speaker: 'female', text: "Yes. I also have a soccer game on Wednesday." }, { speaker: 'narrator', text: "Question. Which game does the girl have today?" }], aud_complete: "Which game does the girl have today? A baseball game." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2026-1 No.18】(⚡速UP)", opt: ["One.", "Two.", "Three.", "Four."], ans: 2, exp: "【対話】\nBoy: What pets do you have, Mia?\nGirl: A dog, a cat, and a bird. So I have three pets.\nQuestion: How many pets does Mia have?\n\n【解説】3匹(Three)です。", dialogue: [{ speaker: 'male', text: "What pets do you have, Mia?" }, { speaker: 'female', text: "A dog, a cat, and a bird. So I have three pets." }, { speaker: 'narrator', text: "Question. How many pets does Mia have?" }], aud_complete: "How many pets does Mia have? Three." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2026-1 No.19】(⚡速UP)", opt: ["To a Chinese restaurant.", "To a Japanese restaurant.", "To a Spanish restaurant.", "To an Italian restaurant."], ans: 3, exp: "【対話】\nBoy: Where should we go for dinner?\nGirl: Let’s go to an Italian restaurant.\nQuestion: Where will they go for dinner?\n\n【解説】イタリア料理店(To an Italian restaurant)です。", dialogue: [{ speaker: 'male', text: "Where should we go for dinner?" }, { speaker: 'female', text: "Let’s go to an Italian restaurant." }, { speaker: 'narrator', text: "Question. Where will they go for dinner?" }], aud_complete: "Where will they go for dinner? To an Italian restaurant." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2026-1 No.20】(⚡速UP)", opt: ["At school.", "At the girl’s house.", "At the library.", "At the boy’s house."], ans: 0, exp: "【対話】\nGirl: How about studying tomorrow? We can meet at school.\nBoy: OK. Let’s meet at two.\nQuestion: Where will they meet tomorrow?\n\n【解説】学校(At school)です。", dialogue: [{ speaker: 'female', text: "How about studying tomorrow? We can meet at school." }, { speaker: 'male', text: "OK. Let’s meet at two." }, { speaker: 'narrator', text: "Question. Where will they meet tomorrow?" }], aud_complete: "Where will they meet tomorrow? At school." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2026-1 No.21】(⚡速UP)", opt: ["Visit her friend.", "Go shopping.", "Go to a party.", "Make a cake."], ans: 1, exp: "【英文】\nEmma enjoys shopping. This weekend she will go to the new shopping center with her friend.\nQuestion: What will Emma do this weekend?\n\n【解説】買い物に行く(Go shopping)です。", dialogue: [{ speaker: 'female', text: "Emma enjoys shopping. This weekend she will go to the new shopping center with her friend." }, { speaker: 'narrator', text: "Question. What will Emma do this weekend?" }], aud_complete: "What will Emma do this weekend? Go shopping." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2026-1 No.22】(⚡速UP)", opt: ["Her vegetable garden.", "A cooking class.", "A restaurant.", "Her new house."], ans: 2, exp: "【英文】\nMy parents and I went to my favorite curry restaurant last night. The vegetable curry is really good.\nQuestion: What is the girl talking about?\n\n【解説】レストラン(A restaurant)です。", dialogue: [{ speaker: 'female', text: "My parents and I went to my favorite curry restaurant last night. The vegetable curry is really good." }, { speaker: 'narrator', text: "Question. What is the girl talking about?" }], aud_complete: "What is the girl talking about? A restaurant." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2026-1 No.23】(⚡速UP)", opt: ["They played tennis.", "They saw a movie.", "They went shopping.", "They went to the library."], ans: 2, exp: "【英文】\nKathy and Mary play tennis on Saturdays. Today it rained, so they went to a shopping mall.\nQuestion: What did Kathy and Mary do today?\n\n【解説】買い物に行きました(They went shopping)。", dialogue: [{ speaker: 'male', text: "Kathy and Mary play tennis on Saturdays. Today it rained, so they went to a shopping mall." }, { speaker: 'narrator', text: "Question. What did Kathy and Mary do today?" }], aud_complete: "What did Kathy and Mary do today? They went shopping." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2026-1 No.24】(⚡速UP)", opt: ["To the library.", "To a big game.", "To the computer club.", "To his friend’s house."], ans: 3, exp: "【英文】\nAfter school, I often go to my friend Andrew’s house, and we study together.\nQuestion: Where does the boy often go after school?\n\n【解説】友達の家(To his friend’s house)です。", dialogue: [{ speaker: 'male', text: "After school, I often go to my friend Andrew’s house, and we study together." }, { speaker: 'narrator', text: "Question. Where does the boy often go after school?" }], aud_complete: "Where does the boy often go after school? To his friend’s house." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2026-1 No.25】(⚡速UP)", opt: ["Wendy.", "Wendy’s husband.", "Julie.", "Julie’s husband."], ans: 1, exp: "【英文】\nWendy had a party. She made pasta, and her husband made vegetable soup.\nQuestion: Who made vegetable soup?\n\n【解説】夫(Wendy’s husband)です。", dialogue: [{ speaker: 'male', text: "Wendy had a party. She made pasta, and her husband made vegetable soup." }, { speaker: 'narrator', text: "Question. Who made vegetable soup?" }], aud_complete: "Who made vegetable soup? Wendy’s husband." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2026-1 No.26】(⚡速UP)", opt: ["Go to the library.", "Help her mother.", "Call her friend.", "Read a book at home."], ans: 3, exp: "【英文】\nEmi likes reading. Today, she will read a book at home after school.\nQuestion: What will Emi do today?\n\n【解説】家で読書(Read a book at home)です。", dialogue: [{ speaker: 'female', text: "Emi likes reading. Today, she will read a book at home after school." }, { speaker: 'narrator', text: "Question. What will Emi do today?" }], aud_complete: "What will Emi do today? Read a book at home." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2026-1 No.27】(⚡速UP)", opt: ["He read books.", "He rode his bike.", "He played soccer.", "He did his homework."], ans: 0, exp: "【英文】\nIt rained yesterday, so Jack stayed at home and read books in the afternoon.\nQuestion: What did Jack do yesterday afternoon?\n\n【解説】本を読みました(He read books)。", dialogue: [{ speaker: 'male', text: "It rained yesterday, so Jack stayed at home and read books in the afternoon." }, { speaker: 'narrator', text: "Question. What did Jack do yesterday afternoon?" }], aud_complete: "What did Jack do yesterday afternoon? He read books." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2026-1 No.28】(⚡速UP)", opt: ["She made lunch.", "She visited her grandmother.", "She cleaned her house.", "She met Anna’s father."], ans: 2, exp: "【英文】\nMy grandmother came to visit me, so I cleaned my house. Anna helped me.\nQuestion: What did the girl do yesterday?\n\n【解説】掃除をしました(She cleaned her house)。", dialogue: [{ speaker: 'female', text: "My grandmother came to visit me, so I cleaned my house. Anna helped me." }, { speaker: 'narrator', text: "Question. What did the girl do yesterday?" }], aud_complete: "What did the girl do yesterday? She cleaned her house." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2026-1 No.29】(⚡速UP)", opt: ["By bike.", "By bus.", "By train.", "By car."], ans: 0, exp: "【英文】\nJack usually rides his bike to school when the weather is nice.\nQuestion: How does Jack usually go to school?\n\n【解説】自転車で(By bike)です。", dialogue: [{ speaker: 'male', text: "Jack usually rides his bike to school when the weather is nice." }, { speaker: 'narrator', text: "Question. How does Jack usually go to school?" }], aud_complete: "How does Jack usually go to school? By bike." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2026-1 No.30】(⚡速UP)", opt: ["Three dollars.", "Five dollars.", "Eight dollars.", "Ten dollars."], ans: 3, exp: "【英文】\nWelcome to the city art museum. The fees are three dollars for kids, and ten dollars for adults.\nQuestion: How much is the fee for adults?\n\n【解説】10ドル(Ten dollars)です。", dialogue: [{ speaker: 'female', text: "Welcome to the city art museum. The fees are three dollars for kids, and ten dollars for adults." }, { speaker: 'narrator', text: "Question. How much is the fee for adults?" }], aud_complete: "How much is the fee for adults? Ten dollars." },

  // 2025-3 (20問)
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-3 No.11】(⚡速UP)", opt: ["She went skiing.", "She met Mr. Brown.", "She stayed at home.", "She studied at school."], ans: 0, exp: "【対話】\nMan: Did you go skiing at your uncle's house, Meg?\nGirl: Yes, every day. It was fun!\nQuestion: What did Meg do on her holiday?\n\n【解説】スキーに行きました(She went skiing)。", dialogue: [{ speaker: 'male', text: "Did you go skiing at your uncle's house, Meg?" }, { speaker: 'female', text: "Yes, every day. It was fun!" }, { speaker: 'narrator', text: "Question. What did Meg do on her holiday?" }], aud_complete: "What did Meg do on her holiday? She went skiing." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-3 No.12】(⚡速UP)", opt: ["Tommy’s birthday present.", "Their homework.", "Their new friend.", "Lisa’s new bicycle."], ans: 0, exp: "【対話】\nGirl: What did you get for your birthday, Tommy?\nBoy: A new bicycle, Lisa.\nQuestion: What are they talking about?\n\n【解説】誕生日プレゼントについて話しています。", dialogue: [{ speaker: 'female', text: "What did you get for your birthday, Tommy?" }, { speaker: 'male', text: "A new bicycle, Lisa." }, { speaker: 'narrator', text: "Question. What are they talking about?" }], aud_complete: "What are they talking about? Tommy’s birthday present." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-3 No.13】(⚡速UP)", opt: ["To the movies.", "To Japan.", "To school.", "To the airport."], ans: 3, exp: "【対話】\nBoy: Will you go somewhere tomorrow?\nGirl: Yes, to the airport to meet a friend from Japan.\nQuestion: Where will the girl go tomorrow?\n\n【解説】空港(To the airport)です。", dialogue: [{ speaker: 'male', text: "Will you go somewhere tomorrow?" }, { speaker: 'female', text: "Yes, to the airport to meet a friend from Japan." }, { speaker: 'narrator', text: "Question. Where will the girl go tomorrow?" }], aud_complete: "Where will the girl go tomorrow? To the airport." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-3 No.14】(⚡速UP)", opt: ["The boy.", "The girl.", "The boy’s sister.", "The girl’s sister."], ans: 1, exp: "【対話】\nBoy: Do you want to see a movie tomorrow?\nGirl: I can’t. I’ll go fishing alone.\nQuestion: Who will go fishing tomorrow?\n\n【解説】女の子(The girl)です。", dialogue: [{ speaker: 'male', text: "Do you want to see a movie tomorrow?" }, { speaker: 'female', text: "I can’t. I’ll go fishing alone." }, { speaker: 'narrator', text: "Question. Who will go fishing tomorrow?" }], aud_complete: "Who will go fishing tomorrow? The girl." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-3 No.15】(⚡速UP)", opt: ["Go home.", "Go to school.", "Meet Mike.", "Buy a present."], ans: 0, exp: "【対話】\nGirl: Bye, Mike. I’m going home now.\nBoy: Thanks for coming to my party.\nQuestion: What is the girl going to do now?\n\n【解説】帰宅する(Go home)ところです。", dialogue: [{ speaker: 'female', text: "Bye, Mike. I’m going home now." }, { speaker: 'male', text: "Thanks for coming to my party." }, { speaker: 'narrator', text: "Question. What is the girl going to do now?" }], aud_complete: "What is the girl going to do now? Go home." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-3 No.16】(⚡速UP)", opt: ["Eating an apple.", "Buying a banana.", "Eating a banana.", "Making lunch for the girl."], ans: 0, exp: "【対話】\nGirl: What are you eating, Mark?\nBoy: An apple.\nQuestion: What is Mark doing now?\n\n【解説】リンゴを食べています(Eating an apple)。", dialogue: [{ speaker: 'female', text: "What are you eating, Mark?" }, { speaker: 'male', text: "An apple." }, { speaker: 'narrator', text: "Question. What is Mark doing now?" }], aud_complete: "What is Mark doing now? Eating an apple." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-3 No.17】(⚡速UP)", opt: ["At school.", "At home.", "In Peter’s bag.", "In Peter’s room."], ans: 1, exp: "【対話】\nBoy: Where is your eraser?\nGirl: I left it at home. Maybe on the desk in my room.\nQuestion: Where is the girl’s eraser?\n\n【解説】家(At home)です。", dialogue: [{ speaker: 'male', text: "Where is your eraser?" }, { speaker: 'female', text: "I left it at home. Maybe on the desk in my room." }, { speaker: 'narrator', text: "Question. Where is the girl’s eraser?" }], aud_complete: "Where is the girl’s eraser? At home." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-3 No.18】(⚡速UP)", opt: ["Next week.", "This week.", "This month.", "Next month."], ans: 3, exp: "【対話】\nGirl: I will go on a trip to Italy next month.\nBoy: How long will you be there?\nQuestion: When will the girl go on a trip?\n\n【解説】来月(Next month)です。", dialogue: [{ speaker: 'female', text: "I will go on a trip to Italy next month." }, { speaker: 'male', text: "How long will you be there?" }, { speaker: 'narrator', text: "Question. When will the girl go on a trip?" }], aud_complete: "When will the girl go on a trip? Next month." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-3 No.19】(⚡速UP)", opt: ["He missed a bus.", "He was busy.", "He was sick.", "He got up late."], ans: 3, exp: "【対話】\nGirl: Why is Ken late for school today?\nBoy: He got up late today.\nQuestion: Why is Ken late for school today?\n\n【解説】寝坊したため(He got up late)です。", dialogue: [{ speaker: 'female', text: "Why is Ken late for school today?" }, { speaker: 'male', text: "He got up late today." }, { speaker: 'narrator', text: "Question. Why is Ken late for school today?" }], aud_complete: "Why is Ken late for school today? He got up late." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-3 No.20】(⚡速UP)", opt: ["She lived in America.", "Her mother is from America.", "She took English lessons.", "The boy taught it to her."], ans: 0, exp: "【対話】\nBoy: Where did you learn English, Sara?\nGirl: When I was younger, I lived in America for three years.\nQuestion: How did Sara learn English?\n\n【解説】アメリカに住んでいた(She lived in America)からです。", dialogue: [{ speaker: 'male', text: "Where did you learn English, Sara?" }, { speaker: 'female', text: "When I was younger, I lived in America for three years." }, { speaker: 'narrator', text: "Question. How did Sara learn English?" }], aud_complete: "How did Sara learn English? She lived in America." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-3 No.21】(⚡速UP)", opt: ["At home.", "At a restaurant.", "At a clothes shop.", "At a bank."], ans: 1, exp: "【英文】\nWelcome to Tony’s Burger Shop. Today’s special is a cheeseburger with a salad.\nQuestion: Where is the man talking?\n\n【解説】飲食店(At a restaurant)です。", dialogue: [{ speaker: 'male', text: "Welcome to Tony’s Burger Shop. Today’s special is a cheeseburger with a salad." }, { speaker: 'narrator', text: "Question. Where is the man talking?" }], aud_complete: "Where is the man talking? At a restaurant." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-3 No.22】(⚡速UP)", opt: ["He made a new friend.", "He ate with his girlfriend.", "He watched TV.", "He played soccer."], ans: 1, exp: "【英文】\nLast Saturday, I ate dinner with my girlfriend. On Sunday, I played soccer.\nQuestion: What did the man do on Saturday?\n\n【解説】彼女と食事(He ate with his girlfriend)です。", dialogue: [{ speaker: 'male', text: "Last Saturday, I ate dinner with my girlfriend. On Sunday, I played soccer." }, { speaker: 'narrator', text: "Question. What did the man do on Saturday?" }], aud_complete: "What did the man do on Saturday? He ate with his girlfriend." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-3 No.23】(⚡速UP)", opt: ["A brush.", "Some pictures.", "Some paper.", "A bicycle."], ans: 2, exp: "【英文】\nToday, Tina will go and buy some nice paper. She’s going to paint a picture of her bicycle.\nQuestion: What will Tina buy today?\n\n【解説】紙(Some paper)です。", dialogue: [{ speaker: 'female', text: "Today, Tina will go and buy some nice paper. She’s going to paint a picture of her bicycle." }, { speaker: 'narrator', text: "Question. What will Tina buy today?" }], aud_complete: "What will Tina buy today? Some paper." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-3 No.24】(⚡速UP)", opt: ["His favorite sport.", "His family trip.", "His favorite animal.", "His new car."], ans: 1, exp: "【英文】\nMy family went on a trip to the beach last week. We went by car.\nQuestion: What is the boy talking about?\n\n【解説】家族旅行(His family trip)です。", dialogue: [{ speaker: 'male', text: "My family went on a trip to the beach last week. We went by car." }, { speaker: 'narrator', text: "Question. What is the boy talking about?" }], aud_complete: "What is the boy talking about? His family trip." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-3 No.25】(⚡速UP)", opt: ["Her favorite fruit.", "Her favorite flower.", "Her spring vacation.", "Her family’s garden."], ans: 3, exp: "【英文】\nMy family has a beautiful garden. We have many cherry trees and flowers.\nQuestion: What is the girl talking about?\n\n【解説】庭(Her family’s garden)です。", dialogue: [{ speaker: 'female', text: "My family has a beautiful garden. We have many cherry trees and flowers." }, { speaker: 'narrator', text: "Question. What is the girl talking about?" }], aud_complete: "What is the girl talking about? Her family’s garden." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-3 No.26】(⚡速UP)", opt: ["Sunny.", "Cloudy.", "Windy.", "Rainy."], ans: 0, exp: "【英文】\nYesterday, it was cloudy in the morning but sunny in the afternoon.\nQuestion: How was the weather yesterday afternoon?\n\n【解説】晴れ(Sunny)でした。", dialogue: [{ speaker: 'male', text: "Yesterday, it was cloudy in the morning but sunny in the afternoon." }, { speaker: 'narrator', text: "Question. How was the weather yesterday afternoon?" }], aud_complete: "How was the weather yesterday afternoon? Sunny." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-3 No.27】(⚡速UP)", opt: ["Two.", "Three.", "Four.", "Five."], ans: 1, exp: "【英文】\nSarah bought two oranges, three pineapples, and five peaches.\nQuestion: How many pineapples did Sarah buy yesterday?\n\n【解説】3つ(Three)です。", dialogue: [{ speaker: 'male', text: "Sarah bought two oranges, three pineapples, and five peaches." }, { speaker: 'narrator', text: "Question. How many pineapples did Sarah buy yesterday?" }], aud_complete: "How many pineapples did Sarah buy yesterday? Three." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-3 No.28】(⚡速UP)", opt: ["In her bag.", "In her car.", "At work.", "At home."], ans: 2, exp: "【英文】\nI lost my keys yesterday. I found them at work.\nQuestion: Where were the woman’s keys?\n\n【解説】職場(At work)です。", dialogue: [{ speaker: 'female', text: "I lost my keys yesterday. I found them at work." }, { speaker: 'narrator', text: "Question. Where were the woman’s keys?" }], aud_complete: "Where were the woman’s keys? At work." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-3 No.29】(⚡速UP)", opt: ["His father.", "His brother.", "His mother.", "His grandmother."], ans: 2, exp: "【英文】\nDaniel lives alone. Yesterday, he called his mother many times, but she didn’t answer.\nQuestion: Who did Daniel call yesterday?\n\n【解説】母親(His mother)です。", dialogue: [{ speaker: 'male', text: "Daniel lives alone. Yesterday, he called his mother many times, but she didn’t answer." }, { speaker: 'narrator', text: "Question. Who did Daniel call yesterday?" }], aud_complete: "Who did Daniel call yesterday? His mother." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-3 No.30】(⚡速UP)", opt: ["He will join a baseball game.", "He will play with his dog.", "He will join a running event.", "He will look for quiet places."], ans: 1, exp: "【英文】\nI’ll go to the park next Sunday to play with my dog. I’ll bring a ball for him.\nQuestion: Why will the man go to the park next Sunday?\n\n【解説】犬と遊ぶため(He will play with his dog)です。", dialogue: [{ speaker: 'male', text: "I’ll go to the park next Sunday to play with my dog. I’ll bring a ball for him." }, { speaker: 'narrator', text: "Question. Why will the man go to the park next Sunday?" }], aud_complete: "Why will the man go to the park next Sunday? He will play with his dog." },

  // 2025-2 (20問)
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-2 No.11】(⚡速UP)", opt: ["History.", "Math.", "English.", "Science."], ans: 0, exp: "【対話】\nBoy: What’s our next class, Gina?\nGirl: History.\nQuestion: Which class do they have next?\n\n【解説】歴史(History)です。", dialogue: [{ speaker: 'male', text: "What’s our next class, Gina?" }, { speaker: 'female', text: "History." }, { speaker: 'narrator', text: "Question. Which class do they have next?" }], aud_complete: "Which class do they have next? History." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-2 No.12】(⚡速UP)", opt: ["Tomorrow.", "This weekend.", "Next month.", "Next winter."], ans: 1, exp: "【対話】\nBoy: Can you ski?\nGirl: My father will teach me this weekend.\nQuestion: When will the girl learn to ski?\n\n【解説】今週末(This weekend)です。", dialogue: [{ speaker: 'male', text: "Can you ski?" }, { speaker: 'female', text: "My father will teach me this weekend." }, { speaker: 'narrator', text: "Question. When will the girl learn to ski?" }], aud_complete: "When will the girl learn to ski? This weekend." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-2 No.13】(⚡速UP)", opt: ["Their favorite movie.", "The boy’s book.", "The girl’s bedroom.", "The library."], ans: 1, exp: "【対話】\nBoy: Did you bring my book?\nGirl: Sorry. I left it in my bedroom.\nQuestion: What are they talking about?\n\n【解説】男の子の本(The boy’s book)です。", dialogue: [{ speaker: 'male', text: "Did you bring my book?" }, { speaker: 'female', text: "Sorry. I left it in my bedroom." }, { speaker: 'narrator', text: "Question. What are they talking about?" }], aud_complete: "What are they talking about? The boy’s book." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-2 No.14】(⚡速UP)", opt: ["For one day.", "For five days.", "For one week.", "For five weeks."], ans: 1, exp: "【対話】\nGirl: Ted, how long will you stay in Europe?\nBoy: I’ll stay in France for one week and Spain for five days.\nQuestion: How long will Ted stay in Spain?\n\n【解説】5日間(For five days)です。", dialogue: [{ speaker: 'female', text: "Ted, how long will you stay in Europe?" }, { speaker: 'male', text: "I’ll stay in France for one week and Spain for five days." }, { speaker: 'narrator', text: "Question. How long will Ted stay in Spain?" }], aud_complete: "How long will Ted stay in Spain? For five days." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-2 No.15】(⚡速UP)", opt: ["The cafeteria.", "The gym.", "Her teachers.", "Her friends."], ans: 0, exp: "【対話】\nBoy: What do you like the best about your new school?\nGirl: The cafeteria. It’s big.\nQuestion: What does the girl like the best about her new school?\n\n【解説】学食(The cafeteria)です。", dialogue: [{ speaker: 'male', text: "What do you like the best about your new school?" }, { speaker: 'female', text: "The cafeteria. It’s big." }, { speaker: 'narrator', text: "Question. What does the girl like the best about her new school?" }], aud_complete: "What does the girl like the best about her new school? The cafeteria." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-2 No.16】(⚡速UP)", opt: ["The science homework.", "The English homework.", "The history homework.", "The math homework."], ans: 3, exp: "【対話】\nGirl: Can you help me with the math homework?\nBoy: Sorry, I’m doing my science homework.\nQuestion: What does the girl need help with?\n\n【解説】数学の宿題(The math homework)です。", dialogue: [{ speaker: 'female', text: "Can you help me with the math homework?" }, { speaker: 'male', text: "Sorry, I’m doing my science homework." }, { speaker: 'narrator', text: "Question. What does the girl need help with?" }], aud_complete: "What does the girl need help with? The math homework." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-2 No.17】(⚡速UP)", opt: ["Sandwiches.", "Toast.", "Soup.", "Noodles."], ans: 1, exp: "【対話】\nGirl: I had toast for breakfast. I don’t want sandwiches for lunch.\nBoy: OK, we’ll have noodles.\nQuestion: What did the girl have for breakfast?\n\n【解説】トースト(Toast)です。", dialogue: [{ speaker: 'female', text: "I had toast for breakfast. I don’t want sandwiches for lunch." }, { speaker: 'male', text: "OK, we’ll have noodles." }, { speaker: 'narrator', text: "Question. What did the girl have for breakfast?" }], aud_complete: "What did the girl have for breakfast? Toast." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-2 No.18】(⚡速UP)", opt: ["Next Friday.", "Next Saturday.", "Next month.", "Next Sunday."], ans: 0, exp: "【対話】\nGirl: Is the class trip next month?\nBoy: No. It’s next Friday.\nQuestion: When is the class trip?\n\n【解説】金曜日(Next Friday)です。", dialogue: [{ speaker: 'female', text: "Is the class trip next month?" }, { speaker: 'male', text: "No. It’s next Friday." }, { speaker: 'narrator', text: "Question. When is the class trip?" }], aud_complete: "When is the class trip? Next Friday." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-2 No.19】(⚡速UP)", opt: ["Some new shoes.", "Some pants.", "Some socks.", "Some gloves."], ans: 3, exp: "【対話】\nBoy: I bought you a present. I bought black gloves for you.\nQuestion: What did Oliver buy for the woman?\n\n【解説】手袋(Some gloves)です。", dialogue: [{ speaker: 'male', text: "I bought you a present. I bought black gloves for you." }, { speaker: 'female', text: "How nice!" }, { speaker: 'narrator', text: "Question. What did Oliver buy for the woman?" }], aud_complete: "What did Oliver buy for the woman? Some gloves." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-2 No.20】(⚡速UP)", opt: ["One minute.", "Five minutes.", "Seven minutes.", "Fifteen minutes."], ans: 1, exp: "【対話】\nMan: How long does it take to walk to the nearest station?\nWoman: It takes five minutes to walk there.\nQuestion: How long does it take to walk to the station?\n\n【解説】5分(Five minutes)です。", dialogue: [{ speaker: 'male', text: "How long does it take to walk to the nearest station?" }, { speaker: 'female', text: "It takes five minutes to walk there." }, { speaker: 'narrator', text: "Question. How long does it take to walk to the station?" }], aud_complete: "How long does it take to walk to the station? Five minutes." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-2 No.21】(⚡速UP)", opt: ["They made a cake.", "They looked for a present.", "They went to a restaurant.", "They cooked some steak."], ans: 2, exp: "【英文】\nLast Saturday was my wife’s birthday, so we went to a nice restaurant.\nQuestion: What did the man and his wife do last Saturday?\n\n【解説】レストランへ行きました(They went to a restaurant)。", dialogue: [{ speaker: 'male', text: "Last Saturday was my wife’s birthday, so we went to a nice restaurant." }, { speaker: 'narrator', text: "Question. What did the man and his wife do last Saturday?" }], aud_complete: "What did the man and his wife do last Saturday? They went to a restaurant." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-2 No.22】(⚡速UP)", opt: ["One.", "Two.", "Three.", "Four."], ans: 3, exp: "【英文】\nJack gave Sally four apples. She ate one and gave the other three to her brother.\nQuestion: How many apples did Jack give to Sally?\n\n【解説】4個(Four)です。", dialogue: [{ speaker: 'female', text: "Jack gave Sally four apples. She ate one and gave the other three to her brother." }, { speaker: 'narrator', text: "Question. How many apples did Jack give to Sally?" }], aud_complete: "How many apples did Jack give to Sally? Four." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-2 No.23】(⚡速UP)", opt: ["In a coffee shop.", "In the park.", "At home.", "At the station."], ans: 0, exp: "【英文】\nOn Sunday mornings, I read the newspaper in a coffee shop near the station.\nQuestion: Where does the man read the newspaper?\n\n【解説】喫茶店(In a coffee shop)です。", dialogue: [{ speaker: 'male', text: "On Sunday mornings, I read the newspaper in a coffee shop near the station." }, { speaker: 'narrator', text: "Question. Where does the man read the newspaper?" }], aud_complete: "Where does the man read the newspaper? In a coffee shop." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-2 No.24】(⚡速UP)", opt: ["Hamsters.", "Ducks.", "Pandas.", "Rabbits."], ans: 1, exp: "【英文】\nTom is writing about ducks, and Steve is writing about hamsters.\nQuestion: Which animal is Tom writing his report about?\n\n【解説】アヒル(Ducks)です。", dialogue: [{ speaker: 'female', text: "Tom is writing about ducks, and Steve is writing about hamsters." }, { speaker: 'narrator', text: "Question. Which animal is Tom writing his report about?" }], aud_complete: "Which animal is Tom writing his report about? Ducks." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-2 No.25】(⚡速UP)", opt: ["Play baseball.", "Go to a baseball game.", "Watch a musical.", "Play the piano."], ans: 2, exp: "【英文】\nMy birthday is next week. This year, I want to watch a musical.\nQuestion: What does the boy want to do on his birthday this year?\n\n【解説】ミュージカル(Watch a musical)です。", dialogue: [{ speaker: 'male', text: "My birthday is next week. This year, I want to watch a musical." }, { speaker: 'narrator', text: "Question. What does the boy want to do on his birthday this year?" }], aud_complete: "What does the boy want to do on his birthday this year? Watch a musical." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-2 No.26】(⚡速UP)", opt: ["The girl.", "The girl’s brother.", "The girl’s sister.", "The girl’s mother."], ans: 2, exp: "【英文】\nMy sister was practicing the piano, so I asked my mother for help.\nQuestion: Who was practicing the piano?\n\n【解説】姉妹(The girl’s sister)です。", dialogue: [{ speaker: 'female', text: "My sister was practicing the piano, so I asked my mother for help." }, { speaker: 'narrator', text: "Question. Who was practicing the piano?" }], aud_complete: "Who was practicing the piano? The girl’s sister." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-2 No.27】(⚡速UP)", opt: ["One book.", "Two books.", "Three books.", "Four books."], ans: 1, exp: "【英文】\nAlice can read one book in three hours. She reads two books every week.\nQuestion: How many books does Alice read every week?\n\n【解説】2冊(Two books)です。", dialogue: [{ speaker: 'male', text: "Alice can read one book in three hours. She reads two books every week." }, { speaker: 'narrator', text: "Question. How many books does Alice read every week?" }], aud_complete: "How many books does Alice read every week? Two books." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-2 No.28】(⚡速UP)", opt: ["At 3:00.", "At 3:30.", "At 4:30.", "At 5:00."], ans: 0, exp: "【英文】\nOlivia will go to a concert at five o’clock. She will leave her house at three o’clock.\nQuestion: When will Olivia leave her house?\n\n【解説】3時(At 3:00)です。", dialogue: [{ speaker: 'female', text: "Olivia will go to a concert at five o’clock. She will leave her house at three o’clock." }, { speaker: 'narrator', text: "Question. When will Olivia leave her house?" }], aud_complete: "When will Olivia leave her house? At 3:00." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-2 No.29】(⚡速UP)", opt: ["By bike.", "By bus.", "By taxi.", "On foot."], ans: 3, exp: "【英文】\nIt snowed a lot, so I couldn’t ride my bike or take a bus. I had to walk to his house.\nQuestion: How did the boy go to his uncle’s house?\n\n【解説】徒歩(On foot)です。", dialogue: [{ speaker: 'male', text: "It snowed a lot, so I couldn’t ride my bike or take a bus. I had to walk to his house." }, { speaker: 'narrator', text: "Question. How did the boy go to his uncle’s house?" }], aud_complete: "How did the boy go to his uncle’s house? On foot." },
  { q: "音声を聞いて、質問に答えよう。", sub: "🎧 【2025-2 No.30】(⚡速UP)", opt: ["Make a song.", "Join a music school.", "Meet a singer.", "Go to a concert."], ans: 1, exp: "【英文】\nI want to be a singer in the future, so I decided to join a music school next month.\nQuestion: What will the girl do next month?\n\n【解説】音楽学校(Join a music school)です。", dialogue: [{ speaker: 'female', text: "I want to be a singer in the future, so I decided to join a music school next month." }, { speaker: 'narrator', text: "Question. What will the girl do next month?" }], aud_complete: "What will the girl do next month? Join a music school." }
];

// ==================== 4. 過去問ボスバトル 15問 データベース ====================
const ACTUAL_PAST_EXAM_DATA = [
  { id: 'past_1', type: 'grammar', q: "I ( ) my grandfather in Osaka last weekend.", sub: "👑 【英検過去問】短文空所補充", options: ["visit", "visited", "visiting", "visits"], ans: 1, explain: "last weekend（先週末）があるので動詞の過去形 visited が正解です。" },
  { id: 'past_2', type: 'grammar', q: "A: What are you ( ) now, Ken?\nB: I'm cleaning my room.", sub: "👑 【英検過去問】現在進行形", options: ["do", "did", "doing", "does"], ans: 2, explain: "now があり、be動詞 are と組み合わせて現在進行形 doing になります。" },
  { id: 'past_3', type: 'grammar', q: "It is easy for him ( ) fast.", sub: "👑 【英検過去問】不定詞構文", options: ["run", "ran", "to run", "running"], ans: 2, explain: "It is ... for 人 to + 原形（人が〜することは…だ）の構文です。" },
  { id: 'past_4', type: 'grammar', q: "A: ( ) is that tall boy?\nB: He is my brother, Tom.", sub: "👑 【英検過去問】疑問詞", options: ["Who", "Where", "When", "Which"], ans: 0, explain: "人物について尋ねているので Who（だれ）が正解です。" },
  { id: 'past_5', type: 'grammar', q: "Mount Fuji is ( ) than any other mountain in Japan.", sub: "👑 【英検過去問】比較級", options: ["high", "higher", "highest", "more high"], ans: 1, explain: "than があるので比較級 higher が正解です。" },
  { id: 'past_6', type: 'grammar', q: "She stayed at home ( ) it was raining hard.", sub: "👑 【英検過去問】接続詞", options: ["because", "so", "but", "before"], ans: 0, explain: "「雨が激しく降っていたから」という理由を表す because です。" },
  { id: 'past_7', type: 'grammar', q: "A: May I help you?\nB: ( ). I'm looking for a shirt.", sub: "👑 【英検過去問】会話表現", options: ["Yes, please", "No, thank you", "You're welcome", "Here you are"], ans: 0, explain: "店員の申し出に応じるときは Yes, please. と答えます。" },
  { id: 'past_8', type: 'grammar', q: "My sister enjoys ( ) pictures on Sundays.", sub: "👑 【英検過去問】動名詞", options: ["paint", "painted", "painting", "to paint"], ans: 2, explain: "enjoy の目的語は動名詞（〜ing）になります。" },
  { id: 'past_9', type: 'grammar', q: "You ( ) finish your homework before watching TV.", sub: "👑 【英検過去問】助動詞", options: ["must", "may", "could", "shall"], ans: 0, explain: "「〜しなければならない」という義務を表す must です。" },
  { id: 'past_10', type: 'grammar', q: "A: Whose camera is this?\nB: It is ( ).", sub: "👑 【英検過去問】代名詞", options: ["mine", "my", "me", "I"], ans: 0, explain: "「私のもの」を表す所有代名詞 mine です。" },
  { id: 'past_11', type: 'listening', q: "音声を聞いて、質問に答えよう。", sub: "👑 【英検過去問】リスニング", options: ["She can’t find the report.", "She forgot to call Max.", "The report is too long.", "Her desk is broken."], ans: 0, explain: "【解説】女性はレポートが見つからない(can't find the report)と困っています。", dialogue: [{ speaker: 'female', text: "Did you finish your report, Max?" }, { speaker: 'male', text: "Yes. I put it on your desk." }, { speaker: 'female', text: "Really? I can’t find it." }, { speaker: 'narrator', text: "Question. What is the woman’s problem?" }], audio_complete: "What is the woman’s problem? She can’t find the report." },
  { id: 'past_12', type: 'listening', q: "音声を聞いて、質問に答えよう。", sub: "👑 【英検過去問】リスニング", options: ["Ken.", "Ken’s mother.", "Ken’s father.", "Ken’s friend."], ans: 1, explain: "【解説】ケンのお母さんが病気でした。", dialogue: [{ speaker: 'female', text: "How was your weekend, Ken?" }, { speaker: 'male', text: "Not so good. My mom was sick, so my dad took her to the doctor." }, { speaker: 'narrator', text: "Question. Who was sick?" }], audio_complete: "Who was sick? Ken’s mother." },
  { id: 'past_13', type: 'grammar', q: "My father gave ( ) a nice bicycle.", sub: "👑 【英検過去問】第4文型", options: ["me", "I", "my", "mine"], ans: 0, explain: "give + 人 + もの の形なので目的格 me が入ります。" },
  { id: 'past_14', type: 'grammar', q: "He went to the library ( ) study science.", sub: "👑 【英検過去問】不定詞（目的）", options: ["to", "for", "in", "at"], ans: 0, explain: "「勉強するために」という目的を表す to + 動詞の原形です。" },
  { id: 'past_15', type: 'grammar', q: "A: How about ( ) baseball this afternoon?\nB: Sounds good!", sub: "👑 【英検過去問】提案表現", options: ["playing", "play", "played", "to play"], ans: 0, explain: "How about 〜ing? で「〜するのはどう？」という提案です。" }
];

// ==================== 5. 着せ替え・装備データベース (Lv.60制限追加) ====================
const SHOP_EQUIP_DATA = [
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

  { id: 'aura_wind', name: '若葉のそよ風', type: 'aura', icon: '🍃', price: 30, rank: '🌟 ノーマル', val: 5, desc: '速さ +5 / 爽やかな風' },
  { id: 'aura_sakura', name: '桜の花吹雪', type: 'aura', icon: '🌸', price: 80, rank: '🔵 レア', val: 15, desc: '速さ +15 / 合格の桜' },
  { id: 'aura_angel', name: '天使の翼', type: 'aura', icon: '🪽', price: 180, rank: '🔵 レア', val: 30, desc: '速さ +30 / 高みへ飛翔' },
  { id: 'aura_devil', name: '暗黒の翼', type: 'aura', icon: '🦇', price: 280, rank: '🟣 スーパーレア', val: 55, desc: '速さ +55 / 秘めたる力' },
  { id: 'aura_thunder', name: '迅雷のイナズマ', type: 'aura', icon: '⚡', price: 450, rank: '🟣 スーパーレア', val: 85, desc: '速さ +85 / 電光石火' },
  { id: 'aura_fire', name: 'ドラゴンの炎', type: 'aura', icon: '🔥', price: 700, rank: '🟡 レジェンド', val: 120, desc: '速さ +120 / 燃える情熱' },
  { id: 'aura_rainbow', name: '奇跡のレインボー', type: 'aura', icon: '🌈', price: 950, rank: '🟡 レジェンド', val: 180, desc: '速さ +180 / 満点の架け橋' },
  { id: 'aura_cosmic', name: 'コズミックオーラ', type: 'aura', icon: '🌟', price: 1500, rank: '🌈 ゴッド', val: 260, desc: '速さ +260 / 全宇宙の叡智' }
];

// ==================== 6. ボスステージ全10段階データ ====================
const BOSS_STAGES = [
  { lv: 1, name: "邪竜の幼体", icon: "🐲", hp: 1200, atk: 25, exp: 60, gems: 15, desc: "まだ幼いドラゴンの子ども。基礎力で勝てる！" },
  { lv: 2, name: "黒曜石の飛竜", icon: "🦖", hp: 3500, atk: 50, exp: 90, gems: 20, desc: "硬いウロコを持つ飛竜。全問クリティカル近くで勝利！" },
  { lv: 3, name: "紅蓮のワイバーン", icon: "👺", hp: 7000, atk: 85, exp: 130, gems: 28, desc: "炎を吐く強敵。Lv.20以上＆上位装備が必要。" },
  { lv: 4, name: "嵐呼ぶ魔竜", icon: "🌪️", hp: 12000, atk: 120, exp: 180, gems: 35, desc: "猛烈な風を操る竜。文法でHPを強化して挑もう。" },
  { lv: 5, name: "冥府の巨竜", icon: "👿", hp: 18000, atk: 165, exp: 240, gems: 45, desc: "【中ボス】強力な反撃を放つ。ミスを減らそう！" },
  { lv: 6, name: "深淵の影竜", icon: "🦹", hp: 26000, atk: 210, exp: 310, gems: 55, desc: "闇に潜む古代の竜。装備を整えて挑もう。" },
  { lv: 7, name: "破滅の双頭竜", icon: "🐉", hp: 36000, atk: 265, exp: 400, gems: 68, desc: "二つの頭を持つ凶暴な竜。素早さと会心が鍵！" },
  { lv: 8, name: "インフェルノ・ドレイク", icon: "🔥", hp: 48000, atk: 330, exp: 500, gems: 80, desc: "灼熱の業火を纏う。上級装備が必須レベル！" },
  { lv: 9, name: "終焉の暗黒竜", icon: "⚡🐉", hp: 62000, atk: 400, exp: 650, gems: 100, desc: "世界を闇に沈める竜。最高峰のステータスが必要！" },
  { lv: 10, name: "覇天神龍・オメガエデン", icon: "👑🐉✨", hp: 80000, atk: 500, exp: 850, gems: 150, desc: "【最強裏ボス】最強装備と全問即答クリティカルでやっと倒せる究極の龍神！" }
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
