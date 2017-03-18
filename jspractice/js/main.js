var num = 1 // number
num = 3 // undating existing number

var price = 1.5 //decimal floating point number
var name = "Dude" /// string value
var trueValue = true // boolean
var nullVar = nullVar // null value
var und // undefine means a  vaar that has been declared but not assigned a value

// Using console log to see values
console.log("num: "+ num)
console.log("name: "+ name)
console.log("trueValue: "+ trueValue)
console.log("price: "+ price)
console.log("nullVar: "+ nullVar)
console.log("und: "+ und)

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
 console.log('num === 1 : ' + (num === 1))  // equal to value and object
 console.log('num != 1 : ' + (num != 1)) // not equal to
 console.log('num > 1 : ' + (num > 1)) // greater than
 console.log('num < 1 : ' + (num < 1)) // less than
 console.log('num >= 1 : ' + (num >= 1)) // greater than or equal to
 console.log('num <= 1 : ' + (num <= 1)) // less than or equal to

 console.log('true && false : ' + (true && false))  // and
 console.log('true || false : ' + (true || false))  // or 
 console.log('!true : ' + (!true)) // not

// Bitwise operators
 console.log('5 & 1:',(5 & 1)) // and
 console.log('5 | 1:',(5 | 1)) // or
 console.log('~5:',(~5)) // not
 console.log('5 ^ 1',(5 ^ 1)) // Xor
 console.log('5 << 1',(5 << 1 )) // left shift
 console.log('5 >> 1',(5 >> 1 )) // right shift
