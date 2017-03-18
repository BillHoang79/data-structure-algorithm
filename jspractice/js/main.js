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
 console.log(myOtherVariable)