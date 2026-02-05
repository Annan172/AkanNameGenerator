console.log("JS is connected"); // This is just to chevk wherther the JS code is connected correctly

document.getElementById("AkanForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const birthdate = document.getElementById("birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked');

    if (!birthdate) {
        alert("Please select a birthdate!!!");
        return;
    }

    if (!gender) {
        alert('Please select a gender!!!');
        return;
    }

    const date = new Date(birthdate);

    const DD = date.getDate();
    const MM = date.getMonth() + 1;
    const year = date.getFullYear();

    const CC = Math.floor(year / 100);
    const YY = year % 100;

    let d = (
        (4 * CC - 2 * CC - 1) +
        (45 * YY) +
        (1026 * (MM + 1)) / 10 +
        DD
    );

    d = Math.floor(d % 7);
    if (d < 0) d += 7;

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    const akanName = gender.value === "male"
        ? maleNames[d]
        : femaleNames[d];

    document.getElementById("akan-name").innerText =
        `You were born on a ${days[d]}. Your Akan name is ${akanName}!`;
});
