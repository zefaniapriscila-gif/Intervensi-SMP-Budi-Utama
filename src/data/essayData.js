// Theoretical Framework & Structured Content based on the Academic Essay:
// "Navigasi Transisi Emerging Adulthood Melalui Growth & Schlossberg's Transition Theory (STT 4S Model)"

export const APP_INFO = {
  name: "Growth",
  subtitle: "Emerging Adulthood Transition Platform",
  tagline: "Navigasi Masa Dewasa Awal dengan Pendekatan 4S Terintegrasi & Cognitive Orchestration Engine",
  version: "2.4.0 (iOS 18 Edition)",
  frameworks: [
    { name: "Schlossberg's Transition Theory (STT)", desc: "Model 4S (Situation, Self, Support, Strategies) untuk menavigasi transisi hidup signifikan (Schlossberg, 1984 dalam Strong, 2026)." },
    { name: "Cognitive Orchestration Engine (COE)", desc: "Sistem internal terstruktur dengan 3 intervensi: Socratic Method, Reflective Modal, dan Scaffolding untuk memitigasi cognitive offloading." },
    { name: "Personal Growth Initiative (PGI)", desc: "Keterlibatan proaktif individu untuk mengembangkan diri (Robitschek, 1998 dalam Verdoodt et al., 2026)." },
    { name: "Values in Action (VIA) Character Strengths", desc: "Klasifikasi kapasitas positif manusia non-patologis sebagai modal eksplorasi identitas (Niemiec, 2020)." },
    { name: "Narrative Identity & Status Identitas", desc: "Pemaknaan kisah hidup (McAdams, 2018) dan model dinamis eksplorasi-komitmen (Marcia, 1966)." },
    { name: "Self-Determination & Mastery Experiences", desc: "Kebutuhan kompetensi (Deci et al., 2017) dan pembentukan self-efficacy lewat akumulasi keberhasilan kecil (Bandura, 1997)." },
    { name: "Collective Resilience", desc: "Dukungan kelompok kecil (Luzanil & Menaldi, 2022) dan budaya apresiasi melawan comparison trap." },
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
    problem: "Emerging adults (18-29 tahun) menghadapi periode paling tidak stabil dalam hidup (Saikkonen et al., 2018) dengan risiko future anxiety, isolasi sosial, dan fenomena failure to launch (Berger et al., 2026).",
    mechanism: "Mengintegrasikan 4 domain psikologis (4S: Situation, Self, Strategies, Support) ke dalam satu ekosistem terpadu yang adaptif dan proaktif.",
    outcome: "Pengguna memiliki dashboard harian terpadu yang memantau perkembangan emosi, identitas, kebiasaan mikro, dan koneksi sosial.",
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
    mechanism: "3 Proses Berkesinambungan: (1) Transition Mapping (penamaan konkret), (2) Challenge Assessment (skor 4 domain + psikoedukasi validasi), (3) Acceptance Framework (dikotomi kendali & Evolution Domain).",
    outcome: "Pengguna bergeser dari rasa 'hanyut' menuju kejelasan peta situasi dan penerimaan sadar sebelum melangkah ke kekuatan diri.",
    bridgeQuote: "Sekarang kita sudah tahu medan perangnya. Yuk, kita lihat bekal apa saja yang sudah kamu miliki.",
    subSteps: [
      { id: "1.1", name: "Transition Mapping", desc: "Memilih kategori transisi nyata & menuliskan narasi konkret." },
      { id: "1.2", name: "Challenge Assessment & Validasi", desc: "Skor tingkat kesulitan 1-10 di 4 domain & edukasi validasi 78% emerging adult." },
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
    mechanism: "Mengadopsi VIA Character Strengths (Niemiec, 2020), McAdams (2018) Narrative Identity menelusuri kisah bertahan masa lalu, dan Marcia (1966) dynamic identity status.",
    outcome: "Membangun pemahaman diri dinamis bukan label permanen, sebagai modal modalitas psikologis untuk melangkah maju.",
    bridgeQuote: "Kekuatanmu sudah terpetakan. Saatnya merancang strategi bertumbuh!",
    subSteps: [
      { id: "2.1", name: "VIA Strength Mapping", desc: "Identifikasi 3 kekuatan karakter utama non-patologis (Bravery, Curiosity, Persistence)." },
      { id: "2.2", name: "Identity Timeline", desc: "Menghubungkan kekuatan dengan momen perjuangan masa lalu (McAdams narrative)." },
      { id: "2.3", name: "Profil Discovery", desc: "Representasi diri dinamis berdasarkan eksplorasi & komitmen (Marcia)." }
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
    mechanism: "Self-Determination Theory (Deci et al., 2017), Adaptive Roadmap memecah tujuan (Pilcher et al., 2022), Micro-practice untuk akumulasi Bandura (1997) mastery experiences, dan Self-Regulated Learning (Guo, 2022).",
    outcome: "Meningkatnya efikasi diri (self-efficacy) melalui keberhasilan berulang pada latihan-latihan kecil terukur dan evaluasi proses berkelanjutan.",
    bridgeQuote: "Strategimu sudah berjalan. Mari terhubung dengan circle seperjuangan!",
    subSteps: [
      { id: "3.1", name: "Adaptive Roadmap", desc: "Menerjemahkan tujuan besar menjadi milestone realistis sesuai kapasitas." },
      { id: "3.2", name: "Micro-Practice (Mastery)", desc: "Latihan kecil harian berulang yang memicu akumulasi keberhasilan kecil." },
      { id: "3.3", name: "Progress Reflection", desc: "Evaluasi strategi & pembelajaran mandiri (Self-Regulated Learning)." }
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
    mechanism: "Kelompok kecil terkurasi (Growth Circle) berbasis kesamaan values & domain (Luzanil & Menaldi, 2022; Forsyth, 2018), prompt pemantik 2 mingguan proses-oriented, dan papan Celebrate Wins.",
    outcome: "Rasa keterhubungan (belonging), normalisasi perjuangan bersama (shared struggle), dan budaya saling mengapresiasi progres nyata.",
    bridgeQuote: "Kamu tidak sendirian. Kita bertumbuh bersama dalam circle yang aman.",
    subSteps: [
      { id: "4.1", name: "Growth Circle", desc: "Kelompok kecil 4-6 orang dengan values & target serupa + prompt pemantik 2 mingguan." },
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
    problem: "Bahaya cognitive offloading di mana pengguna menjadi pasif dan bergantung pada AI generik tanpa melatih penalaran kritis.",
    mechanism: "Sistem COE internal mengubah structured prompting menjadi alur kognitif yang memantik pertanyaan sokratik, menyajikan modal reflektif, dan memberikan tangga scaffolding kognitif.",
    outcome: "Pengguna terlatih berpikir kritis, mengasah working memory, dan memiliki otonomi pemikiran mandiri.",
    bridgeQuote: "AI bukan untuk berpikir menggantikanmu, melainkan untuk melatih ketajaman berpikirmu.",
    subSteps: [
      { id: "5.1", name: "Socratic Method", desc: "AI membimbing dengan pertanyaan pemantik bukan jawaban instan." },
      { id: "5.2", name: "Reflective Modal", desc: "Jeda sadar untuk memeriksa asumsi dan emosi pengguna." },
      { id: "5.3", name: "Cognitive Scaffolding", desc: "Bantuan terstruktur bergradasi sesuai kesiapan kognitif." }
    ]
  }
];

export const MOCK_PERSONAS = [
  {
    id: "dimas",
    name: "Dimas Pratama",
    age: 22,
    role: "Fresh Graduate Ilmu Komputer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
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
      posts: [
        {
          id: "cp1",
          author: "Nadia S.",
          role: "Junior UI Designer",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
          content: "Kemarin sempat down karena rejected dari stage final. Tapi tadi pagi aku luangkan 20 menit bikin review feedback dan apply 1 studio lokal. Langkah kecil tapi bikin nafas lega!",
          timestamp: "2 jam lalu",
          appreciations: ["Kagum ketekunanmu 💪 (4)", "Kamu pasti bisa! 🌟 (3)"]
        },
        {
          id: "cp2",
          author: "Rian F.",
          role: "Data Enthusiast",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
          content: "Prompt minggu ini kena banget. Aku sadar rasa cemas muncul saat bandingkan timeline sama teman. Hari ini aku mute notif medsos selama 4 jam dan fokus selesaiin modul SQL.",
          timestamp: "5 jam lalu",
          appreciations: ["Relate banget! ❤️ (5)", "Langkah berani! 🛡️ (2)"]
        }
      ]
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
  { id: "t1", title: "Lulus Kuliah & Cari Karir", icon: "GraduationCap", desc: "Transisi dari dunia akademik terstruktur menuju ketidakpastian dunia kerja." },
  { id: "t2", title: "Memasuki Dunia Kerja Pertama", icon: "Briefcase", desc: "Adaptasi budaya profesional, ekspektasi kinerja, dan sindrom imposter." },
  { id: "t3", title: "Pindah Kota & Rantau Mandiri", icon: "MapPin", desc: "Tantangan adaptasi lingkungan baru, hidup sendiri, dan kesepian (loneliness)." },
  { id: "t4", title: "Tekanan Finansial Mandiri", icon: "Coins", desc: "Mengelola anggaran pertama kali, pajak, biaya hidup tanpa bergantung keluarga." },
  { id: "t5", title: "Perubahan Relasi / Putus Hubungan", icon: "HeartCrack", desc: "Dinamika hubungan asmara, circle pertemanan yang menyusut dan berubah." }
];

export const VIA_CHARACTER_CATALOG = [
  { name: "Bravery (Keberanian)", category: "Courage", desc: "Berani mengambil risiko dan bertindak sesuai prinsip meski takut." },
  { name: "Curiosity (Rasa Ingin Tahu)", category: "Wisdom", desc: "Tertarik pada berbagai hal baru dan antusias bereksplorasi." },
  { name: "Persistence (Kegigihan)", category: "Courage", desc: "Menuntaskan apa yang dimulai dan tidak mudah menyerah pada rintangan." },
  { name: "Perspective (Kebijaksanaan)", category: "Wisdom", desc: "Mampu memberikan nasihat bijak dan melihat gambaran besar masalah." },
  { name: "Love of Learning", category: "Wisdom", desc: "Selalu bersemangat menguasai topik atau keahlian baru." },
  { name: "Hope (Harapan)", category: "Transcendence", desc: "Mengharapkan hal terbaik di masa depan dan berusaha mewujudkannya." }
];

export const SOCRATIC_PROMPTS = [
  {
    topic: "Future Anxiety & Ketakutan Gagal",
    question: "Apa bukti konkret bahwa satu kegagalan saat ini menentukan seluruh masa depanmu?",
    socraticHint: "Pikirkan 1 pengalaman masa lalu ketika kamu pernah merasa gagal namun akhirnya bisa melewatinya."
  },
  {
    topic: "Perbandingan Sosial (Comparison Trap)",
    question: "Ketika melihat pencapaian orang lain di media sosial, bagian mana dari perjuangan mereka yang sebenarnya tidak terlihat olehmu?",
    socraticHint: "Orang biasanya hanya memajang hasil akhir (highlights), bukan 90% proses penolakan di baliknya."
  },
  {
    topic: "Dichotomy of Control",
    question: "Jika kamu memisahkan energimu: Apa 1 hal kecil yang 100% berada di bawah kendalimu dalam 24 jam ke depan?",
    socraticHint: "Fokus pada aksimu (tindakan), bukan pada hasil akhir yang ditentukan oleh orang lain."
  }
];

export const VIA_STRENGTHS_CATALOG = VIA_CHARACTER_CATALOG;

export const COMMUNITY_WINS_FEED = [
  { id: 1, author: "Dimas P.", tag: "Career", text: "Berhasil kirim 2 lamaran terarah & update 1 proyek GitHub tanpa overthinking!", applause: 8 },
  { id: 2, author: "Anindya P.", tag: "Psychological", text: "Jalan pagi 15 menit tanpa hp. Pikiran jauh lebih jernih menghadapi rapat kantor.", applause: 12 },
  { id: 3, author: "Rian F.", tag: "Habit", text: "Mute notif medsos selama 4 jam untuk selesaikan modul SQL.", applause: 6 }
];
