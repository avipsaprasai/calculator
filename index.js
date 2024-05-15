document.addEventListener("DOMContentLoaded", function() {
    const operationDisplay = document.querySelector('.operation');
    const typedDisplay = document.querySelector('.typed');
    const clearButton = document.querySelector('.clear');
    const backspaceButton = document.querySelector('.backspace');
    const percentageButton = document.querySelector('.percentage');
    const divideButton = document.querySelector('.divide');
    const multiplyButton = document.querySelector('.multiply');
    const subtractButton = document.querySelector('.subtract');
    const addButton = document.querySelector('.add');
    const equalsButton = document.querySelector('.equals');
    const numberButtons = document.querySelectorAll('.buttons button:not(.clear):not(.backspace):not(.percentage):not(.divide):not(.multiply):not(.subtract):not(.add):not(.equals)');
    
    let currentOperation = '';
    let currentTyped = '';
    
    function updateDisplay() {
        operationDisplay.textContent = currentOperation;
        typedDisplay.textContent = currentTyped;
    }
    
    function clear() {
        currentOperation = '';
        currentTyped = '';
        updateDisplay();
    }
    
    function backspace() {
        currentTyped = currentTyped.slice(0, -1);
        updateDisplay();
    }
    
    function percentage() {
        currentTyped = (parseFloat(currentTyped) / 100).toString();
        updateDisplay();
    }
    
    function appendNumber(number) {
        currentTyped += number;
        updateDisplay();
    }
    
    function appendOperator(operator) {
        if (currentTyped !== '') {
            currentOperation += currentTyped;
            currentTyped = '';
        }
        currentOperation += operator;
        updateDisplay();
    }
    
    function calculate() {
        currentOperation += currentTyped;
        try {
            currentTyped = eval(currentOperation).toString();
            currentOperation = '';
            updateDisplay();
        } catch (error) {
            currentTyped = 'Error';
            currentOperation = '';
            updateDisplay();
        }
    }
    
    clearButton.addEventListener('click', clear);
    backspaceButton.addEventListener('click', backspace);
    percentageButton.addEventListener('click', percentage);
    divideButton.addEventListener('click', () => appendOperator('/'));
    multiplyButton.addEventListener('click', () => appendOperator('*'));
    subtractButton.addEventListener('click', () => appendOperator('-'));
    addButton.addEventListener('click', () => appendOperator('+'));
    equalsButton.addEventListener('click', calculate);
    
    numberButtons.forEach(button => {
        button.addEventListener('click', () => appendNumber(button.textContent));
    });
});
