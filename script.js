const displayContainer = document.querySelector('.display-container');
// let displayText = displayContainer.innerText;
const digitButtons = document.querySelectorAll('.digit');
const decimalButton = document.querySelector('#decimal');
const equalsButton = document.querySelector('button#equals');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('#clear');
const backspaceButton = document.querySelector('#backspace');

const calculator = () => {
    // fn operate which takes 2 operands and 1 operator
    // has to handle addition, subtraction, multiplication, division
    // ***refactor display refresh logic to separate behaviors***
    let [a, b, operator] = ['', '', ''];

    console.log('operator buttons', operatorButtons);
    console.log('digit buttons', digitButtons);

    const setOperand = (e) => {
        // if A and operator already set, B
        // display logic: if input = 0 and A = 0 or input = 0 and B = 0 // regex approach, displayText.replace('^0+(?!$)', ''),
        a && operator ? (
            console.log('OPERAND B', e.target.innerText),
            b += e.target.innerText,
            console.log('a=', a, 'operator=', operator, 'b=', b)
        ) : (
            console.log('OPERAND A', e.target.innerText),
            a += e.target.innerText,
            console.log('a=', a, 'operator=', operator, 'b=', b)
        );
        e.target.innerText === '0' ? displayContainer.innerText = displayContainer.innerText.replace(/^0+/, '') : displayContainer.innerText += e.target.innerText;
    };

    const setOperator = (e) => {
        console.log('Operator selected', e.target.innerText);
        decimalButton.disabled = false;
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
        decimalButton.disabled = a.includes('.') || (operator && b.includes('.'));
        const result = operate(a, operator, b).toFixed(2);
        displayContainer.innerText = result;
        console.log('result', result);
        [a, operator, b] = [result, '', ''];
        console.log('post-calculation:', 'A', a, 'operator', operator, 'B', b);
        return result;
    };

    const clearCalculator = () => {
        a = '';
        operator = '';
        b = '';
        displayContainer.innerText = '';
        console.log('cleared');
    };

    const backspace = () => {
        console.log('backspacing');
        let result;
        a && b ? b = b.slice(0, b.length - 1)
        : a && operator ? operator = ''
        : a && !operator ? a = a.slice(0, a.length - 1) 
        : '';
        displayContainer.innerText = displayContainer.innerText.slice(0, displayContainer.innerText.length - 1);
    };

    [...digitButtons].forEach((button) => {
        button.addEventListener('click', setOperand);
        // this.innerText != "=" || this.innerText != "Clear" ? this.addEventListener('click', selectDigit) : this.addEventListener('click', selectOperator);
    });
    [...operatorButtons].forEach((button) => {
        button.addEventListener('click', setOperator);
    });
    decimalButton.addEventListener('click', (e) => {
        setOperand(e);
        decimalButton.disabled = a.includes('.') || (operator && b.includes('.'));
    });
    equalsButton.addEventListener('click', calculateResult);
    clearButton.addEventListener('click', clearCalculator);
    backspaceButton.addEventListener('click', backspace);
};

calculator();