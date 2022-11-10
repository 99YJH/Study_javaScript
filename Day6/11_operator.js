// 논리 연산자
// &&, ||
const obj1 = { name: '김사과' };
const obj2 = { name: '반하나', lover: '이메론' };
const bool1 = false;

if (obj1 || obj2) {
    console.log('둘다 true!');
}
// a && b -> a가 참일경우 b값 저장
// a && b -> a가 거짓일경우 false 저장
// a || b -> a가 참일경우 a값 저장
// a || b -> a가 거짓일경우 b값 저장
let result = obj1 && obj2;
console.log(result);

result = obj1 || obj2;
console.log(result);

function changeLover(obj) {
    if (!obj.lover) {
        throw new Error('애인이 없어!');
    }
    obj.lover = '애인바뀜';
}

function makeNewLover(obj) {
    if (obj.lover) {
        throw new Error('애인이 있다!');
    }
    obj.lover = '새로운애인생성';
}

obj1.lover && changeLover(obj1);
console.log(obj1);
obj2.lover && changeLover(obj2);
console.log(obj2);

// null 또는 undefined인 경우를 확인할 때
let item = { price: 1000 };
const price = item && item.price;
console.log(price);

// 기본값을 설정
// default parameter
function print(message){
    const text = message || 'hello';
    console.log(text);
}

print('안녕');
print();
print(undefined);
print(null);
print('');
console.log('----------');

let item2 = {price: 1000};
const price2 = item2?.price;
console.log(price2);

let banana = {name:'반하나', lover:{name:'오렌지'}};

function printLoverName(obj){
    const loverName = obj?.lover?.name;
    console.log(loverName);
}

printLoverName(banana);

let num = 0;
console.log(num || '-1');
console.log(num ?? '-1');