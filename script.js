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
    
    switch(operand) {
        case "+":
            numOne = add(numOne, numTwo)
            break;
        case "-":
            numOne = subtract(numOne, numTwo)
            break;
        case "x":
            numOne = multiply(numOne, numTwo)
            break;
        case "/":
            numOne = divide(numOne, numTwo)
            break;
        default:
            break;
    }
    
    operand = ""
    display.textContent = numOne
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
        if (operand === "") {
            numOne = Number(display.textContent)
        } else {
            operate()
        }
        
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