/*
// Ex. 1
const printHello = () => 
    console.log('Hello World!');


printHello();

// Ex. 2
const getHello = () => "Hello World!"

console.log(getHello());

//Ex. 3
const a = () => 'Hello a!'

console.log(a());

const b = () => 'Hello b!'

console.log(b());

//Ex. 4
const greet = () => 'Haydo!'

const salutation = greet();

console.log(salutation);

//Ex. 5
function hello() {
    return 'Hi!';
  }
  
  let x = hello(); // x will assume the value of function hello which is equal to the string literal 'Hi!', therefore x = 'Hi!'
  
  //Ex. 6
  const echo = param => param;

  console.log(echo('CO2'));

  
  //Ex. 7
  function reply(phrase) {
    return phrase;
  }
  
  let x = reply('How do you do?'); // // x will assume the value of function reply which is equal to the string literal 'How do you do?', therefore x = 'How do you do?' x = 'How do you do?'

  console.log(x);
  

  //Ex. 8
const greet = param => 'Hello ' + param + '!';

console.log(greet('Paulo'));


//EX. 9
const whereIs = name => 'Where is ' + name + '?';
  
  let x = whereIs('Jacky'); // x = where is Jacky?

  console.log(x);
  
//Ex. 10
const hi = name => 'Hi ' + name + '!';
  
  let h1 = hi('Selva');
  let h2 = hi('Pola');
  let x = h1 + ' ' + h2; // x = Hi Selva! Hi Pola!

  console.log(x);
  

  //Ex. 11
  const shout = name =>  name + name
  
  console.log(shout('Fire'));


//Ex. 12
const double = name => name + ' and ' + name;
  
  let x = double('Roy'); // x = Roy and Roy

  console.log(x);


//Ex. 13
const length = param => param.length

console.log(length('Hello'));

// Ex. 14
const toCase = param => param.toLowerCase() + '-' + param.toUpperCase();

console.log(toCase('hello'));

// Ex. 15
const shortcut = (str1, str2) => str1[0] + str2[0];

console.log(shortcut('Peanut', 'Butter'));


// Ex. 16
const firstChar = (str) => str.trim()[0];

console.log(firstChar(' Hello'));


// Ex. 17
const indexOfIgnoreCase = (param1, param2) => {
  let str1 = param1;
  let str2 = param2;
  firstOccurrance = str2[0];
  return str1.indexOf(firstOccurrance);  
}

console.log(indexOfIgnoreCase('bit', 'it'));


// Ex. 18
function flipSign(num){
  if(num > 0){
    return Math.sign(-num) * num
  }

  else{ 
    return Math.sign(+num) * num
  }
}

console.log(flipSign(-6));
*/