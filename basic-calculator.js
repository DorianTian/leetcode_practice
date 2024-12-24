// Example 1:
//
// Input: s = "1 + 1"
// Output: 2
// Example 2:
//
// Input: s = " 2-1 + 2 "
// Output: 3
// Example 3:
//
// Input: s = "(1+(4+5+2)-3)+(6+8)"
// Output: 23
/**
 * @param {string} s
 * @return {number}
 */
const calculate = function(s) {
  let stack = [];
  let result = 0;
  let sign = 1; // 当前的符号，1 表示正，-1 表示负
  let i = 0;

  while (i < s.length) {
    let char = s[i];

    if (char === ' ') {
      // 忽略空格
      i++;
    } else if (char >= '0' && char <= '9') {
      // 解析多位数
      let num = 0;
      while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        num = num * 10 + parseInt(s[i]);
        i++;
      }
      result += sign * num;
    } else if (char === '+') {
      sign = 1;
      i++;
    } else if (char === '-') {
      sign = -1;
      i++;
    } else if (char === '(') {
      // 将当前的结果和符号压入栈中
      stack.push(result);
      stack.push(sign);
      // 重置结果和符号
      result = 0;
      sign = 1;
      i++;
    } else if (char === ')') {
      // 括号内的结果结束，弹出符号和之前的结果
      let prevSign = stack.pop();
      let prevResult = stack.pop();
      result = prevResult + prevSign * result;
      i++;
    } else {
      // 处理其他可能的字符（如运算符），这里假设输入总是有效的
      i++;
    }
  }

  return result;
};


