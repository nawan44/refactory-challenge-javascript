function palindrom() {
  let valueData1 = document.getElementById("formvalueData").input.value;
  let valueData2 = valueData1.toLowerCase();
  let valueData3 = (document.getElementById("container1").innerHTML = valueData2);
  valueData2.innerHTML = valueData3;
  console.log(valueData3);

  let valueData4 = valueData3.split("").reverse().join("");

  let p_container2 = document.getElementById("container2");

  if (valueData3 === valueData4) {
    p_container2.innerHTML = "palindrom";
  } else {
    p_container2.innerHTML = " Not palindrom";
  }
}
