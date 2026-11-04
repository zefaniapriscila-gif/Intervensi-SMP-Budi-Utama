# LANGKAH

Prototipe aplikasi penguatan karakter disiplin untuk siswa, orang tua, dan wali kelas SMP Budi Utama Yogyakarta. Konsep intervensi mengacu pada dokumen rancangan program dan mencakup tiga kegiatan:

1. **Digital reminder** — pengingat persiapan kebutuhan sekolah pada malam hari dan waktu bersiap/berangkat pada pagi hari.
2. **Catatan pembinaan personal** — refleksi harian siswa, tindak lanjut dan umpan balik pribadi dari wali kelas, serta ringkasan kualitatif untuk orang tua.
3. **Student of the Week** — apresiasi bagi siswa yang konsisten menunjukkan perilaku baik maupun yang memperlihatkan perkembangan.

## Halaman

| Alamat | Isi |
| --- | --- |
| `#/` | **Beranda** — ritme harian program (tangga 19.30 → 06.15 → catatan → balasan → Student of the Week), peran tiga pihak dan alur privasinya, prinsip disiplin positif, serta ringkasan empat teori. |
| `#/metodologi` | **Metodologi** — cara pandang program, empat landasan teori beserta diagram dan penerapannya di LANGKAH, alur intervensi (spiral *Ingatkan · Pantau · Refleksikan · Apresiasi*), dan catatan sumber. |
| `#/prototipe` | **Prototipe** — aplikasi LANGKAH untuk peran siswa, orang tua, dan wali kelas. |

Setiap halaman punya alamat sendiri, sehingga tautannya bisa dibagikan dan tombol kembali di browser berfungsi.

## Mencoba prototipe

- **Layar lebar (≥ 1024 px):** aplikasi tampil di bingkai ponsel dengan panel presenter di sampingnya. Dari panel itu kamu bisa mengganti peran, mengikuti **Skenario demo** yang tercentang otomatis saat langkahnya benar-benar dilakukan, membaca catatan **Di layar ini** (termasuk teori yang mendasarinya), dan memulai ulang demo.
- **Tablet:** aplikasi tampil di bingkai ponsel; pilih peran di layar ponsel.
- **Ponsel:** aplikasi tampil penuh. Pilih peran **Siswa**, **Orang tua**, atau **Wali kelas** di layar awal; ketuk lencana peran di header untuk berganti peran dan logo LANGKAH untuk kembali ke beranda.

Tombol *Coba sebagai …* di beranda dan tautan *Lihat …* di halaman metodologi langsung membuka peran dan layar yang relevan. Contoh alur (sama dengan skenario demo):

- Sebagai siswa, centang persiapan sekolah dan atur pengingat, lalu tulis dan kirim catatan harian.
- Sebagai wali kelas, baca catatan siswa dan kirim umpan balik; balasannya akan tampak sebagai catatan tulisan tangan pada tampilan siswa di sesi yang sama.
- Sebagai orang tua, lihat ringkasan kualitatif di *buku penghubung* dan saran dukungan di rumah.

## Metodologi ringkas

Intervensi menghubungkan pengingat digital pagi dan malam, catatan pembinaan personal, dan apresiasi mingguan dalam kolaborasi siswa, keluarga, serta sekolah. Teori yang diringkas dari dokumen rancangan:

- **Self-regulation (Bandura, 1991):** siswa memantau perilaku, menilai pencapaian target, dan menentukan langkah perbaikan.
- **Social learning dan vicarious reinforcement (Bandura, 1978, dalam Mertens et al., 2021):** siswa dapat belajar dari perilaku teman sebaya dan apresiasi yang diamati.
- **Positive reinforcement (Skinner):** apresiasi spesifik dan tepat waktu dapat menguatkan perilaku disiplin.
- **Spiral curriculum (Bruner; Maskur, 2025):** refleksi dan bimbingan bertahap membantu siswa belajar dari pengalaman.

Lihat halaman **Metodologi** di aplikasi untuk ringkasan penerapan masing-masing teori pada fitur LANGKAH.

Contoh siswa, notifikasi, laporan, dan penghargaan di aplikasi ini adalah simulasi. Data hanya dikelola di memori halaman saat demo berlangsung—tidak dikirim ke server, disimpan permanen, ataupun benar-benar dikirim sebagai notifikasi. Pemilihan peran hanya untuk memperagakan tampilan, bukan sistem autentikasi atau pengamanan data produksi. Jangan masukkan informasi pribadi atau sensitif. Daftar siswa yang membutuhkan pendampingan tidak ditampilkan sebagai papan publik.

## Sistem visual

- **Warna "putih–biru"** — diambil dari seragam SMP: kertas putih hangat dan biru dongker, dengan aksen kuning matahari pagi (dan stiker bintang), merah tinta pulpen guru untuk tulisan tangan dan stempel, serta hijau untuk tanda selesai. Palet didefinisikan sebagai token di `src/index.css`; warna bawaan Tailwind sengaja dimatikan.
- **Huruf** — Fraunces (judul), Plus Jakarta Sans (teks dan antarmuka), Caveat (tulisan tangan wali kelas dan anotasi). Semua dipasang lokal lewat Fontsource, jadi tetap tampil tanpa koneksi ke CDN (termasuk bila dibungkus Capacitor).
- **Motif** — anak tangga (*langkah*), kertas buku tulis bergaris, buku penghubung, stempel, dan piagam.
- **Gerak** — transisi halaman bergaya tangga, judul yang muncul per kata, checklist yang tercentang lalu distempel, notifikasi simulasi, tulisan tangan yang "ditulis", dan diagram yang tergambar saat digulir. Semua animasi mengikuti pengaturan *reduce motion* di perangkat.

## Struktur kode

```
src/
├── App.jsx                 # router hash, status demo, transisi halaman
├── data/program.js         # semua isi program (peran, pengingat, teori, skenario, dll.)
├── lib/                    # router, waktu, hook kecil, kurva gerak
├── components/
│   ├── brand/              # logo tangga LANGKAH
│   ├── site/               # header & footer situs
│   ├── art/                # kolase hero, diagram teori, spiral alur, coretan tangan
│   ├── motion/             # komponen gerak (teks terbelah, magnet, marquee, tirai)
│   └── ui/                 # primitif (switch, lencana peran, reveal)
├── pages/                  # Beranda, Metodologi, Prototipe
└── prototype/              # bingkai ponsel, shell aplikasi, panel presenter, layar per peran
```

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

React 19, Vite 8, Tailwind CSS 4, Framer Motion, Lucide React, dan Fontsource.
