const func1 = () => console.log('안녕하세요 JavaScript!');
func1();

const func2 = (x, y) => console.log(`두 수의 합: ${x + y}`);
func2(10,3);

const func3 = (x) => x * x;
const result = func3(4);
console.log(`4의 제곱: ${result}`);

const func4 = (x, y) => {
    let sum = 0;
    for(let i=x; i<=y; i++){
        sum += i;
    }
    return sum;
}
const total = func4(1, 100);
console.log(total);

const age = 15;
const isAdult = (age > 18) ? () => console.log('성인입니다') : () => console.log('미성년입니다');
isAdult();