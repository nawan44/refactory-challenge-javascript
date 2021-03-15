function birthday() {

    let birth = new Date(document.getElementById("formNilai").input1.value)

    let today = new Date();

    // let birth = new Date("03/05/2016")

    // let today = new Date("06/05/2020");


    let umur = Math.abs(today - birth)
    console.log(umur)
    let satuHari = 1000 * 60 * 60 * 24;
    let satuBulan = 1000 * 60 * 60 * 24 * 30;
    let satuTahun = 1000 * 60 * 60 * 24 * 365;

    let selisihTahun = Math.floor(umur / satuTahun);

    let selisihBulan = Math.floor((umur - (selisihTahun * satuTahun)) / satuBulan);

    let selisihHari = Math.floor((umur - (selisihTahun * satuTahun) - (selisihBulan * satuBulan)) / satuHari);
    let jumlahHari = selisihBulan * 30 + selisihHari

    // let hasil = selisihTahun + " Tahun " + selisihBulan + " Bulan " + selisihHari + " Hari";
    let hasil = selisihTahun + " Tahun " + jumlahHari + " Hari";


    document.getElementById("container").innerHTML = hasil;


}

