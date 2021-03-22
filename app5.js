'use strict';

function getResult1(a, b) {
    return a + b;
}

function getResult2(a, b) {
    return a - b;
}

function getResult3(a, b) {
    return a * b;
}

function getResult4(a, b) {
    return a / b;
}

function mathOperation(num1, num2, operation) {
    switch (operation) {
        case "+":
            return getResult1(num1, num2);
        case "-":
            return getResult2(num1, num2);
        case "*":
            return getResult3(num1, num2);
        case "/":
            return getResult4(num1, num2);
    }

}
console.log(mathOperation(23, 5, "+"));
console.log(mathOperation(23, 5, "-"));
console.log(mathOperation(23, 5, "*"));
console.log(mathOperation(23, 5, "/"));
