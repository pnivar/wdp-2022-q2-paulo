// Ex. 1
/*
let x = 'Tic';
x = 'Tac';
x = 'Toe';
*/

// x should have the last assigned value which is equal to 'Toe'.

//Ex. 2
/*
let x = 'Laurel';
let y = 'Hardy';
let z = y;
y = x;
x = z;
*/

// the value of x is equal to y which corresponds to 'Hardy'

//ex. 3
const groceryList = ['apples', 'oranges', 'bananas', 'pears', 'lemons'];
const groceryPrices = ['$0.50', '$0.75','$0.95','$0.50','$0.89'];

for (let i = 0; i < groceryList.length; i++) {
    console.log(groceryList[i] + ", " + groceryPrices[i]);
}
