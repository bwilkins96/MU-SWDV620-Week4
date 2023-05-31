// SWDV 620: Web Applications

/* Login script functions */

function login(username) {
    let message = 'Hello ' + username + '!';
    document.getElementById('welcomeMsg').innerText = message; 
}

function promptLogin() {
    let username, password

    // Prompts for a username and password until they are given
    while (!username || !password) {
        while (!username) {
            username = prompt('Please enter your username:');
        }

        password = prompt('Welcome ' + username + ', please enter your password:');
        if (!password) { 
            username = null;
        }
    }
    
    login(username);
}

/* Event handler functions */

function parseColor(val) {
    // Lowercases and removes spaces from val
    val = val.toLowerCase();
    let words = val.split(' ');
    return words.join('');
}

function setColor() {
    let inputEle =  document.getElementById('color');
    let color = parseColor(inputEle.value);

    if (color != '') {
        document.body.style.backgroundColor = color;
        inputEle.style.color = color; 
    }
}

function reset() {
    document.body.style.backgroundColor = 'white';
    
    let inputEle =  document.getElementById('color');
    inputEle.style.color = 'black'; 
    inputEle.value = '';
}