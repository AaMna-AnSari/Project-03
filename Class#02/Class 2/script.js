function performOperation() {
     var num1 = parseFloat(document.getElementById('num1').value);
     var num2 = parseFloat(document.getElementById('num2').value);
     var operation = (document.getElementById('operation').value);
     var result = 0;
     
     if (operation == "addition") {
          result = num1 + num2;
     }else if (operation == "subtraction") {
          result = num1 - num2;
     }
     else if (operation == "multiplication") {
          result = num1 * num2;
     }
     else if (operation == "division") {
          result = num1 / num2;
     }
     else if (operation == "modulus") {
          result = num1 % num2;
     }
     document.getElementById('result').value = result;
     }


