// General Guideline
/*
function name(){

  // Step 1: Create variables for the information from the text inputs and the output element

  // Step 2: Complete the process
  //    a) Perform any calculations necessary
  //    b) Perform necessary decisions

  // Step 3: Display the output

}
/* Challenge 2:  Create the function for Challenge 1 scenario */
function graduate() {
  let credits = parseInt(document.getElementById("credits").value);
  let regents = parseInt(document.getElementById("regents").value);
  let output = document.getElementById("example1");
  let message = "";

  // Verifica si los créditos son suficientes y si los regentes son 5 o más
  if (credits >= 44 && regents >= 5) {
    message = "Graduate candidate";
  } else {
    message = "Graduation in progress";
  }

  // Muestra el mensaje en el div con id "example1"
  output.innerHTML = message;
}

/* Challenge 3:  Complete the function for Pets Challenge on pets.html.  
1) Review the HTML for the UI.  Remember dropdown boxes are just input.
2) You will need to write HTML as part of the output.  
   For example, output.innerHTML = `<input src="pic.png">` would place the image in the <div>*/
function pet(){ 
  let animal = document.getElementsById("animal").value;
  let emotion = document.getElementsById("emotion").value;
  let output = document.getElementsById("output");


if (animal == "Bear" && emotion == "Funny") {
    filename = "<img src='funnyBear.jpg'>";
  }

  if (animal == "Bear" && emotion == "Sad") {
    filename = "<img src='sadBear.jpg'>";
  }

  if (animal == "Cat" && emotion == "Funny") {
    filename = "<img src='funnyCat.jpg'>";
  }

  if (animal == "Cat" && emotion == "Sad") {
    filename = "<img src='sadCat.jpg'>";
  }

  if (animal == "Dog" && emotion == "Funny") {
    filename = "<img src='funnyDog.jpg'>";
  }

  if (animal == "Dog" && emotion == "Sad") {
    filename = "<img src='sadDog.jpg'>";
  }
  
output.innerHTML = filename;

}

