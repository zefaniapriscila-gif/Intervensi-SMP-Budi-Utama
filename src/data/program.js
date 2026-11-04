// Semua isi program LANGKAH dikumpulkan di sini supaya halaman dan
// prototipe memakai sumber yang sama. Siswa, laporan, dan penghargaan
// adalah contoh untuk demo, bukan data siswa sebenarnya.

export const SCHOOL = {
  name: 'SMP Budi Utama',
  city: 'Yogyakarta',
};

export const STUDENT = {
  name: 'Holyna Putri',
  firstName: 'Holyna',
  initial: 'H',
  className: 'VII A',
};

export const ROLES = [
  {
    id: 'student',
    label: 'Siswa',
    person: 'Holyna Putri',
    detail: 'Kelas VII A',
    does: 'Menyiapkan kebutuhan sekolah, mengatur pengingat, dan menulis catatan harian.',
    short: 'Atur rutinitas dan tulis catatan harian.',
  },
  {
    id: 'parent',
    label: 'Orang tua',
    person: 'Orang tua Holyna',
    detail: 'Pendamping di rumah',
    does: 'Mendampingi rutinitas malam dan pagi, lalu menerima ringkasan perkembangan—bukan isi percakapan pribadi.',
    short: 'Dukung persiapan dan kebiasaan anak.',
  },
  {
    id: 'teacher',
    label: 'Wali kelas',
    person: 'Wali kelas VII A',
    detail: 'Pendamping siswa',
    does: 'Membaca catatan secara pribadi, memberi umpan balik yang spesifik, dan memilih Student of the Week.',
    short: 'Beri pembinaan dan apresiasi siswa.',
  },
];

export const TABS = [
  { id: 'home', label: 'Beranda' },
  { id: 'journal', label: 'Catatan' },
  { id: 'recognition', label: 'Apresiasi' },
];

export const INITIAL_ROUTINE = [
  { id: 'uniform', label: 'Seragam dan atribut lengkap', done: true },
  { id: 'books', label: 'Buku dan perlengkapan pelajaran', done: false },
  { id: 'homework', label: 'Tugas untuk besok', done: false },
  { id: 'device', label: 'Perangkat belajar sudah disiapkan', done: true },
];

export const INITIAL_REMINDERS = { night: true, morning: true };

export const INITIAL_JOURNAL = {
  challenge: 'Tidak ada kendala khusus',
  reflection: '',
  nextStep: '',
  feedback: '',
  feedbackSent: false,
  sent: false,
  sentAt: null,
  feedbackAt: null,
};

export const CHALLENGES = [
  'Tidak ada kendala khusus',
  'Sulit bangun atau datang tepat waktu',
  'Ada perlengkapan sekolah yang tertinggal',
  'Perlu bantuan atau ingin bercerita',
];

export const REMINDERS = {
  night: {
    time: '19.30',
    period: 'Malam',
    title: 'Persiapan malam',
    student: 'Cek seragam, buku, tugas, dan perangkat belajar untuk besok.',
    parent: 'Siapkan kebutuhan sekolah bersama anak.',
  },
  morning: {
    time: '06.15',
    period: 'Pagi',
    title: 'Waktunya berangkat',
    student: 'Bersiap dan perkirakan waktu perjalanan ke sekolah.',
    parent: 'Bantu anak memperkirakan waktu perjalanan.',
  },
};

export const WEEKLY_STUDENTS = [
  {
    name: 'Nadia Putri',
    initial: 'N',
    className: 'VII A',
    category: 'Konsisten Disiplin',
    detail: 'Hadir tepat waktu dan atribut lengkap selama satu minggu.',
  },
  {
    name: 'Rafi Pratama',
    initial: 'R',
    className: 'VII B',
    category: 'Perkembangan Terbaik',
    detail: 'Makin konsisten menyiapkan perlengkapan sekolah setiap malam.',
  },
];

export const STUDENTS_NEEDING_SUPPORT = [
  { name: 'Holyna Putri', initial: 'H', className: 'VII A', detail: 'Perlu dukungan menyusun rutinitas persiapan sekolah.' },
  { name: 'Bima Ramadhan', initial: 'B', className: 'VII B', detail: 'Perlu pengingat untuk menyiapkan atribut sebelum berangkat.' },
];

export const FEEDBACK_STARTERS = [
  { label: 'Apresiasi usaha', text: 'Terima kasih sudah jujur bercerita hari ini.' },
  { label: 'Satu langkah kecil', text: 'Besok coba siapkan tas sebelum tidur, ya.' },
  { label: 'Ajak bercerita', text: 'Kalau ingin cerita lebih banyak, kita bisa ngobrol di kelas, ya.' },
];

export const PRAISE_EXAMPLES = [
  'Terima kasih sudah menyiapkan tas sendiri. Usahamu membuat pagi ini lebih mudah.',
  'Kamu bangun tepat waktu hari ini. Ayah dan Ibu lihat usahamu.',
  'Seragammu sudah siap dari semalam—itu kebiasaan yang keren.',
];

