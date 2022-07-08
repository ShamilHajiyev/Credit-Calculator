var loanInput = document.getElementById('loan-input');
var loan = document.getElementById('loan');
var timeInput = document.getElementById('time-input');
var time = document.getElementById('time');
var percentInput = document.getElementById('percent-input');
var percent = document.getElementById('percent');

var monthly;
var total;

loanInput.oninput = function ShowLoan() {
    loan.innerHTML = loanInput.value;
}

timeInput.oninput = function ShowTime() {
    time.innerHTML = timeInput.value;
}

percentInput.oninput = function ShowPercent() {
    percent.innerHTML = percentInput.value;
}