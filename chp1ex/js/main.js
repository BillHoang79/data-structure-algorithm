var grades = [
    [88, 87, 85],
    [87, 76, 99],
    [67, 77, 99]
]
var total = 0
var average = 0.0 
for (var row = 0; row < grades.length; row++) {
	for (var col = 0; col < grades[row].length; col++) {
		total += grades[row][col]
	}
	average = total / grades[row].length
	console.log("Student " + parseInt(row+1) + " average: " 
		+ average.toFixed(2))
	total = 0
	average = 0.0
}
console.log(grades)
grades.push([100, 56,77])
console.log(grades)


function concat(accumulatedWords, item) {
	return accumulatedWords + item
}

var wordArray = ["hello", "hey", "hi"]
var sentence = wordArray.reduce(concat)
// var sentence = wordArray.reduceRight(concat)
console.log(sentence)

function concat(addMe, toMe) {
	return addMe + toMe
}

var bits = ['p', 'e', 'r', 's', 'o', 'n']
var word = bits.reduce(concat)
console.log(word)