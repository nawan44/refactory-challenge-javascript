function palindrom(nilai1) {
    var nilai1 = document.getElementById("formNilai").input1.value;
    var p_kontainer = document.getElementById("container");
    var nilai2 = nilai1.split('').reverse().join('');
    if (nilai1 === nilai2) {
        p_kontainer.innerHTML = "palindrom";
    }
    else {
        p_kontainer.innerHTML = " Bukan palindrom";
    }
}


