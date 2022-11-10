const set = new Set([1, 2, 3, 4, 5]);
console.log(set);

// 사이즈 확인
console.log(set.size);

// 존재하는지 확인
console.log(set.has(2));
console.log(set.has(7));

// 순회
set.forEach((item) => console.log(item));
for(let value of set.values()) {
    console.log(value);
}

// 추가
set.add(6);
console.log(set);
set.add(6);
console.log(set);

// 삭제
set.delete(6);
console.log(set);

// 전부 삭제
set.clear();
console.log(set);

// 오브젝트 세트
const obj1 = { name:'사과', emoji:'🍎', price: 1000 };
const obj2 = { name:'바나나', emoji:'🍌', price: 2000 };
const set2 = new Set([obj1, obj2]);
console.log(set2);

obj1.price = 1500; // true
set2.add(obj1); // false 주소로 저장하기 때문
console.log(set2);

const obj3 = { name:'사과', emoji:'🍎', price: 1000 };
set2.add(obj3);
console.log(set2);

console.log('----------');

// const fruits = ['🍎', '🍌', '🍊', '🍌', '🍍', '🍊', '🍎'];

// function removeDuplication(fruits){
//     const set = new Set();    
//     for(let i=0;i<fruits.length;i++){
//         set.add(fruits[i]);
//     }
//     return set;
// }
// console.log(removeDuplication(fruits));

const fruits = ['🍎', '🍌', '🍊', '🍌', '🍍', '🍊', '🍎'];

function removeDuplication(fruits){ 
    return [...new Set(fruits)];
}
console.log(removeDuplication(fruits));


console.log('----------');

const set3 = new Set([1, 2, 3, 4, 5]);
const set4 = new Set([1, 2, 3]);

function findIntersection(set3, set4){
    return new Set([...set3].filter((item) => set4.has(item)));
}
console.log(findIntersection(set3, set4));