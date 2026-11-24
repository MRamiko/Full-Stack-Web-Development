// // app.js, index.js , server.js, main.js, etc. are the entry point of the application.

// // no window object in node.js, so we cannot use window object in node.js

// // instead, we use global object in node.js
// console.log('hello world');
// console.log(__filename); // gives the current file path

// console.log(__dirname); // gives the current directory path

// const [a,b,c]= [1,2,3];
// console.log(a+b+c);



// console.log(greet('Alice'));

const {mathoperation} = require('./func.js');
const {operation1, operation2, operation3, operation4} = require('./var.js');




console.log(mathoperation(operation1[0], operation1[1], operation1[2]));
console.log(mathoperation(operation2[0], operation2[1], operation2[2]));
console.log(mathoperation(operation3[0], operation3[1], operation3[2]));
try {
    console.log(mathoperation(operation4[0], operation4[1], operation4[2]));
} catch (error) {
    console.error(error.message);
}
