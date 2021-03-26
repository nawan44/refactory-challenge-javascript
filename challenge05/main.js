function palindrom() {
  let nilai1 = document.getElementById("formNilai").input1.value;
  let nilai2 = nilai1.toLowerCase();
  let nilai3 = (document.getElementById("container1").innerHTML = nilai2);
  nilai2.innerHTML = nilai3;
  console.log(nilai3);

  let nilai4 = nilai3.split("").reverse().join("");

  let p_kontainer2 = document.getElementById("container2");

  if (nilai3 === nilai4) {
    p_kontainer2.innerHTML = "palindrom";
  } else {
    p_kontainer2.innerHTML = " Bukan palindrom";
  }
}
