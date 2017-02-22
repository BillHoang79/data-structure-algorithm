function Stack() {
	this.dataStore = []
	this.top = 0
	this.push = push
	this.pop = pop
	this.length = length

}

function push(element) {
	this.dataStore[this.top++] = element;
}

function pop() {
	return this.dataStore[--this.top]
}

function length() {
	return this.top;
}

function isPalindrome(word) {
	var s = new Stack() 
	for (var i = 0; i < word.length; i++) {
		s.push(word[i])
	}
	var rword = ""
	while (s.length() >  0 ) {
		rword += s.pop()
	}
	if (word == rword) {
		return true
	}
	else {
		return false
	}
}

var word = "hello"
if (isPalindrome(word)) {
	console.log(word + " is a Palindrome.")
}
else {
	console.log(word + " is not a Palindrome")
}
word = "racecar"
if (isPalindrome(word)) {
	console.log(word + " is a Palindrome.")
}
else {
	console.log(word + "is not a Palindrome")
	}
