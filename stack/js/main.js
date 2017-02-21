// Stack set up

function Stack() {
	this.dataStore = []
	this.top = 0
	this.push = push
	this.pop = pop
	this.peek = peek
}

// first function implemented in a stack function
function push(element) {
	this.dataStore[this.top++] = element
}

// reverse of push, decrements the top variable
function pop() {
	return this.dataStore[--this.top]
}

/* The peek() function returns the top element of the stack by accessing the element at
the top-1 position of the array:*/
function peek() {
	return this.dataStore[this.top-1]
}

// how many elements are stored in a stack
function length() {
	return this.top
}

// Finally, we can clear a stack by simply setting the 
//top variable back to 0:
function clear() {
	this.top = 0
}

// Complete Example of stack

function Stack() {
	this.dataStore = []
	this.top = 0 
	this.push = push
	this.pop = pop
	this.peek = peek
	this.clear = clear
	this.length = length
}

function push(element) {
	this.dataStore[this.top++] = element
}

function peek() {
	return this.dataStore[this.top-1]
}

function pop() {
	return this.dataStore[--this.top]
}

function clear() {
	this.top = 0
}

function length() {
	return this.top
}
 // Testing the Stack

 var s = new Stack()
 s.push("David")
 s.push("Raymond")
 s.push("Bryan")
 console.log("length: " + s.length())
 console.log(s.peek())
 var popped = s.pop()
 console.log("The popped element is: " + popped)
 console.log(s.peek())
 s.push("Cynthia")
 console.log(s.peek())
 s.clear()
 console.log("length: " + s.length())
 console.log(s.peek())
 s.push("Clayton")
 console.log(s.peek())

 // Using stack to convert numbers to base 2 and 8
 function mulBase(num, base) {
 	var s = new Stack()
 	do { 
 		s.push(num % base)
 		num = Math.floor(num /= base)
 	} while (num > 0)
 	var converted = ""
 	while (s.length() > 0) {
 		converted += s.pop()
 	}
 	return converted
 }

 var num = 32
 var base = 2
 var newNum = mulBase(num, base)
 console.log(num + " converted to base " + base + " is " + newNum)
 num = 125
 base = 8
 var newNum = mulBase(num, base)
 console.log(num + " converted to base " + base + " is " + newNum)
