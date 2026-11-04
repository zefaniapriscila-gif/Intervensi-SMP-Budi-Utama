# LANGKAH

Prototipe aplikasi penguatan karakter disiplin untuk siswa, orang tua, dan wali kelas SMP Budi Utama Yogyakarta. Konsep intervensi mengacu pada dokumen rancangan program dan mencakup tiga kegiatan:

1. **Digital reminder** — pengingat persiapan kebutuhan sekolah pada malam hari dan waktu bersiap/berangkat pada pagi hari.
2. **Catatan pembinaan personal** — refleksi harian siswa, tindak lanjut dan umpan balik pribadi dari wali kelas, serta ringkasan kualitatif untuk orang tua.
3. **Student of the Week** — apresiasi bagi siswa yang konsisten menunjukkan perilaku baik maupun yang memperlihatkan perkembangan.

## Mencoba prototipe

Saat aplikasi dibuka, pilih **Siswa**, **Orang tua**, atau **Wali kelas** pada layar masuk. Tombol masuk akan menyesuaikan dengan peran pilihanmu. Setelah masuk, gunakan tab Beranda, Catatan, dan Apresiasi. Gunakan tombol keluar di bagian atas untuk kembali memilih peran. Pada layar lebar prototipe ditampilkan di dalam bingkai ponsel; pada layar kecil, tampilan menyesuaikan ke layar perangkat. Contoh alur:

- Sebagai siswa, ubah pengingat dan checklist, lalu isi dan kirim catatan harian.
- Sebagai wali kelas, baca catatan contoh siswa dan kirim umpan balik; balasan akan tampak pada tampilan siswa di sesi yang sama.
- Sebagai orang tua, lihat contoh ringkasan kualitatif dan saran dukungan di rumah.

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
