let op;
let nums = document.querySelectorAll('.number');
let num
let output = document.getElementById('calc-display');
let paragraph = document.createElement('p');

let copier = function (element) {
    let clone = element.cloneNode(true);
    return clone;
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
    }

    let pClone = copier(paragraph);
    pClone.innerHTML = num;
    output.appendChild(pClone);
    let clones = [];
    clones.push(pClone)
    console.log(clones);
    return clones;
}

