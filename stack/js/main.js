// STACK 
function Stack() {
	// properties and methods go here
}

var items = [] // data structure to store the elements

push(element(s) // adds a new item or items to the top of the stack
pop() // this removes the top item from the stack, also returns removed element
peek() // this returns the top element from the stack for info only, does not remove it
isEmpty() // true if stack contains zero elements, false if stack > 0
clear() // removes all elements of the stack
size() // returns how elements in the stack, similar to .length for arrays

// push method adds new elements to the top of the stack, meaning the end
this.push = function(element) {
	items.push(element)
}

// pop method removes last item we added into array
this.pop = function() {
	return items.pop()
}

// peek lets us look at the last item we added
this.peek = function() {
	return items[items.length-1]
}

// Stack set up(not so proper way)         
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
