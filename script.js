var display = document.getElementById('display');
var button = document.getElementsByClassName('button');

var operand1 = 0;
var operand2 = null;
var operator = null;

function isOperator(value){
    return value =='+' || value == '-' || value == '*' || value == '/';
}

function clickhandler(event){

    var value = this.getAttribute('data-value');
    var text  = display.textContent.trim();
    if(isOperator(value))
    {
        operator = value;
        operand1 = parseFloat(text);
        display.textContent="";
    } else if(value == 'AC'){
        display.textContent ="";
        operand1 = 0;
        operand2 = null;
        operator = null;
    }
     else if(value == '='){
        operand2 = parseFloat(text);
        var result = eval(operand1+ ' '+ operator+ ' '+operand2);
        if(result)
        {
            display.textContent = result;
            operand1 = result;
            operand2 = null;
            operator = null;
        }
    }
     else {
        display.textContent += value;
    }
}

for ( let i = 0 ; i<button.length; i++ ){
    button[i].addEventListener('click',clickhandler);
}