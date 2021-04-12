function leap(){
    let valueData1 = document.getElementById("formValueData").input1.value;
    let valueData2 = document.getElementById("formValueData").input2.value;
    let i;
    let text = " ";
    
    let p_container = document.getElementById("container");
   for(i = valueData1; i <= valueData2; i++){
       if(i%4 == 0){
           text += i + "<br />";
       }
   }
document.getElementById("container").innerHTML =  text;
}
