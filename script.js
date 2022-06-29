/* to do 
 - accept float numbs
 - give error if diveded by 0
 - resize display text to fit large numbers
 - add keyboard support */



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

const signToWord = (operator) => {
    switch(operator) {
        case '+':
            return sum;
            break;
        case '-':
            return substract;
            break;
        case 'x':
            return multiply;
            break;
        default:
            return divide;
    }
}

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display-text');

let prevOperator = '=';
let operation = 'sum';
let firstNum = 0;
let secondNum = 0;

buttons.forEach((button) => {
    button.addEventListener('click', function(e) {

        //change background color when button is clicked
        const originalColor = button.style.backgroundColor;
        e.target.style.background = '#9b9b9b';
        setTimeout(function(){
            e.target.style.backgroundColor = originalColor;  
        }, 100); 

        

        buttonClicked = button.className;
        

        const log = () => {
            console.log(prevOperator);
            console.log(operation);
            console.log(firstNum);
            console.log(secondNum);
        }
        log();

        switch (buttonClicked) {
            case 'clear':
                clearDisplay();
                prevOperator = '=';
                firstNum = 0;
                secondNum = 0;
                break;

            case 'backspace':
                backspace();
                break;

            case 'number':
                if (prevOperator == '=') {
                    firstNum = firstNum * 10 + parseInt(e.target.innerText);
                } else {
                    secondNum = secondNum * 10 + parseInt(e.target.innerText);
                }

                /* //display error and clear if divide by 0
                if (prevOperator == '/' && secondNum == 0) {
                    display.innerText = 'ERROR';
                    setTimeout(function(){
                        clearDisplay();
                        prevOperator = '=';
                        firstNum = 0;
                        secondNum = 0; 
                    }, 10000); 
                } */s
                display.innerText += e.target.innerText;
                break;

            case 'operator':
                if (prevOperator == '=') {
                    display.innerText += e.target.innerText;
                } else {
                    operation = signToWord(prevOperator);
                    display.innerText = operate(operation, firstNum, secondNum) + e.target.innerText;
                    firstNum = parseInt(display.innerText);
                    secondNum = 0;
                }
                prevOperator = e.target.innerText;
                break;

            case 'equal':
                operation = signToWord(prevOperator);
                display.innerText = operate(operation, firstNum, secondNum);
                prevOperator = '=';
                firstNum = operate(operation, firstNum, secondNum);
                secondNum = 0;
                break;
            case 'point':
                display.innerText += e.target.innerText;
                break;
        }


    });
    
});

