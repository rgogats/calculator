const displayContainer = document.querySelector('.display-container');
// const aDisplay = document.querySelector('.a-display');
// const bDisplay = document.querySelector('.b-display');
// const operatorDisplay = document.querySelector('.operator-display');
const digitButtons = document.querySelectorAll('.digit');
const decimalButton = document.querySelector('#decimal');
const equalsButton = document.querySelector('button#equals');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('#clear');

const calculator = () => {
    // fn operate which takes 2 operands and 1 operator
    // has to handle addition, subtraction, multiplication, division
    let a = '';
    let b = '';
    let operator = '';

    console.log('operator buttons', operatorButtons);
    console.log('digit buttons', digitButtons);

    // display user input
    const setOperator = (e) => {
        console.log('Operator selected', e.target.innerText);
        displayContainer.innerText = e.target.innerText;
        operator = e.target.innerText;
        console.log('a=', a, 'operator=', operator, 'b=', b);
        return e.operator;
    } 

    const setOperand = (e) => {
        // needs conditional logic for Operator.  Operator Set ? => add operand B : add to operand A
        a && operator ? (
            console.log('OPERAND B', e.target.innerText),
            displayContainer.innerText += e.target.innerText,
            b += e.target.innerText,
            console.log('a=', a, 'operator=', operator, 'b=', b)
        ) : (
            console.log('OPERAND A', e.target.innerText),
            displayContainer.innerText += e.target.innerText,
            a += e.target.innerText,
            console.log('a=', a, 'operator=', operator, 'b=', b)
        );
    };

    const operate = () => {
        // all 3 values must be truthy, not null
        console.log('CALCULATING A:', a, ' ', operator, 'B: ', b);
        a = parseFloat(a);
        b = parseFloat(b);
        return (a && b && operator &&
        operator == '+' ? a + b
        : operator == '-' ? a + b
        : operator == 'x' ? a * b
        : operator == '÷' ? a / b
        : 'Something went wrong');
    };

    const displayResult = () => {
        const result = operate(a, operator, b);
        console.log(a, operator, b, '=', result);
        displayContainer.innerText = result;
    };

    const clearCalculator = () => {
        console.log('clearing');
        a = '';
        operator = '';
        b = '';
        displayContainer.innerText = '';

        console.log('a', a, operator, b);
    };

    [...digitButtons].forEach((button) => {
        button.addEventListener('click', setOperand);
        // this.innerText != "=" || this.innerText != "Clear" ? this.addEventListener('click', selectDigit) : this.addEventListener('click', selectOperator);
    });
    [...operatorButtons].forEach((button) => {
        button.addEventListener('click', setOperator);
    });
    decimalButton.addEventListener('click', setOperand);
    equalsButton.addEventListener('click', displayResult);
    clearButton.addEventListener('click', clearCalculator);
};

calculator();