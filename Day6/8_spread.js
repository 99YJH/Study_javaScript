function add(num1, num2, num3){
    return num1 + num2 + num3;
}

function sum(num1, num2, ...nums){
    console.log(nums);
}

const nums = [10, 20, 30];
console.log(add(nums[0], nums[1], nums[2]));
console.log(add(...nums));

sum(1, 2, 3, 2, 5, 8, 3);

// 배열(concat)
const fruits1 = ['🍓', '🍎'];
const fruits2 = ['🍌', '🍊'];
let arr = fruits1.concat(fruits2);
console.log(arr);
arr = [...fruits1, ...fruits2];
console.log(arr);
// fruits1과 fruits2 사이에 💎를 넣어보자
arr = [...fruits1, '💎', ...fruits2];
console.log(arr);

// 객체(object)
const apple = { name:'김사과', age:20, address:{ si: 'seoul'}};
console.log(apple);
// apple.job = '프로그래머';
const apple_update = { ...apple, job:'프로그래머'};
console.log(apple_update);
console.log('----------');

const fruits = [ '🍓', '🍎', '🍌', '🍊' ];
const [fruit1, fruit2, ...others] = fruits;
console.log(fruit1);
console.log(fruit2);
console.log(others);

const point = [1, 2];
const [x, y, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function sendEmoji(){
    return ['🍓', '🍎', '🍌', '🍊'];
}

const [berry, apple2, banana, orange] = sendEmoji();
console.log(berry);
console.log(apple2);
console.log(banana);
console.log(orange);

console.log('----------');
console.log(apple_update);
// function display(apple){
//     console.log('이름', apple.name);
//     console.log('나이', apple.age);
//     console.log('직업', apple.job);
// }
function display({name, age, job}){
    console.log('이름', name);
    console.log('나이', age);
    console.log('직업', job);
}

display(apple_update);

const {name, age, pet='루시', job:hobby} = apple_update;
console.log(name);
console.log(age);
console.log(pet);
console.log(hobby);

console.log('----------');

const componet = {
    name: 'Button',
    style: {
        size:20,
        color: 'black'
    }
};

function changeColor({style: {color}}){
    console.log(color);
}

changeColor(componet);