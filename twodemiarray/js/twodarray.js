// Two deminsion arrays

/*Crockford extends the JavaScript array object with a
function that sets the number of rows and columns and sets each value to a value passed
to the function.*/

Array.matrix = function(numrows, numcols, initial) {
    var arr = []
    for (var i = 0; i < numrows; i++) {
        var columns = []
        for (var j = 0; j < numcols; j++) {
            columns[j] = initial
        }
        arr[i] = columns
    }
    return arr
}

/*The inner loop is controlled by the expression:
col < grades[row].length
This works because each row contains an array, and that array has a length property
we can use to determine how many columns there are in the row.
The grade average for each student is rounded to two decimals using the toFixed(n)
function.*/

var nums = Array.matrix(5, 5, 0)
console.log(nums[1][1])
var names = Array.matrix(3, 3, "")
names[1][2] = "Joe"
console.log(names[1][2])

var grades = [
    [89, 77, 78],
    [76, 82, 81],
    [91, 94, 89]
]
var total = 0
var average = 0.0
for (var row = 0; row < grades.length; row++) {
    for (var col = 0; col < grades[row].length; col++) {
        total += grades[row][col]
    }
    average = total / grades[row].length
    console.log("Student " + parseInt(row + 1) + " average: " +
        average.toFixed(2))
    total = 0
    average = 0.0

}

/*To perform a row-wise computation, we simply have to flip the for loops so that the
outer loop controls the columns and the inner loop controls the rows. Here is the calculation
for each test:*/

var grades = [
    [89, 77, 78],
    [76, 82, 81],
    [91, 94, 89]
]
var total = 0
var average = 0.0
for (var col = 0; col < grades.length; col++) {
    for (var row = 0; row < grades[col].length; row++) {
        total += grades[row][col]
    }
    average = total / grades[col].length
    console.log("Test " + parseInt(col + 1) + " average: " +
        average.toFixed(2))
    total = 0
    average = 0.0
}

// Jagged arrays, where the array may have different elments
/*Many programming languages have
problems handling jagged arrays, but JavaScript does not since we can compute the
length of any row.*/

var grades = [
    [89, 77, 96],
    [76, 99, 78, 88],
    [95, 75]
]
var total = 0
var average = 0
for (var row = 0; row < grades.length; row++) {
    for (var col = 0; col < grades[row].length; col++) {
        total += grades[row][col]
    }
    average = total / grades[row].length
    console.log("Student " + parseInt(row + 1) + " average: " +
        average.toFixed(2))
    total = 0
    average = 0.0
}

// Arrays of Objects

function Point(x, y) {
    this.x = x
    this.y = y
}

function displayPts(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i].x + ", " + arr[i].y)
    }
}

var p1 = new Point(1, 2)
var p2 = new Point(3, 5)
var p3 = new Point(2, 8)
var p4 = new Point(4, 4)
var points = [p1, p2, p3, p4]
for (var i = 0; i < points.length; i++) {
    console.log("Point " + parseInt(i + 1) + ": " + points[i].x + ", " +
        points[i].y)
}
var p5 = new Point(12, -3)
points.push(p5)
console.log("After push: ")
displayPts(points)
points.shift()
console.log("After shift: ")
displayPts(points)

// Arrays in Objects, comment out above before running

function weekTemps() {
	this.dataStore = []
	this.add = add
	this.average = average
}

function add(temp) {
	this.dataStore.push(temp)
}

function average() {
	var total = 0
	for (var i = 0; i < this.dataStore.length; i++) {
		total += this.dataStore[i]
	}
	return total / this.dataStore.length
}

var thisWeek = new weekTemps()
thisWeek.add(52)
thisWeek.add(55)
thisWeek.add(67)
thisWeek.add(46)
thisWeek.add(64)
thisWeek.add(77)
thisWeek.add(61)
thisWeek.add(56)
console.log(thisWeek.average())

