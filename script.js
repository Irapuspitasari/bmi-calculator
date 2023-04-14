const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const message = document.querySelector("#message");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please provide a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please provide a valid weight";
  } else {
    //bagian  calculate BMI
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // bagian display the results calculate BMI
    results.innerHTML = `<span>${bmi}</span>`;

    // menampilkan status pesan BMI
    if (bmi < 18.5) {
      message.innerHTML = "You are underweight";
    } else if (bmi > 18.5 && bmi < 24.9) {
      message.innerHTML = "You are Normal weight ";
    } else if (bmi > 25 && bmi < 29.9) {
      message.innerHTML = "You are Overweight";
    } else if (bmi > 30) {
      message.innerHTML = "You are Obesity  ";
    }
  }
});
