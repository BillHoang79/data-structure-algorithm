// Iterator Function 

// Preforms a operator or generates an value
function square(num) {
	console.log(num, num * num)
}

var nums = [1,2,3,4,5,6,7,8,9,10]
nums.forEach(square)

// forEach applies a boolean function to an array and returns true if every element can be true
function isEven(num) {
	return num % 2 == 0
}

var nums = [2,4,6,8,10]
var even = nums.every(isEven)
	if(even) {
		console.log('all numbers are even')
	}
	else {
		console.log('not all numbers are even')
	}

// The some () will return true if at least one element ist true

function isEven(num) {
	return num % 2 == 0
}

var nums = [1,2,3,4,5,6,8,9,10]
var someEven = nums.some(isEven)
	if(someEven) {
		console.log('some numbers are even')
	}
	else {
		console.log('no numbers are even')
	}
var nums = [1,3,5,7,9]
var someEven = nums.some(isEven)
	if(someEven) {
		console.log('some numbers are even')
	}
	else {
		console.log('no numbers are even')
	}

// The reduce adds the nums in an array

function add(runningTotal, currentValue) {
	return runningTotal + currentValue
}
 
var nums = [1,2,3,4,5,6,7,8,9,10]
var sum = nums.reduce(add)
console.log(sum)

// String version

function concat(accumulatedString, item) {
	return accumulatedString + item
}

var words = ["the ", "quick ", "brown ", "fox"]
// Can also use reduce right
var sentence = words.reduce(concat)
console.log(sentence)

// Map, iterator that returns a array

function curve(grade) {
	return grade += 5
}

var grades = [77, 65, 81, 92, 83]
var newgrades = grades.map(curve)
console.log(newgrades)

// String example 

function first(word) {
	return word[0]
}

var words = ['for', 'your', 'information']
var acronym = words.map(first)
// calls join with empty string as the seperator, using toString will display commas
console.log(acronym.join(''))

// Filter, returns a new array that statisfies the conditions of Boolean function

function isEven(num) {
	return num % 2 == 0
}

function isOdd(num) {
	return num % 2 != 0
}

var nums = []
for (var i = 0; i < 20; i++) {
	nums[i] = i+1
}

var evens = nums.filter(isEven)
document.write("Even Numbers")
document.write(evens)
var odds = nums.filter(isOdd)
document.write("Odd Numbers")
document.write(odds)

// Filter example
function passing(num) {
	return num >= 60
}

var grades = []
for ( var i = 0; i < 20; i++) {
	grades[i] = Math.floor(Math.random() * 101)
}

var passGrades = grades.filter(passing)
console.log("All grades: ")
console.log(grades)
console.log("Passing Grades: ")
console.log(passGrades)

// String example 

function afterc(str) {
	if(str.indexOf('cie') > -1) {
		return true
	}
	return false
}

var words = ["recieve", "deceive", "percieve", "deceit", "concieve"]
var misspelled = words.filter(afterc)
console.log(misspelled)