export const HOME_SUPPORT = [
  'Siapkan kebutuhan sekolah bersama malam ini.',
  'Dukung jadwal bangun dan waktu berangkat.',
  'Apresiasi usaha dan kemajuan kecilnya.',
];

// Ritme harian program: dipakai di beranda sebagai "tangga" kegiatan.
export const DAY_STEPS = [
  {
    id: 'night',
    when: '19.30',
    period: 'Malam sebelumnya',
    title: 'Siapkan kebutuhan sekolah',
    body: 'Pengingat malam mengajak siswa—bersama orang tua—mengecek seragam, buku, tugas, dan perangkat belajar.',
    target: { role: 'student', tab: 'home' },
    cta: 'Lihat pengingat',
  },
  {
    id: 'morning',
    when: '06.15',
    period: 'Pagi hari',
    title: 'Berangkat tepat waktu',
    body: 'Pengingat pagi membantu siswa bersiap dan memperkirakan waktu perjalanan ke sekolah.',
    target: { role: 'parent', tab: 'home' },
    cta: 'Lihat ruang keluarga',
  },
  {
    id: 'journal',
    when: 'Tiap hari',
    period: 'Refleksi',
    title: 'Tulis catatan harian',
    body: 'Siswa menuliskan kendala, cerita, dan satu langkah kecil untuk besok—hanya untuk wali kelas.',
    target: { role: 'student', tab: 'journal' },
    cta: 'Coba menulis',
  },
  {
    id: 'feedback',
    when: 'Setelahnya',
    period: 'Pembinaan',
    title: 'Dibalas wali kelas',
    body: 'Umpan balik pribadi untuk siswa; orang tua menerima ringkasan kualitatif, bukan isi percakapan.',
    target: { role: 'teacher', tab: 'journal' },
    cta: 'Balas sebagai wali kelas',
  },
  {
    id: 'week',
    when: 'Tiap minggu',
    period: 'Apresiasi',
    title: 'Student of the Week',
    body: 'Apresiasi bagi siswa yang konsisten disiplin maupun yang menunjukkan perkembangan terbaik.',
    target: { role: 'teacher', tab: 'recognition' },
    cta: 'Lihat apresiasi',
  },
];

export const PRINCIPLES = [
  {
    title: 'Apresiasi yang spesifik.',
    body: 'Pujian menyebut perilakunya dan diberikan dekat dengan waktu perilaku itu muncul.',
  },
  {
    title: 'Cerita siswa tetap pribadi.',
    body: 'Catatan harian hanya dibaca siswa dan wali kelas. Orang tua menerima ringkasan perkembangan.',
  },
  {
    title: 'Tanpa papan peringkat.',
    body: 'Daftar siswa yang perlu pendampingan hanya terlihat oleh wali kelas—tidak pernah dipajang.',
  },
  {
    title: 'Kemajuan juga dirayakan.',
    body: 'Student of the Week bukan hanya untuk yang paling konsisten, tetapi juga yang paling berkembang.',
  },
];

export const FOUNDATIONS = [
  {
    title: 'Disiplin sebagai kebiasaan',
    body: 'Bukan hanya mematuhi aturan, tetapi juga belajar mengatur perilaku, memenuhi tanggung jawab, hadir tepat waktu, dan menyiapkan perlengkapan.',
  },
  {
    title: 'Ekosistem tiga pihak',
    body: 'Siswa, keluarga, dan sekolah berbagi peran supaya pengingat, bimbingan, serta tindak lanjut berjalan selaras di rumah maupun di sekolah.',
  },
  {
    title: 'Positif dan tidak mempermalukan',
    body: 'Fokus pada arahan yang jelas, apresiasi perilaku spesifik, umpan balik pribadi, dan kemajuan setiap siswa—bukan hukuman atau perbandingan.',
  },
];

