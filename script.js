const aDisplay = document.querySelector('.a-display');
const bDisplay = document.querySelector('.b-display');
const operationDisplay = document.querySelector('.operation-display');
const buttons = document.querySelectorAll('button');
const equalsButton = document.querySelector('button#equals');

const calculator = () => {
    // fn operate which takes 2 operands and 1 operator
    // has to handle addition, subtraction, multiplication, division
    let a;
    let b;
    let operator;
    
    const operate = () => {
        // all 3 values must be truthy, not null
        return a && b && c &&
        operator == '+' ? a + b
        : operator == '-' ? a + b
        : operator == '*' ? a * b
        : operator == '/' ? a / b
        : 'Something went wrong';
    };

    // display user input
    const selectOperation = (e) => {
        console.log('set operation to', e.target.innerText);
        operatorDisplay.innerText = e.target.innerText;
        operator = e.target.innerText;
        return e.operation;
    } 

    const selectDigit = (e) => {
        console.log('selected digit', e.target.innerText);
        // needs conditional logic for operation.  Operation Set ? => add operand B : add to operand A
        aDisplay.innerText += e.target.innerText;
    };
    [...buttons].forEach(() => {
        this.innerText != "=" || this.innerText != "Clear" ? this.addEventListener('click', selectDigit) : this.addEventListener('click', selectOperation);
    });

    console.log(equalsButton);
    equalsButton.addEventListener('click', operate);

    // store display variable
};

calculator();