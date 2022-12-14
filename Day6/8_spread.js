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

// λ°°μ΄(concat)
const fruits1 = ['π', 'π'];
const fruits2 = ['π', 'π'];
let arr = fruits1.concat(fruits2);
console.log(arr);
arr = [...fruits1, ...fruits2];
console.log(arr);
// fruits1κ³Ό fruits2 μ¬μ΄μ πλ₯Ό λ£μ΄λ³΄μ
arr = [...fruits1, 'π', ...fruits2];
console.log(arr);

// κ°μ²΄(object)
const apple = { name:'κΉμ¬κ³Ό', age:20, address:{ si: 'seoul'}};
console.log(apple);
// apple.job = 'νλ‘κ·Έλλ¨Έ';
const apple_update = { ...apple, job:'νλ‘κ·Έλλ¨Έ'};
console.log(apple_update);
console.log('----------');

const fruits = [ 'π', 'π', 'π', 'π' ];
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
    return ['π', 'π', 'π', 'π'];
}

const [berry, apple2, banana, orange] = sendEmoji();
console.log(berry);
console.log(apple2);
console.log(banana);
console.log(orange);

console.log('----------');
console.log(apple_update);
// function display(apple){
//     console.log('μ΄λ¦', apple.name);
//     console.log('λμ΄', apple.age);
//     console.log('μ§μ', apple.job);
// }
function display({name, age, job}){
    console.log('μ΄λ¦', name);
    console.log('λμ΄', age);
    console.log('μ§μ', job);
}

display(apple_update);

const {name, age, pet='λ£¨μ', job:hobby} = apple_update;
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