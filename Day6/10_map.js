const map = new Map([
    ['key1', '🍎'],
    ['key2', '🍌']
]);
console.log(map);

// 사이즈 확인
console.log(map.size);

// 존재하는지 확인
console.log(map.has('key1'));
console.log(map.has('key6'));

// 순회
map.forEach((value, key) => console.log(key, value));

// 찾기
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key3'));

obj = {'key1':'🍎', 'key2':'🍌'};
console.log(obj['key1']); // 🍎
console.log(map['key1']); // undefined

// 추가
map.set('key3', '🍊');
console.log(map);

// 삭제
map.delete('key3');
console.log(map);

// 전부삭제
map.clear();
console.log(map);

console.log('----------');

const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

function findIntersection(set1, set2){    
    return
}
console.log(findIntersection(set1, set2));