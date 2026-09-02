// Theoretical Framework & Structured Content based on the Academic Essay:
// "Navigasi Transisi Emerging Adulthood Melalui CORE AI & Schlossberg's Transition Theory (STT 4S Model)"

export const APP_INFO = {
  name: "CORE AI",
  subtitle: "Emerging Adulthood Transition Platform",
  tagline: "Navigasi Masa Dewasa Awal dengan Pendekatan 4S Terintegrasi & Cognitive Orchestration Engine (COE)",
  version: "2.5.0 (iOS 18 Edition)",
  frameworks: [
    { 
      name: "CORE AI & Cognitive Orchestration Engine (COE)", 
      desc: "Ekstensi sistem internal yang mengubah structured prompting dari perintah manual menjadi alur kognitif yang mengintegrasikan tiga intervensi: Socratic method, Reflective Modal, dan Scaffolding guna memitigasi cognitive offloading, meningkatkan berpikir kritis, serta mengasah working memory dan kemampuan retrieval information (Esai Bab 2.1)." 
    },
    { 
      name: "Schlossberg's Transition Theory (STT - 4S Model)", 
      desc: "Landasan teoritis navigasi transisi hidup signifikan dengan menggunakan model 4S (Situation, Self, Support, Strategies) untuk koping adaptif dan pengembangan self-growth (Schlossberg, 1984 dalam Strong, 2026; Esai Bab 2.2)." 
    },
    { 
      name: "Personal Growth Initiative (PGI)", 
      desc: "Keterlibatan proaktif individu untuk mengembangkan diri dalam menghadapi transisi dan perubahan masa emerging adulthood (Robitschek, 1998 dalam Verdoodt et al., 2026; Saraswati et al., 2023)." 
    },
    { 
      name: "Values in Action (VIA) Character Strengths", 
      desc: "Klasifikasi kekuatan karakter positif manusia non-patologis sebagai 'bahasa umum' modal eksplorasi identitas (Niemiec, 2020; Esai Bab 2.3 Pilar 2)." 
    },
    { 
      name: "Narrative Identity & Dynamic Identity Status", 
      desc: "Pemaknaan kisah hidup melalui integrasi pengalaman masa lalu (McAdams, 2018) dan representasi profil diri dinamis eksplorasi-komitmen (Marcia, 1966)." 
    },
    { 
      name: "Self-Determination Theory & Mastery Experiences", 
      desc: "Pemenuhan kebutuhan kompetensi psikologis (Deci et al., 2017), pemecahan milestone realistis (Pilcher et al., 2022), akumulasi keberhasilan kecil (Bandura, 1997), dan evaluasi proses mandiri (Guo, 2022; Esai Bab 2.3 Pilar 3)." 
    },
    { 
      name: "Collective Resilience & Psychological Safety", 
      desc: "Kelompok kecil terkurasi (Growth Circle) berbasis kesamaan nilai & tujuan (Luzanil & Menaldi, 2022; Forsyth, 2018) serta papan apresiasi Celebrate Wins untuk melawan comparison trap." 
    },
  ]
};

