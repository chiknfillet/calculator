function add(numOne, numTwo) {
    return numOne + numTwo
}

function subtract(numOne, numTwo) {
    return numOne - numTwo
}

function multiply(numOne, numTwo) {
    return numOne * numTwo
}

function divide(numOne, numTwo) {
    return numOne / numTwo
}

function operate() {
    let content = display.textContent
    let numTwo = Number(content.slice( content.indexOf(operand) + 1 ))
    let result 
    
    switch(operand) {
        case "+":
            result = add(numOne, numTwo)
            break;
        case "-":
            result = subtract(numOne, numTwo)
            break;
        case "x":
            result = multiply(numOne, numTwo)
            break;
        case "/":
            result = divide(numOne, numTwo)
            break;
        default:
            break;
    }

    display.textContent = result
}

let operand = ""
let numOne 

const display = document.querySelector(".display")

const digitButtons = document.querySelectorAll(".digit")
digitButtons.forEach(element => {
    element.addEventListener("click", () => {
        display.textContent += element.textContent
    })
});

const operatorButtons = document.querySelectorAll(".operator")
operatorButtons.forEach(element => {
    element.addEventListener("click", () => {
        numOne = Number(display.textContent)
        display.textContent += element.textContent
        operand = element.textContent
    })
});

document.querySelector(".clear").addEventListener("click", () => {
    display.textContent = ""
})

document.querySelector(".equal").addEventListener("click", () => {
    operate()
})