function Dog(color, name, age){
    this.color = color;
    this.name = name;
    this.age = age;
}

const Rucy = new Dog('white', '루시', 13);
console.log(`이름: ${Rucy.name}`);
console.log(`색상: ${Rucy.color}`);
console.log(`나이: ${Rucy.age}`);
Rucy.family = '포메';
Rucy.getFamily = function(){
    return this.family;
}
console.log(`종: ${Rucy.family}`);
console.log(Rucy.getFamily());

const PPomi = new Dog('black', '뽀미', 4);
console.log(`이름 : ${PPomi.name}`);
console.log(`색상 : ${PPomi.color}`);
console.log(`나이 : ${PPomi.age}`);
// console.log(`종 : ${PPomi.family}`);
console.log('----------');

Dog.prototype.birthday = '20091210';
Dog.prototype.run = function(){
    return this.name + '는 달립니다';
}

const PPory = new Dog('white', '뽀리', 6)
console.log(`이름 : ${PPory.name}`);
console.log(`색상 : ${PPory.color}`);
console.log(`나이 : ${PPory.age}`);
console.log(`생년월일 : ${PPory.birthday}`);
console.log(PPory.run());