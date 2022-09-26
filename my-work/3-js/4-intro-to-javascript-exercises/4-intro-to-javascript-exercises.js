/*
// Ex. 1
function midRange(arr = [3,9,1]) {
    return (Math.max(...arr) + Math.min(...arr)) / 2
}

console.log(midRange());

// Ex. 2
function area_circle(radius) {
let area_circle;
let pie = 3.14
area_circle = pie * radius * radius
console.log(area_circle);
}

area_circle(5);

//Ex.3 
function add(num) {
    return Number.parseInt(num) + Number.parseInt(num)
}

console.log(add('78'));

// Ex. 4
function nand(val1, val2) {
    if (val1 && val2) {
        return false;
    } 
    
    else {
        return true;
    }
}

console.log(nand());

//Ex. 5
function nor(val1, val2) {
    if(val1 === undefined && val2 === undefined) {
        return true;
    }

    else {
        return false;
    }
}

console.log(nor('Hello', 'World!'));

//Ex. 6
function xor(val1, val2) {
    if(val1 !== val2) {
        return true;
    }

    else {
        return false;
    }
}

console.log(xor('', 'World!'));

//Ex. 7
function equals(val1, val2) {
    if(val1 === val2) {
        return true;
    }

    else {
        return false;
    }
}

console.log(equals(3, 4));


// Ex. 8
function equals(val1, val2, val3) {
    if(val1 === val2 && val3) {
        return true;
    }

    else {
        return false;
    }
}

console.log(equals(1,2,1));


// Ex. 9
function isThreeDigit(num) {
    if(num >= 100 && num < 1000) {
        return true;
    }

    else {
        return false;
    }
}

console.log(isThreeDigit(99));


// Ex. 10
function isEven(num1, num2) {
    if(num1 % num2 == 0) {
        return true;
    }

    else {
        return false;
    }
}

console.log(isEven(8,4));


// Ex. 11
function fizzBuzz(num) {
    const FIZZ = 'Fizz';
    const BUZZ = 'Buzz';
    const FIZZ_BUZZ = 'Fizz Buzz'
    for(let i = 1; i <= 100; i++) {
        if(num % 3 === 0 && num % 5 === 0) {
            return FIZZ_BUZZ;
        }

        else if(num % 3 === 0) {
            return FIZZ;
        }

        else if(num % 5 === 0) {
            return BUZZ;
        }

        else {
            return i;
        }
    }
}

console.log(fizzBuzz());


// Ex. 12
function toArray(val1, val2) {
    let arrey = [val1, val2];
    return arrey;
}

console.log(toArray(5,9));
*/

// Ex. 13
function setFirstElement([], num) {
    return []
}