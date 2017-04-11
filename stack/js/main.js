

// example using stack

function Stack() {
	var items = []

this.push = function(element) {
	items.push(element)
}

this.pop = function() {
	 return items.pop()
}

this.peek = function() {
	return items[items.length-1]
}

this.isEmpty = function() {
	return items.length == 0
}

this.size = function() {
	return items.length
}

this.clear =  function() {
	items = []
}

this.print = function () {
	console.log(items.toString())
	}
}

// instanciate new stacl
var stack = new Stack()
console.log(stack.isEmpty()) // true because its empty

// push elements into stack
stack.push(5)
stack.push(8)

console.log(stack.peek()) // 8 will show because it the last element that was pushed

stack.push(11)
console.log(stack.size())  // 3
console.log(stack.isEmpty()) // false

stack.push(15) 
stack.pop()
stack.pop()
console.log(stack.size()) // 2
stack.print() // 5, 8



