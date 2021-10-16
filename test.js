let op;
let nums = document.querySelectorAll('.number');
let num
let output = document.getElementById('calc-display');

let copier = function (element) {
    let clone = element.cloneNode(true);
    return clone;
}

let cleaner = function(input) {
    input.value = "";
    return;
}


let outputHandler = function(oper) {
    switch(oper) {
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

    output.value += num;
}

