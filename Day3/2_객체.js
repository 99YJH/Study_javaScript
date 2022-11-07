// 리터럴 표기법
const dog = {
    name: '루시',
    age: 12,
    color: 'white',
    weight: 3.5,
    birthday: '20091210',
    getBirthday: function(){
        return this.birthday;
    }
}

console.log(dog.name);
console.log(dog.age);
console.log(dog.color);
console.log(dog.weight);

console.log(dog['name']);
console.log(dog['age']);
console.log(dog['color']);
console.log(dog['weight']);

for(let i in dog){
    console.log(`i: ${i}, dog[i]: ${dog[i]}`);
}

console.log(dog.getBirthday());
console.log(dog.getBirthday);
console.log('----------');

// 생성자를 이용한 객체
function Dog(name, color){
    this.name = name;
    this.color = color;
    this.play = function(){
        return `${this.name}는 놉니다`;
    }
}

const Rusy = new Dog('루시', 'white');

console.log(Rusy.name);
console.log(Rusy.color);
console.log(Rusy.play());

const PPomi = new Dog('뽀미', 'black');
console.log(PPomi.name);
console.log(PPomi.color);
console.log(PPomi.play());
console.log('----------');

// 클래스를 이용한 객체생성
const Dog2 = class{
    constructor(name, age, color){
        this.name = name;
        this.age = age;
        this.color = color;
    }
    play(){
        return `${this.name}는 즐겁게 놉니다`;
    }
}

const PPory = new Dog2('뽀리', 4, 'white');
console.log(PPory.name);
console.log(PPory.age);
console.log(PPory.color);
console.log(PPory.play());