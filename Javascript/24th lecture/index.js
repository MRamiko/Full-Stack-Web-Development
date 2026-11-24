// task 1
const arrppl=[
    {
        name: "John",
        age: 25,
        city: "New York"
    },
    {
        name: "Jane",
        age: 30,
        city: "Los Angeles"
    },
    {
        name: "Mike",
        age: 18,
        city: "Atlanta"
    },
    {
        name: "Gogola",
        age: 17,
        city: "Milan"
    },
    {
        name: "Gela",
        age: 30,
        city: "Los Angeles"
    }
]
for(let i=0; i<arrppl.length; i++){
    if(arrppl[i].age>=18){
        console.log(arrppl[i].name + " is an adult.");
    }
}
// task 2
const students = [
    { name: "John", grade: [85, 90, 78] },
    { name: "Jane", grade: [92, 88, 95] },
    { name: "Mike", grade: [70, 75, 80] },
    { name: "Gogola", grade: [95, 92, 88] },
    { name: "Gela", grade: [80, 85, 90] }
];
const above85counter=0;
const failedcounter=0;
for (let i = 0; i < students.length; i++) {
    const student = students[i];
    let totalgrade = 0;
    for (let j = 0; j < student.grade.length; j++) {
        totalgrade += student.grade[j];
    }
    const averagegrade = totalgrade / student.grade.length;
    if(averagegrade < 51){
        console.log(student.name + " has failed with an average grade of " + averagegrade);
        failedcounter++;
    }
    if(averagegrade >= 85){
        above85counter++;
    }
}
console.log("Number of students with an average grade above 85: " + above85counter);
console.log("Number of students who failed: " + failedcounter);
console.log("Number of students who passed: " + (students.length - failedcounter));

// task 3
const numbers = [12, 45, 67, 23, 89, 34, 56, 78, 12, 45, 90, 33];

let highest = numbers[0];
let lowest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > highest) {
        highest = numbers[i];
    }
    if (numbers[i] < lowest) {
        lowest = numbers[i];
    }
}

console.log("Highest number: " + highest);
console.log("Lowest number: " + lowest); 

//task 4
let evenSum = 0;
for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 === 0) {
        evenSum += numbers[i];
    }

}

console.log("Sum of even numbers: " + evenSum);
//task 5

const repeatingOnce = [];
const nonRepeating = [];
for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];
    let count = 0;

    for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] === current) {
            count++;
        }
    }

    if (count > 1) {
        if (!repeatingOnce.includes(current)) {
            repeatingOnce.push(current);
        }
    } else {
        nonRepeating.push(current);
    }
}

let nonRepeatingSum = 0;

for (let i = 0; i < nonRepeating.length; i++) {
    nonRepeatingSum += nonRepeating[i];
}

console.log("Repeating numbers (each shown once): " + repeatingOnce);
console.log("Sum of non-repeating numbers: " + nonRepeatingSum);

//task 6

const arr1 = [1, 2, 3, 4, 5, 2, 3];
const arr2 = [3, 4, 5, 6, 7, 3];

const commonElements = [];
for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !commonElements.includes(arr1[i])) {
        commonElements.push(arr1[i]);
    }
}
console.log("Common elements: " + commonElements);

const uniqueCommonElements = [];
for (let i = 0; i < commonElements.length; i++) {
    const el = commonElements[i];
    let countInArr1 = 0;
    let countInArr2 = 0;
    for (let j = 0; j < arr1.length; j++) {
        if (arr1[j] === el) {
            countInArr1++;
        }
    }
    for (let j = 0; j < arr2.length; j++) {
        if (arr2[j] === el) {
            countInArr2++;
        }
    }
    if (countInArr1 === 1 && countInArr2 === 1) {
        uniqueCommonElements.push(el);
    }
}
console.log("Common elements that don't repeat in either array: " + uniqueCommonElements);
