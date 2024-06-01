
const add = () => parseFloat(firstNum) + parseFloat(secondNum);
const subtract = () => parseFloat(firstNum) - parseFloat(secondNum);
const multiply = () => parseFloat(firstNum) * parseFloat(secondNum);
const divide = () => parseFloat(firstNum) / parseFloat(secondNum);

let firstNum;
let secondNum;
let operator;

function operate() {
    if (operator === "+") {
        return add()

    } else if (operator === "-") {
        return subtract()

    } else if (operator === "x") {
        return multiply()
         
    } else if (operator === "/") {
        return divide()
    }

}


let screenDisplay = document.querySelector(".screen-display")
let screenDisplayMain = document.querySelector("#screen-display-main")
let screenDisplaySecond = document.querySelector("#screen-display-second")
const buttons = document.querySelectorAll(".buttons")
const operators = document.querySelectorAll(".operator")
const numbers = document.querySelectorAll(".number")
const equals = document.querySelector("#equals")
let isEquals = false


//Numbers buttons

 numbers.forEach(number => {
    number.addEventListener("click", (e) => { 
       
        if (!firstNum) {
        firstNum = e.target.textContent
        screenDisplayMain.textContent = firstNum
        

        } else if (firstNum && !operator) {
            firstNum += e.target.textContent
            screenDisplayMain.textContent = firstNum
        

        } else if (!secondNum && operator) {
            secondNum = e.target.textContent
            screenDisplayMain.textContent = firstNum + operator + secondNum
            

        } else if (secondNum) {
           secondNum += e.target.textContent
            screenDisplayMain.textContent = firstNum + operator + secondNum
            
        }
    })
})

let result 
//Pick an operator (FIX THIS)
operators.forEach(operatorbtn => {
    
     operatorbtn.addEventListener("click", (e) => {
        if (firstNum && !operator) {
        operator = e.target.textContent
        screenDisplayMain.textContent = firstNum + operator
       

        } else if (firstNum && operator && secondNum) {
             
        result = operate().toFixed(2) * 1
        screenDisplaySecond.textContent = firstNum + operator + secondNum 
        operator =  e.target.textContent
        screenDisplayMain.textContent = result + operator
        firstNum = result
        secondNum = ''

        } 
     })
     })



//Get the solution
equals.addEventListener("click", (e) => {
  let equal = e.target.textContent
 result = operate().toFixed(2) * 1
screenDisplaySecond.textContent = firstNum + operator + secondNum + equal 
screenDisplayMain.textContent = result
firstNum = result
secondNum = ''
operator = ''

})


//Decimal
let firstDecimal
let secondDecimal


const decimal = document.querySelector("#decimal")
decimal.addEventListener("click", (e) => {
    
    if (firstNum && !operator && !firstDecimal) {
    firstDecimal = e.target.textContent 
    firstNum += firstDecimal
    screenDisplayMain.textContent = firstNum
 
    } else if (secondNum && operator && !secondDecimal) {
        secondDecimal = e.target.textContent 
        secondNum += secondDecimal
        screenDisplayMain.textContent = firstNum + operator + secondNum
    } 
}


)

//Clear the display
const clear = document.querySelector("#clear")


clear.addEventListener("click", (e) => {
screenDisplayMain.textContent = 0 
screenDisplaySecond.textContent = ""

firstNum = undefined
result = undefined
secondNum = undefined
operator = undefined
secondDecimal = undefined
firstDecimal = undefined


})

//Delete characters

const deleted = document.querySelector("#delete")

deleted.addEventListener("click", (e) => {
    
    //firstNum 
    if (!operator) {
    firstNum = firstNum.slice(0, firstNum.length - 1)
    screenDisplayMain.textContent = firstNum
    console.log(firstNum)
    
    //operator
    } else if (firstNum && operator && !secondNum) {
    operator = operator.slice(1)
    screenDisplayMain.textContent = firstNum + operator 
    
    //secondNum
    } else if (operator && firstNum && secondNum) {
    secondNum = secondNum.slice(0, secondNum.length - 1)
    screenDisplayMain.textContent = firstNum + operator + secondNum
    
    }
    }
)

//Keypresses
document.addEventListener("keydown", (e) => {
    
    switch (e.key) {
        case "Escape": 
        document.getElementById("clear").click();
        break;

        case "Backspace":
        document.getElementById("delete").click();
        break;

        case ".":
        document.getElementById("decimal").click();
        break;

        case "+":
        document.getElementById(`${e.key}`).click()
        break;

        case "-":
        document.getElementById(`${e.key}`).click()
        break;

        case "*":
        document.getElementById(`${e.key}`).click()
        break;

        case "/":
        document.getElementById(`${e.key}`).click()
        break;

        case "Enter":
        document.getElementById("equals").click()
        break;
        
        default: 
        document.getElementById(`${e.key}`).click();
    
    }
}

)
