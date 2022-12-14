function getBanana(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('๐');
        }, 1000);
    })
}

function getApple(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('๐');
        }, 3000);
    })
}

function getOrange(){
    return Promise.reject(new Error('์ค๋ ์ง๋ ์์'));
}

// ๋ฐ๋๋์ ์ฌ๊ณผ๋ฅผ ๋์์ ๊ฐ์ง๊ณ  ์ค๊ธฐ
// ๋ฐ๋๋์ ์ฌ๊ณผ๋ฅผ ๋ฐฐ์ด์ ์ ์ฅํด์ ์ฝ์์ ์ถ๋ ฅ
// ์์ฐจ์ ์ผ๋ก ์ฒ๋ฆฌ -> ์ด 4์ด๊ฐ ๊ฑธ๋ฆผ

// ๋ฐ๋๋์ ์ฌ๊ณผ๋ฅผ ๊ฐ์ด ๊ฐ์ง๊ณ  ์ค๊ธฐ
async function fetchFruits(){
    const banana = await getBanana();
    const apple = await getApple();
    return [banana,apple];
}

fetchFruits()
    .then((fruit) => console.log(fruit));

// getBanana()
//     .then((banana) =>
//     getApple()
//         .then((apple) => [banana, apple]))
//         .then(console.log);





// // Promise.all ๋ณ๋ ฌ์ ์ผ๋ก ํ๋ฒ์ ๋ชจ๋  Promise๋ค์ ์คํ
// Promise.all([getBanana(),getApple()])
//     .then((fruits) => console.log('โ Promise.all: ', fruits));

// // Promise.race: ์ฃผ์ด์ง Promise์ค์ ๊ฐ์ฅ ๋นจ๋ฆฌ ์ํ๋ ๊ฒ์ด ์ถ๋ ฅ
// Promise.race([getBanana(),getApple()])
//     .then((fruit) => console.log('โ Promise.race: ',fruit));

// Promise.all([getBanana(), getApple(), getOrange()])
//     .then((fruits) => console.log('โ Error: ', fruits))
//     .catch(console.log);

// Promise.allSettled([getBanana(),getApple(),getOrange()])
//     .then((fruits) => console.log('โ Promise.allSettle: ', fruits))
//     .catch(console.log);