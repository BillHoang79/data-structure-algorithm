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


