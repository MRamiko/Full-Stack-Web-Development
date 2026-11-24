// app.js, index.js, server.js, or main.js


// no window - Globals
// ! __dirname - სრული დამისამართება, მიმდინარე დირექტორია
// ! __filename - სრული ფაილის დასახელება, მიმდინარე ფაილი
// ! require - ფუნქცია, რომელიც გამოიყენება სხვა ფაილების ჩასატვირთად
// ! module - ობიექტი, რომელიც შეიცავს მიმდინარე მოდულის ინფორმაციას

console.log('hello world');

// console.log(__dirname);
// console.log(__filename);
// console.log(module);

// const [a, b] = [1, 2];
// console.log(a + b);


const { user1, user2 } = require('./variables/var.js');
const { greet } = require('./variables/func.js');
console.log(user1, user2);
greet(user1);
greet(user2);
