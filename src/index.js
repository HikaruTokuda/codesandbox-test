/**
 * 分割代入
 */

const myProfile = {
  name: "なまえ",
  age: 28
};

let message1 = `1. 名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
console.log(message1);

const { name, age } = myProfile;
const message2 = `2. 名前は${name}です。年齢は${age}です`;
console.log(message2);

const myProfileArray = ["なまえ", 28];
const message3 = `3. 名前は${myProfileArray[0]}です。年齢は${myProfileArray[1]}です`;
console.log(message3);

const [nameFromArray, ageFromArray] = myProfileArray;
const message4 = `4. 名前は${nameFromArray}です。年齢は${ageFromArray}です。`;
console.log(message4);
