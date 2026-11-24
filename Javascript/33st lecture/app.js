// const colors = ["red", "green", "blue", "yellow", "purple"];

// colors.forEach(color)

// function color (color_index) {
//     console.log(color_index);
// }

// colors.forEach(color => {
//     console.log(color);
// });

const numbers = [1, 2, 3, 4, 5];
let sum=0;
numbers.forEach(number => {
    sum += number;
});
console.log(sum);

const students= [
    {name: "Alice", score: 90},
    {name: "Bob", score: 85},
    {name: "Charlie", score: 95},
    {name: "David", score: 80},
    {name: "Eve", score: 88}
]

students.forEach(student => {
    if(student.score >= 90) {
        console.log(student.name + " has a high score of " + student.score);
    }
});

students.forEach(student => {
    const {name, score} = student;
    if(score >= 90) {
        console.log(`${name} has a high score of ${score}`);
    }
});

const colorList = document.querySelector("#color-list");
const colors = ["red", "green", "blue", "yellow", "purple"];
colors.forEach(color => {
    const li = document.createElement("li");
    li.textContent = color;
    colorList.appendChild(li);
});



