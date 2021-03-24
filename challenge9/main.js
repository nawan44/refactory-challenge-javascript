let items = [];
function arrayInPairs() {
  let numbers = document.getElementById("input").value;


let jbb = numbers.split(" ").map(Number)
// console.log("fruitsString", jbb)
// console.log(typeof jbb);
// console.log(Array.isArray(jbb));
const arrs = '[' + jbb.join(", ") + ']';
// console.log("fruitsString", arrs)
// console.log(typeof arrs);
// console.log(Array.isArray(arrs));

  

  let arraySort = [...numbers].sort((a, b) => a - b);
  let totalArrays = [];
  console.log(arraySort);

  for (let i = 0; i < arraySort.length; i += 2) {
    let sliceArray = i + 2;
    totalArrays.push(arraySort.slice(i, sliceArray));
  }
  console.log(totalArrays.join(", "));

  // let A = totalArrays.map(Number)
  let B = '[' +totalArrays + ']';


// console.log(A); 
  
  
  document.getElementById("data").innerHTML = numbers;
  document.getElementById("array").innerHTML = arrs;

  document.getElementById("result").innerHTML = B;
}
