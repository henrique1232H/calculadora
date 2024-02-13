let valueNotNumber = [];
let valueNumber = [];
let copyFirstValue;
let numberChoosed = [];
let operatorNumber;
let stringFirstNumber = ``;
let stringSecondNumber = ``;
let historic = [];
let total = []


const responseNumber = document.querySelector(".number");
const responseOperator = document.querySelector(".operator")

export const operator = (value) => {
    operatorNumber = value;

    responseNumber.textContent = ""
    responseOperator.textContent = value

    copyFirstValue = valueNotNumber.map(entries => entries);
    valueNotNumber = [];
}


export const number = (value) => {

    responseOperator.textContent = ""
    valueNotNumber = [...valueNotNumber, value];
    responseNumber.textContent += `${value}`

}


export const result = () => {
    
    
    copyFirstValue.forEach(entries => {
        stringFirstNumber += entries
    })
    
    valueNotNumber.forEach(entries => {
        stringSecondNumber += `${entries}`
    })


    const numberFirst = Number(stringFirstNumber);
    const secondNumber = Number(stringSecondNumber)

    
    numberChoosed = [numberFirst, secondNumber];
    
    
    const result = operatorMatch(operatorNumber);
    responseNumber.textContent = result.toFixed(2)
    
    total = [numberChoosed, operatorNumber ,result];
    historic = [total, ...historic];
    
    console.log(historic)
    
}

export const reset = () => {
    copyFirstValue = [];
    valueNotNumber = [];
    numberChoosed = [];
    stringFirstNumber = ``;
    stringSecondNumber = ``
    valueNumber = [];
    total = [];
    responseNumber.textContent = ""
}


const operatorMatch = (operatorNumber) => {
    
    if(operatorNumber === "+") {
        return numberChoosed[0] + numberChoosed[1];
    }

    if(operatorNumber === "-") {
        return numberChoosed[0] - numberChoosed[1];
    }

    if(operatorNumber === "*") {
        return numberChoosed[0] * numberChoosed[1];
    }

    if(operatorNumber === "÷") {
        return numberChoosed[0] / numberChoosed[1];
    }

}