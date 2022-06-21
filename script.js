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
const display = document.querySelector('.display-text');


buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        const originalColor = button.style.backgroundColor;
        e.target.style.background = '#9b9b9b';
        setTimeout(function(){
            e.target.style.backgroundColor = originalColor;  // Change the color back to the original
          }, 100); 
    });
    
});
buttons.forEach((button) => {
   
});
