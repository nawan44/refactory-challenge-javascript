function grade(){
    let nilai = document.getElementById("formNilai").input.value;
    let p_kontainer = document.getElementById("container");
    if( nilai >= 90 ){
        p_kontainer.innerHTML = "A";
    } 
    else if ((nilai >= 80) && (nilai  <= 89)) {
        p_kontainer.innerHTML = "B";
    }
    else if ((nilai >= 70) && (nilai  <= 79))  {
        p_kontainer.innerHTML = "C";
    }
    else if((nilai >= 60) && (nilai  <= 69))  {
        p_kontainer.innerHTML = "D";
    }
    else if (nilai <= 59) {
        p_kontainer.innerHTML = "E";
    }

}
