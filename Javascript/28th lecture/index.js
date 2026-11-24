// const title = document.querySelector('#title');

// console.log(title);


// title.style.color = 'blue';
// title.style.fontSize = '50px';

// ! classList
// title.classList.add('title');
// title.classList.remove('title');
// title.classList.toggle('title');


// title.classList.add('title-h1');


// ! createElement - ქმნის ახალ ელემენტს
// ! appendChild - ამატებს ახალ ელემენტს მშობელ ელემენტში

const ul_lists  = document.querySelector('ul')
console.log(ul_lists);

const new_li = document.createElement('li');
new_li.innerText = 'water';
ul_lists.appendChild(new_li);


// append - 
// ! prepend - ამატებს ახალ ელემენტს მშობელ ელემენტში, მაგრამ პირველ ადგილას



const title = document.querySelector('#title');
console.log(title);

const new_h5 = document.createElement('h5');
new_h5.innerText = 'bird';

const new_h6 = document.createElement('h6');
new_h6.innerText = 'cat';
// document.body.prepend(new_h5);

// title.append(new_h5);
// title.append(new_h6);

title.prepend(new_h5);
title.prepend(new_h6);


// ! insertBefore - ამატებს ახალ ელემენტს მშობელ ელემენტში, მაგრამ კონკრეტულ ადგილას
const new_ul2 = document.createElement('ul');;
new_li2.innerText = 'water2';

const child_li=document.querySelector('ul li:nth-child(2)');




