const str1 = '안녕하세요. JavaScript!';
console.log(str1);
console.log(str1.length);

console.log(str1.indexOf('J'));
console.log(str1.indexOf('Java'));
console.log(str1.indexOf('java'));
console.log(str1.indexOf('a'));
console.log(str1.lastIndexOf('a'));

console.log(str1.charAt(7));

console.log(str1.includes('Java'));
console.log(str1.includes('java'));

console.log(str1.substring(7));
console.log(str1.substring(7, 11));

console.log(str1.substr(7, 4));

const str2 = '김사과,오렌지,반하나,이메론,배애리,채리';
const students = str2.split(',');
console.log(students);

for(let s in students){
    console.log(s, students[s]);
}

console.log(str1.replace('안녕하세요', 'Hello'));

const str3 = '          JavaScript          ';
console.log(`🎁${str3}`);
console.log(`🎁${str3.trim()}🎁`);