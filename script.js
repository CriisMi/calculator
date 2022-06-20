const sum = (a, b) => {
    return a + b;
}
const substract = (a, b) => {
    return a - b;
}
const multiply = (a, b) => {
    return a * b;
}
const divide = (a, b) => {
    return a / b;
}
const operate = (operator, a, b) => {
    return operator(a, b);
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert('Hello');
    });
});