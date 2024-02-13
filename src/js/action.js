let valueNotNumber = [];
let valueNumber = [];
let copyFirstValue;
let total = [];
let operatorNumber;
let stringFirstNumber = ``;
let stringSecondNumber = ``;

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

    
    total = [numberFirst, secondNumber];
    
    const result = operatorMatch(operatorNumber)
    responseNumber.textContent = result.toFixed(2)

    console.log(result)

    
}

export const reset = () => {
    copyFirstValue = [];
    valueNotNumber = [];
    total = [];
    stringFirstNumber = ``;
    stringSecondNumber = ``
    valueNumber = [];
    responseNumber.textContent = ""
}


const operatorMatch = (operatorNumber) => {
    
    if(operatorNumber === "+") {
        return total[0] + total[1];
    }

    if(operatorNumber === "-") {
        return total[0] - total[1];
    }

    if(operatorNumber === "*") {
        return total[0] * total[1];
    }

    if(operatorNumber === "÷") {
        return total[0] / total[1];
    }

}