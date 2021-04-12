function grade(){
    let valueData = document.getElementById("formvalueData").input.value;
    let p_container = document.getElementById("container");
    if( valueData >= 90 ){
        p_container.innerHTML = "A";
    } 
    else if ((valueData >= 80) && (valueData  <= 89)) {
        p_container.innerHTML = "B";
    }
    else if ((valueData >= 70) && (valueData  <= 79))  {
        p_container.innerHTML = "C";
    }
    else if((valueData >= 60) && (valueData  <= 69))  {
        p_container.innerHTML = "D";
    }
    else if (valueData <= 59) {
        p_container.innerHTML = "E";
    }

}
