// let num1 = Number(prompt('입력받을 숫자의 개수를 입력하세요'))
// let num2

// for(let i=0;i<num1;i++){
//     num2[i] = Number(prompt(`${(i+1)}번째 숫자를 입력하세요.`))
    
// }
// console.log(num2[0])

const cnt = Number(prompt('입력받을 숫자의 개수를 입력하세요'));

let idx = 0;
let arr = [];

while(idx < cnt){
    arr[idx] = Number(prompt(`${idx+1}번째 숫자를 입력하세요`));
    idx++;
}

arr.sort(); // 같은 자리수 정렬(문자열 정렬)

for(let i in arr){
    console.log(arr[i]);
}