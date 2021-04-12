function BirthDay() {
  //Ambil tanggal ulang tahun dari inputan tanggal
  let birthday = new Date(document.getElementById("formValue").input.value);
  //set tahun = 0
  let year = 0;

  //set tanggal hari ini (saat melakukan meghitung umur)
  let hariini = new Date();
  //Menghitung tahun jika ulang tahun belum lewat
  if (hariini.getMonth() < birthday.getMonth()) {
    year = 1;
  } else if (
    hariini.getMonth() == birthday.getMonth() &&
    hariini.getDate() < birthday.getDate()
  ) {
    year = 1;
  }
  //Menghitung mengurangi hitungan tahun karena ulang tahun belum berlalu
  let umur = hariini.getFullYear() - birthday.getFullYear() - year;
  if (umur < 0) {
    umur = 0;
  }

  //MENGHITUNG HARI
  //Satu hari dalam milisecond
  let satu_hari = 1000 * 60 * 60 * 24;
  // 0 -11 adalah bulan dalam Javascript
  let ulang_tahun_tahunan = new Date(
    hariini.getFullYear(),
    birthday.getMonth(),
    birthday.getDate()
  );
  if (
    hariini.getMonth() == birthday.getMonth() &&
    hariini.getDate() < birthday.getDate()
  )
    ulang_tahun_tahunan.setFullYear(ulang_tahun_tahunan.getFullYear() + 1);

  let hari =
    Math.round(ulang_tahun_tahunan.getTime() - hariini.getTime()) / satu_hari;
  // Menghilangkan desimal dari hasil
  let hari_benar = Math.abs(hari.toFixed(0));

  document.getElementById("container").innerHTML =
    umur + "  tahun " + hari_benar + " hari";
}
