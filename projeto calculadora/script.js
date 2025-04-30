let display = document.getElementById('display');
let currentImput = '';
let currentOperator = '';



function appendNumber(number) {
    currentImput += number;
    display.textContent = currentImput;
    
}

function appendOperator(Operator) {
    if(currentImput === '' && Operator !== '.') return;
    currentImput += Operator;
    display.textContent = currentImput;

}

function calculate () {
   try {
        let result = eval(currentImput);
        if(!Number.isInteger(result)) {
            result = result.toFixed(2);
    }

    currentImput = result;
    display.textContent = currentImput;
   } catch {
    display.textContent = 'erro';
    currentImput = '';

   }
}

function clearDisplay() {
    currentImput = '';
    display.textContent = currentImput;
}
