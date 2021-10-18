let ops = document.querySelectorAll('.operator');
let nums = document.querySelectorAll('.number');
let num
let output = document.getElementById('calc-display');

let cleaner = function(input) {
    input.value = "";

}

let outputHandler = function(operand) {
    let thisValue = output.value += operand;
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

