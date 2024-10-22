const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


  function add(a, b) {
      return a + b;
  }

  function subtract(a, b) {
      return a - b;
  }

  function multiply(a, b) {
      return a * b;
  }

  function divide(a, b) {
      if (b === 0) {
          console.log("Error: Division by zero");
          return null;
      }
      return a / b;
  }

  module.exports = {
    add,
    subtract,
    multiply,
    divide
  };

function calculate(operation, a, b) {
    switch (operation) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            console.log("Invalid operation");
            return null;
    }
}

function promptUser() {
    rl.question('Enter the operation (format: a + b): ', (input) => {
        const [a, operation, b] = input.split(' ');

        const num1 = parseFloat(a);
        const num2 = parseFloat(b);

        if (isNaN(num1) || isNaN(num2)) {
            console.log("Invalid numbers");
        } else {
            const result = calculate(operation, num1, num2);
            if (result !== null) {
                console.log(`Result: ${result}`);
            }
        }

        rl.question('Do you want to perform another calculation? (yes/no): ', (answer) => {
            if (answer.toLowerCase() === 'yes') {
                promptUser();
            } else {
                rl.close();
            }
        });
    });
}

promptUser();