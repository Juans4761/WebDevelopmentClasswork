/* Challenge 2: Create a function to ,
       1) Calculate and display the BMI.  Look up the formula which you should have done in Challenge 1
              2) Display BMI status as per the chart in index.html
                     3) Display the corresponding image based on the BMI status.
                     */
                     /* 
                     Guideline:
                     1) Create the function
                     2) Get the information from the UI
                     3) Perform the necessary calculation.
                     4) Make the appropriate decisions.  Store the appropriate BMI status.  Store the appropriate filename for the image.
                     5) Display the output

                     Use past examples, classwork and practicals to assist you in completing this practical.
                     */
                    function calculateBMI() {
  let weight = parseFloat(document.getElementById("weight").value);
  let heightCm = parseFloat(document.getElementById("height").value);

  let heightM = heightCm / 100;

  let bmi = weight / (heightM * heightM);
  bmi = bmi.toFixed(1);

  let status = "";
  let image = document.getElementById("bmiImage");

  if (bmi < 18.5) {
    status = "Underweight";
    image.src = "underweight.jpg";
  } 
  else if (bmi >= 18.5 && bmi <= 24.9) {
    status = "Healthy Weight";
    image.src = "healthy.jpg";
  } 
  else if (bmi >= 25 && bmi <= 29.9) {
    status = "Overweight";
    image.src = "overweight.jpg";
  } 
  else {
    status = "Obesity";
    image.src = "obesity.jpg";
  }

  document.getElementById("bmiValue").textContent = bmi;
  document.getElementById("bmiStatus").textContent = status;

  image.style.display = "block";
}

