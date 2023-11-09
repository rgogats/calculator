const displayContainer = document.querySelector('.display-container');
// let displayText = displayContainer.innerText;
const digitButtons = document.querySelectorAll('.digit');
const decimalButton = document.querySelector('#decimal');
const equalsButton = document.querySelector('button#equals');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('#clear');

const calculator = () => {
    // fn operate which takes 2 operands and 1 operator
    // has to handle addition, subtraction, multiplication, division
    // ***could separate display refresh function and underlying calculations***
    let [a, b, operator] = ['', '', ''];

    console.log('operator buttons', operatorButtons);
    console.log('digit buttons', digitButtons);

    // display user input
    const setOperator = (e) => {
        console.log('Operator selected', e.target.innerText);
        operator = e.target.innerText;
        a && b ? (
            // operator = e.target.innerText,
            a = calculateResult(),
            b = '',
            console.log('a=', a, 'operator=', operator, 'b=', b)
        )
        : (
            // operator = e.target.innerText,
            console.log('a=', a, 'operator=', operator, 'b=', b)
        )
        // handle display refresh if operator already added
        console.log('updated operator display', displayContainer.innerText.replace(/[+\-x÷]/, e.target.innerText));
        displayContainer.innerText.match(/[+\-x÷]/) ? displayContainer.innerText = displayContainer.innerText.replace(/[+\-x÷]/, e.target.innerText)
        : displayContainer.innerText += operator;
        
        return operator;
    } 

    const setOperand = (e) => {
        // needs conditional logic for Operator.  Operator Set ? => add operand B : add to operand A
        a && operator ? (
            console.log('OPERAND B', e.target.innerText),
            // displayText.replace('^0+(?!$)', ''),
            displayContainer.innerText += e.target.innerText,
            b += e.target.innerText,
            console.log('a=', a, 'operator=', operator, 'b=', b)
        ) : (
            console.log('OPERAND A', e.target.innerText),
            // displayText.replace('^0+(?!$)', ''),
            displayContainer.innerText += e.target.innerText,
            a += e.target.innerText,
            console.log('a=', a, 'operator=', operator, 'b=', b)
        );
    };

    const operate = () => {
        // all 3 values must be truthy, not null
        console.log('CALCULATING A:', a, 'operator:', operator, 'B: ', b);
        a = parseFloat(a);
        b = parseFloat(b);
        return (
        //if only operand A, return A
        !b && a ? a 
        : (
        //operate full expression
        a && b && operator &&
        operator == '+' ? a + b
        : operator == '-' ? a - b
        : operator == 'x' ? a * b
        : operator == '÷' ? b === 0 ? 'YASSIFICATION ACTIVATED' : a / b
        : 'Something went wrong'
        ))
    };

    const calculateResult = () => {
        const result = operate(a, operator, b).toFixed(2);
        displayContainer.innerText = result;
        console.log('result', result);
        [a, operator, b] = [result, '', ''];
        console.log('post-calculation:', 'A', a, 'operator', operator, 'B', b);
        return result;
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
    equalsButton.addEventListener('click', calculateResult);
    clearButton.addEventListener('click', clearCalculator);
};

calculator();