export const DEMO_STAGES = [
  {
    id: "overview",
    tab: "home",
    number: "0",
    title: "Overview & Widget Hub",
    shortTitle: "Overview",
    subtitle: "Tampilan Utama Berbasis Widget iOS",
    problem: "Emerging adults (18-29 tahun) menghadapi periode paling tidak stabil dalam hidup (Saikkonen et al., 2018) dengan risiko future anxiety, isolasi sosial, dan fenomena failure to launch (Berger et al., 2026; Kato et al., 2017).",
    mechanism: "CORE AI mengintegrasikan 4 domain psikologis (4S: Situation, Self, Strategies, Support) ke dalam satu mekanisme terpadu yang berkesinambungan didukung oleh Cognitive Orchestration Engine (COE).",
    outcome: "Pengguna memiliki dashboard terpadu yang memantau perkembangan emosi, identitas, kebiasaan mikro, dan koneksi sosial.",
    actionPrompt: "Lihat ringkasan 4S di tampilan Home iPhone di sebelah kanan."
  },
  {
    id: "pilar1",
    tab: "situation",
    number: "1",
    title: "Pilar 1: Situation (Life Transition)",
    shortTitle: "1. Situation",
    subtitle: "Intercept, Validate, Acceptance, Confidence",
    problem: "Kecemasan masa depan (future anxiety) yang bersifat kabur, perasaan bersalah, dan anggapan bahwa diri 'aneh' atau 'gagal' saat mengalami tekanan transisi.",
    mechanism: "3 Proses Berkesinambungan: (1) Transition Mapping (penamaan konkret situasi nyata), (2) Challenge Assessment (skor 4 domain + psikoedukasi validasi normalitas respons), (3) Acceptance Framework (dikotomi kendali & Evolution Domain).",
    outcome: "Pengguna bergeser dari rasa 'hanyut' menuju kejelasan peta situasi dan penerimaan sadar sebelum melangkah ke kekuatan diri.",
    bridgeQuote: "Sekarang kita sudah tahu medan perangnya. Yuk, kita lihat bekal apa saja yang sudah kamu miliki.",
    subSteps: [
      { id: "1.1", name: "Transition Mapping", desc: "Memilih kategori transisi nyata & menuliskan narasi konkret untuk memecah future anxiety." },
      { id: "1.2", name: "Challenge Assessment & Validasi", desc: "Skor tingkat kesulitan 1-10 di 4 domain & edukasi validasi 78%+ emerging adult mengalaminya." },
      { id: "1.3", name: "Acceptance & Evolution Domain", desc: "Memisahkan hal dalam kendali vs di luar kendali -> Confidence terbangun." }
    ]
  },
  {
    id: "pilar2",
    tab: "self",
    number: "2",
    title: "Pilar 2: Self (Discovery)",
    shortTitle: "2. Self",
    subtitle: "Strength Mapping, Narrative Identity, Dynamic Profile",
    problem: "Low self-concept dan krisis identitas pada emerging adult yang merasa tidak memiliki kapasitas atau terjebak dalam label negatif.",
    mechanism: "3 Tahapan Berkesinambungan: (1) VIA Strength Mapping (Niemiec, 2020), (2) Identity Timeline menghubungkan pengalaman masa lalu (McAdams, 2018), dan (3) Profil Discovery dinamis berdasarkan eksplorasi & komitmen (Marcia, 1966).",
    outcome: "Membangun pemahaman diri dinamis bukan label permanen, sebagai modalitas psikologis untuk melangkah maju.",
    bridgeQuote: "Kekuatanmu sudah terpetakan. Saatnya merancang strategi bertumbuh!",
    subSteps: [
      { id: "2.1", name: "VIA Strength Mapping", desc: "Identifikasi 3 kekuatan karakter positif utama (Curiosity, Bravery, Persistence)." },
      { id: "2.2", name: "Identity Timeline", desc: "Menghubungkan kekuatan karakter dengan momen perjuangan masa lalu (McAdams narrative)." },
      { id: "2.3", name: "Profil Discovery", desc: "Representasi diri dinamis berdasarkan eksplorasi & komitmen (Marcia dynamic identity)." }
    ]
  },
  {
    id: "pilar3",
    tab: "strategies",
    number: "3",
    title: "Pilar 3: Strategies (Navigating Growth)",
    shortTitle: "3. Strategies",
    subtitle: "Capacity Building & Mastery Experiences",
    problem: "Low self-confidence, kebingungan menentukan arah, dan overwhelmed oleh target besar tanpa langkah konkret.",
    mechanism: "3 Proses: (1) Adaptive Roadmap memecah tujuan besar sesuai kapasitas (Pilcher et al., 2022; Deci et al., 2017), (2) Micro-practice untuk akumulasi Bandura (1997) mastery experiences, dan (3) Progress Reflection evaluasi belajar mandiri (Guo, 2022).",
    outcome: "Meningkatnya efikasi diri (self-efficacy) melalui keberhasilan berulang pada latihan-latihan kecil terukur dan evaluasi proses berkelanjutan.",
    bridgeQuote: "Strategimu sudah berjalan. Mari terhubung dengan circle seperjuangan!",
    subSteps: [
      { id: "3.1", name: "Adaptive Roadmap", desc: "Menerjemahkan tujuan besar menjadi milestone realistis sesuai kapasitas energi mental." },
      { id: "3.2", name: "Micro-Practice (Mastery)", desc: "Latihan kecil harian berulang yang memicu akumulasi keberhasilan kecil (mastery experiences)." },
      { id: "3.3", name: "Progress Reflection", desc: "Evaluasi strategi proses & pembelajaran mandiri (Self-Regulated Learning)." }
    ]
  },
  {
    id: "pilar4",
    tab: "support",
    number: "4",
    title: "Pilar 4: Support (Collective Resilience)",
    shortTitle: "4. Support",
    subtitle: "Support System, Shared Journey, Belonging",
    problem: "Isolasi sosial, tidak memiliki support system yang aman, dan fenomena comparison trap di media sosial yang memicu inferioritas.",
    mechanism: "Mengolah data dari Pilar 2 & 3 untuk membentuk: (1) Growth Circle kelompok kecil terkurasi dengan prompt 2-mingguan proses-oriented (Luzanil & Menaldi, 2022; Forsyth, 2018), dan (2) Celebrate Wins apresiasi progres mikro nyata.",
    outcome: "Rasa keterhubungan (belonging), normalisasi perjuangan bersama (shared struggle), dan budaya saling mengapresiasi progres nyata.",
    bridgeQuote: "Kamu tidak sendirian. Kita bertumbuh bersama dalam circle yang aman.",
    subSteps: [
      { id: "4.1", name: "Growth Circle", desc: "Kelompok kecil 4-6 orang dengan kesamaan values & target + prompt pemantik 2-mingguan proses-oriented." },
      { id: "4.2", name: "Celebrate Wins & Appreciations", desc: "Papan berbagi progres kecil melawan comparison trap dengan respon apresiasi terstruktur." }
    ]
  },
  {
    id: "coe",
    tab: "coe",
    number: "5",
    title: "Cognitive Orchestration Engine (COE)",
    shortTitle: "COE AI Engine",
    subtitle: "Socratic Method, Reflective Modal, & Scaffolding",
    problem: "Bahaya cognitive offloading di mana individu menjadi pasif dan bergantung pada AI generik tanpa melatih penalaran kritis.",
    mechanism: "COE merupakan sistem internal CORE AI yang mengubah structured prompting menjadi alur kognitif melalui 3 intervensi: Socratic method (pertanyaan pemantik), Reflective Modal (jeda sadar), dan Scaffolding (tangga berpikir bergradasi).",
    outcome: "Pengguna terlatih berpikir kritis, mengasah working memory, meningkatkan kemampuan retrieval information, serta membangun kemandirian kognitif.",
    bridgeQuote: "COE AI bukan untuk berpikir menggantikanmu, melainkan untuk melatih ketajaman berpikirmu.",
    subSteps: [
      { id: "5.1", name: "Socratic Method", desc: "COE membimbing dengan pertanyaan pemantik reflektif bukan sekadar memberi jawaban instan." },
      { id: "5.2", name: "Reflective Modal", desc: "Jeda sadar untuk memeriksa asumsi kognitif dan emosi pengguna." },
      { id: "5.3", name: "Cognitive Scaffolding", desc: "Bantuan terstruktur bergradasi sesuai kesiapan kognitif pengguna." }
    ]
  }
];

