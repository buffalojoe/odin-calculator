function add(num1, num2) {
    return (num1 + num2);
}

function subtract(num1, num2) {
    return (num1 - num2);
}

function multiply(num1, num2) {
    return (num1 * num2);
}

function divide(num1, num2) {
    return (num1 / num2);
}

function operate(operator, num1, num2) {
    switch(operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
    };
}


let displayValue = document.querySelector(".display p");
let number1 = undefined;
let number2 = undefined;

function checkForValidFirstNumber(number, operator) {

    console.log(number);

    let numberCheck = Number(number);

}

function clearContent() {
    displayValue.textContent = '';
}

function checkInvalid() {

    
    if (displayValue.textContent == "INVALID") {
        clearContent();
    } else {
        return;
    }
}

function onlyDigits(str) {
    return /^\d+$/.test(str);
}

num1.addEventListener("click", (event) => {
    checkInvalid();
    displayValue.textContent = displayValue.textContent + " " + event.target.textContent;
})
num2.addEventListener("click", (event) => {
    checkInvalid();
    displayValue.textContent = displayValue.textContent + " " + event.target.textContent;
})
num3.addEventListener("click", (event) => {
    checkInvalid();   
    displayValue.textContent = displayValue.textContent + " " + event.target.textContent;
})
num4.addEventListener("click", (event) => {
    checkInvalid();   
    displayValue.textContent = displayValue.textContent + " " + event.target.textContent;
})
num5.addEventListener("click", (event) => {
    checkInvalid();   
    displayValue.textContent = displayValue.textContent + " " + event.target.textContent;
})
num6.addEventListener("click", (event) => {
    checkInvalid();   
    displayValue.textContent = displayValue.textContent + " " + event.target.textContent;
})
num7.addEventListener("click", (event) => {
    checkInvalid();   
    displayValue.textContent = displayValue.textContent + " " + event.target.textContent;
})
num8.addEventListener("click", (event) => {
    checkInvalid();   
    displayValue.textContent = displayValue.textContent + " " + event.target.textContent;
})
num9.addEventListener("click", (event) => {
    checkInvalid();   
    displayValue.textContent = displayValue.textContent + " " + event.target.textContent;
})
num0.addEventListener("click", (event) => {
    checkInvalid();   
    displayValue.textContent = displayValue.textContent + " " + event.target.textContent;
})

addition.addEventListener("click", (event) => {
    checkInvalid();
    checkForValidFirstNumber(displayValue.textContent, event.target.textContent);
    
})
subtraction.addEventListener("click", (event) => {
    checkInvalid();   
    displayValue.textContent = displayValue.textContent + " " + event.target.textContent;
})
multiplication.addEventListener("click", (event) => {
    checkInvalid();
    displayValue.textContent = displayValue.textContent + " " + event.target.textContent;
})
division.addEventListener("click", (event) => {
    checkInvalid();   
    displayValue.textContent = displayValue.textContent + " " + event.target.textContent;
})

equals.addEventListener("click", (event) => {   
    checkInvalid();
})

clear.addEventListener("click", (event) => {   
    displayValue.textContent = '';
})