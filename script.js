function add(num1, num2) {
    result = (num1 + num2);
    return result.toFixed(2)
}

function subtract(num1, num2) {
    result = (num1 - num2);
    return result.toFixed(2)
}

function multiply(num1, num2) {
    result = (num1 * num2);
    return result.toFixed(2)
}

function divide(num1, num2) {

    if (num2 == 0) {
        return "tsk tsk";
    }
    
    result = (num1 / num2);
    return result.toFixed(2)
}

function operate(operator, num1, num2) {
    switch(operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    };
}

function clearDisplay() {
    displayValue.textContent = null;
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
}

function checkInvalid() {
    if (displayValue.textContent == "INVALID") {
        clearDisplay();
        
    }
}

const digitArray = [
    "num1","num2","num3",
    "num4","num5","num6",
    "num7","num8","num9",
    "num0"
];

const operatorArray = [
    "addition","subtraction","multiplication","division"
];

const numberArray = [
    "1","2","3",
    "4","5","6",
    "7","8","9",
    "0"
]

let displayValue = document.querySelector("#display-text");

let num1;
let operator;
let num2;

document.addEventListener("click", (event) => {

    checkInvalid();

    // Logic when the selected button is a digit
    if (digitArray.includes(event.target.id)) {

        displayValue.textContent = displayValue.textContent + event.target.textContent;
    }

    // Logic when the selected button is an operator
    if (operatorArray.includes(event.target.id)) {

        console.log(event.target.textContent)

        if (num1 != undefined && operator != undefined) {
            displayValue.textContent = "INVALID";
            return;
        }

        const stringArray = displayValue.textContent.split("");

        function checkNumbersFirst(displayElement) {
            return numberArray.includes(displayElement);
        }


        if (stringArray.every(checkNumbersFirst) && stringArray.length > 0) {
            num1 = displayValue.textContent;
            Number(num1);
            operator = event.target.textContent;
            displayValue.textContent = displayValue.textContent + event.target.textContent;
            return;
        } else {
            displayValue.textContent = "INVALID";
            return;
        } 
    }

    if (event.target.id == "clear") {
        clearDisplay();
        return;
    }

    if (event.target.id == "equals") {
        
        if (num1 == undefined || operator == undefined) {
            displayValue.textContent = "INVALID";
            return;
        }

        let position = displayValue.textContent.indexOf(operator);
        num2 = displayValue.textContent.substring(position + 1, displayValue.textContent.length)
        
        displayValue.textContent = operate(operator, Number(num1), Number(num2));

        num1 = num2;
        operator = undefined;
        num2 = undefined;
    }

})