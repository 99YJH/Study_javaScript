const map = new Map([
    ['key1', 'π'],
    ['key2', 'π']
]);
console.log(map);

// μ¬μ΄μ¦ νμΈ
console.log(map.size);

// μ‘΄μ¬νλμ§ νμΈ
console.log(map.has('key1'));
console.log(map.has('key6'));

// μν
map.forEach((value, key) => console.log(key, value));

// μ°ΎκΈ°
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key3'));

obj = {'key1':'π', 'key2':'π'};
console.log(obj['key1']); // π
console.log(map['key1']); // undefined

// μΆκ°
map.set('key3', 'π');
console.log(map);

// μ­μ 
map.delete('key3');
console.log(map);

// μ λΆμ­μ 
map.clear();
console.log(map);

console.log('----------');

const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

function findIntersection(set1, set2){    
    return
}
console.log(findIntersection(set1, set2));