export const MOCK_PERSONAS = [
  {
    id: "venta",
    name: "Venta Alyqa",
    age: 20,
    role: "Mahasiswi S1 Semester 5 (Transisi Akademik & Karir)",
    role: "Mahasiswi S1 Semester 3 (Transisi Akademik & Karir)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    transition: "Eksplorasi Karir, Beban Akademik & Ekspektasi Mandiri",
    narrative: "Memasuki semester 5, saya mulai merasakan future anxiety yang tinggi. Melihat teman-teman di media sosial sudah mulai magang di perusahaan ternama dan aktif berprestasi, saya sering terjebak comparison trap dan merasa tertinggal. Ditambah tuntutan tugas kuliah yang padat dan keinginan mulai mandiri secara finansial tanpa terus membebani orang tua, saya sering cemas dan meragukan kapasitas diri sendiri.",
    narrative: "Memasuki semester 3, saya mulai merasakan future anxiety yang tinggi. Melihat teman-teman di media sosial sudah mulai aktif proyek luar kampus dan berprestasi, saya sering terjebak comparison trap dan merasa tertinggal. Ditambah tuntutan tugas kuliah yang semakin padat dan keinginan mulai mandiri secara finansial tanpa terus membebani orang tua, saya sering cemas dan meragukan kapasitas diri sendiri.",
    scores: { psychological: 8, social: 7, financial: 6, career: 9 },
    challenges: {
      psychological: "Kecemasan masa depan (future anxiety) dan sindrom imposter akibat perbandingan linimasa di media sosial.",
      social: "Circle pertemanan mulai terdistraksi kesibukan masing-masing, merasa sungkan bercerita mengenai ketakutan diri.",
      financial: "Mulai belajar mengelola anggaran hidup mandiri dan mencari peluang magang berbayar untuk biaya kuliah.",
      career: "Tuntutan akademik semester 5 yang padat dan kebingungan menyusun portofolio serta arah karir pasca kampus."
      career: "Tuntutan akademik semester 3 yang padat dan kebingungan menentukan fokus minat serta menyusun portofolio awal."
    },
    control: {
      canControl: "Konsisten menyelesaikan 1 micro-practice harian, belajar skill baru 20 menit, dan membatasi scrolling medsos.",
      mustAccept: "Linimasa dan pencapaian orang lain di media sosial serta proses bertahap transisi masa dewasa awal."
    },
    viaStrengths: [
      { name: "Curiosity (Rasa Ingin Tahu)", score: 92, category: "Wisdom", desc: "Antusias mengeksplorasi disiplin ilmu baru, teknologi, dan peluang pengembangan diri." },
      { name: "Bravery (Keberanian)", score: 87, category: "Courage", desc: "Berani mengambil tanggung jawab proyek baru dan menghadapi ketidakpastian." },
      { name: "Persistence (Kegigihan)", score: 84, category: "Courage", desc: "Konsisten bertahan menyelesaikan tugas-tugas berat meski di bawah tekanan." }
    ],
    timeline: [
      {
        title: "Adaptasi Mandiri Tahun Pertama Kuliah",
        struggle: "Sempat kesulitan mengatur waktu belajar mandiri dan adaptasi lingkungan baru, namun berhasil mempertahankan IPK memuaskan.",
        strengthUsed: "Persistence"
      },
      {
        title: "Menjadi Koordinator Divisi Acara Kampus",
        struggle: "Menghadapi dinamika tim dan deadline ketat, berani mengambil keputusan komunikasi terbuka yang menyatukan anggota tim.",
        strengthUsed: "Bravery"
      }
    ],
    milestones: [
      { id: 1, title: "Audit Minat Karir & Penataan Resume Akademik", status: "completed", progress: 100 },
      { id: 2, title: "Targeted Outreach ke 3 Alumni / Supervisor Magang", status: "in_progress", progress: 60 },
      { id: 3, title: "Simulasi Mock Interview Kognitif & Refleksi COE AI", status: "pending", progress: 0 }
    ],
    microPractices: [
      { id: "mp1", title: "Review 1 Materi Kuliah / Skill Magang 20 Menit", duration: "20 min", domain: "Career", completed: true },
      { id: "mp2", title: "Latihan Box Breathing 3 Menit Saat Overthinking Masa Depan", duration: "3 min", domain: "Psychological", completed: true },
      { id: "mp3", title: "Tulis 1 Catatan Syukur & Kemenangan Kecil Hari Ini", duration: "5 min", domain: "Self", completed: false }
    ],
    circle: {
      name: "Campus Explorers #09",
      members: 5,
      currentPrompt: "Minggu ini, apa momen kebimbangan masa depan yang paling kamu rasakan saat kuliah/mempersiapkan magang, dan langkah kecil apa yang tetap kamu ambil?",
      posts: [
        {
          id: "cp1",
          author: "Venta Alyqa",
          role: "Mahasiswi S1",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
          content: "Kemarin sempat down melihat teman-teman dapat offer magang impian. Tapi setelah refleksi di Pilar 1 & 2, saya sadar setiap orang punya kurva berkembang masing-masing. Tadi sore saya fokus selesaikan 1 draft proposal skripsi. Langkah kecil tapi bikin hati jauh lebih tenang!",
          timestamp: "1 jam lalu",
          appreciations: ["Relate Banget ❤️ (5)", "Langkah Berani! 🛡️ (4)", "Kagum Ketekunanmu 💪 (3)"]
        },
        {
          id: "cp2",
          author: "Nadia S.",
          role: "Mahasiswi Desain",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
          content: "Prompt minggu ini kena banget. Aku sadar overthinking muncul saat buka medsos tanpa tujuan. Hari ini aku mute notifikasi selama 3 jam untuk menuntaskan portofolio desain.",
          timestamp: "4 jam lalu",
          appreciations: ["Keren Banget 🌟 (4)", "Fokus Hebat! 🎯 (2)"]
        }
      ]
    }
  },
  {
    id: "dimas",
    name: "Dimas Pratama",
    age: 22,
    role: "Fresh Graduate Ilmu Komputer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    transition: "Lulus Kuliah & Menanti Karir Pertama",
    narrative: "Baru saja wisuda 2 bulan lalu. Melihat teman-teman di LinkedIn sudah pasang badge 'Accepted Offer', rasanya cemas luar biasa. Ekspektasi orang tua di kampung juga tinggi, tapi sudah kirim 40 lamaran belum ada panggilan interview. Kadang merasa ijazah ini sia-sia.",
    scores: { psychological: 8, social: 7, financial: 6, career: 9 },
    challenges: {
      psychological: "Takut mengecewakan orang tua dan merasa tertinggal jauh dari teman seangkatan.",
      social: "Circle kampus mulai sibuk masing-masing, merasa kesepian dan enggan buka media sosial.",
      financial: "Tabungan sisa uang saku kuliah menipis, cemas jika harus minta bantuan orang tua lagi.",
      career: "CV sering terhenti di tahap screening ATS, bingung cara menyusun portfolio yang relevan."
    },
    control: {
      canControl: "Konsisten memperbaiki 1 proyek portfolio per minggu & mengirim 2 lamaran terarah tiap hari.",
      mustAccept: "Keputusan recruiter & timeline pencapaian hidup orang lain di LinkedIn."
    },
    viaStrengths: [
      { name: "Persistence (Kegigihan)", score: 92, category: "Courage", desc: "Kemampuan terus melangkah meski menghadapi penolakan." },
      { name: "Curiosity (Rasa Ingin Tahu)", score: 88, category: "Wisdom", desc: "Antusias mengeksplorasi teknologi dan perspektif baru." },
      { name: "Bravery (Keberanian)", score: 81, category: "Courage", desc: "Berani merantau dan mencoba hal-hal di luar zona nyaman." }
    ],
    timeline: [
      {
        title: "Penyelesaian Skripsi & Tugas Akhir",
        struggle: "Mengalami kebuntuan algoritma selama 2 bulan, namun tetap konsisten konsultasi dan riset hingga tuntas.",
        strengthUsed: "Persistence"
      }
    ],
    milestones: [
      { id: 1, title: "Fondasi Portfolio & CV ATS-Friendly", status: "completed", progress: 100 },
      { id: 2, title: "Targeted Outreach ke 5 Alumni Senior Tech", status: "in_progress", progress: 60 },
      { id: 3, title: "Simulasi Mock Interview Kognitif dengan COE AI", status: "pending", progress: 0 }
    ],
    microPractices: [
      { id: "mp1", title: "Kirim 1 Pesan Pendek & Sopan ke Alumni di LinkedIn", duration: "10 min", domain: "Career", completed: true },
      { id: "mp2", title: "Latihan Box Breathing 3 Menit Saat Cemas Masa Depan", duration: "3 min", domain: "Psychological", completed: true },
      { id: "mp3", title: "Review 1 Proyek Coding & Catat 1 Solusi Masalah", duration: "25 min", domain: "Competence", completed: false }
    ],
    circle: {
      name: "Tech Navigators #14",
      members: 6,
      currentPrompt: "Minggu ini, apa momen penolakan/kebimbangan yang kamu hadapi, dan langkah kecil apa yang tetap kamu ambil?",
      posts: []
    }
  },
  {
    id: "anindya",
    name: "Anindya Putri",
    age: 24,
    role: "First-Time Corporate Worker (Merantau)",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    transition: "Pindah Kota & Mandiri Pertama Kali (Rantau)",
    narrative: "Baru pindah ke Jakarta 3 bulan lalu untuk kerja pertama. Tekanan target kantor tinggi, pulang ke kosan sepi tanpa keluarga atau teman dekat. Sering merasa burnout dan takut tidak mampu bertahan di kota besar.",
    scores: { psychological: 9, social: 9, financial: 5, career: 7 },
    challenges: {
      psychological: "Merasa kesepian kronis dan cemas tidak mampu memenuhi standar bos.",
      social: "Kehilangan support system keluarga, sulit mencari teman ngobrol yang tulus di kantor.",
      financial: "Biaya sewa kos dan hidup di ibukota cukup menguras gaji fresh graduate.",
      career: "Budaya kerja fast-paced sering membuat overthinking saat menerima kritik."
    },
    control: {
      canControl: "Mengatur batas waktu istirahat malam dan meluangkan waktu video call orang tua tiap Sabtu.",
      mustAccept: "Dinamika cuaca, macetnya transportasi kota, dan ritme kerja rekan kantor."
    },
    viaStrengths: [
      { name: "Perspective (Kebijaksanaan)", score: 94, category: "Wisdom", desc: "Mampu melihat persoalan dari sudut pandang yang lebih luas." },
      { name: "Love of Learning", score: 90, category: "Wisdom", desc: "Semangat tinggi menyerap keterampilan baru di lingkungan baru." },
      { name: "Hope (Harapan & Optimisme)", score: 85, category: "Transcendence", desc: "Keyakinan bahwa masa depan bisa dibentuk secara bertahap." }
    ],
    timeline: [
      {
        title: "Bulan Pertama Hidup Mandiri di Ibukota",
        struggle: "Culture shock dan rindu rumah, belajar memasak sendiri dan mengatur ritme harian.",
        strengthUsed: "Perspective"
      }
    ],
    milestones: [
      { id: 1, title: "Stabilisasi Ritme Tidur & Budget Mingguan Rantau", status: "completed", progress: 100 },
      { id: 2, title: "Membangun 1 Hubungan Pertemanan Sehat di Luar Kantor", status: "in_progress", progress: 40 },
      { id: 3, title: "Evaluasi Feedback Kuartal Pertama dengan Supervisor", status: "pending", progress: 0 }
    ],
    microPractices: [
      { id: "mp1", title: "Jalan Pagi 15 Menit Tanpa Menatap Layar HP", duration: "15 min", domain: "Psychological", completed: true },
      { id: "mp2", title: "Sapa 1 Tetangga Kos / Barista dengan Senyum Ramah", duration: "2 min", domain: "Social", completed: false },
      { id: "mp3", title: "Tulis 1 Kalimat Syukur atas Kemandirian Hari Ini", duration: "5 min", domain: "Self", completed: true }
    ],
    circle: {
      name: "Urban Wanderers #08",
      members: 5,
      currentPrompt: "Apa ritual kecil yang membantumu merasa 'pulang' di perantauan minggu ini?",
      posts: []
    }
  }
];

