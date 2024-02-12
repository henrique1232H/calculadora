let valueNotNumber = [];
let valueNumber = [];
let copyFirstValue;
let total = [];
let operatorNumber;
let stringFirstNumber = ``;
let stringSecondNumber = ``;


export const operator = (value) => {
    console.log(value)
    operatorNumber = value;


    copyFirstValue = valueNotNumber.map(entries => entries);
    valueNotNumber = [];
}


export const number = (value) => {

    valueNotNumber = [...valueNotNumber, value];
    console.log(valueNotNumber)

}


export const result = () => {
    
    
    copyFirstValue.forEach(entries => {
        stringFirstNumber += `${entries}`
    })
    
    valueNotNumber.forEach(entries => {
        stringSecondNumber += `${entries}`
    })

    console.log(stringFirstNumber)
    console.log(stringSecondNumber)
    
    const numberFirst = Number(stringFirstNumber);
    const secondNumber = Number(stringSecondNumber)

    
    total = [numberFirst, secondNumber];
    
    const result = operatorMatch(operatorNumber)
    console.log(result);

    
}

export const reset = () => {
    copyFirstValue = [];
    valueNotNumber = [];
    total = [];
    stringFirstNumber = ``;
    stringSecondNumber = ``

    valueNumber = [];
}


const operatorMatch = (operatorNumber) => {
    
    if(operatorNumber === "+") {
        return total[0] + total[1]
    }

    if(operatorNumber === "-") {
        return total[0] - total[1]
    }

    if(operatorNumber === "*") {
        return total[0] * total[1]
    }

    if(operatorNumber === "÷") {
        return total[0] / total[1]
    }

}