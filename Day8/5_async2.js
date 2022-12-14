function fetchEgg(chicken) {
    return Promise.resolve(`${chicken} => π₯`);
}

function fryEgg(egg){
    return Promise.resolve(`${egg} => π³`);
}

function getChicken(){
    // return Promise.resolve(`π => π`)
    return Promise.reject(new Error('μΉν¨μ΄ λ€ λ¨μ΄μ‘μ!'));
}

async function makeFriedEgg(){
    let chicken;
    try{
        chicken = await getChicken();
    }catch{
        chicken = 'π₯';
    }
    const egg = await fetchEgg(chicken);
    return fryEgg(egg);
}

makeFriedEgg()
    .then(console.log);


// getChicken()
//     .then((chicken) => {
//         return fetchEgg(chicken)
//     })
//     .then((egg) => fryEgg(egg))
//     .then((friedEgg) => console.log(friedEgg))
//     .catch((error) => console.log(error.name));

// getChicken()
//     .catch(() => 'π₯')
//     .then((chicken) => {
//         return fetchEgg(chicken)
//     })
//     .then((egg) => fryEgg(egg))
//     .then((friedEgg) => console.log(friedEgg));

// μΆμ½ν
// getChicken()
//     .catch(() => 'π₯')
//     .then(fetchEgg)
//     .then(fryEgg)
//     .then(console.log);