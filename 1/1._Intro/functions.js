// hoisting
addition(1,1);


// hoisting
// test = 1;
// var test;




// this doesnt work for let
// test = 1;
// let test;

// always need to be initialized in declaration
// this is not good
// const example;
// example = "this is how you write const";

const example = "this is how you write const";

// console.log(example);

function addition(a,b){
    return a+b;
}

var sum = addition(2,5);

// console.log(addition(2,5));
// console.log(sum);

function pokeMe(){
    console.log("Meow");
}

// pokeMe();

function approachSomeone(someoneToPoke){
    // console.log("tip tap tip tap");
    // someoneToPoke();
}

approachSomeone(pokeMe);

// function introduce(name){
//     console.log("Hello my name is", name);

// }
// const introduce = function(name){
//     console.log("Hello my name is", name);
// }

// introduce("Aaron");

// const prepareIntroduction = function(introducerFunction, name){
//     console.log("Hmmmmm");
//     introducerFunction(name);
// }
// prepareIntroduction(introduce, "Peter");

// Arrow function where => means this and binds together
const introduce = (name) => {
    console.log("Hello my name is", name);
}

const prepareIntroduction = (introducerFunction, name) => {
    console.log("Hmmmmm");
    introducerFunction(name);
}
// prepareIntroduction(introduce, "Peter");


const aboutMe = (me) => {
    console.log("My hobby is", me.hobby);
}

const me = {
    hobby : "squash"
}
// aboutMe(me);

const ring = () =>{
    console.log("Hello");
}
// const callLater = {
//     toCall: ring
// };

const callLater = {
    toCall:() =>{
        console.log("Hi again")
    }
};

// callLater.toCall();

callLater.toCall();