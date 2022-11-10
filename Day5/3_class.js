// 객체를 만드는 템플릿
// 1. 생성자 함수
// 2. 클래스
//    static: 정적 프로퍼티
class Fruit {
    // eng = 'noname';
    static count_fruits = 0;
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }
    display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    };

    static makeBanana() {
        // 클래스 레벨 메서드에서는 this를 참조할 수 없음
        return new Fruit('banana', '🍌');
    }
}
// apple은 Fruit 클래스의 인스턴스
const apple = new Fruit('apple', '🍎');
// orange는 Fruit 클래스의 인스턴스
const orange = new Fruit('oarnge', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();

const banana = Fruit.makeBanana();
console.log(banana);
console.log(Fruit.count_fruits);

console.log('----------');

class Dog {
    #name;
    #color;
    constructor(name, color){
        this.#name=name;
        this.#color=color;
    }
    get info() {
        return `이름: ${this.#name}, 색상: ${this.#color}`;
    }
    set info(value) {
        console.log('set', value);
        this.#name = value;
    }
    run = () => {
        console.log(`${this.#color} 색상의 강아지 ${this.#name}는 달립니다`);
    }
    #eat = () => {
        console.log(`${this.#name}는 먹습니다`);
    }
}

const Rucy = new Dog('루시', 'white');
console.log(Rucy);
// SyntaxError: Private field '#name' must be declared in an enclosing class
// Rucy.#name = '개똥이'; // #field는 외부에서 접근이 불가능함
// console.log(Rucy);
Rucy.run();
// Rucy.eat();
// console.log(Rucy.info());
console.log(Rucy.name);
// console.log(Rucy.info());
console.log(Rucy.info);
Rucy.info = '뽀미';
console.log(Rucy.info);