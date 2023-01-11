/**
 * デフォルト値、引数など
 */
const sayHello = (name = 'ゲスト') => console.log(`こんにちは${name}さん`);

sayHello()  // こんにちはゲストさん 
sayHello('ひかる')  // こんにちはひかるさん 
