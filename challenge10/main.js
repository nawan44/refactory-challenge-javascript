function convertTime() {
  //Data Input
  let numbers = document.getElementById("data_hours").value;

  function convertHoursToMinute() {
    resulltConvertHoursToMinute = numbers * 60;
    return resulltConvertHoursToMinute;
  }
  document.getElementById("data_minute").innerHTML = numbers;

  document.getElementById("result").innerHTML = convertHoursToMinute(numbers);
}
