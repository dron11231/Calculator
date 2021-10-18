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

let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let multiply = document.getElementById('multiply');
let split = document.getElementById('split');

let deactivator = function(notActive1, notActive2, notActive3){
    notActive1.className = "off";
    notActive2.className = "off";
    notActive3.className = "off";
}

function toggleState(item){
    if(item.className == "on") {
       item.className="off";
       
    } else {
       item.className="on";
       switch (item) {
           case plus:
               deactivator(minus, multiply, split);
               break;
            case minus:
               deactivator(plus, multiply, split);
               break;
            case multiply:
               deactivator(minus, plus, split);
               break;
            case split:
               deactivator(minus, multiply, plus);
               break;
       }
    };
    let itemsOn = document.querySelectorAll('.on');
    
 }

