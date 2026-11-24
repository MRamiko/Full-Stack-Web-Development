//! filter
const nums= [23,45,59,100];
console.log(nums);
const  result= nums.filter((number)=>{
    return number>50;
});
console.log(result);



const users= [
    {name: "John", age: 25},
    {name: "Jane", age: 30},
    {name: "Bob", age: 20},
    {name: "Alice", age: 35}
];
const adultNames=users
    .filter(user=>user.age>=25)
    .map(user=>user.name);

    console.log(adultNames);

const nums2= [1,2,3,4,5,6,7,8,9,10];
const total = nums2.reduce((acc, num)=>{
    return acc+num;
}, 0);
console.log(total);


const cart=[
    {name: "Apple", price: 1.99, quantity: 2},
    {name: "Banana", price: 0.99, quantity: 3},
    {name: "Orange", price: 2.99, quantity: 1}
];

const totalprice= cart.reduce((acc,item)=>{
    return acc+item.price*item.quantity;
},0);

console.log(totalprice);


const totalquantity= cart.reduce((acc,item)=>{
    return acc+item.quantity;
},0);
console.log(totalquantity);