export const TRANSITION_CATEGORIES = [
  { id: "t1", title: "Eksplorasi Karir, Beban Akademik & Ekspektasi Mandiri", icon: "GraduationCap", desc: "Transisi dunia akademik, pencarian minat karir, dan tuntutan kemandirian." },
  { id: "t2", title: "Lulus Kuliah & Menanti Karir Pertama", icon: "Briefcase", desc: "Transisi dari dunia terstruktur kampus menuju ketidakpastian dunia kerja profesional." },
  { id: "t3", title: "Pindah Kota & Rantau Mandiri", icon: "MapPin", desc: "Tantangan adaptasi lingkungan baru, hidup sendiri, dan isolasi sosial/kesepian." },
  { id: "t4", title: "Tekanan Finansial Pertama Kali Mandiri", icon: "Coins", desc: "Mengelola anggaran bulanan mandiri tanpa terus bergantung pada orang tua." },
  { id: "t5", title: "Perubahan Relasi / Dinamika Pertemanan", icon: "HeartCrack", desc: "Circle pertemanan yang menyusut, restrukturisasi relasi interpersonal, dan ekspektasi sosial." }
];

export const VIA_CHARACTER_CATALOG = [
  { name: "Curiosity (Rasa Ingin Tahu)", category: "Wisdom", desc: "Tertarik pada berbagai hal baru dan antusias bereksplorasi." },
  { name: "Bravery (Keberanian)", category: "Courage", desc: "Berani mengambil risiko dan bertindak sesuai prinsip meski takut." },
  { name: "Persistence (Kegigihan)", category: "Courage", desc: "Menuntaskan apa yang dimulai dan tidak mudah menyerah pada rintangan." },
  { name: "Perspective (Kebijaksanaan)", category: "Wisdom", desc: "Mampu memberikan nasihat bijak dan melihat gambaran besar masalah." },
  { name: "Love of Learning", category: "Wisdom", desc: "Selalu bersemangat menguasai topik atau keahlian baru." },
  { name: "Hope (Harapan)", category: "Transcendence", desc: "Mengharapkan hal terbaik di masa depan dan berusaha mewujudkannya." }
];

