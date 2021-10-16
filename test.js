let ops = document.querySelectorAll('.operator');
let nums = document.querySelectorAll('.number');
let num
let output = document.getElementById('calc-display');

let copier = function (element) {
    let clone = element.cloneNode(true);
    return clone;
}

let cleaner = function(input) {
    input.value = "";

}


let numbers = [];

let outputHandler = function(operand) {
    switch(operand) {
        case '0':
            num = '0';
            break;
        case '1':
            num = '1'
            break;
        case '2':
            num = '2'
            break;
        case '3':
            num = '3'
            break;
        case '4':
            num = '4'
            break;
        case '5':
            num = '5'
            break;
        case '6':
            num = '6'
            break;
        case '7':
            num = '7'
            break;
        case '8':
            num = '8'
            break;
        case '9':
            num = '9'
            break;
        case ',': 
            num = ','
            break;
    }
    let thisValue = output.value += num;
    
}

let plus = document.querySelector('.op-plus');
let minus = document.querySelector('.op-minus');
let multiply = document.querySelector('.op-multiply');
let split = document.querySelector('.op-split');

let deactivator = function(notActive1, notActive2, notActive3){
    notActive1.id = 'inactive';
    notActive2.id = 'inactive';
    notActive3.id = 'inactive';
}

let activityChecker = function(elem) {
    elem = document.getElementById('active');
    switch (elem) {
        case plus:
            plus.id = 'active'
            deactivator(minus, multiply, split);
            break;
        case minus:
            minus.id = 'active'
            deactivator(plus, multiply, split)
            break;
        case multiply:
            multiply.id = 'active'
            deactivator(minus, plus, split) 
            break;
        case split: 
            split.id = 'active'
            deactivator(minus, multiply, plus)
            break;
    }
    return;
}


