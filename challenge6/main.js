function birthday() {

    var birth = new Date(document.getElementById("formNilai").input1.value)

    var today = new Date();

    // var birth = new Date("03/05/2016")

    // var today = new Date("06/05/2020");


    var umur = Math.abs(today - birth)
    console.log(umur)
    var satuHari = 1000 * 60 * 60 * 24;
    var satuBulan = 1000 * 60 * 60 * 24 * 30;
    var satuTahun = 1000 * 60 * 60 * 24 * 365;

    var selisihTahun = Math.floor(umur / satuTahun);

    var selisihBulan = Math.floor((umur - (selisihTahun * satuTahun)) / satuBulan);

    var selisihHari = Math.floor((umur - (selisihTahun * satuTahun) - (selisihBulan * satuBulan)) / satuHari);
    var jumlahHari = selisihBulan * 30 + selisihHari

    // var hasil = selisihTahun + " Tahun " + selisihBulan + " Bulan " + selisihHari + " Hari";
    var hasil = selisihTahun + " Tahun " + jumlahHari + " Hari";


    document.getElementById("container").innerHTML = hasil;


}

