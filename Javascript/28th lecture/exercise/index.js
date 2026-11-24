// start

const box = document.createElement('div');
box.classList.add('first-box');
box.style.border = '2px solid red';
box.style.width = '300px';
box.style.height = '300px';
document.body.appendChild(box);


// 1.
const img = document.createElement('img');
img.setAttribute('src', '');
img.style.width = '100px';
img.style.height = '100px';
box.appendChild(img);

//2
const title = document.createElement('h2');
title.innerText = 'Title';
box.appendChild(title);

// 3. 
const link = document.createElement('a');
link.setAttribute('href', 'https://www.google.com');
link.innerText = 'google.com';
box.appendChild(link);

// 4
const smallBox = document.createElement('div');
smallBox.classList.add('small-box');
smallBox.style.border = '1px solid black';
smallBox.style.width = '50px';
smallBox.style.height = '50px';
box.appendChild(smallBox);