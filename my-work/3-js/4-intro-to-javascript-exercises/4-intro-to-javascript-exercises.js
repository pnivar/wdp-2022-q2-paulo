/*
// Ex. 1
function midRange(arr = [3,9,1]) {
    return (Math.max(...arr) + Math.min(...arr)) / 2
}

console.log(midRange());

// Ex. 2
function area_circle(radius) {
let area_circle;
let pie = Math.PI
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
    return val1 === val2;       
}

console.log(equals(3, 4));


// Ex. 8
function equals(val1, val2, val3) {
    return val1 === val2 === val3
}

console.log(equals(1,2,1));


// Ex. 9
function isThreeDigit(num) {
    return num >= 100 && num < 1000;
}

console.log(isThreeDigit(99));


// Ex. 10
function isEven(num1, num2) {
    return num1 % num2 === 0
}

console.log(isEven(8,4));


// Ex. 11
function fizzBuzz() {
    for(let i = 1; i <= 100; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('Fizz Buzz');
        }

        else if(i % 3 === 0) {
            console.log('Fizz');
        }

        else if(i % 5 === 0) {
            console.log('Buzz');
        }

        else {
            console.log(i);
        }
    }
}

fizzBuzz();


// Ex. 12
function toArray(val1, val2) {
    let array = [val1, val2];
    return array;
}

console.log(toArray(5,9));

// Ex. 13
    function setFirstElement(toArray,aVarr){
        toArray[0] = aVarr;
    }

    console.log(setFirstElement(4,2,3,1));

    // Ex. 13
function setFirstElement(someArr, someVar){
    someArr.unshift(someVar);
    return someArr;
}
console.log( setFirstElement([1,2,3,4,5], 8) );

// Ex. 14
function sort(someArr){
    someArr.sort();
    return someArr;
}

console.log(sort([9,3,4,1,2,8,6,7,5]));
*/

// Ex. 15
function rotateArr(arr, numOfRotations){
    for (let i = 0; i < numOfRotations; i++) {
        arr.push(arr.shift())
        console.log(arr);
    }
}

rotateArr([9,8,7,6,5,4,3,2,1], 9);


function countDown(num){
    if(num === 0) return;
    console.log(num)
    countDown(num - 1)
}

countDown(10);