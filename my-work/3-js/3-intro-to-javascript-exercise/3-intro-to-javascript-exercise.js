/*
// Ex. 1
function printHello() {
    console.log('Hello World!')
}

printHello();

// Ex. 2
function getHello() {
    return "Hello World!"
}

getHello();

console.log(getHello());

//Ex. 3
function a() {
    return "Hello a!"
}

console.log(a());

function b() {
    return "Hello b!"
}

console.log(b());

//Ex. 4
function greet() {
    return "Haydo!"
}

const salutation = greet();

console.log(salutation);

//Ex. 5
function hello() {
    return 'Hi!';
  }
  
  let x = hello(); //x = Hi!

  //Ex. 6
  function echo(param1 = 'Greta ', param2 = 'CO2') {
    return param1 + param2
  }

  console.log(echo());


  //Ex. 7
  function reply(phrase) {
    return phrase;
  }
  
  let x = reply('How do you do?'); // x = How do you do?

  console.log(x);
  

  //Ex. 8

  function greet(name) {
    return 'Hello ' + name + '!'
  }

console.log(greet('Ada'));


//EX. 9
function whereIs(name) {
    return 'Where is ' + name + '?';
  }
  
  let x = whereIs('Jacky'); // x = where is Jacky?

  console.log(x);
  


//Ex. 10
function hi(name) {
    return 'Hi ' + name + '!';
  }
  
  let h1 = hi('Selva');
  let h2 = hi('Pola');
  let x = h1 + ' ' + h2; // x = Hi Selva! Hi Pola!

  console.log(x);
  

  //Ex. 11
  function shout(name) {
    return name + name
  }

  console.log(shout('Ada'));


//Ex. 12
function double(name) {
    return name + ' and ' + name;
  }
  
  let x = double('Roy'); // x = Roy and Roy

  console.log(x);


//Ex. 13
function length(param) {
    return param.length
}

console.log(length('Hello'));


// Ex. 14
function toCase(param) {
    return param.toLowerCase() + '-' + param.toUpperCase()
}

console.log(toCase('hello'));


// Ex. 15
function shortcut(str1, str2) {
    return str1[0] + str2[0]
}

console.log(shortcut('Peanut', 'Butter'));


// Ex. 16
function firstChar(str) {
    return str.trim()[0]
}

console.log(firstChar(' Hello'));

