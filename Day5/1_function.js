// 1. 함수의 기본
function sum(num1, num2) {
    console.log('sum() 호출!')
    return num1 + num2;
}

const result = sum(10, 3);
console.log(result);

//2. 함수 메모리
const add = sum;
console.log(sum(10, 3));
console.log(add(10, 3));

// 3. 함수 작성법(팁!)
// 조건이 맞지 않는 경우 함수 도입부분에서 함수를 미리 종료!
function print(num) {
    if (num < 0) {
        return;
    }
    console.log(num);
}

print(10);
print(-1);

// 4. 매개변수의 기본값은 무조건 undefined
function total(num1 = 0, num2 = 0) {
    console.log(num1);
    console.log(num2);
    console.log('arguments: ', arguments);
    console.log('arguments[1]: ', arguments[1]);
    return num1 + num2;
}

console.log(total());
console.log(total(10, 3));

// 5. 콜백 함수
const calc_add = (a, b) => a + b;
const calc_multiply = (a, b) => a * b;
console.log(calc_add(10, 5));
console.log(calc_multiply(10, 5));

function calculator(num1, num2, action) {
    if (num1 < 0 || num2 < 0) {
        return;
    }
    const result = action(num1, num2);
    console.log(result);
    return result;
}

calculator(4, 2, calc_add);
calculator(4, 2, calc_multiply);

console.log('----------');

function func1(a) {
    let num = 0;
    for (let i = 1; i <= a; i++) {
        console.log(i);
    }
}

function func2(a) {
    console.log(a ** 2);
}

function iterate(num, call) {
    if (num < 0) {
        return;
    }
    call(num);
}

iterate(5, func1);
iterate(5, func2);

console.log('----------');

// 6. 원시값과 객체값의 비교
// 원시값: 값에 의한 복사
// 객체값: 참조에 의한 복사(메모리주소)
function display(num) {
    num = 10;
    console.log(num);
}

const value = 5;
display(value);
console.log(value);

function displayObj(obj){
    obj.age = 12;   // 🤑 X
    console.log(obj);
}

const dog = {name:'루시', age:13};
displayObj(dog);
console.log(dog);

function changeAge(obj){
    return { ...obj, age: 12};
}

const dog2 = changeAge(dog);
console.log(dog2);