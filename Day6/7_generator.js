function* multipleGenerator(){
    try{
        for(let i=0; i<10; i++){
            console.log(i);
            yield i**2;
        }
    }catch(error){
        console.log(error);
    }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);
next = multiple.next();
console.log(next.value, next.done);
next = multiple.next();
console.log(next.value, next.done);
next = multiple.next();
console.log(next.value, next.done);
next = multiple.next();
console.log(next.value, next.done);
next = multiple.next();
console.log(next.value, next.done);