// event loop



// main thread -------------

// open a file, read / write, make a request online, interact with a db

// sync
// get('roles')...
// select('roles)

// get("somethingElse")


// scheduler(() => {
//     //call me later
// })


// Promises are syntactical sugar for callbacks
// pending
// fullfilled > (resolved, rejected)
// new Promise((resolve, reject) => {
//     try {
//         setTimeout(() => {
//             resolve("Everything went welll")
//         }, 4000);
//     } catch {
//         reject("Something went wrong")
//     }
   

// }).then(message => console.log(message))
// .catch(errorMessage => console.log(errorMessage));

// Async/await are syntactical sugar for callbacks

function myPromise(resolve, reject) {
    return new Promise((resolve, reject) => {
        
            setTimeout(() => {
                resolve("fulfilled");
            }, 5000);
 
    }) ;
   
   
}

async function callMyPromise() {
//     myPromise.then(msg => {
//         console.log(msg)
// });
    let message = await myPromise();
    console.log(message)
   
} 


callMyPromise();


const arrowFunction = async () => {
    let message = await myPromise();
    console.log(message)
}