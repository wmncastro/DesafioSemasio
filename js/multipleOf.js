/* addEventListener for button click */
document.getElementById("btnFind").addEventListener("click", GetProduct);

/* Reorder array */
function reorder(numArr) {
  numArr.sort(function(a, b){return b-a});
  return numArr;
}

/* return maximum product between two numbers from the array, that is a multiple of mod */
function maxMultipleOf(numArr, mod) {
  var maxProd = 0;
  var multipl = 0;
      
  for (i = 0; i < numArr.length; i++) {
    for (j = i+1; j < numArr.length; j++) {
      multipl = numArr[i] * numArr[j];
      maxProd = (multipl % mod == 0) && (multipl > maxProd) ? multipl : maxProd;
      document.getElementById('resumeText').innerHTML += numArr[i] + " x " + numArr[j] + " = " + multipl + "<br>";
      if (maxProd > 0) {
        return numArr[i] + " x " + numArr[j] + " = " + multipl;
      }
    }
  }
  return maxProd;
}

/* To control display */
function displayResult(resultSuccess, resultError) {
  document.getElementById('resultSuccess').style.display = resultSuccess;
  document.getElementById('resultError').style.display = resultError;
}

/* Main */
function GetProduct() {
  var numArr = reorder(document.getElementById('numArr').value.split(","));

  //Check if array is valid
  if (!numArr.some(isNaN) && (numArr.toString() !== '' && numArr.length > 0)) {
    document.getElementById('resumeText').innerHTML = "";

    var mod = 3;
    var resultCal = maxMultipleOf(numArr, mod);

    document.getElementById('resumeTitle').innerHTML = "Details » Original array: {" + document.getElementById('numArr').value + "}, Optimezed array: {" + numArr.toString() + "}"; 
    document.getElementById('resultTitle').innerHTML = resultCal; 

    if (resultCal > 0) {
      document.getElementById('resultMsg').innerHTML = "Max product between two numbers from the array <b>{" + document.getElementById('numArr').value + "}</b>, that is a multiple of " + mod + " is <b>" + resultCal + "</b>"; 
    } else {
      document.getElementById('resultMsg').innerHTML = "Not exist the max product between two numbers from the array <b>{" + document.getElementById('numArr').value + "}</b>, that is a multiple of " + mod; 
    }
    displayResult("block", "none");
  } else {
    displayResult("none", "block");
  }
}
