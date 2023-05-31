// SWDV 620: Web Applications

/* Login script functions */

function login(username) {
    let message = 'Hello ' + username + '!';
    document.getElementById('welcomeMsg').innerText = message; 
    createObjList();
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
    // Changes background color on input
    let inputEle =  document.getElementById('color');
    let color = parseColor(inputEle.value);

    if (color != '') {
        document.body.style.backgroundColor = color;
        inputEle.style.color = color; 
    }
}

function reset() {
    // Resets background on click
    document.body.style.backgroundColor = 'white';
    
    let inputEle =  document.getElementById('color');
    inputEle.style.color = 'black'; 
    inputEle.value = '';
}

/* JavaScript object list functions */

function getRow(obj, example) {
    // Returns a row containing an object name and example
    let row = document.createElement('tr');

    let obj_data = document.createElement('td');
    obj_data.innerText = obj;
    let example_data = document.createElement('td');
    example_data.innerText = JSON.stringify(example);

    row.appendChild(obj_data);
    row.appendChild(example_data);

    return row;
}

function addRow(obj, example) {
    let table = document.getElementById('objectList');
    table.appendChild(getRow(obj, example));
}

function createObjList() {
    let objArr =
    [
        ['Array', [1, 2, 3, 4]], ['String', 'hello world!'], ['Number', 54.25],
        ['Also Number', 54], ['Boolean', true], ['Object', {"value": 25}] 
    ];

    for (i in objArr) {
        let rowArr = objArr[i];
        addRow(rowArr[0], rowArr[1]);
    }
}