export const SOCRATIC_PROMPTS = [
  {
    topic: "Future Anxiety & Ketakutan Gagal",
    question: "Apa bukti konkret bahwa satu kebimbangan atau tantangan saat ini menentukan seluruh masa depanmu?",
    socraticHint: "Pikirkan 1 pengalaman masa lalu ketika kamu pernah merasa cemas namun akhirnya bisa melewatinya."
  },
  {
    topic: "Perbandingan Sosial (Comparison Trap)",
    question: "Ketika melihat linimasa pencapaian orang lain di media sosial, bagian mana dari perjuangan nyata mereka yang tidak terlihat olehmu?",
    socraticHint: "Orang biasanya hanya memajang highlight hasil akhir, bukan 90% proses penolakan dan keraguan di baliknya."
  },
  {
    topic: "Dikotomi Kendali (Dichotomy of Control)",
    question: "Jika kamu memisahkan energimu: Apa 1 tindakan konkret yang 100% berada di bawah kendalimu dalam 24 jam ke depan?",
    socraticHint: "Fokus pada aksimu sendiri (mikro-tindakan), bukan pada hasil akhir yang ditentukan pihak eksternal."
  }
];

export const VIA_STRENGTHS_CATALOG = VIA_CHARACTER_CATALOG;

export const COMMUNITY_WINS_FEED = [
  { id: 1, author: "Venta A.", tag: "Career", text: "Berhasil menyelesaikan 1 draft proposal magang & resume tanpa overthinking!", applause: 9 },
  { id: 2, author: "Dimas P.", tag: "Career", text: "Kirim 2 lamaran terarah & perbaiki 1 proyek portofolio tanpa terjebak comparison trap!", applause: 14 },
  { id: 3, author: "Anindya P.", tag: "Psychological", text: "Jalan pagi 15 menit tanpa HP. Pikiran jauh lebih jernih dan tenang menghadapi hari!", applause: 12 },
  { id: 4, author: "Nadia S.", tag: "Habit", text: "Mute notifikasi media sosial selama 4 jam untuk selesaikan modul desain.", applause: 8 }
];

