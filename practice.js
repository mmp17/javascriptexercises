//Exersice 1 Write a JavaScript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100

// const isEqualto100 = (a,b) => a === 100 || b === 100 || (a+b) === 100;

// console.log(isEqualto100(100,0)); //true
// console.log(isEqualto100(0,100)); //true
// console.log(isEqualto100(10,0)); //false
// console.log(isEqualto100(50,0)); //false
// console.log(isEqualto100(80,20)); //true
// console.log(isEqualto100(30,70)); //true

//Exersice 2 Write a JavaScript exercise to get the extension of a filename.
// const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));
// console.log(getFileExtension('index.html')); //.html
// console.log(getFileExtension('index.js')); //.js
// console.log(getFileExtension('index.doc.js')); //.js

//Exersice 3 Write a JavaScript program to replace every character in a given string with the character following it in the alphabet

// Exercise 2:
// Write a JavaScript exercise to get the extension of a filename

// let extensions = ['.abdulla.html', 'style.css', 'java.js', 'text.txt'];

// var exts = [];
// extensions.map((value) => {
//     exts.push(value.substring(value.lastIndexOf('.'), value.length));
//     return exts;
// })

// console.log(exts);

//Exercise 3: Write a JavaScript function to convert an amount to coins. Example input: 46 and possible coins 25, 10, 5, 2, 1. Output: 25, 10, 10, 1

// let coins = [25, 10, 5, 2, 1];

// let selectedCoins = [];

// function convert(amount) {
//     for (let i=0; i<=coins.length;){
//         if (coins[i]<=amount) {
//             selectedCoins.push(coins[i]);
//             amount -= coins[i]
//             //console.log('amount:', amount)
//         }
//         else {i++;}
        
//     }
//     console.log(selectedCoins);
// }

// convert(100);

//Exercise 5: Write a JavaScript function to find the first not repeated character Example string: 'abacddbec' Expected output: 'e'

// let str = 'sheijyhfwruhkyiuaswirei';


// arr = str.split('');

// //let count = 0;

// const compare = arr.map((value, index) => {
//     str=str.substring(index+1, str.length)
//         if (str.includes(value)) {
//         //count++
//          console.log(value);
//     } else {
//         console.log(value); 
//     }
    
// })

//console.log(compare);

// Exercise 2: Write a JavaScript program to compare two objects to determine if the first one contains the same properties as 
// the second one (which may also have additional properties). For example, objA and objB are equal (but not equal to objC).
// const objA = { a: 1, b: 1, c: 1 };
// const objB = { a: 1, b: 1, c: 1 };
// const objC = { a: 1, b: 1, c: 1, d: 1 };

// function comparision (A, B, C) {
//     a1 = Object.entries(A).toString().split(',')
//     b1 = Object.entries(B).toString().split(',')
//     c1 = Object.entries(C).toString().split(',')
//     let flag;
//     if (a1.length === b1.length && b1.length === c1.length){
//         for (let i=0; i<a1.length; i++){
//             if (a1[i] === b1[i] && b1[i]===c1[i]) {
//                 flag=true;
//             } else {
//                 flag = false;
//                 return flag;                
//             }
//         }
//         return flag;
//     }
//     else {
//         return false;
//     }
// } 

// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a 
// non-descending order without moving the trees. People can be very tall! {Odamla parkda ocheredda turibdi ,ular orasida daraxtlar ham bor,daraxtlar qimirlamaydi.
// Siznning vazifangiz odamlarni bo'ylari bo'yicha o'sish tartibida sortirovka qiling (daraxtlarni qimirlamaydi.}

// Example:
// buyerdagi -1 daraxtni bildiradi  qogan sonlar esa odamlarni bo'ylari balandligi:
// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].


//sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

array = [-1, 150, 190, 170, -1, -1, 160, 180];

function sortByHeight(array) {
    newArrayPpl = [];
    array.map((value) => {
        if (value !== -1) {
            newArrayPpl.push(value);
        }
    })
    newArrayPpl.sort((a,b) => a-b);
        let j=0;
    for (let i=0; i<array.length; i++) {
        if (array[i] !== -1){
            array[i] = newArrayPpl[j]
            j++;
            console.log(i,'&', j);
            
        }
    }
    return array
}



console.log(sortByHeight(array));