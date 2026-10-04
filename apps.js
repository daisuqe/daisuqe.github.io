// アプリ一覧データ
// 追加するときはこの配列に1行足すだけでOK
//   slug  : https://daisuqe.github.io/<slug>/ のフォルダ名
//   name  : 表示名
//   date  : 公開日 (並び替えに使用)
//   desc  : 一言説明 (任意)
//   color : サムネイルの色 (任意)
//   thumb : サムネイル画像のパス (任意。例 "thumbs/fude.png")
//   pin   : true で並び順に関係なく先頭に表示 (任意)
//   label : サムネイル左上のラベル (任意。例 "Special" "Topic")
window.APPS = [
  { slug: "GRAVITYFOUR",   name: "GRAVITY FOUR",  date: "2026-09-23", desc: "四目並べトーナメント", color: "#1f7a4d" },
  { slug: "gyakuzan",      name: "gyakuzan",      date: "2026-07-10", desc: "電卓で逆算するパズル",       color: "#3b6fd8" },
  { slug: "MKYBD",         name: "MKYBD",         date: "2026-06-13", desc: "メモ用キーボード",           color: "#e0663a" },
  { slug: "nodegram",      name: "nodegram",      date: "2026-08-02", desc: "node プログラミング",       color: "#8a4fd8", pin: true, label: "Special" },
  { slug: "okudesu",       name: "okudesu",       date: "2026-05-31", desc: "3Dブロック並べ",                           color: "#d84f7a" },
  { slug: "xwordx",        name: "xwordx",        date: "2026-09-29", desc: "対戦型クロスワード",                           color: "#222222" },
];

// nodegram で作ったサンプル
//   name  : 表示名
//   desc  : 説明 (任意)
//   url   : 開くURL
//   thumb : サムネイル画像のパス
window.NODEGRAM_APPS = [
  { name: "エイリアンシューティング",               thumb: "thumbs/nodegram/shooting.png",     url: "https://daisuqe.github.io/nodegram/?url=https://www.dropbox.com/scl/fi/cikjbcn27ka3j8dig37r4/shoot_test1.json?rlkey=6xp5eq89wcaujtaqi3tgpe3k8&st=7wfnoxc4&dl=0" },
  { name: "地球", desc: "3D ワイヤーフレーム",         thumb: "thumbs/nodegram/earth_wire.png",   url: "https://daisuqe.github.io/nodegram/?url=https://www.dropbox.com/scl/fi/hjq7b2y24if7jiuidd95l/earth_line.ngz?rlkey=mqz5asvv11fov1p77ms8v1qis&st=upl7oum8&dl=0" },
  { name: "地球", desc: "ポリゴン",                   thumb: "thumbs/nodegram/earth_poly.png",   url: "https://daisuqe.github.io/nodegram/?url=https://www.dropbox.com/scl/fi/5fgg6piiy29ch2eq9yhmk/earth.ngz?rlkey=w4xbj54w7yfhjg49zux6ig33r&st=96swizxt&dl=0" },
  { name: "月", desc: "3D ワイヤーフレーム、アート",   thumb: "thumbs/nodegram/moon_wire.png",    url: "https://daisuqe.github.io/nodegram/?url=https://www.dropbox.com/scl/fi/h7g52fuylw7qnkabf2mzd/sphere_walk.ngz?rlkey=dat3rlg6enir65oh08qpmq3e0&st=96swizxt&dl=0" },
  { name: "sin カーブ", desc: "3D ワイヤーフレーム、アート", thumb: "thumbs/nodegram/sin_wire.png", url: "https://daisuqe.github.io/nodegram/?url=https://www.dropbox.com/scl/fi/yd5iechxlyeef4gh33e7e/sine03c.ngz?rlkey=f34nxktk97l8d1p8r3ley4kli&st=z70ut0x4&dl=0" },
  { name: "花", desc: "合成音声",                     thumb: "thumbs/nodegram/hana_voice.png",   url: "https://daisuqe.github.io/nodegram/?url=https://www.dropbox.com/scl/fi/nk0yse375meh8otvv2nc5/hana.ngz?rlkey=296vnzprt57l3dpdwuvlvn1as&st=5omuifnr&dl=0" },
  { name: "ポリゴンサンプル", desc: "ポリゴン",                   thumb: "thumbs/nodegram/robo_polygon.png", url: "https://daisuqe.github.io/nodegram/?url=https://www.dropbox.com/scl/fi/c7054kcosvl4rw2l6bkma/poly_shoot05.ngz?rlkey=8xwzgldc060s4x3tkngvwo1nv&st=q9gjvse2&dl=0" },
];
