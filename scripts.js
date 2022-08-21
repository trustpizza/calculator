// Variable Declaration
const numbers = document.querySelectorAll('.num')
const delBtn = document.querySelector('.delete')
const clearBtn = document.querySelector('.clear')
const display = document.querySelector('.display')
const addBtn = document.querySelector('.add')
const minusBtn = document.querySelector('.subtract')
const multiplyBtn = document.querySelector('.multiply')
const divideBtn = document.querySelector('.divide')
const equalBtn = document.querySelector('.equalsign')

let firstNumber;
let secondNumber;
let operator;

// Calculations
function addition(a,b) {
    return a + b;
}

function subtraction(a,b) {
    return a - b;
}

function multiplication(a,b) {
    return a * b;
}

function division(a,b) {
    return a / b;
}

function operate(operator, a, b) {
    return operator(a, b);
    firstNumber = '';
    secondNumber = '';
}

// Event Listener for Numbers
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', () => {
        const numberContent = parseFloat(numbers[i].textContent)
        display.textContent += `${numberContent}`
    })
}
// Event Listener for other buttons
addBtn.addEventListener('click', () => {
    operator = addition;
    firstNumber = parseFloat(display.textContent);
    display.textContent = '';
})

minusBtn.addEventListener('click', () => {
    firstNumber = parseFloat(display.textContent);
    display.textContent = ''
    operator = subtraction;
})

multiplyBtn.addEventListener('click', () => {
    firstNumber = parseFloat(display.textContent);
    display.textContent = ''
    operator = multiplication;
})

divideBtn.addEventListener('click', () => {
    firstNumber = parseFloat(display.textContent);
    display.textContent = ''
    operator = division;
})

clearBtn.addEventListener('click', () => {
    display.textContent = '';
})

delBtn.addEventListener('click', () => {
    display.textContent = `${display.textContent.split('').slice(0,-1).join('')}`;
})

equalBtn.addEventListener('click', () => {
    secondNumber = parseFloat(display.textContent);
    display.textContent = `${operate(operator, firstNumber, secondNumber)}`;
})