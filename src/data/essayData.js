// Theoretical Framework & Structured Content based on the Academic Essay:
// "GROWTH: Platform Personal Development untuk Emerging Adult Berbasis Schlossberg's Transition Theory (STT 4S Model) & Personal Growth Initiative (PGI)"

export const APP_INFO = {
  name: "GROWTH",
  subtitle: "Personal Development Platform untuk Emerging Adults",
  tagline: "Navigasi Transisi Hidup Menuju Kedewasaan dengan Pendekatan 4S Terintegrasi (Situation, Self, Strategies, Support) & Personal Growth Initiative (PGI)",
  version: "3.0.0 (iOS 18 Edition)",
  frameworks: [
    { 
      name: "Schlossberg's Transition Theory (STT - 4S Model)", 
      desc: "Landasan teoritis gagasan yang menjelaskan bagaimana individu menavigasi transisi hidup signifikan menggunakan model 4S (domain Situation, Self, Support, dan Strategies) untuk koping dan beradaptasi secara optimal (Schlossberg, 1984 dalam Strong, 2026; Esai Bab 2.2)." 
    },
    { 
      name: "Personal Growth Initiative (PGI)", 
      desc: "Keterlibatan proaktif individu untuk mengembangkan diri dalam menghadapi peristiwa dan transisi penting kehidupan, mengintegrasikan aspek pendidikan, karier, kesehatan mental, hingga dukungan sosial (Robitschek, 1998 dalam Verdoodt et al., 2026; Saraswati et al., 2023; Esai Bab 1.2 & 2.1)." 
    },
    { 
      name: "Emerging Adulthood (EA) & Failure to Launch", 
      desc: "Karakteristik psikologis masa transisi dewasa awal (Arnett, 2000; Reifman et al., 2007; Saikkonen et al., 2018; Reed-Fitzke et al., 2021) serta pencegahan sindrom failure to launch, isolasi sosial, loneliness, dan distres psikologis (Berger et al., 2026; Kato et al., 2017, 2019; Lebowitz, 2016; Yuniaty & Hamidah, 2020; SKI 2023; Esai Bab 1.1 & 2.5)." 
    },
    { 
      name: "Values in Action (VIA) Character Strengths", 
      desc: "Klasifikasi kekuatan karakter positif manusia sebagai 'bahasa umum' untuk memahami modal kapasitas positif diri non-patologis dalam proses eksplorasi identitas (Niemiec, 2020; Esai Bab 2.3.2)." 
    },
    { 
      name: "Narrative Identity & Dynamic Identity Status", 
      desc: "Pemaknaan kisah hidup melalui integrasi pengalaman masa lalu konkret (McAdams, 2018) dan representasi profil diri dinamis berbasis eksplorasi dan komitmen berkelanjutan (Marcia, 1966; Erikson, 1969; Shelley et al., 2020; Esai Bab 2.3.2)." 
    },
    { 
      name: "Self-Determination Theory, Goal Realism & Mastery Experiences", 
      desc: "Pemenuhan kebutuhan kompetensi psikologis (Deci et al., 2017), pemecahan target besar menjadi milestone realistis (Pilcher et al., 2022), akumulasi pengalaman keberhasilan melalui latihan mikro (Bandura, 1997), dan evaluasi proses belajar mandiri (Guo, 2022; Esai Bab 2.3.3)." 
    },
    { 
      name: "Collective Resilience, Shared Journey & Belonging", 
      desc: "Kelompok kecil terkurasi (Growth Circle) berbasis kesamaan values dan target (Luzanil & Menaldi, 2022; Forsyth, 2018) dengan prompt 2-mingguan proses-oriented, serta papan Celebrate Wins untuk melawan comparison trap media sosial (Esai Bab 2.3.4)." 
    },
    { 
      name: "Agile Development, Pilot Testing & Net Promoter Score (NPS)", 
      desc: "Implementasi iteratif Scrum (Irfansyah et al., 2026) melalui pilot testing kolaborasi universitas (Career Center & Fakultas Psikologi), diukur menggunakan metrik pengguna, kualitatif open questions, dan Net Promoter Score (Reichheld, 2003; Esai Bab 2.4 & 2.5)." 
    }
  ]
};

