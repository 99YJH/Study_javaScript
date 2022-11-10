class Animal {
    constructor(color) {
        this.color = color;
    }
    eat() {
        console.log('먹는다');
    }
    sleep() {
        console.log('잔다');
    }
}

class Dog extends Animal {
    play() {
        console.log('놉니다!');
    }
}

class Cat extends Animal {
    constructor(color,name){
        super(color);
        this.name=name;
    }
    // 오버라이딩
    eat(){
        console.log('맛있게 먹는다!');
    }
}

const Rucy = new Dog('white');
console.log(Rucy);
Rucy.eat();
Rucy.sleep();
Rucy.play();

const PPory = new Cat('black', '뽀리');
console.log(PPory);
PPory.eat();

console.log('----------');

class Counter {
    #value;
    constructor(value){
        if(isNaN(value) || value < 0){
            this.#value=0;
        }else{
        this.#value = value;
        }
    }
    get value(){
        return this.#value;
    }
    increment(){
        this.#value++;        
    }    
}

const counter = new Counter(0);
counter.increment();
counter.increment();
console.log(counter.value);

console.log('----------');

class Employee {
    #name;
    #job;    
    constructor(name='없음', job='없음'){
        this.#name=name;
        this.#job=job;        
    }
    get name(){
        console.log(`이름: ${this.#name}`);
    }
    get job(){
        console.log(`직업: ${this.#job}`);
    }
}

class FullTimeEmployee extends Employee{    
    #pay;
    constructor(name='없음', job='없음', pay=0){
        super(name, job);        
        this.#pay=pay;
    }   
    get Pay(){        
        console.log(`급여: ${(this.#pay)*20000}원`);
    }
}

class PartTimeEmployee extends Employee{
    #pay;
    constructor(name='없음', job='없음', pay=0){
        super(name, job);        
        this.#pay=pay;
    }   
    get Pay(){        
        console.log(`급여: ${(this.#pay)*10000}원`);
    }
}

const Kim = new FullTimeEmployee('김사과', '개발자', 160);
const Ban = new PartTimeEmployee('반하나', '디자이너', 100);

Kim.name;
Kim.job;
Kim.Pay;
Ban.name;
Ban.job;
Ban.Pay;
