// example using stack

function Stack() {

	var items = [];

	this.push = function(element) {
		items.push(element);
	}

	this.pop = function() {
		 return items.pop();
	};

	this.peek = function() {
		return items[items.length-1];
	};

	this.isEmpty = function() {
		return items.length == 0;
	};

	this.size = function() {
		return items.length;
	};

	this.clear =  function() {
		items = [];
	};

	this.print = function () {
		console.log(items.toString());
	};
}

// instanciate new stack
var stack = new Stack();
console.log(stack.isEmpty()); // true because its empty

// push elements into stack
stack.push(5);
stack.push(8);

console.log(stack.peek()); // 8 will show because it the last element that was pushed

stack.push(11);
console.log(stack.size());  // 3
console.log(stack.isEmpty()); // false

stack.push(15);
stack.pop();
stack.pop();
console.log(stack.size()); // 2
stack.print(); // 5, 8


// using stack to convert decimals to binary(computer science reasons)

function dividedBy2(decNumber) {
	var remStack = new Stack(),
		rem,
		binaryString = '';

	while (decNumber > 0 ) {
		rem = Math.floor(decNumber % 2);
		remStack.push(rem);
		decNumber = Math.floor(decNumber / 2);
	}

	while (!remStack.isEmpty()) {
		binaryString += remStack.pop().toString();
	}
	return binaryString;
}

console.log(dividedBy2(233));
console.log(dividedBy2(10));
console.log(dividedBy2(10000));

// using stack to convert decimal to base

function baseConverter(decNumber, base) {
	var nStack = new Stack(),
		n,
		baseString = '';
		digits = '0123456789ABCDEF';

	while (decNumber > 0 ) {
		n = Math.floor(decNumber % base);
		nStack.push(n);
		decNumber = Math.floor(decNumber / base);
	}

	while (!nStack.isEmpty()) {
		baseString += digits[nStack.pop()];
	}

	return baseString;
}

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));


