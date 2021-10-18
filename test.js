let nums = document.querySelectorAll('.number');
let num
let output = document.getElementById('calc-display');
let ops = document.querySelectorAll('.operator');

let cleaner = function(input) {
    input.value = "";
    ops.forEach(elem => {
        elem.classList.remove('on');
    })

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
    console.log(ops);
}
