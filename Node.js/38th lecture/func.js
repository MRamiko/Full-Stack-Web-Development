function greet(name) {
    return `Hello, ${name}!`;
}
module.exports = {greet};
function mathoperation(x, y, operation) {
    if (operation === 'add') {
        return x + y;
    }
    if (operation === 'subtract') {
        return x - y;
    }
    if (operation === 'multiply') {
        return x * y;
    }
    if (operation === 'divide') {
        if (y === 0) {
            throw new Error('Cannot divide by zero');
        }
        return x / y;
    }
}
module.exports = {mathoperation};