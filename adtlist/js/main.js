// List of ADT Class Implementation
 function List() {
 	this.listSize = 0
 	this.pos = 0 
 	this.dataStore = []
 	this.clear = clear
 	this.find  = find
 	this.toString = toString
 	this.insert = insert
 	this.append = append
 	this.remove = remove
 	this.front = front
 	this.end = end
 	this.prev = prev
 	this.next = next
 	this.length = length
 	this.currPos = currPos
 	this.moveTo = moveTo
 	this.getElement = getElement
 	this.contains = contains
 }


// Append
function append(element) {
	this.dataStore[this.listSize++] = element
}

// Remove
function find(element) {
	for (var i = 0; i < this.dataStore.length; i++) {
		if (this.dataStore[i] == element) {
			return i
		}
	}
	return -1
}

// Finding element
function remove(element) {
	var foundAt = this.find(element)
	if (foundAt > -1) {
		this.dataStore.splice(foundAt,1)
		--this.listSize
		return true
	}
	return false
}

// Length of list
function length() {
	return this.listSize
}

// Retrieving a List's Element
function toString() {
	return this.dataStore
}

// Test function for ADT LIST
var names = new List()
names.append("Cynthia")
names.append("Raymond")
names.append("Barbara")
console.log(names.toString())
names.remove('Raymond')
console.log(names.toString())

// Insert
function insert(element, after) {
	var insertPos = this.find(after)
	if (insertPos > -1) {
		this.dataStore.splice(insertPos+1, 0, element)
		++this.listSize
		return true
	}
	return false
}

// Removing all Elements from list
function clear() {
	delete this.dataStore
	this.dataStore = []
	this.listSize = this.pos = 0 
}

// Contain, checks to see if a particular value is in a List
function contains(element) {
	for (var i = 0; i < this.dataStore.length; i++) {
		if (this.dataStore[i] == element) {
			return true
		}
	}
	return false
}

//Traversing a List
function end() {
	this.pos = this.listSize-1
}

function prev() {
	if (this.pos > 0) {
		--this.pos
	}
}

function next() {
	if (this.pos < this.listSize-1) {
		++this.pos
	}
}

function currPos() {
	return this.pos
}

function moveTo(position) {
	this.pos = position
}

function getElement() {
	return this.dataStore[this.pos]
}

// Creating a list example
var names = new List()
names.append('Clayton')
names.append('Raymond')
names.append('Cynthia')
names.append('Jennifer')
names.append('Bryan')
names.append('Danny')

// Moves to first element of the list
names.front()
console.log(names.getElement()) // displays Clayton

// Moving forward to next element
names.next()
console.log(names.getElement()) // Displays Ryan

// Moves forward twice and back one
names.next()
names.next()
names.prev()
console.log(names.getElement()) //displays Cynthia

// Iterating  through a List vs using array indexing 
/*Not having to worry about the underlying data storage structure when accessing
list elements
• Being able to update the list and not having to update the iterator, where an index
becomes invalid when a new element is added to the list
• Providing a uniform means of accessing elements for different types of data stores
used in the implemenation of a List class*/
for(names.front(); names.currPos() < names.length(); names.next()) {
	console.log(names.getElement())
}

//Desscription for example
/*The for loop starts by setting the current position to the front of the list. The loop
continues while the value of currPos is less than the length of the list. Each time through
the loop, the current position is moved one element forward through the use of the
next() function.*/

// Traversing backwards with iterator
for(names.end(); names.currPos() >= 0; names.prev()) {
	console.log(names.getElement())
}

/*loop starts at the last element in this list and moves backwards using prev() function 
while the current postion is greater thhan or equal to 0
iterator are used only to move through a list and should not 
be combined with functiond for adding or removing items from list*/