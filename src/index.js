/**
 * 論理演算子
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) console.log("1か2はtrueです");
// if (flag1 && flag2) console.log("1も2もtrueです");

// ||は左側がFALSEなら右側を返す
// const num = 100;
// const fee = num || '金額未設定です';
// console.log(fee);

// &&は左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
