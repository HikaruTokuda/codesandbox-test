/**
 * 三項演算子
 */
const num = "1300";
const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
};
console.log(checkSum(50, 30));
console.log(checkSum(50, 60));
