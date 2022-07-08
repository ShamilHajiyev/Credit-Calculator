var loanInput = document.getElementById('loan-input');
var loan = document.getElementById('loan');
var timeInput = document.getElementById('time-input');
var time = document.getElementById('time');
var percentInput = document.getElementById('percent-input');
var percent = document.getElementById('percent');

var monthly = document.getElementById('monthly');
var total = document.getElementById('total');

loan.innerHTML = loanInput.value + ' AZN';
time.innerHTML = timeInput.value + ' ay';
percent.innerHTML = percentInput.value + ' %';

function Show(value, input, suffix) {
    value.innerHTML = input.value + ' ' + suffix;
    monthly.innerHTML = Math.round(loanInput.value * percentInput.value / 1200 / (1 - (Math.pow(1 / (1 + percentInput.value / 1200), timeInput.value))) * 100) / 100 + ' AZN';
    total.innerHTML = (Math.round(loanInput.value * percentInput.value / 1200 / (1 - (Math.pow(1 / (1 + percentInput.value / 1200), timeInput.value))) * 100) / 100 * timeInput.value).toFixed(2) + ' AZN';
}

function Calculate() {
    Show(loan, loanInput, 'AZN')
    Show(time, timeInput, 'ay')
    Show(percent, percentInput, '%')
}

loanInput.oninput = function () { Calculate() };
timeInput.oninput = function () { Calculate() };
percentInput.oninput = function () { Calculate() };

addEventListener(onload, Show(loan, loanInput, 'AZN'))