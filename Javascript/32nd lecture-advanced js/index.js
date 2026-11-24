// ! callback function

// function repeat(x){
//     x() 
// }

// function number(){
//     console.log(20 + 30);
    
// }

// // number();


// repeat(number);


// // console.log(repeat(34));



// function add(x, y){
//     return x + y;
// }

// function multiply(x, y){
//     return x * y;
// }

// function calculator(x, y, callback){
//     return callback(x, y);
// }


// console.log(calculator(5, 10, multiply));

// console.log(calculator(5, 10, add));


// addEventListener('click', function() {
//     console.log('Button clicked!');
// });


// ! higher order function

// function sumNumbers(x, y){
//     return function(z){
//         return (x+y) * z;
//     }
// }


// const num1 = sumNumbers(30, 10);

// console.log(num1(4));


// console.log(sumNumbers(30, 10)(2));



function sayHello(name, callback){
    console.log(`Hello, ${name}!`);
    callback();
}

function sayGoodbye(){
    console.log('Goodbye!');
}

sayHello('Alice', sayGoodbye);