
function grade(){
    let valueData = document.getElementById("formvalueData").input.value;
    let p_container = document.getElementById("container");
    if( valueData % 2 == 0   ){
        p_container.innerHTML = "Genap";
    } 
    else if (valueData % 2 != 0) {
        p_container.innerHTML = "Ganjil";
    }

}