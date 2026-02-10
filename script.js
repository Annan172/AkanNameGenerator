console.log("JS is connected");

document.getElementById("AkanForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const birthdate = document.getElementById("birthdate").value;
  const gender = document.querySelector('input[name="gender"]:checked');

  if (!birthdate) {
    alert("Please select a birthdate!!!");
    return;
  }

  if (!gender) {
    alert("Please select a gender!!!");
    return;
  }

  const date = new Date(birthdate);

  let DD = date.getDate();
  let MM = date.getMonth() + 1;
  let year = date.getFullYear();

  // Adjust months for Jan & Feb since thet are affected by leap years
  if (MM < 3) {
    MM += 12;
    year -= 1;
  }

  const CC = Math.floor(year / 100);
  const YY = year % 100;

  let d =
    Math.floor(
      (
        (4 * CC - 2 * CC - 1) +
        (45 * YY) +
        (1026 * (MM + 1)) +
        DD
      ) / 10
    ) % 7;

  if (d < 0) d += 7;

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
  ];

  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
  ];

  const akanName =
    gender.value === "male" ? maleNames[d] : femaleNames[d];

  document.getElementById("akan-name").innerText =
    `You were born on a ${days[d]}. Your Akan name is ${akanName}!`;
});
