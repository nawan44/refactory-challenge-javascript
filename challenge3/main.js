const numbers = [
    -6,
    -4,
    0,
    1,
    2,
    2,
    3,
    10,
    12,
    44,
    52,
    72,
    98
];

//Max
const max = Math
    .max
    .apply(Math, numbers);

//Min
const min = Math
    .min
    .apply(Math, numbers);

// Median 
const mid = Math.floor(numbers.length / 2);
const arraysSort = [...numbers].sort((a,b) => a - b);
const median = 
    numbers % 2 !== 0 ? arraysSort[mid] : (arraysSort[mid - 1] + arraysSort[mid]) / 2;

//Average
const sum = numbers.reduce((sum, val) => (sum += val));
const len = numbers.length;
const average = sum / len

document.write("Dari angka - angka ini : " + numbers + "<br />");
document.write("Max     : " + max + "<br />");
document.write("Min     : " + min + "<br />");
document.write("Median  : " + median + "<br />");
document.write("Average : " + average + "<br />");
