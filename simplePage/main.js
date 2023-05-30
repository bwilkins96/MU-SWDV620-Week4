// JavaScript file for simple web page

function onLoad() {
    //alert('Function onLoad has been called!');

    document.getElementById('timestamp').innerHTML = Date();
}

function checkNumber() {
    var number, message;

    number = document.getElementById('smallNumber').value;

    if (isNaN(number) || number < 1 || number > 10) {
        message = 'Number expected to be between 1 and 10';
    } else {
        message = 'Number is good!';
    }

    document.getElementById('numberMessage').innerHTML = message;
}