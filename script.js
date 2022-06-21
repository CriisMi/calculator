
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

const clearDisplay = () => {
    display.textContent = '';
}

const backspace = () => {
    display.textContent = display.textContent.slice(0, -1);
}

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display-text');

buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        const originalColor = button.style.backgroundColor;
        e.target.style.background = '#9b9b9b';
        setTimeout(function(){
            e.target.style.backgroundColor = originalColor;  
        }, 100); 

        buttonClicked = button.className;
        switch (buttonClicked) {
            case 'clear':
                clearDisplay();
                break;
            case 'backspace':
                backspace();
                break;
            case 'number':
                display.innerText += e.target.innerText;
                break;
            case 'operator':
                display.innerText += e.target.innerText;
                break;
            case 'equal':
                display.innerText += e.target.innerText;
                break;
            case 'point':
                display.innerText += e.target.innerText;
                break;
        }

    });
    
});
buttons.forEach((button) => {
   
});
