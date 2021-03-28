
function grade(){
    let nilai = document.getElementById("formNilai").input.value;
    let p_kontainer = document.getElementById("container");
    if( nilai % 2 == 0   ){
        p_kontainer.innerHTML = "Genap";
    } 
    else if (nilai % 2 != 0) {
        p_kontainer.innerHTML = "Ganjil";
    }

}