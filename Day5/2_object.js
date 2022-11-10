// dog은 객체이고, 어떤 클래스의 인스턴스도 아님
let dog = {
    name: '루시',
    age: 13,
    'dog-weight': 3.5,
    ['dog-height']: 0.8
}

console.log(dog.name);
console.log(dog['age']);

dog.family = '포메';
console.log(dog.family);
console.log(dog['family']);

delete dog['dog-height'];
console.log(dog['dog-height']);
console.log('----------');

// 동적으로 속성에 접근하고 싶을 때
function getValue(obj, key) {
    // dog.name
    return obj[key];
    return;
}

console.log(getValue(dog, 'name'));

console.log('----------');

// 필드를 추가
// addkey
// obj, 필드명, 값
function addkey(obj, key, value) {
    return obj[key] = value;
}

//필드를 삭제
// deletekey
// obj, 키
function deletekey(obj, key) {
    delete obj[key];
}

addkey(dog, ['dog-height'], 5);
console.log(dog);

deletekey(dog, ['dog-height']);
console.log(dog);

const x = 0;
const y = 0;
// const coord = {x: x, y: y};
const coord = { x, y };
console.log(coord);

// 객체 생성 함수
function makeObj(name, age) {
    return {
        name, age
    };
}
console.log(makeObj('apple', 20));

const apple = {
    name: 'appple',
    display: function (){
        console.log(`${this.name}: 🍎`);
    }
}

const orange = {
    name: `orange`,
    display: function(){
        console.log(`${this.name}: 🍊`);
    }
}

console.log(apple);
apple.display();
console.log(orange);
orange.display();

function Fruit(name, emoji){
    this.name = name;
    this.emoji = emoji;
    this.display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    }
    // return this; // 생략가능
}

const apple2 = new Fruit('apple', '🍎');
const orange2 = new Fruit('orange', '🍊');

console.log(apple2);
apple2.display();
console.log(orange2);
orange2.display();