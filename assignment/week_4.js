// SWDV 620: Web Applications

// Login script functions
function promptLogin() {
    username = prompt('Please enter your username:');
    password = prompt('Welcome ' + username + ', please enter your password:');
    return [username, password];
}

function onLoad() {
    let [username, password] = promptLogin();
    message = 'Hello ' + username + '!';
    document.getElementById('welcomeMsg').innerText = message; 
}

// Event handler functions
function setColor() {
    inputEle =  document.getElementById('color');
    color = inputEle.value.toLowerCase();

    if (color != '') {
        document.body.style.backgroundColor = color;
        inputEle.style.color = color; 
    }
}

function reset() {
    document.body.style.backgroundColor = 'white';
    
    inputEle =  document.getElementById('color');
    inputEle.style.color = 'black'; 
    inputEle.value = '';
}