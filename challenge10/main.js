function swap(arr, first, second) {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}
function arrayInPairs() {
  //Data Input
  let numbers = document.getElementById("input").value;

  document.getElementById("data").innerHTML = numbers;
  
  // document.getElementById("result").innerHTML = (totalArrays)
}
