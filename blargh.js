//10.25.2018

//PRT I: Object.freeze and const
//:https://mathiasbynens.be/notes/es6-const
const myFunc = {};
myFunc.bar = 42;
var firstProj = document.getElementById("Item01");

//To make an object’s values immutable, use Object.freeze(). It has been around since ES5 and is widely available nowadays.

const fork = Object.freeze({
	'bar' : 27
});
fork.bar = 42;
console.log(fork.bar);

//this way there is a 'sloppy' error that at least shows something
