# GROWTH • Platform Personal Development untuk Emerging Adults

> Prototype interaktif berdasarkan esai akademik yang mengadopsi **Schlossberg's Transition Theory (STT Model 4S)** dan memfasilitasi **Personal Growth Initiative (PGI)** dengan bahasa desain Apple iOS 18.

---

## 📖 Latar Belakang & Landasan Teori

Masa *Emerging Adulthood* (EA, 18–29 tahun) merupakan periode perkembangan paling tidak stabil yang ditandai dengan 5 karakteristik: pencarian identitas, terbukanya berbagai kemungkinan, fokus pada diri, ketidakstabilan, dan perasaan berada di antara masa remaja dan dewasa (Arnett, 2000; Reifman et al., 2007).

Tekanan transisi (pendidikan, karir, tempat tinggal, finansial, relasi) dapat memicu *future anxiety*, isolasi sosial, kesepian, hingga risiko *failure to launch* (Berger et al., 2026; Kato et al., 2017, 2019). **GROWTH** hadir mengintegrasikan solusi yang sebelumnya terfragmentasi ke dalam satu ekosistem terpadu berkesinambungan.

---

## 🧩 Implementasi 4 Pilar STT & 16 Langkah Flowchart

### 1. Pilar 1: Situation (*Life Transition*) — Intercept, Validate, Acceptance, Confidence
- **1.1 Transition Mapping**: Memilih jenis transisi utama (lulus kuliah, memasuki dunia kerja, merantau, tekanan finansial, perubahan relasi) dan menuliskan narasi konkret untuk memecah *future anxiety*.
- **1.2 Challenge Assessment**: Menilai tingkat kesulitan (skala 1–10) di 4 domain (Psikologis, Sosial, Finansial, Karir/Akademik) + 1 kalimat spesifik tiap domain.
- **1.3 Validation**: Psikoedukasi normalitas respons adaptif untuk memutus rasa 'sendirian', 'aneh', atau 'gagal' (Arnett, 2000; Kato et al., 2017).
- **1.4 Acceptance Framework**: Refleksi dikotomi kendali (1 hal di bawah kendali vs 1 hal yang diterima/dilepaskan di luar kendali).
- **1.5 Evolution Domain**: Rangkuman situasi transisi, skor domain, kontrol, dan acceptance.
- **1.6 Menuju Pilar Discovery**: Fondasi pemahaman situasi sebelum mengenali diri lebih dalam.

### 2. Pilar 2: Self (*Discovery*) — Strength Mapping, Narrative Identity & Dynamic Profile
- **2.1 Strength Mapping (VIA)**: Klasifikasi kekuatan karakter *Values in Action* (Niemiec, 2020) non-patologis (Curiosity, Bravery, Persistence, Perspective, Love of Learning, Hope).
- **2.2 Identity Timeline**: Menghubungkan kekuatan karakter dengan momen perjuangan masa lalu (*Narrative Identity* - McAdams, 2018).
- **2.3 Profil Discovery**: Integrasi kekuatan dan kisah hidup menjadi representasi diri dinamis berbasis eksplorasi dan komitmen (*Marcia Identity Status*, 1966; Erikson, 1969; Shelley et al., 2020).

### 3. Pilar 3: Strategies (*Navigating Growth*) — Capacity Building & Mastery Experiences
- **3.1 Adaptive Roadmap**: Menerjemahkan tujuan besar menjadi rangkaian *milestone* realistis sesuai kapasitas energi mental (Pilcher et al., 2022; Deci et al., 2017).
- **3.2 Micro-Practice**: Latihan-latihan kecil konsisten untuk akumulasi pengalaman keberhasilan (*mastery experiences*) dan pembentukan *self-efficacy* (Bandura, 1997).
- **3.3 Progress Reflection**: Evaluasi strategi dan proses belajar mandiri (*Self-Regulated Learning cycle* - Guo, 2022).

### 4. Pilar 4: Support (*Collective Resilience*) — Support System, Shared Journey & Belonging
- **4.1 Growth Circle**: Kelompok kecil 4–6 orang berbasis kesamaan *values* (Pilar 2) dan target (Pilar 3) dengan prompt 2-mingguan proses-oriented yang wajib dijawab (Luzanil & Menaldi, 2022; Forsyth, 2018).
- **4.2 Shared Journey & Celebrate Wins**: Berbagi tantangan dalam ruang aman (*psychological safety*) dan papan apresiasi progres kecil untuk melawan *comparison trap* media sosial.
- **4.3 Sesi Selesai & Perjalanan Berkelanjutan (Step 16)**: Rangkuman perjalanan harian, evaluasi keberhasilan PGI, dan pengukuran Net Promoter Score (NPS - Reichheld, 2003).

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 + Frosted Glassmorphism + Apple SF Pro Typography
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Celebration Effects**: Canvas Confetti

---

## 🚀 Menjalankan Prototype

### Instalasi Dependensi
```bash
npm install
```

### Menjalankan Server Development
```bash
npm run dev
```
Buka [http://localhost:5173](http://localhost:5173) pada browser.

### Build untuk Produksi
```bash
npm run build
```