export const DEMO_STAGES = [
  {
    id: "overview",
    tab: "home",
    number: "0",
    title: "Overview & Dashboard 4S",
    shortTitle: "Overview",
    subtitle: "Pusat Integrasi PGI & 4 Domain Transisi STT",
    problem: "Solusi bagi emerging adult masih terfragmentasi (pendidikan, karir, kesehatan mental terpisah), memicu future anxiety, kesepian, dan risiko failure to launch (Arnett, 2000; Berger et al., 2026).",
    mechanism: "GROWTH mengintegrasikan 4 domain psikologis (4S: Situation, Self, Strategies, Support) ke dalam satu ekosistem terpadu berkesinambungan yang memfasilitasi Personal Growth Initiative (PGI).",
    outcome: "Pengguna memiliki dashboard holistik untuk memantau pemahaman realitas situasi, modal kekuatan diri, akumulasi kemajuan mikro, dan koneksi sosial yang suportif.",
    actionPrompt: "Lihat ringkasan 4S Model dan aktivitas PGI di tampilan iPhone."
  },
  {
    id: "pilar1",
    tab: "situation",
    number: "1",
    title: "Pilar 1: Situation (Life Transition)",
    shortTitle: "1. Situation",
    subtitle: "Intercept, Validate, Acceptance, Confidence",
    problem: "Future anxiety yang bersifat kabur, perasaan bersalah, merasa 'sendirian', 'aneh', atau 'gagal' saat menghadapi stresor transisi menuju kedewasaan (Reed-Fitzke et al., 2021; Lane et al., 2017).",
    mechanism: "3 Proses Berkesinambungan: (1) Transition Mapping (penamaan konkret transisi nyata), (2) Challenge Assessment (penilaian 4 domain 1-10 + psikoedukasi validasi normalitas respon), (3) Acceptance Framework (dikotomi kendali & Evolution Domain).",
    outcome: "Pengguna tidak lagi merasa 'hanyut' dalam situasi, melainkan memiliki gambaran situasi yang jelas sebagai fondasi sebelum mengenali kekuatan diri (Pilar 2) dan strategi bertumbuh (Pilar 3).",
    bridgeQuote: "Sekarang kita sudah tahu peta situasi transisi. Mari kita telusuri modal kekuatan positif yang melekat pada dirimu!",
    subSteps: [
      { id: "1.1", name: "Transition Mapping", desc: "Memilih transisi dominan EA & menuliskan narasi konkret untuk memecah future anxiety." },
      { id: "1.2", name: "Challenge Assessment & Validasi", desc: "Skor tingkat kesulitan 1-10 di 4 domain (Psikologis, Sosial, Finansial, Karir) & validasi bahwa 78%+ emerging adult mengalami fase serupa." },
      { id: "1.3", name: "Acceptance & Evolution Domain", desc: "Memisahkan hal dalam kendali vs hal yang diterima/dilepaskan (luar kendali) -> Evolution Domain Card terbangun." }
    ]
  },
  {
    id: "pilar2",
    tab: "self",
    number: "2",
    title: "Pilar 2: Self (Discovery)",
    shortTitle: "2. Self",
    subtitle: "Strength Mapping, Narrative Identity, Dynamic Profile",
    problem: "Low self-concept, kebingungan identitas, dan krisis arah pada masa emerging adulthood (Erikson, 1969; Shelley et al., 2020).",
    mechanism: "3 Tahapan Berkesinambungan: (1) Values in Action (VIA) Strength Mapping (Niemiec, 2020), (2) Identity Timeline menghubungkan pengalaman masa lalu konkret (McAdams, 2018), dan (3) Profil Discovery dinamis berbasis eksplorasi dan komitmen (Marcia, 1966).",
    outcome: "Membangun representasi diri dinamis (bukan label kepribadian statis/permanen) sebagai modalitas psikologis untuk melangkah maju dalam transisi hidup.",
    bridgeQuote: "Kekuatanmu sudah terpetakan melalui kisah perjuangan nyata. Saatnya merancang strategi bertumbuh!",
    subSteps: [
      { id: "2.1", name: "Strength Mapping (VIA)", desc: "Mengenali 3 kekuatan karakter positif utama manusia (seperti Curiosity, Bravery, Persistence) sebagai modal awal." },
      { id: "2.2", name: "Identity Timeline", desc: "Menghubungkan kekuatan karakter dengan momen perjuangan masa lalu (Narrative Identity McAdams)." },
      { id: "2.3", name: "Profil Discovery", desc: "Integrasi kekuatan dan kisah hidup menjadi profil diri dinamis eksplorasi-komitmen (Marcia dynamic identity status)." }
    ]
  },
  {
    id: "pilar3",
    tab: "strategies",
    number: "3",
    title: "Pilar 3: Strategies (Navigating Growth)",
    shortTitle: "3. Strategies",
    subtitle: "Capacity Building & Mastery Experiences",
    problem: "Low self-confidence, kebingungan merumuskan target, dan rasa kewalahan (overwhelmed) oleh tujuan besar tanpa tahapan yang realistis.",
    mechanism: "3 Proses Berkesinambungan: (1) Adaptive Roadmap memecah tujuan besar menjadi milestone realistis sesuai kapasitas energi mental (Pilcher et al., 2022; Deci et al., 2017), (2) Micro-Practice untuk akumulasi pengalaman keberhasilan Bandura (1997), dan (3) Progress Reflection evaluasi strategi belajar mandiri (Guo, 2022).",
    outcome: "Meningkatnya efikasi diri (self-efficacy) melalui keberhasilan berulang pada latihan-latihan kecil konsisten dan refleksi proses berkelanjutan.",
    bridgeQuote: "Strategi bertumbuhmu sudah berjalan. Saatnya terhubung dengan support system seperjuangan!",
    subSteps: [
      { id: "3.1", name: "Adaptive Roadmap", desc: "Menerjemahkan tujuan besar menjadi milestone realistis yang disesuaikan dengan kapasitas individu." },
      { id: "3.2", name: "Micro-Practice (Mastery)", desc: "Latihan-latihan kecil harian konsisten untuk memicu akumulasi pengalaman keberhasilan (Bandura mastery experiences)." },
      { id: "3.3", name: "Progress Reflection", desc: "Evaluasi strategi dan proses belajar mandiri (Self-Regulated Learning cycle: arah -> latihan -> refleksi)." }
    ]
  },
  {
    id: "pilar4",
    tab: "support",
    number: "4",
    title: "Pilar 4: Support (Collective Resilience)",
    shortTitle: "4. Support",
    subtitle: "Support System, Shared Journey, Belonging",
    problem: "Social isolation, rasa kesepian, ketiadaan ruang aman untuk bercerita, dan jebakan comparison trap di media sosial (Kato et al., 2019; Lebowitz, 2016).",
    mechanism: "Mengolah data dari Pilar 2 (values/kekuatan) dan Pilar 3 (milestones/perjuangan) untuk membentuk: (1) Growth Circle kelompok kecil terkurasi dengan prompt 2-mingguan proses-oriented (Luzanil & Menaldi, 2022; Forsyth, 2018), (2) Shared Journey & (3) Celebrate Wins untuk berbagi apresiasi progres nyata.",
    outcome: "Rasa keterhubungan (belonging), validasi perjuangan bersama (shared struggle), dan budaya saling mengapresiasi progres kecil dalam lingkungan yang aman (psychological safety).",
    bridgeQuote: "Kamu tidak sendirian dalam transisi ini. Kita bertumbuh bersama dalam circle yang aman dan suportif!",
    subSteps: [
      { id: "4.1", name: "Growth Circle", desc: "Kelompok kecil 4-6 orang dengan kesamaan values & target + prompt pemantik 2-mingguan proses-oriented (wajib dijawab agar circle aktif)." },
      { id: "4.2", name: "Shared Journey & Celebrate Wins", desc: "Papan pengumuman khusus di dalam Growth Circle untuk berbagi progres kecil melawan comparison trap dengan respon apresiasi spesifik anggota." },
      { id: "4.3", name: "Sesi Selesai / Berkelanjutan", desc: "Rangkuman perjalanan hari ini (Step 16) yang mendorong pengguna untuk terus bertumbuh secara adaptif dan berkelanjutan." }
    ]
  }
];

