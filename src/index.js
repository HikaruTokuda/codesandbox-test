/**
 * アロー関数
 */

function func1(str) {
  return str;
}
console.log(func1("func1です"));

const func2 = (str) => {
  return str;
};
console.log(func2("func2です"));

const func3 = (str) => str;
console.log(func3("func3です"));

const func4 = (num1, num2) => {
  return num1 + num2;
};
console.log(func4(3, 2));
