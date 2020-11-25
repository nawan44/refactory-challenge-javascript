function kabisat(){
    var nilai1 = document.getElementById("formNilai").input1.value;
    var nilai2 = document.getElementById("formNilai").input2.value;
    var i;
    var text = " ";
    
    var p_kontainer = document.getElementById("container");
   for(i = nilai1; i <= nilai2; i++){
       if(i%4 == 0){
           text += i + "<br />";
       }
   }
document.getElementById("container").innerHTML =  text;
}