export const MOCK_PERSONAS = [
  {
    id: "venta",
    name: "Venta Alyqa",
    age: 20,
    role: "Mahasiswi S1 Semester 3 (Transisi Akademik & Karir)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    transition: "Eksplorasi Karir, Beban Akademik & Ekspektasi Mandiri",
    narrative: "Memasuki semester 3, saya mulai merasakan future anxiety yang tinggi. Melihat teman-teman di media sosial sudah mulai aktif proyek luar kampus dan berprestasi, saya sering terjebak comparison trap dan merasa tertinggal. Ditambah tuntutan tugas kuliah yang semakin padat dan keinginan mulai mandiri secara finansial tanpa terus membebani orang tua, saya sering cemas dan meragukan kapasitas diri sendiri.",
    scores: { psychological: 8, social: 7, financial: 6, career: 9 },
    challenges: {
      psychological: "Kecemasan masa depan (future anxiety) dan sindrom imposter akibat perbandingan linimasa di media sosial.",
      social: "Circle pertemanan mulai terdistraksi kesibukan masing-masing, merasa sungkan bercerita mengenai ketakutan diri.",
      financial: "Mulai belajar mengelola anggaran hidup mandiri dan mencari peluang magang berbayar untuk biaya kuliah.",
      career: "Bingung memilih peminatan karir yang sesuai antara ekspektasi pribadi dan kebutuhan industri."
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
      { id: 3, title: "Konsultasi Transisi Karir dengan Career Center Universitas", status: "pending", progress: 0 }
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
    role: "Fresh Graduate Ilmu Komputer (Transisi Karir)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    transition: "Lulus Kuliah & Memasuki Dunia Kerja",
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
      { id: 3, title: "Simulasi Wawancara Kerja & Konsultasi Portfolio", status: "pending", progress: 0 }
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
    role: "First-Time Corporate Worker (Transisi Rantau)",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    transition: "Pindah Kota & Hidup Mandiri Pertama Kali (Rantau)",
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
  { id: "t1", title: "Lulus Kuliah & Memasuki Dunia Kerja", icon: "Briefcase", desc: "Transisi dari dunia terstruktur kampus menuju ketidakpastian dunia kerja profesional (Esai Bab 2.3.1)." },
  { id: "t2", title: "Eksplorasi Karir, Beban Akademik & Ekspektasi Mandiri", icon: "GraduationCap", desc: "Transisi masa studi, pencarian peminatan karir, dan tuntutan kemandirian." },
  { id: "t3", title: "Pindah Kota & Hidup Mandiri Pertama Kali (Rantau)", icon: "MapPin", desc: "Tantangan adaptasi lingkungan baru, hidup sendiri, dan isolasi sosial/kesepian." },
  { id: "t4", title: "Tekanan Finansial Pertama Kali Mandiri", icon: "Coins", desc: "Mengelola anggaran bulanan mandiri tanpa terus bergantung pada orang tua." },
  { id: "t5", title: "Perubahan Relasi Interpersonal / Putus Hubungan", icon: "HeartCrack", desc: "Circle pertemanan yang menyusut, restrukturisasi relasi interpersonal, dan ekspektasi sosial." }
];

export const VIA_CHARACTER_CATALOG = [
  { name: "Curiosity (Rasa Ingin Tahu)", category: "Wisdom", desc: "Tertarik pada berbagai hal baru dan antusias bereksplorasi (Esai Bab 2.3.2)." },
  { name: "Bravery (Keberanian)", category: "Courage", desc: "Berani mengambil risiko dan bertindak sesuai prinsip meski menghadapi ketidakpastian." },
  { name: "Persistence (Kegigihan)", category: "Courage", desc: "Menuntaskan apa yang dimulai dan tidak mudah menyerah pada rintangan." },
  { name: "Perspective (Kebijaksanaan)", category: "Wisdom", desc: "Mampu memberikan pertimbangan bijak dan melihat gambaran besar masalah." },
  { name: "Love of Learning", category: "Wisdom", desc: "Selalu bersemangat menguasai topik atau keahlian baru di fase transisi." },
  { name: "Hope (Harapan & Optimisme)", category: "Transcendence", desc: "Mengharapkan hal terbaik di masa depan dan bergerak mewujudkannya secara bertahap." }
];

export const VIA_STRENGTHS_CATALOG = VIA_CHARACTER_CATALOG;

export const GROWTH_REFLECTION_PROMPTS = [
  {
    topic: "Memecah Future Anxiety",
    question: "Apa 1 situasi transisi paling spesifik yang saat ini memicu kecemasanmu, dan fakta nyata apa yang membuktikan kamu pernah melewati fase sulit serupa?",
    hint: "Penamaan konkret situasi memecah kecemasan yang kabur menjadi langkah nyata (Pilar 1: Situation)."
  },
  {
    topic: "Dikotomi Kendali (Acceptance)",
    question: "Jika kamu membagi energimu: Apa 1 hal yang harus kamu terima/lepaskan, dan apa 1 tindakan mikro yang 100% berada di bawah kendalimu hari ini?",
    hint: "Penerimaan sadar mengalokasikan energi mental ke hal produktif (Acceptance Framework)."
  },
  {
    topic: "Kekuatan Karakter (VIA) & Narasi Hidup",
    question: "Mengingat tantangan yang sedang kamu hadapi, bagaimana kekuatan karakter utamamu pernah terbukti membantumu di masa lalu?",
    hint: "Narrative Identity (McAdams, 2018) menghubungkan modal kekuatan masa lalu ke perjuangan hari ini."
  },
  {
    topic: "Akumulasi Kemajuan Kecil (Mastery)",
    question: "Latihan kecil apa yang bisa kamu selesaikan dalam 15 menit ke depan untuk membangun keyakinan efikasi diri (self-efficacy)?",
    hint: "Keberhasilan kecil berulang membentuk fondasi kompetensi yang kokoh (Bandura, 1997; Deci et al., 2017)."
  }
];

export const COMMUNITY_WINS_FEED = [
  { id: 1, author: "Venta A.", tag: "Career", text: "Berhasil menyelesaikan 1 draft proposal magang & resume tanpa overthinking!", applause: 9 },
  { id: 2, author: "Dimas P.", tag: "Career", text: "Kirim 2 lamaran terarah & perbaiki 1 proyek portofolio tanpa terjebak comparison trap!", applause: 14 },
  { id: 3, author: "Anindya P.", tag: "Psychological", text: "Jalan pagi 15 menit tanpa HP. Pikiran jauh lebih jernih dan tenang menghadapi hari!", applause: 12 },
  { id: 4, author: "Nadia S.", tag: "Habit", text: "Mute notifikasi media sosial selama 4 jam untuk selesaikan modul desain.", applause: 8 }
];

export const FLOWCHART_STEPS = [
  { step: 1, pillar: "Pilar 1 (Situation)", name: "Transition Mapping", desc: "Pengguna memilih transisi utama yang sedang dihadapi dan menuliskan narasi situasi." },
  { step: 2, pillar: "Pilar 1 (Situation)", name: "Challenge Assessment", desc: "Pengguna menilai tingkat kesulitan (1-10) pada berbagai domain tantangan." },
  { step: 3, pillar: "Pilar 1 (Situation)", name: "Validation", desc: "Sistem memberikan psikoedukasi dan validasi bahwa tantangan adalah bagian umum EA." },
  { step: 4, pillar: "Pilar 1 (Situation)", name: "Acceptance Framework", desc: "Pengguna merefleksikan hal yang dapat dikendalikan dan hal yang perlu diterima/dilepaskan." },
  { step: 5, pillar: "Pilar 1 (Situation)", name: "Evolution Domain", desc: "Sistem merangkum kondisi, tantangan, kontrol, dan acceptance sebagai peta awal." },
  { step: 6, pillar: "Pilar 1 (Situation)", name: "Menuju Pilar Discovery", desc: "Sistem menegaskan memahami situasi adalah fondasi sebelum mengenali diri." },
  { step: 7, pillar: "Pilar 2 (Self)", name: "Strength Mapping", desc: "Pengguna mengenali kekuatan karakter diri berdasarkan klasifikasi VIA (Values in Action)." },
  { step: 8, pillar: "Pilar 2 (Self)", name: "Identity Timeline", desc: "Pengguna menghubungkan kekuatan dengan pengalaman hidup yang membentuk diri." },
  { step: 9, pillar: "Pilar 2 (Self)", name: "Discovery Profile", desc: "Sistem mengintegrasikan kekuatan dan pengalaman menjadi profil diri yang dinamis." },
  { step: 10, pillar: "Pilar 3 (Strategies)", name: "Adaptive Roadmap", desc: "Pengguna menentukan tujuan dan merencanakannya menjadi milestone yang realistis." },
  { step: 11, pillar: "Pilar 3 (Strategies)", name: "Micro-Practice", desc: "Pengguna melakukan latihan kecil secara konsisten untuk mencapai milestone." },
  { step: 12, pillar: "Pilar 3 (Strategies)", name: "Progress Reflection", desc: "Pengguna mengevaluasi perkembangan, strategi, hambatan, dan hal yang perlu diperbaiki." },
  { step: 13, pillar: "Pilar 4 (Support)", name: "Growth Circle", desc: "Sistem mencocokkan pengguna dengan kelompok kecil berdasarkan arah dan values yang serupa." },
  { step: 14, pillar: "Pilar 4 (Support)", name: "Shared Journey", desc: "Anggota saling berbagi tantangan, pengalaman, dan dukungan dalam ruang yang aman." },
  { step: 15, pillar: "Pilar 4 (Support)", name: "Celebrate Wins", desc: "Pengguna membagikan progres kecil dan menerima apresiasi spesifik dari anggota lain." },
  { step: 16, pillar: "Pilar 4 (Support)", name: "Sesi Selesai & Berkelanjutan", desc: "Sistem menampilkan rangkuman perjalanan hari ini dan mendorong pertumbuhan berkelanjutan." }
];
