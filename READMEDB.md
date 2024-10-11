Dalam **Sistem Manajemen Sekolah** yang mengelola data seperti siswa, guru, mata pelajaran, nilai, dan jadwal pelajaran, umumnya kita membutuhkan beberapa tabel untuk menyimpan berbagai entitas dan relasi di antara mereka.

Berikut adalah beberapa tabel yang mungkin ada dalam sistem manajemen sekolah berbasis **CRUD**:

### 1. **Tabel `Students` (Siswa)**
   - **Fields**:
     - `id`: Primary key
     - `name`: Nama siswa
     - `birthdate`: Tanggal lahir
     - `gender`: Jenis kelamin
     - `class_id`: Foreign key dari tabel kelas
     - `address`: Alamat siswa
     - `phone`: Nomor telepon siswa atau wali
   - **Relasi**: 
     - Berelasi dengan tabel **Classes** (Kelas)
     - Berelasi dengan tabel **Grades** (Nilai)

### 2. **Tabel `Teachers` (Guru)**
   - **Fields**:
     - `id`: Primary key
     - `name`: Nama guru
     - `subject_id`: Foreign key dari tabel mata pelajaran
     - `email`: Email guru
     - `phone`: Nomor telepon
     - `address`: Alamat
   - **Relasi**:
     - Berelasi dengan tabel **Subjects** (Mata Pelajaran)

### 3. **Tabel `Subjects` (Mata Pelajaran)**
   - **Fields**:
     - `id`: Primary key
     - `name`: Nama mata pelajaran
     - `teacher_id`: Foreign key dari tabel guru
   - **Relasi**:
     - Berelasi dengan tabel **Teachers** (Guru)
     - Berelasi dengan tabel **Classes** (Kelas)

### 4. **Tabel `Classes` (Kelas)**
   - **Fields**:
     - `id`: Primary key
     - `class_name`: Nama kelas (misal, 10A, 10B)
     - `teacher_id`: Foreign key untuk wali kelas dari tabel guru
   - **Relasi**:
     - Berelasi dengan tabel **Students** (Siswa)
     - Berelasi dengan tabel **Subjects** (Mata Pelajaran)

### 5. **Tabel `Grades` (Nilai)**
   - **Fields**:
     - `id`: Primary key
     - `student_id`: Foreign key dari tabel siswa
     - `subject_id`: Foreign key dari tabel mata pelajaran
     - `grade`: Nilai
     - `date`: Tanggal nilai diberikan
   - **Relasi**:
     - Berelasi dengan tabel **Students** (Siswa)
     - Berelasi dengan tabel **Subjects** (Mata Pelajaran)

### 6. **Tabel `Schedules` (Jadwal Pelajaran)**
   - **Fields**:
     - `id`: Primary key
     - `class_id`: Foreign key dari tabel kelas
     - `subject_id`: Foreign key dari tabel mata pelajaran
     - `day`: Hari (Senin, Selasa, dst.)
     - `time_start`: Jam mulai
     - `time_end`: Jam selesai
   - **Relasi**:
     - Berelasi dengan tabel **Subjects** (Mata Pelajaran)
     - Berelasi dengan tabel **Classes** (Kelas)

### 7. **Tabel `Attendances` (Kehadiran)**
   - **Fields**:
     - `id`: Primary key
     - `student_id`: Foreign key dari tabel siswa
     - `class_id`: Foreign key dari tabel kelas
     - `date`: Tanggal kehadiran
     - `status`: Status kehadiran (Hadir, Tidak Hadir, Izin, Sakit)
   - **Relasi**:
     - Berelasi dengan tabel **Students** (Siswa)
     - Berelasi dengan tabel **Classes** (Kelas)

### 8. **Tabel `Parents` (Orang Tua)**
   - **Fields**:
     - `id`: Primary key
     - `name`: Nama orang tua
     - `phone`: Nomor telepon orang tua
     - `address`: Alamat orang tua
     - `student_id`: Foreign key dari tabel siswa (bisa berupa relasi 1-to-many, satu orang tua bisa memiliki beberapa anak)
   - **Relasi**:
     - Berelasi dengan tabel **Students** (Siswa)

### 9. **Tabel `Exams` (Ujian)**
   - **Fields**:
     - `id`: Primary key
     - `subject_id`: Foreign key dari tabel mata pelajaran
     - `exam_date`: Tanggal ujian
     - `exam_type`: Jenis ujian (Ulangan Harian, UTS, UAS)
   - **Relasi**:
     - Berelasi dengan tabel **Subjects** (Mata Pelajaran)

### 10. **Tabel `Announcements` (Pengumuman)**
   - **Fields**:
     - `id`: Primary key
     - `title`: Judul pengumuman
     - `content`: Isi pengumuman
     - `date`: Tanggal pengumuman dibuat
   - **Relasi**:
     - Tidak memerlukan relasi khusus, dapat digunakan oleh semua pengguna (siswa, guru, admin).

### Total Tabel
Dengan desain seperti di atas, kita akan memiliki **10 tabel** utama:

1. `Students` (Siswa)
2. `Teachers` (Guru)
3. `Subjects` (Mata Pelajaran)
4. `Classes` (Kelas)
5. `Grades` (Nilai)
6. `Schedules` (Jadwal Pelajaran)
7. `Attendances` (Kehadiran)
8. `Parents` (Orang Tua)
9. `Exams` (Ujian)
10. `Announcements` (Pengumuman)

Tabel-tabel ini dapat diubah dan disesuaikan tergantung pada kebutuhan spesifik sistem yang kamu buat. Misalnya, bisa ditambah tabel **Admin** untuk mengelola akses admin atau **User** untuk manajemen pengguna yang lebih luas.