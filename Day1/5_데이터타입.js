const num1 = 10;
const num2 = 11.11;
const num3 = 10e6;
console.log(num1);
console.log(num2);
console.log(num3);
console.log(typeof(num1));
console.log(typeof(num2));
console.log(typeof(num3));

// string 형
const num4 = 10;    // 15
const num5 = 5;     // 10Hello JavaScript
const str1 = 'Hello JavaScript';
const str2 = 'Hello World';
const str3 = '10';
console.log(num4+num5);
console.log(num4+str1);
console.log(str1+str2);
console.log(str1+""+str2);
console.log(`자바스크립트에서는 문자열을 쌍따옴표 또는 따옴표로 둘러싸인 문자의 집합을 의미합니다`);
console.log(`str1 : ${str1}, str2 : ${str2}`);

console.log(num4 + str3);   // 덧셈을 제외하고 자동형변환
console.log(num4 - str3);
console.log(num4 * str3);
console.log(num4 / str3);

// 논리형
const b1 = true;
const b2 = false;
const b3 = (10>5);
const b4 = (10<3);
console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);

// undefined, null
let num;
console.log(num);
console.log(typeof(num));
let obj1 = {};
console.log(obj1);
console.log(typeof(obj1));
let obj2 = null;
console.log(obj2);
console.log(typeof(obj2));

// 심볼형
const sym1 = Symbol('apple');
const sym2 = Symbol('apple');
console.log(sym1);
console.log(sym2);
console.log(sym1 == sym2);

const sym3 = Symbol('banana');
const sym4 = sym3;
console.log(sym4 == sym3);

// 객체형
const apple = {'name':'김사과', 'age':20, 'address':'서울 서초구 양재동'};
console.log(apple);
console.log(apple.name);
console.log(apple.age);
console.log(apple.address);

apple.age = 21;
console.log(`2022년 김사과의 나이는 ${apple.age}살 입니다.`)