const buttons = document.querySelectorAll("button");
const numInput1 = document.querySelector("#num1");
const numInput2 = document.querySelector("#num2");
buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        try {
            const [value1, value2] = tryParseInputToFloat(numInput1.value, numInput2.value);
            document.querySelector("#result").textContent = compute(value1, value2, button.textContent).toString();
        } catch (error) {
            alert(error.message);
        }
    });
});
function tryParseInputToFloat(...values) {
    const numbers = [];
    values.forEach((value)=>{
        const parsedValue = parseFloat(value);
        if (Number.isNaN(parsedValue)) throw new Error("Invalid input value, valid number required.");
        numbers.push(parsedValue);
    });
    return numbers;
}
function compute(value1, value2, operator) {
    switch(operator){
        case "+":
            return value1 + value2;
        case "-":
            return value1 - value2;
        case "*":
            return value1 * value2;
        case "/":
            return value1 / value2;
    }
    throw new Error("Unimplemented operator: " + operator);
}

//# sourceMappingURL=index.6b86260e.js.map
