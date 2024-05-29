// Script for Number Display

// ELEMENTS
// Get Elements from index.html
const inputForm = document.getElementById("inputForm");
const minimumInput = document.getElementById("minimumInput");
const maximumInput = document.getElementById("maximumInput");
const outputResult = document.getElementById("outputResult");

function getResult() {

  // Clear Output Result
  outputResult.innerText = "";

  // Get inputs
  let minimum = Number(minimumInput.value);
  let maximum = Number(maximumInput.value);

  // Handle edge case of Maximum being smaller than Minimum
  if (maximum < minimum) {
    outputResult.innerText = "Maximum value must be greater than minimum value!";
    return;
  }

  // Initialize Counter
  let counter = minimum

  // While Loop
  while ( counter <= maximum ) {
    
    // Display Number
    outputResult.innerText += counter + "\n";
    
    // Increment counter by 1
    counter += 1;
    
  }
  
  return;
}

// Cool function notation
// form validation + submit call
inputForm.onsubmit = () => {
  getResult();
  return false;
}

