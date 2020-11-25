
function grade(){
    var nilai = document.getElementById("formNilai").input1.value;
    var p_kontainer = document.getElementById("container");
    if( nilai % 2 == 0   ){
        p_kontainer.innerHTML = "Genap";
    } 
    else if (nilai % 2 != 0) {
        p_kontainer.innerHTML = "Ganjil";
    }

}