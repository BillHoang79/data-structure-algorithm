// Use push() to place arguements in the first open position
// of an array, which is always the back
names = []
names.push("Cynthia")
names.push("Jennifer")
console.log(names)

// Then we can remove the element from array with shift()
names.shift()
console.log(names)

// Implementing the Queue class by defining constructor function
function Queue() {
	this.dataStore = []
	this.enqueue = enqueue
	this.dequeue = dequeue
	this.front = front
	this.back = back
	this.toString = toString
	this.empty = empty
}

// enqueue() function adds an element to the end of a queue
function enqueue(element) {
	this.dataStore.push(element)
}

// dequeue() function removes an element from the front of a queue
function dequeue(element) {
	return this.dataStore.shift(element)
}

// using these functions we can examine the front and back
function front() {
	return this.dataStore[0]
}

function back() {
	return this.dataStore[this.dataStore.length-1]
}

// toString to display all the elements

function toString() {
	var retStr = ""
	for ( var i = 0; i < this.dataStore.length; i++) {
		retStr += this.dataStore[i] + "\n"
	}
	return retStr
}

// function to check if Queue is empty

function empty() {
	if (this.dataStore.length == 0) {
		return true
	}
	else {
		return false
	}
}

// Test Example
 function nameList() {
 	this.putData = []
 	this.inQ = inQ
 	this.outQ = outQ
 	this.one = one
 	this.last= last
 	this.tooString = tooString
 	this.nothing = nothing
 }

 function inQ(element) {
 	this.putData.push(element)
 }

 function outQ() {
 	return this.putData.shift()
 }

 function one() {
 	return this.putData[0]
 }

 function last() {
 	return this.putData[this.putData.length-1]
 }

 function tooString() {
 	var retStr = ""
 	for(var i = 0; i < this.putData.length; i++) {
 		retStr += this.putData[i] + "\n"
 	}
 	return retStr
 }

 function nothing() {
 	if (this.putData.length == 0) {
 		return true
 	}
 	else {
 		return false
 	}
 }

 // Test
var n =  new nameList()
n.inQ('playerOne')
n.inQ('playerTwo')
n.inQ('playerThree')
console.log(n.tooString())
n.outQ()
console.log(n.tooString())
console.log("Front of queue: " + n.one())
console.log("Back of queue: " + n.last())