//task 1
const answer = 'phone';
const arr1 = ['phone', 'laptop', 'tablet', 'desktop'];

function checkAnswer() {
    if (arr1.includes(answer)) {
        console.log('Yes, the answer is in the array');
    }
}


function checkArr2() {
    const arr2 = ['apple', 'banana', 'orange', 'grape'];
    if (arr2.length > 3) {
        console.log('the first 3 elements are: ', arr2.slice(0, 3));
    } else {
        console.log(arr2);
    }
}

//task 3
function checkPersonAge() {
    const person = {
        name: 'John',
        age: 25,
        city: 'New York'
    };

    if (person.age >= 18) {
        console.log('You are an adult');
    } else {
        console.log('You are a minor');
    }
}

//task 4
function checkProfession() {
    const profession = ['manager', 'developer', 'designer', 'tester'];
    const user4 = {
        name: 'Alice',
        profession: 'manager'
    };

    if (profession.includes(user4.profession)) {
        console.log('Yes, the profession is in the array');
    }
}

function checkUserHobbies() {
    const user5 = {
        name: 'giorgi'
    };

const userhobbies = {
    giorgi: ['reading', 'swimming', 'cycling'],
    ana: ['painting', 'dancing', 'singing'],
    luka: ['hiking', 'photography', 'traveling']
};

if (userhobbies.hasOwnProperty(user5.name)) {
    const hobbies = userhobbies[user5.name];
    console.log('giorgi has these hobbies: ' + hobbies.join(', '));
    hobbies.push('programming', 'gaming');
    console.log(hobbies);
} else {
    console.log('This user does not exist in the hobbies list');
}
}
function checkProduct() {
const product = {
    name: 'iPhone 15',
    price: 850,
    quantity: 5,
    category: 'phone'
};

if (product.quantity > 0) {
    if (product.price > 500) {
        console.log('Product is in stock, quantity: ' + product.quantity + ', price is over 500');
    } else {
        console.log('Product is in stock, quantity: ' + product.quantity + ', price is under 500');
    }
} else {
    console.log('Product is out of stock');
}
}
checkAnswer();
checkArr2();
checkPersonAge();
checkProfession();
checkUserHobbies();
checkProduct();


