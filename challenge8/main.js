function swap(arr,first,second){
    let temp=arr[first];
    arr[first]=arr[second];
    arr[second]=temp;
}

function buble() {
 
let str=document.getElementById("input").value;
let arr;
if(str.length===0){
    arr=new Array;
}
else{
    arr=str.match(/\d+/g).map(Number);
}
let len=arr.length,
i,j,stop;
for(i=0;i<len;i++){
    for(j=0,stop=len-i;j<stop;j++){
        if(arr[j]>arr[j+1]){
           swap(arr,j,j+1);
        }
    }
}
document
.getElementById("container")
.innerHTML = arr;
 }
