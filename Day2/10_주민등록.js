// num1 = 받는번호
// num2 = 곱하는번호
let num1 = prompt('주민번호를 입력하세요.');
const num2 = [2,3,4,5,6,7,8,9,2,3,4,5];
let sum=0;
let dev;
let min;
for(let i=0;i<num2.length;i++){
    sum+=(num1.charAt(i) * num2[i]);
}
console.log(`총합: ${sum}`);
dev = sum%11;
console.log(`나머지: ${dev}`);
min = 11-dev;
console.log(`뺀값: ${min}`);

if(min >= 10){
    min%=10;
}
if(min == num1.charAt(12)){
    console.log(min);
    console.log('유효한 주민번호입니다');
}
else{
    console.log('유효하지 않은 주민번호입니다');
}