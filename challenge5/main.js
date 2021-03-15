function palindrom(nilai1) {
    let nilai1 = document.getElementById("formNilai").input1.value;
    let p_kontainer = document.getElementById("container");
    let nilai2 = nilai1.split('').reverse().join('');
    if (nilai1 === nilai2) {
        p_kontainer.innerHTML = "palindrom";
    }
    else {
        p_kontainer.innerHTML = " Bukan palindrom";
    }
}


