let output = document.getElementById('calc-display');
let ops = document.querySelectorAll('.operator');
let equals = document.getElementById('result')

let cleaner = function(input) { 
    input.value = "";
    ops.forEach(elem => {
        elem.className = 'off';
    })

}

let a = 0;
let b = 0;

let inputHandlerA = function() {
    let num1;
    let inputA = function() {
        let num = output.value
        output.value = '';
        return num;
}; 
    num1 = inputA()
    return num1;
};

ops.forEach(i => {
    i.addEventListener('click', function() {
       a = inputHandlerA(); 
    })
})

let inputHandlerB = function() {
    let num2;
    let inputB = function() {
        let num = output.value;
        output.value = '';
        return num;
    }
    num2 = inputB();
    return num2;
};

let calculate = function (op) {
    let result;
    b = inputHandlerB();
    switch(op) {
        case '+':
            result = +a + +b;
            break;
        case '-':
            result = +a - +b;
            break;
        case '*': 
            result = +a * +b;
            break;
        case '/':
            result = +a / +b;
            break;
    }
    return result;
}

equals.addEventListener('click', function(){
    let activeOp = document.querySelector('.on');
    output.value = calculate(activeOp.value);
    ops.forEach(elem => {
        elem.className = 'off';
    })
    
})


let outputHandler = function(operand) {
    let thisValue = output.value += operand;
     
}



let toggleState = function (item) {
    item.classList.remove('operator')
    if (item.className == 'off') {
        ops.forEach(el => {
            el.className = 'off';
            item.className = 'on';
        })
    }
    else {
        item.className = 'off'
    }
}



/*
let result;
b = inputHandlerB();
console.log(b)
result = +a + +b;
output.value = result;
*/

/*let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let multiply = document.getElementById('multiply');
let split = document.getElementById('split');
*/

/* 
Идея для калькулятора:

при нажатии на оператор в переменную a записывается значение output.value,после записи значения output.value =''
После записи второго числа в поле ввода и нажатия кнопки = то второе число записывается в переменную b, после 
этого переменные a и b считаются на знак c this.value и результат вычислений записывается в переменную result
в ввиде строки и после выводится output.value = 'result'
*/