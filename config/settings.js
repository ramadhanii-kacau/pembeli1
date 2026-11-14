/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           OCEAN BIRTHDAY — SEMUA PENGATURAN DI SINI          ║
 * ║  Kamu HANYA perlu edit file ini. Tidak perlu buka file lain. ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  Cara pakai:
 *  1. Baca setiap bagian (1–7)
 *  2. Ganti nilai yang ada tanda  ← GANTI INI
 *  3. Simpan file → refresh browser
 */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. PIN MASUK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PIN 4–6 angka yang harus diketik tamu untuk membuka website.  */
const WEBSITE_PIN = "4321";              // ← GANTI PIN

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. NAMA PENERIMA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nama yang muncul di halaman utama (hero).                      */
const RECIPIENT_NAME = "OpanIsmia";           // ← GANTI NAMA


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. MUSIK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FILE MUSIK  → taruh di:  assets/music/song1.mp3
   FOTO COVER  → taruh di:  assets/music/song1.jpeg  (rasio 3:4)
   Lalu ganti judul dan nama artis di bawah ini.                  */
const MUSIC_TRACKS = [
  {
    title:  "Hingga Tua Bersama",             // ← GANTI JUDUL LAGU
    artist: "Rizky Febian",                   // ← GANTI NAMA ARTIS
    src:    "assets/music/song1.mp3",    //   (nama file mp3 — jangan diubah kecuali nama filenya beda)
    cover:  "assets/images/frame.jpeg",   //   (nama file cover — jangan diubah kecuali nama filenya beda)
    startTime: 0,                           // ← MULAI DARI DETIK KE BERAPA
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. FOTO GALERI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Taruh foto di:  assets/images/
   Nama file harus:  img1.jpeg  img2.jpeg  … img8.jpeg
   Ganti caption (keterangan foto) di setiap baris.               */
const GALLERY_PHOTOS = [
  { file: "img1.jpeg", caption: "" },  // ← GANTI CAPTION
  { file: "img2.jpeg", caption: "" },
  { file: "img3.jpeg", caption: "" },
  { file: "img4.jpeg", caption: "" },
  // { file: "img5.jpeg", caption: "pertamakali ngikut trend ml." },
  { file: "img6.jpeg", caption: "" },
  { file: "img5.jpeg", caption: "" },
  // { file: "img8.jpeg", caption: "still my favorite person, like, always and forever." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. ISI SURAT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Setiap string adalah satu paragraf.
   Bisa ditambah atau dikurangi paragrafnya.                       */
const LETTER_PARAGRAPHS = [
"Selamat bertambah usia, seseorang yang sudah menjadi bagian penting dalam perjalanan hidupku. Terima kasih sudah hadir dan bertahan sejauh ini, sejak 2022 hingga sekarang. Empat tahun bukanlah waktu yang sebentar, banyak cerita, tawa, dan hal-hal yang telah kita lewati bersama.",
"Aku tidak berharap semuanya selalu sempurna, aku hanya berharap kita tetap saling memilih, saling memahami, dan saling menguatkan dalam keadaan apa pun. Semoga semua impianmu tercapai, segala urusanmu dipermudah, dan kebahagiaan selalu menyertaimu.",
"Tetaplah menjadi Ismia yang aku kenal. Semoga bukan hanya hari ini, tetapi tahun-tahun berikutnya aku masih bisa menjadi orang yang mengucapkan selamat ulang tahun untukmu. ❤️",
// "Terima kasih telah menciptakan kenangan yang begitu berharga. Semoga kisah ini tidak hanya menjadi cerita tentang masa lalu, tetapi juga menjadi awal dari banyak cerita indah yang masih menunggu untuk ditulis."

];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. KENANGAN (TIMELINE)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   depth  = kedalaman yang ditampilkan (label saja)
   year   = judul bab
   title  = judul kenangan
   text   = isi cerita                                             */
const MEMORIES = [
  {
    depth: "2m",
    year:  "Chapter One",
    title: "Pertemuan",
    text:  "Awal mula Opan bertemu dengan Ismia terjadi di rumah teman Ismia yang bernama Ela. Saat itu, Opan datang ke rumah Ela dan tidak menyangka bahwa dirinya akan bertemu dengan seorang perempuan bernama Ismia. Pertemuan tersebut awalnya terasa biasa saja, tetapi ternyata menjadi awal dari sebuah cerita panjang yang tidak pernah Opan bayangkan sebelumnya.",
  },
  {
    depth: "8m",
    year:  "Chapter Two",
    title: "Titik Awal",
    text:  "Awal mula Opan bertemu dengan Ismia terjadi di rumah teman Ismia yang bernama Ela. Saat itu, Opan datang ke rumah Ela dan tidak menyangka bahwa dirinya akan bertemu dengan seorang perempuan bernama Ismia. Pertemuan tersebut awalnya terasa biasa saja, tetapi ternyata menjadi awal dari sebuah cerita panjang yang tidak pernah Opan bayangkan sebelumnya.",
  },
  {
    depth: "16m",
    year:  "Chapter Three",
    title: "Proses",
    text:  "Seiring berjalannya waktu, hubungan Opan dan Ismia semakin dekat hingga akhirnya mereka memutuskan untuk menjalin hubungan pada tahun 2022. Tidak terasa, perjalanan cinta mereka telah berlangsung dari 2022 hingga 2026. Selama bertahun-tahun bersama, tentu ada banyak cerita, kenangan, suka, duka, dan berbagai hal yang telah dilewati. Pertemuan sederhana di rumah Ela yang awalnya tidak berarti apa-apa kini menjadi awal dari perjalanan panjang mereka. Semoga hubungan yang telah dibangun selama ini tetap bertahan, semakin dewasa, dan terus bersama dalam menghadapi hari-hari berikutnya.",
  },
  // {
  //   depth: "24m",
  //   year:  "Chapter Four",
  //   title: "Langkah Berikutnya",
  //   text:  "Di balik kebahagiaan itu, Wildan sempat dihantui trauma dari masa lalu yang membuatnya ragu untuk kembali membuka hati. Namun, ia memilih untuk memaafkan, melepaskan keraguan tersebut, dan memberikan kesempatan baru bagi hubungan mereka. Kini, meskipun masa SMP telah berakhir dan mereka melanjutkan pendidikan di sekolah yang berbeda, jarak bukan lagi penghalang. Dengan saling percaya, mendukung, dan menjaga satu sama lain, Bilqis dan Wildan berkomitmen untuk terus melangkah bersama menuju masa depan.",
  // },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. UCAPAN ULANG TAHUN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   icon: wave | shell | star | compass | anchor | heart
   text: isi ucapannya                                            */
const WISHES = [
  { icon: "wave",    text: "keinginanku adalah dicintai olehmu selamanya, aku harap kau tak pernah berhenti mencintaiku." },
  { icon: "shell",   text: "semoga setiap impian yang kita bangun bersama dapat terwujud, satu persatu." },
  { icon: "star",    text: "semoga laki laki yang selalu kamu panggil ganteng itu aku, dan yang aku banggakan akan selalu kamu." },
  { icon: "compass", text: "semoga hari ini hanyalah awal dari ribuan kenangan indah yang akan kita ciptakan bersama." },
  { icon: "anchor",  text: "ku harap kamu tetap mengingatku, seolah aku adalah tempat yang selalu dituju oleh hatimu, tempat dimana hatimu selalu ingin kembali." },
  { icon: "heart",   text: "semoga aku dan kamu tidak tergoda dengan seseorang yang memiliki 2% sedangkan kita sama sama memiliki 98% itu." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   JANGAN EDIT DI BAWAH INI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
(function (window) {
  window.WEBSITE_PIN = String(WEBSITE_PIN);
  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   8. WHATSAPP REPLY BUTTON
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nomor WA untuk membalas pesan setelah lilin ditiup.
   Gunakan format internasional tanpa tanda + (contoh: 62812...) */
const WHATSAPP_NUMBER = "-";   // ← GANTI NOMOR WA YANG ORDER
const WHATSAPP_MESSAGE = "-"; // ← GANTI PESAN OTOMATIS

window.OCEAN_SETTINGS = {
    recipientName:    String(RECIPIENT_NAME),
    galleryPhotos:    GALLERY_PHOTOS,
    musicTracks:      MUSIC_TRACKS,
    letterParagraphs: LETTER_PARAGRAPHS,
    memories:         MEMORIES,
    wishes:           WISHES,
    whatsappNumber:   WHATSAPP_NUMBER,
    whatsappMessage:  WHATSAPP_MESSAGE
  };
})(window);