//10.25.2018

//PRT I: Object.freeze and const
//:https://mathiasbynens.be/notes/es6-const
//const is not immutable
const myFunc = {};
myFunc.bar = 42;
var firstProj = document.getElementById("Item01");

//To make an object’s values immutable, use Object.freeze(). 
//It has been around since ES5 and is widely available nowadays.

const fork = Object.freeze({
	'bar' : 27
});
fork.bar = 42;
console.log(fork.bar);

//this way there is a 'sloppy' error that at least shows something

//PRTII:A guide to JavaScript variable hoisting 🚩 with let and const
//https://medium.freecodecamp.org/what-is-variable-hoisting-differentiating-between-var-let-and-const-in-es6-f1a70bb43d
//It is important to note that a const objects members can be changed but
//the actual binding of a const cannot be changed

//ex)
const shape = {
	name: "triangle",
	sides: 3
}

shape.name = "square";
shape.sides = 4;

console.log(shape);

//shall declare a type error
// shape = {
// 	name: "hexagon",
// 	sides: 6
// }

//note from author:As a general rule, use let only for loop counters 
//or only if you really need reassignment. Everywhere else, 
//use const. 
//Personally I’ve ditched loops for filter(), map() & reduce(). 
//You should too.

//PRTIII: Replace loops with filter(), map() & reduce()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
//((Interesting docs))!!

function findEvens(arr){
	return arr.filter(arr => (arr % 2) !== 0);
}

function map1(arr){
	//will return a boolean. filter will actually return values >10
	return arr.map(x => (x * 4) > 10);
}
function map2(arr){
	//better use of mapping
	return arr.map(x => (x * 100 + 10));
}

const numsArray = [1,2,3,4,5,6];

//FILTER:
const evens = findEvens(numsArray);
console.log(evens);

//MAPS:
const maptest = map1(numsArray);
const maptest2 = map2(numsArray);
console.log(maptest);
console.log(maptest2);

//REDUCE:
function reduce1(arr){
	return arr.reduce(reducer);
}

//reducer accepts 4 possible args 
// Accumulator (acc)
// Current Value (cur)
// Current Index (idx)
// Source Array (src)

//first a simple example...
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const word = "Hello You People";
const redacted = reduce1(numsArray);
console.log(redacted);