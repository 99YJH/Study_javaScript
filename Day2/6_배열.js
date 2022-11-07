const  arr = [1, 'apple', '김사과', 20, '서울', '잠자기']
//const는 바로 초기화를 해줘야 한다
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
arr[5] = '먹기';
console.log(arr[5]);
console.log(arr.length);
// undefined 는 마지막에 있으면  길이를 포함하지 않는다.
arr[7] = 'A형';
console.log(arr[6]);
console.log(arr[7]);
console.log(arr.length);
// 가운데에 undefined가 있으면 길이를 undefined도 포함한다.
console.log('---------------------');
for(let i=0; i<arr.length;i++){
    console.log(arr[i]);
}
console.log('---------------------');
// const  arr = [1, 'apple', '김사과', 20, '서울', '잠자기']
arr.push('여자'); // 뒤에 추가해준다.
console.log(arr);
arr.shift(); // 가장 앞에있는 것을 삭제
console.log(arr);
const sub = ['isfp','천칭자리']
const arr_concat = arr.concat(sub);
console.log(arr_concat);
const arr_join = arr.join(':사과:')
console.log(arr_join);
//join() : 배열 요소 사이에 원하는 문자를 삽입
// join시 String으로 변한다.
console.log(typeof(arr_join));
const arr2 = ['a','z', 'c','f','r'];
arr2.sort();
console.log(arr2);
arr2.reverse(); // 내림차순 두번 해야하낟.
console.log(arr2);
console.log('---------------------');
// const  arr = [1, 'apple', '김사과', 20, '서울', '잠자기']
for(let i in arr){
    console.log(`i: ${i}, arr[i] : ${arr[i]}`)
    //in 은 insdex로 0부터 대입하는것을 의미한다고 생각하자!
}
console.log('---------------------');
for(let i of arr){
    console.log(`i: ${i}`)
}
console.log('---------------------');
arr.forEach(function(v, i, arr){
    console.log(`v: ${v}, i: ${i}, arr: ${arr}`)
});