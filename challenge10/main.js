// document.getElementById("Selector").onchange = convert;

function convert() {
  //Data Input
  let numbers = document.getElementById("data_hours").value;
  console.log(numbers);

  if (Selector.value === "convertHoursToMinute") {
    let select = " Hours";
    resulltConvertHoursToMinute = numbers * 60 + " Minute ";

    document.getElementById("data_input").innerHTML = numbers + select;
    document.getElementById("result").innerHTML = resulltConvertHoursToMinute;
    console.log(resulltConvertHoursToMinute);
  } else if (Selector.value === "convertMinuteToHours") {
    let select = " Minute";

    resulltConvertMinuteToHours = numbers / 60 + " Hours ";
    document.getElementById("data_input").innerHTML = numbers + select;

    document.getElementById("result").innerHTML = resulltConvertMinuteToHours;
    console.log(resulltConvertMinuteToHours);
  } else if (Selector.value === "convertMinuteToYear") {
    let select = " Minute";

    resulltConvertMinuteToYear = numbers / 60 / 24 / 365 + " Year ";
    document.getElementById("data_input").innerHTML = numbers + select;

    document.getElementById("result").innerHTML = resulltConvertMinuteToYear;
    console.log(resulltConvertMinuteToYear);
  }
}
