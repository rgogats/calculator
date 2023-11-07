const calculator = () => {
    // fn operate which takes 2 operands and 1 operator
    // has to handle addition, subtraction, multiplication, division
    const operate = (operandA, operator, operandB) => {
        return operator == '+' ? operandA + operandB
        : operator == '-' ? operandA + operandB
        : operator == '*' ? operandA * operandB
        : operator == '/' ? operandA / operandB
        : 'Something went wrong';
    };

    // fn to handle calculator display
    // should store display

    // fn clear to clear function? 
};

calculator();