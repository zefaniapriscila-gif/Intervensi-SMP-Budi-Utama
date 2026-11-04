# LANGKAH

Prototipe aplikasi penguatan karakter disiplin untuk siswa, orang tua, dan wali kelas SMP Budi Utama Yogyakarta. Konsep intervensi mengacu pada dokumen rancangan program dan mencakup tiga kegiatan:

1. **Digital reminder** — pengingat persiapan kebutuhan sekolah pada malam hari dan waktu bersiap/berangkat pada pagi hari.
2. **Catatan pembinaan personal** — refleksi harian siswa, tindak lanjut dan umpan balik pribadi dari wali kelas, serta ringkasan kualitatif untuk orang tua.
3. **Student of the Week** — apresiasi bagi siswa yang konsisten menunjukkan perilaku baik maupun yang memperlihatkan perkembangan.

## Mencoba prototipe

Saat aplikasi dibuka, kamu akan diarahkan ke **Beranda LANGKAH**. Pilih **Prototype** untuk mencoba aplikasi, atau **Metodologi** untuk membaca ringkasan teori dari dokumen rancangan intervensi. Di beranda, kartu pengingat, catatan pembinaan, dan apresiasi juga dapat membuka bagian terkait di prototype.

Saat masuk ke prototype di ponsel, pilih peran **Siswa**, **Orang tua**, atau **Wali kelas**. Pada layar lebar, prototype siswa dibuka langsung dan peran dapat diganti dari panel samping. Gunakan tab **Beranda**, **Catatan**, dan **Apresiasi**; tekan identitas LANGKAH di header atau tombol **Beranda** di panel samping untuk kembali. Pada layar lebar aplikasi ditampilkan dalam bingkai ponsel, sedangkan pada layar kecil tampil penuh dan dapat discroll. Contoh alur:

- Sebagai siswa, ubah pengingat dan checklist, lalu isi dan kirim catatan harian.
- Sebagai wali kelas, baca catatan contoh siswa dan kirim umpan balik; balasan akan tampak pada tampilan siswa di sesi yang sama.
- Sebagai orang tua, lihat contoh ringkasan kualitatif dan saran dukungan di rumah.

## Metodologi ringkas

Intervensi menghubungkan pengingat digital pagi dan malam, catatan pembinaan personal, dan apresiasi mingguan dalam kolaborasi siswa, keluarga, serta sekolah. Teori yang diringkas dari dokumen rancangan:

- **Self-regulation (Bandura, 1991):** siswa memantau perilaku, menilai pencapaian target, dan menentukan langkah perbaikan.
- **Social learning dan vicarious reinforcement (Bandura, 1978, dalam Mertens et al., 2021):** siswa dapat belajar dari perilaku teman sebaya dan apresiasi yang diamati.
- **Positive reinforcement (Skinner):** apresiasi spesifik dan tepat waktu dapat menguatkan perilaku disiplin.
- **Spiral curriculum (Bruner; Maskur, 2025):** refleksi dan bimbingan bertahap membantu siswa belajar dari pengalaman.

Lihat halaman **Metodologi** di aplikasi untuk ringkasan penerapan masing-masing teori pada fitur LANGKAH.

Contoh siswa, notifikasi, laporan, dan penghargaan di aplikasi ini adalah simulasi. Data hanya dikelola di memori halaman saat demo berlangsung—tidak dikirim ke server, disimpan permanen, ataupun benar-benar dikirim sebagai notifikasi. Pemilihan peran hanya untuk memperagakan tampilan, bukan sistem autentikasi atau pengamanan data produksi. Jangan masukkan informasi pribadi atau sensitif. Daftar siswa yang membutuhkan pendampingan tidak ditampilkan sebagai papan publik.

## Menjalankan aplikasi

Memerlukan Node.js dan npm.

```bash
npm install
npm run dev
```

Buka URL lokal yang dicetak Vite di terminal, biasanya [http://localhost:5173](http://localhost:5173).

## Validasi

```bash
npm run lint
npm run build
```

## Teknologi

React 19, Vite 8, Tailwind CSS 4, Framer Motion, dan Lucide React.
