// bad practice for arrays, using the new key word is consicer bad practice 
var daysOfWeek = new Array()
var daysOfWeek = new Array(7)
var daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')

// brackets are preferred ([])
var daysOfWeek = []

// initialize the array with some elements 
var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// length property tells you the length of an array
console.log(daysOfWeek.length)

// accessing an particular position in an array
for (var i = 0;  i < daysOfWeek.length; i++) {
	console.log(daysOfWeek[i])
}

// finding the first 20 numbers of the Fibonacci sequence
var fibonacci = [] // declare/create array
fibonacci[1] = 1 // assign 1 to index 2
fibonacci[2] = 1 // assign 1 to index 3

// creates third to the twentieth number of the squence(index 3 to 19)
// adds the sum of the 2 previous position to the current position
for(var i = 3; i < 20; i++) {
	fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
}

// output
for(var i = 1; i < fibonacci.length; i++) {
	console.log(fibonacci[i])
}

// adding and removing elements in an array
var numbers = [0,2,3,4,5,6,7,8,9]
// refernece the lastest free position
numbers[numbers.length] = 10

// using push to add new element
numbers.push(11)
numbers.push(12,13)
// shifting array over by 1 index
for (var i = numbers.length; i >= 0; i--) {
	numbers[i] = numbers[i-1]
}
numbers[0] = -1
console.log(numbers)
// can also unshift, a method used to pass arugements at the beginning of an array
numbers.unshift(-2)
numbers.unshift(-4,-3)

// to remove a value at the end of an array
numbers.pop()

//using an loop, results will overwrite index 0 and leave last index undefined
for (var i = 0; i < numbers.length; i++) {
	numbers[i] = numbers[i+1]
}
	console.log(numbers)

// to remove a value from the beginning of an array and shorten the length of an array
numbers.shift()
console.log(numbers)

// removing specific elements in an array
numbers.splice(5,3) // removes three elements starting at index 5
console.log(numbers)

// splice can be used to insert elements 
//(insert/remove starting point, elements you want to remove, what you want to insert)
numbers.splice(5,0,2,3,4) 
console.log(numbers)


