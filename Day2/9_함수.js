function func1(){
    console.log('func1() 호출');
}

const func2 = function(){
    console.log('func2() 호출');
}

func1();
func2();

function func3(num){
    console.log(`전달받은 매개변수의 값: ${num}`);
}

func3(10);
func3('apple');
func3(true);

function func4(start, end){
    let sum = 0;
    for(let i=start; i<=end; i++){
        sum += i;
    }
    console.log(`${start}부터 ${end}까지의 총합: ${sum}`);
}

func4(1,100);
func4(1);

function func5(){
    return '🎁';
}

func6();
console.log(func6());
const presents = func6();
console.log(presents);

console.log('----------');

function func6(x1, ...x2){
    console.log(`x1의 값: ${x1}`);
    console.log(`x2의 값: ${x2}`);
    for(i in x2){
        console.log(`i의 값: ${i}, x2[i]: ${x2[i]}`);
    }
}

func6(30, 50, 60, 90, 100, 20, 40);
func6(30, 50, 60);

console.log('----------');

function func7(num1=1, num2=2){
    console.log(`num1의 값: ${num1}, num2의 값: ${num2}`);
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
}

func7(2, 8);
func7();

// 보너스!
(function(){
    console.log('함수를 만들고 바로 호출합니다!');
})()