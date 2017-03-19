var num = 1 // number
num = 3 // undating existing number

var price = 1.5 //decimal floating point number
var name = "Dude" /// string value
var trueValue = true // boolean
var nullVar = nullVar // null value
var und // undefine means a  vaar that has been declared but not assigned a value

// Using console log to see values
console.log("num: " + num)
console.log("name: " + name)
console.log("trueValue: " + trueValue)
console.log("price: " + price)
console.log("nullVar: " + nullVar)
console.log("und: " + und)

// Variable Scoping
var myVariable = 'global'
myOtherVariable = 'global'

function myFunction() {
    var myVariable = 'local'
    return myVariable
}

function myOtherFunction() {
    myOtherVariable = 'local'
    return myOtherVariable
}

console.log(myVariable)
console.log(myFunction())

console.log(myOtherVariable)
console.log(myOtherFunction())
    // Local because myOtherVariable is not initiated by VAR so therefore it is changed in the scope
console.log(myOtherVariable)

var num = 0
num = num + 2 // Addition
num = num * 3 // Multiply
num = num / 2 // Division
num++ // Increment
num-- // Decrement

num += 1 // Addition Assignment (x += y) == (x = x + y)
num -= 2 // Subtraction Assignment (x -= y) == ( x = x - y)
num *= 3 // Multiplication Assignment (x *= y) == ( x = x * y)
num /= 2 // Division Assignment (x /= y) == ( x = x / y)
num %= 3 // Remainder Assignment (x %= y) == ( x = x % y)

console.log('num == 1 : ' + (num == 1)) // equal to
console.log('num === 1 : ' + (num === 1)) // equal to value and object
console.log('num != 1 : ' + (num != 1)) // not equal to
console.log('num > 1 : ' + (num > 1)) // greater than
console.log('num < 1 : ' + (num < 1)) // less than
console.log('num >= 1 : ' + (num >= 1)) // greater than or equal to
console.log('num <= 1 : ' + (num <= 1)) // less than or equal to

console.log('true && false : ' + (true && false)) // and
console.log('true || false : ' + (true || false)) // or 
console.log('!true : ' + (!true)) // not

// Bitwise operators
console.log('5 & 1:', (5 & 1)) // and
console.log('5 | 1:', (5 | 1)) // or
console.log('~5:', (~5)) // not
console.log('5 ^ 1', (5 ^ 1)) // Xor
console.log('5 << 1', (5 << 1)) // left shift
console.log('5 >> 1', (5 >> 1)) // right shift

// typeof
console.log('typeof num:', typeof num) // number
console.log('typeof Packt:', typeof 'Packt') // string
console.log('typeof true:', typeof true) // boolean
console.log('typeof [1,2,3]:', typeof [1,2,3]) // object
console.log('typeof {name:John}:', typeof {name:'John'}) //object

// delete operator
var myObj = {name: 'John', age: 21}
delete myObj.age
console.log(myObj) // outputs Object {name: "John"}

// TESTING TRUE OR FALSE
/*undefined is false
null is false
Boolean true is true, false is false
Number results is false for +0, -0, or NaN; otherwise, the results is true
String is false if it is empty(length is  zero) otherwise it is true(length > 1)
Object is true*/

function testTruthy(val) {
	// ? shorthand for if statement
	return val ? console.log('truthy') : console.log('falsy')
}

testTruthy(true) // true
testTruthy(false) // false
testTruthy(new Boolean(false)) //true (object is always true)

testTruthy('') // false
testTruthy('Packt') // true
testTruthy(new String('')) // true (object is always true)

testTruthy({}) // true (objects always true)

var obj = {name: 'John'}
testTruthy(obj) // true
testTruthy(obj.name) // true
testTruthy(obj.age) // false (age does not exist)

// equals operators (== and ===)

type X           type Y           results
null             undefined        true
undefined        null             true
number           string           x == toNumber(y)
string           number           toNumber(x) == y
boolean          any              toNumber(x) == y 
any              boolean          x == toNumber(y)
string or number object           x == toPrimitive(y)
object           string or number toPrimitive(x) == y

if x and y are the same type, then javascript will use the equals method to compare the two values or objects.
any other combinations that is not listed in the table gives a false result

toNumber

Value type  Result
undefined   NaN.
null        +0.
Boolean     If the value is true, the result is 1; if the value is false, the result is +0.
Number      The value of the number.
String      This parses the string into a number. If the string consists of alphabetical characters, the result is NaN; if 
            the string consists of numbers, it is transformed into a number.
