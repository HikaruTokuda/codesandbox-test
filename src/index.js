/**
 * mapやfilterを使った配列の処理
 */

const nameArr = ["田中", "山田", "トクダ"];
//  for(let i = 0; i < nameArr.length; i++) {
//    console.log(`${i}番目は${nameArr[i]}`);
//  }

//  const nameArr2 = nameArr.map((name) => {
//    return name;
//   });
//   console.log(nameArr2);

// nameArr.map( (name, index) => {
//   console.log(`${index}番目は${name}`);
// });

// const numArr = [1,  2, 3, 4, 5];
// const newNummArr = numArr.filter( (num) => {
//   return num % 2 !== 0;
// });
// console.log(newNummArr);

const newNameArr = nameArr.map((name) => {
  if (name === "トクダ") return name;
  else return `${name}さん`;
});
console.log(newNameArr);
