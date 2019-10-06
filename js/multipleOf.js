/* addEventListener for button click */
document.getElementById("btnFind").addEventListener("click", maxMultipleOf);

/* Remove duplicate values of array and re-order */
function removeDups(numArr) {
    let unique = {};
    numArr.forEach(function(i) {
      if(!unique[i]) {
        unique[i] = true;
      }
    });
    return Object.keys(unique);
  }
  
  /* Return maximum product between two numbers from the array, that is a multiple of 3 */
  function maxMultipleOf() {
    var numArr = removeDups(document.getElementById('numArr').value.split(","));
    if (!numArr.some(isNaN) && (numArr.toString() !== '' && numArr.length > 0) ) {
      var maxProd = 0;
      var multipl = 0;
      var resultCal = "";
      var mod = 3;
      document.getElementById('resumeText').innerHTML = ""
      for (i = 0; i < numArr.length; i++) {
        for (j = i+1; j < numArr.length; j++) {
          multipl = numArr[i] * numArr[j];
          maxProd = (multipl % mod == 0) && (multipl > maxProd) ? multipl : maxProd;
          if (maxProd == multipl) {
            resultCal = numArr[i] + " x " + numArr[j] + " = " + multipl;
          }
          document.getElementById('resumeText').innerHTML += numArr[i] + " x " + numArr[j] + " = " + multipl + "<br>";
        }
      }
      document.getElementById('resumeTitle').innerHTML = "Details » Original array: {" + document.getElementById('numArr').value + "}, Optimezed array: {" + numArr.toString() + "}"; 
      document.getElementById('resultMult').innerHTML = resultCal; 
      document.getElementById('resultMsg').innerHTML = "Max product between two numbers from the array <b>{" + document.getElementById('numArr').value + "}</b>, that is a multiple of " + mod + " is <b>" + resultCal + "</b>"; 
      document.getElementById('resultSuccess').style.display = "block";
      document.getElementById('resultError').style.display = "none";
    } else {
      document.getElementById('resultSuccess').style.display = "none";
      document.getElementById('resultError').style.display = "block";
    }
  }
