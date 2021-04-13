function BirthDay() {
  //Take the birthday from the date input
  let birthday = new Date(document.getElementById("formValue").input.value);
  //set year = 0
  let year = 0;

  //set today's date (when calculating age)
  let thisDay = new Date();
  //Counting the year if the birthday has not yet passed
  if (thisDay.getMonth() < birthday.getMonth()) {
    year = 1;
  } else if (
    thisDay.getMonth() == birthday.getMonth() &&
    thisDay.getDate() < birthday.getDate()
  ) {
    year = 1;
  }
  //Counting reduces the count of years because birthdays haven't passed yet
  let age = thisDay.getFullYear() - birthday.getFullYear() - year;
  if (age < 0) {
    age = 0;
  }

  //COUNTING THE DAYS
  //One day in milliseconds
  let one_day = 1000 * 60 * 60 * 24;
  // 0 -11 is the month in Javascript
  let annual_birthday = new Date(
    thisDay.getFullYear(),
    birthday.getMonth(),
    birthday.getDate()
  );
  if (
    thisDay.getMonth() == birthday.getMonth() &&
    thisDay.getDate() < birthday.getDate()
  )
    annual_birthday.setFullYear(annual_birthday.getFullYear() + 1);

  let day =
    Math.round(annual_birthday.getTime() - thisDay.getTime()) / one_day;
  // Remove decimals from the results
  let real_day = Math.abs(day.toFixed(0));

  document.getElementById("container").innerHTML =
    age + "  year " + real_day + " day";
}
