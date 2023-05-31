// SWDV 620: Web Applications
// Function that returns an array of the multiples of a number, num, with an optional length

function multiplesArray(num, length = 10) {
    let multiples = [];

    for (let i = 1; i <= length; i++) {
        let mult = num * i;
        multiples.push(mult);
    }

    return multiples;
}

let test = multiplesArray(4, 5);  // [ 4, 8, 12, 16, 20 ]
console.log(test);