// const change_btn = document.querySelector(".change-btn");
// const reset_btn = document.querySelector(".reset-btn"); 

// console.log(change_btn, reset_btn);


// change_btn.addEventListener("click", ()=> {
//     document.body.style.backgroundColor = "blue";
// })

// reset_btn.addEventListener("click", ()=> {
//     document.body.style.backgroundColor = "red";
// })

// change_btn.addEventListener("dblclick", ()=> {
//     document.body.style.backgroundColor = "blue";
// })

// reset_btn.addEventListener("dblclick", ()=> {
//     document.body.style.backgroundColor = "red";
// })


// change_btn.addEventListener("mouseover", ()=> {
//     document.body.style.backgroundColor = "blue";
// })

// reset_btn.addEventListener("mouseout", ()=> {
//     document.body.style.backgroundColor = "red";
// })


// window.addEventListener("scroll", ()=> {
//     document.body.style.backgroundColor = "blue";
//     document.body.style.color = "white";
//     document.body.style.fontSize = "30px";
// })


// ! e. event, evt

// const input = document.querySelector("input[type='text']");
// console.log(input);

// input.addEventListener("click", (e)=> {
//     // e.preventDefault();
//     console.log(e);
//     // console.log(e.clientX, e.clientY);
//     console.log(e.target);

//     input = input.value
    
// })


// function sayhello() {
//     console.log('hello');
//     // alert('hello');

//     if(4 > 2) {
//         console.log('true');
//     } else {
//         console.log('false');
//     }
    
// }



// გააკეთეთ მოდალური ფანჯარა ორნაირად: როგორც onclick ფუნქციით და როგორც addEventListener ფუნქციით. ამ შემთხვევაში, მოდალური ფანჯარა უნდა გამოჩნდეს, როდესაც მომხმარებელი დააჭერს ღილაკს.


// addEventListener ფუნქციაში გამოიყენეთ classlist add და remove ფუნქციები, რათა მოდალური ფანჯარა გამოჩნდეს და გაქრეს.

// გააკეთეთ navbar, რომელიც შეიცავს ღილაკს, რომლითაც მომხმარებელი შეძლებს მოდალური ფანჯრის გახსნას, სადაც ავტომატურად გამოჩნდება მენიუ, დაიბლარება background და გამოჩნდება ღილაკი, რომლითაც მომხმარებელი შეძლებს დახურვას. გამოიყენეთ toggle



const btn = document.querySelector(".btn");
console.log(btn);


btn.addEventListener("click", function(e){
    console.log(e.target.textContent = "clicked");
    
})

const input = document.querySelector("input[type='text']");

// input.addEventListener("input", function(event) {

//     console.log(event.target.value);

// })



// ! keyboardEvent - event.key
const search = document.querySelector("input[type='search']")

// search.addEventListener('keydown', (e)=> {
//     // console.log(e.key);


//     // if(e.key === 'enter'){
//     //     console.log('search started');
        
//     // } else {
//     //     console.log('not started');
        
//     // }


//     console.log(e.ctrKey);
//     console.log(e.shiftKey);
//     console.log(e.altKey);
    
    
    
    
// })
// ctr, shift, alt



const form = document.querySelector('#form')

form.addEventListener('submit', function(event){

    event.preventDefault()
    console.log('form submitted');
    
})