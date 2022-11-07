// 자동 형변환
const a = 10 + '문자열';
console.log(a);
const b = '3' * '5';
console.log(b);
const c = 1 - '문자열';
console.log(c);

// 타입변환 함수
const num1 = '10';
const num2 = '5';
console.log(`현재 num1의 타입: ${typeof(num1)}`);
console.log(`num1 + num2 = ${num1+num2}`);
console.log(`Number(num1) + Number(num2) = ${Number(num1) + Number(num2)}`);
console.log(`parseInt(num1) + parseInt(num2) = ${parseInt(num1) + parseInt(num2)}`);
console.log(`Blloean(num1): ${Boolean(num1)}`);
console.log(`Object(num1): ${Object(num1)}`);