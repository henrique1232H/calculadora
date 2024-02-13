let valueNotNumber = [];
let arrayValueNumber = [];
let copyValue;
let operatorNumber;
let stringNumber = ``;
let NumberValue
let valueString = []
let historic = [];
let total = []
let storeValues = []
let teste = []


const responseNumber = document.querySelector(".number");
const responseOperator = document.querySelector(".operator")

export const operator = (value) => {

    operatorNumber = value;

    responseNumber.textContent = ""
    responseOperator.textContent = value

    storeValues = [ ...storeValues , NumberValue, operatorNumber];

    


    arrayValueNumber = [];
    valueNotNumber = []
}


export const number = (value) => {

    stringNumber = ""
    responseOperator.textContent = ""
    
    valueNotNumber = [...valueNotNumber, value];
    valueNotNumber.forEach(entries => {
        NumberValue = Number(stringNumber += entries)
    })


    
    arrayValueNumber = [NumberValue]
    console.log(arrayValueNumber)

    responseNumber.textContent += value;



}


export const result = () => {

    stringNumber = "";

    arrayValueNumber.forEach(entries => {
        NumberValue = Number(stringNumber += entries)
    })

    storeValues = [...storeValues, NumberValue];
    console.log(storeValues)

    
    // storeValues.forEach(entries => {
    //     console.log(entries++)
    // })



    
    // const result = operatorMatch(operatorNumber);
    // responseNumber.textContent = result.toFixed(2)
    
    // total = [numberChoosed, operatorNumber , result];
    // historic = [total, ...historic];
    
    // console.log(historic)
    
}

// export const reset = () => {
//     copyValue = [];
//     valueNotNumber = [];
//     stringNumber = ``;
//     stringSecondNumber = ``
//     valueNumber = [];
//     total = [];
//     responseNumber.textContent = "";
// }


// const operatorMatch = (operatorNumber) => {
    
//     if(operatorNumber === "+") {
//         return numberChoosed[0] + numberChoosed[1];
//     }

//     if(operatorNumber === "-") {
//         return numberChoosed[0] - numberChoosed[1];
//     }

//     if(operatorNumber === "*") {
//         return numberChoosed[0] * numberChoosed[1];
//     }

//     if(operatorNumber === "÷") {
//         return numberChoosed[0] / numberChoosed[1];
//     }

// }