Object      toNumber(toPrimitive(value)).

toPrimitive

Value type  Result
Object      If valueOf returns a primitive value, this returns the primitive value; otherwise, if toString returns a primitive
		    value, this returns the primitive value; otherwise returns an error.


// examples

console.log('packt' ? true : false) // true because (string length > 1)
console.log('packt' == true) // false because boolean and string is converted using toNumber which results in NaN == 1
console.log('packt' == false)  // false samething as above, false is converted to 0, and packt is NaN


// ===, same value, different type is always false, if same type they are compared in value with this chart:

type of X  values                                   result
number     x has same value as Y (but not a number) true
string     x and y are identical characters         true
boolean    x and y are both true or both false      true 
objects    x and y reference the same object        true 

// example

console.log('packt' === true) // false string is < 1 and true is 1 and a boolean
console.log('packt' === 'pakct') // true both are string and < 1

var person1 = {name:"John"}
var person2 = {name:"John"}
console.log(person1 === person2) // false because different objects

// conditional statements

// use the if statement if we want to execute a script only if the condition is true
var num = 1
if (num === 1) {
	console.log("num is equal to 1")
}

// if else statement for when the condition is true or false(else)
var num = 0 
if (num === 1) {
	console.log("num is equal to 1")
} else {
	console.log("num is not equal to 1, the value of num is " + num)
}

// if else can also be represented by the ternary operator ?
if (num === 1) {
	num--
} else {
	num++
}
// with ternary operator
(num === 1) ? num-- : num++

// multiple if else statements
var month = 5
if (month === 1) {
	console.log("January")
} else if (month === 2) {
	console.log("Febuary")
} else if (month === 3) {
	console.log("March")
} else {
	console.log("Month is not January, Febuary or March")
}

// switch statement, if the condition we are evaluating is the same as the previous one(however, it is being compares to different values)
var month = 5
switch(month) {
	case 1:
		console.log("January")
		break
	case 2:
		console.log("Febuary")
		break
	case 3:
		console.log("March")
		break
	default:
		console.log("Month is not January, Febuary or March")
}

/*One thing that is very important in a switch statement is the usage of case and break
keywords. The case clause determines whether the value of switch is equal to the value
of the case clause. The break statement stops the switch statement from executing the
rest of the statement (otherwise, it will execute all the scripts from all case clauses below
the matched case until a break statement is found in one of the case clauses). And finally,
we have the default statement, which is executed by default if none of the case
statements are true (or if the executed case statement does not have the break statement).*/

// loops for, while, and do... while

for (var i = 0; i < 10; i++) {
	console.log(i)
} // outs the values from 0 to 9

// executes the srcipt inside the while loop while the condition is true, will print out values 0-9
var i = 0
while(i < 10)
{
	console.log(i)
	i++
}

// only difference is that the condition is evaluated after the script
// in while loop the condition is evaluated before executing the script
var i = 0
do {
	console.log(i)
	i++
} while (i < 10)

// Functions
function sayHello() {
	console.log('Hello!')
}
// call function, invoke
sayHello()

// function with arguments(variables with which functions that does something)
function output(text) {
	console.log(text)
}

// use it example
output('Hello!')

// can use as many arguments as you want but you have to invoke it
output('Hello!', 'Other text')

// return value with function
function sum(num1, num2) {
	return num1 + num2
}

// function calculates the sum of two given numbers ad returns the results
var results = sum(1,2)
output(results)

// Object-oriented programming javascript
var obj = new Object()
// second way
var obj = {}

// can also create an object entirely as follows

obj = {
	name: {
		first: 'Gandalf',
		last: 'the Grey'
	},
	address: 'Middle Earth'
}

// an object is an instance of a class. A class defines the characteristics of the object
function Book(title, pages, isbn) {
	this.title = title
	this.pages = pages
	this.isbn  = isbn
}

// to instantiate this class
var book = new Book('title', 'pages', 'isbn')

// access its attributes and update
console.log(book.title) // outputs book title
book.title = "new title" // updates the new value of book title
console.log(book.title) // outputs the updated value

// class can also contain a function, can declare and use a function as the following
Book.prototype.printTitle = function() {
	console.log(this.title)
}
book.printTitle()

//declare functions directly inside the class definition

function Book(title, pages, isbn) {
	this.title = title
	this.pages = pages
	this.isbn  = isbn
	this.printIsbn = function() {
		console.log(this.isbn)
	}
}
book.printIsbn()