export const THEORIES = [
  {
    id: 'self-regulation',
    number: '01',
    name: 'Self-regulation',
    author: 'Albert Bandura',
    year: '1991',
    summary: 'Disiplin berkembang saat siswa belajar memantau perilaku, menilai pencapaian target, lalu menentukan respons atau langkah perbaikan.',
    application: 'Pengingat membantu mengingat target; jurnal menjadi sarana self-monitoring dan evaluasi; umpan balik membantu siswa merencanakan langkah berikutnya.',
    target: { role: 'student', tab: 'journal' },
    targetLabel: 'Catatan harian siswa',
  },
  {
    id: 'social-learning',
    number: '02',
    name: 'Social learning & vicarious reinforcement',
    author: 'Albert Bandura; Mertens et al.',
    year: '1978; 2021',
    summary: 'Siswa dapat belajar dengan mengamati perilaku teman sebaya serta konsekuensi positif yang diterima.',
    application: 'Student of the Week menampilkan contoh perilaku disiplin yang diapresiasi agar dapat menjadi inspirasi, tanpa menjadikan siswa bahan perbandingan.',
    target: { role: 'student', tab: 'recognition' },
    targetLabel: 'Mading Student of the Week',
  },
  {
    id: 'reinforcement',
    number: '03',
    name: 'Positive reinforcement',
    author: 'B. F. Skinner; Whitney & Ackerman',
    year: '2020',
    summary: 'Apresiasi yang diberikan setelah perilaku positif dapat meningkatkan kemungkinan perilaku tersebut diulangi.',
    application: 'Apresiasi dibuat spesifik pada perilaku dan diberikan dekat dengan waktu perilaku muncul. Untuk hal yang perlu diperbaiki, siswa diberi arahan yang jelas dan suportif.',
    target: { role: 'teacher', tab: 'recognition' },
    targetLabel: 'Apresiasi oleh wali kelas',
  },
  {
    id: 'spiral',
    number: '04',
    name: 'Spiral curriculum',
    author: 'Jerome Bruner; Maskur',
    year: '2025',
    summary: 'Pembelajaran dapat dibangun bertahap dengan meninjau pengalaman, sementara guru membimbing sesuai kebutuhan siswa.',
    application: 'Catatan personal membantu siswa kembali melihat pengalaman, mengenali hal yang perlu dipertahankan atau diperbaiki, lalu mencoba langkah konkret.',
    target: { role: 'teacher', tab: 'journal' },
    targetLabel: 'Umpan balik wali kelas',
  },
];

export const FLOW = [
  { id: 'remind', title: 'Ingatkan', body: 'Pengingat malam dan pagi membangun persiapan dan rutinitas berangkat.' },
  { id: 'monitor', title: 'Pantau', body: 'Catatan harian membantu siswa mengenali perilaku, kendala, dan tanggung jawab.' },
  { id: 'reflect', title: 'Refleksikan', body: 'Siswa dan wali kelas menyepakati umpan balik serta langkah perbaikan konkret.' },
  { id: 'appreciate', title: 'Apresiasi', body: 'Perilaku disiplin dan perkembangan positif diperkuat secara spesifik.' },
];

export const SOURCE_NOTE = 'Ringkasan teori disusun dari dokumen “Tugas Rancangan Awal Kelompok 7”. Rujukan yang disebut di dokumen meliputi Bandura (1991), Bandura (1978, dalam Mertens et al., 2021), Whitney & Ackerman (2020), dan Maskur (2025).';

// Panduan presenter: catatan singkat untuk setiap layar prototipe.
export const SCREEN_NOTES = {
  select: {
    title: 'Pilih peran',
    body: 'Pemilihan peran hanya untuk memperagakan tampilan—bukan sistem autentikasi atau pengamanan data.',
    theory: null,
  },
  'student:home': {
    title: 'Beranda siswa',
    body: 'Checklist persiapan dan pengingat malam/pagi membantu siswa menyiapkan kebutuhan sekolah dan berangkat tepat waktu.',
    theory: 'self-regulation',
  },
  'student:journal': {
    title: 'Catatan harian',
    body: 'Siswa menuliskan kendala, cerita, dan satu langkah kecil untuk besok. Hanya siswa dan wali kelas yang membacanya.',
    theory: 'self-regulation',
  },
  'student:recognition': {
    title: 'Mading apresiasi',
    body: 'Student of the Week ditampilkan sebagai contoh perilaku yang diapresiasi—untuk menginspirasi, bukan membandingkan.',
    theory: 'social-learning',
  },
  'parent:home': {
    title: 'Ruang keluarga',
    body: 'Orang tua ikut menjaga rutinitas malam dan pagi, termasuk menyepakati waktu berangkat bersama.',
    theory: 'self-regulation',
  },
  'parent:journal': {
    title: 'Kabar dari sekolah',
    body: 'Ringkasan kualitatif dan saran dukungan di rumah. Isi percakapan pribadi anak dengan wali kelas tidak dibagikan.',
    theory: 'spiral',
  },
  'parent:recognition': {
    title: 'Rayakan prosesnya',
    body: 'Contoh kalimat apresiasi yang menyebut perilaku spesifik, untuk diucapkan di rumah.',
    theory: 'reinforcement',
  },
  'teacher:home': {
    title: 'Dashboard wali kelas',
    body: 'Ringkasan catatan yang masuk hari ini dan siswa yang memerlukan tindak lanjut pribadi.',
    theory: 'spiral',
  },
  'teacher:journal': {
    title: 'Umpan balik pribadi',
    body: 'Wali kelas mengapresiasi usaha dan menawarkan langkah konkret. Balasan langsung muncul di tampilan siswa.',
    theory: 'reinforcement',
  },
  'teacher:recognition': {
    title: 'Student of the Week',
    body: 'Dua kategori: Konsisten Disiplin dan Perkembangan Terbaik. Daftar pendampingan tetap rahasia.',
    theory: 'reinforcement',
  },
};
