// Example 1:
//
// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9
// Example 2:
//
// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6
// Example 3:
//
// Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
//   = ((10 * (6 / (12 * -11))) + 17) + 5
//   = ((10 * (6 / -132)) + 17) + 5
//   = ((10 * 0) + 17) + 5
//   = (0 + 17) + 5
//   = 17 + 5
//   = 22
/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function(tokens) {
  const stack = [];

  const operation = (operator, a, b) => {
    let result = -Infinity;
    switch (operator) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        result = Math.trunc(a / b);
        break;
      default:
        console.log('Invalid operator');
        break;
    }

    return result;
  };

  for (const token of tokens) {
    if (stack.length !== 0 && isNaN(Number(token))) {
      const num_a = stack.pop();
      const num_b = stack.pop();
      const num = operation(token, num_b, num_a);

      stack.push(num);
    } else {
      stack.push(parseInt(token, 10));
    }
  }

  return stack[0];
};

const tokens = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'];
console.log(evalRPN(tokens));