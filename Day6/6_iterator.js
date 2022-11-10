const arr = [1, 2, 3, 4, 5];
console.log(arr.values());
console.log(arr.entries());
console.log(arr.keys());

const iterator = arr.values();
while(true){
    const item = iterator.next();
    if(item.done) break;
    console.log(item.value);
}

for(let item of arr){
    console.log(item);
}

for(let item of arr.values()){
    console.log(item);
}