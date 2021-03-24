function swap(arr, first, second) {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}
function arrayInPairs() {
  //Data Input
  let numbers = document.getElementById("input").value;
  //Data Array
let jbb = numbers.split(" ").map(Number)
const arrs = '[' + jbb.join(", ") + ']';

  //SORT DATA
  let totalArrays = [];
  let arr;
  if (numbers.length === 0) {
    arr = new Array();
  } 
  else {
    arr = numbers.match(/\d+/g).map(Number);
  }
  let len = arr.length,
    i,
    j,
    stop;
  for (i = 0; i < len; i++) {
    for (j = 0, stop = len - i; j < stop; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  let zzz = arr.toString().split(',').join(" ")
  let kbb = zzz.split(" ").map(Number)
  let arrt = '[' + kbb.join(", ") + ']';


//ARRAY in Pairs
  for (let i = 0; i < arr.length; i += 2) {
    let sliceArray = i + 2;
    totalArrays.push(arr.slice(i, sliceArray));
  }
  document.getElementById("data").innerHTML = numbers;
  document.getElementById("array").innerHTML = arrs;
  document.getElementById("sort").innerHTML = arrt;
  document.getElementById("result").innerHTML = JSON.stringify(totalArrays)
}
