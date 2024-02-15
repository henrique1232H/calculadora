let valueNotNumber = [];
let arrayValueNumber = [];
let operatorNumber;
let stringNumber = ``;
let NumberValue;
let storeValues = []
let operatorArray = []

const responseNumber = document.querySelector(".number");
const responseOperator = document.querySelector(".operator")
const responseResult = document.querySelector(".resultNumber")


export const operator = (value) => {

    operatorNumber = value;

    responseNumber.textContent = ""
    responseOperator.textContent = value

    storeValues = [NumberValue, operatorNumber,  ...storeValues];

    
    
    
    arrayValueNumber = [];
    valueNotNumber = []
}


export const number = (value) => {
    
    stringNumber = ""
    responseOperator.textContent = ""
    responseResult.textContent = ""
    
    valueNotNumber = [...valueNotNumber, value];
    valueNotNumber.forEach(entries => {
        NumberValue = Number(stringNumber += entries)
    })

    operatorArray = [operatorNumber, ...operatorArray]
    
    arrayValueNumber = [NumberValue]

    responseNumber.textContent += value;



}


export const result = () => {

    stringNumber = "";

    arrayValueNumber.forEach(entries => {
        NumberValue = Number(stringNumber += entries)
    })

    const operatorArrayWithoutUndefined = operatorArray.filter(entries => entries !== undefined);

    storeValues = [...storeValues, NumberValue];

    const result = operatorMatch(storeValues[1]);

    responseNumber.textContent = "";
    responseResult.textContent = result;

    console.log(storeValues);

    reset()
}

const agrup = () => {
    let array = []
    for(let i = 0; i < storeValues.length; i += 3) {
        array = [storeValues.slice(i, i + 3), ...array]
    }
    return array
}

export const reset = () => {
    responseNumber.textContent = "";


    storeValues = []
    operatorArray = []
    arrayValueNumber = []
    valueNotNumber = []
}


const operatorMatch = (operatorNumber) => {
    
    if(operatorNumber === "+") {
        return storeValues[0] + storeValues[2];
    }

    if(operatorNumber === "-") {
        return storeValues[0] - storeValues[2];
    }

    if(operatorNumber === "*") {
        return storeValues[0] * storeValues[2];
    }

    if(operatorNumber === "÷") {
        return storeValues[0] / storeValues[2];
    }

}