/*
// Ex. 1
const midRange = arr => (Math.max(...arr) + Math.min(...arr)) / 2;

console.log(midRange([3,9,1]));

// Ex. 2
const areaOfCircle = radius => Math.PI * Math.pow(radius, 2);

console.log(areaOfCircle(5));

//Ex.3 
let add = num => Number.parseInt(num) + Number.parseInt(num);


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

// Ex. 15 rotate
const rotateArr = (array, rotations) => {
    for (let i = 0; i < rotations; i++)
    array.push(array.shift());
    const rotatedArray = array;
    return rotatedArray;
}
console.log(rotateArr([9,8,7,6,5,4,3,2,1],1)); // Array will rotate counter clock wise by the amount of rotation specified by argument[1].

// Ex. 15 reverse
const reverseArr = arr => arr.reverse();

console.log(rotateArr([9,8,7,6,5,4,3,2,1])); // Array will be reverse in the opposite direction.


function countDown(num){
    if(num === 0) return;
    console.log(num)
    countDown(num - 1)
}

countDown(10);


// Ex. 16
function add (array, item) {
    if (array.includes(item)) {
        return array;
    }
        array.push(item);
        return array;
}
console.log(add([1, 2, 3, 4, 5], 6));


// Ex. 17
function concatUp (array1, array2) {
    
        if (array1.length === array2.length) {
        array1.push(...array2);
        return array1;
        } else if (array1.length > array2.length) {
        array1.unshift(...array2);
        return array1;
        } else if (array1.length < array2.length) {
        array2.unshift(...array1);
        return array2;
        } else {
        console.log('Please check your input');
        }
}    

console.log(concatUp([1, 2, 3, 4],[6, 7, 8, 9, 10]));

// Ex. 18
function halve(array) {
    let arrayCopy;
    arrayCopy = array.filter(array => array % 2 !== 0);
    return arrayCopy
}

console.log(halve([1,2,3,4,5,6,7,8,9,10]));


// Ex. 19
function list(array){
   
    let prevToLastItems = array.slice(0,-1).join(', ');
    let lastItem = array.slice(-1).join();
    if(array.length === 0){
        return '""';
   } return `"${prevToLastItems} and ${lastItem}."`;
   
}
    

console.log(list(["Huey", "Dewey", "Louie"]));


// Ex. 20
function hello(param){
    if(param){
        return 'Hello ' + param;
    } return 'Hello World';
}

console.log(hello('Paulo'));

*/
// Ex. 21
function factorial(num){
let answer = num ** 2;
return answer;
}

console.log(factorial(3));

/*
// Ex. 22
function spaces(num){

}


// Ex. 23
function lcm(){

}


// Ex. 24
function isPrime(){

}


// Ex. 25
window.onload = function(){
    let name = document.querySelector("#text-box");
    let answer = document.querySelector(".answer");
    let submit = document.querySelector(".submit");

    submit.onclick = function greeting(name){

    function yourName(name){
        if(name){
          answer = 'You name is: ' + name;
          return answer;
        } answer = 'did you type your name?'
        return answer;
    }

    console.log(yourName(name));
}
}
*/