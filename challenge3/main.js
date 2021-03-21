function dataSort() {
  let numbers = document.getElementById("input").value;

  function swap(arr, first, second) {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
  }
  //Data Sort
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

  //Max
  const max = Math.max.apply(Math, arr);

  //Min
  const min = Math.min.apply(Math, arr);

  // Median
  const mid = Math.floor(arr.length / 2);
  const arraysSort = [...arr].sort((a, b) => a - b);
  const median =
    arr % 2 !== 0
      ? arraysSort[mid]
      : (arraysSort[mid - 1] + arraysSort[mid]) / 2;

  //Average
  const sum = arr.reduce((sum, val) => (sum += val));
  const lan = arr.length;
  const average = sum / lan;

  //Data Rounding
  const rounding = Math.round(average)


  document.getElementById("data").innerHTML = numbers;
  document.getElementById("data_sort").innerHTML = arr;

  document.getElementById("result_max").innerHTML = max;
  document.getElementById("result_min").innerHTML = min;
  document.getElementById("result_median").innerHTML = median;
  document.getElementById("result_average").innerHTML = average;
  document.getElementById("result_rounding").innerHTML = rounding;

}
