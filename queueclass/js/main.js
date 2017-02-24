// Dancer is stored in Dancer Object
function Dancer(name, gender) {
    this.name = name
    this.gender = gender
    this.read = read
}

// Load dancers fro file to program
function getDancers(males, females) {
    var names = read("dancers.txt").split("\n")
    for (var i = 0; i < names.length; i++) {
        names[i] = name[i].trim()
    }
    for (var i = 0; i < names.length; i++) {
        var dancer = name[i].split(" ")
        var gender = dancer[0]
        var name = dancer[1]
        if (gender == "F") {
            females.enqueue(new Dancer(name, gender))
        } else {
            males.enqueue(new Dancer(name, gender))
        }
    }
}

// Pairs up dancers and announces them
function dance(males, females) {
    console.log("The dance partners are: \n")
    while (!females.empty() && !males.empty()) {
        person = females.dequeue()
        putStr("Female dancer is: " + person.name)
        person = males.dequeue
        console.log(" and the male dancer is: " + person.name)
    }
    console.log()
}

// Square Dance
function Queue() {
    this.dataStore = []
    this.enqueue = enqueue
    this.dequeue = dequeue
    this.front = front
    this.back = back
    this.toString = toString
    this.empty = empty
}

function enqueue(element) {
    this.dataStore.push(element)
}

function dequeue() {
    return this.dataStore.shift()
}

function front() {
    return this.dataStore[0]
}

function back() {
    return this.dataStore[this.dataStore.length - 1]
}

function toString() {
    var retStr = ""
    for (var i = 0; i < this.dataStore.length; i++) {
        retStr += this.dataStore[i] + "\n"
    }
    return retStr
}

function empty() {
    if (this.dataStore.length == 0) {
        return true
    } else {
        return false
    }
}

function Dancer(name, gender) {
    this.name = name
    this.gender = gender

}

function getDancers(males, females) {
    var names = [
    {
        name: "Allison McMillan",
        gender: "F"
    },
    {
    	name: "Frank Opitz",
    	gender: "M"
    },
    {
        name: "Mason McMillan",
        gender: "M"
    },
    {
       	name: "Clayton Ruff",
       	gender: "M"
    },
    {
        name: "Cheryl Ferenback",
        gender: "F"
    },
    {
        name: "Raymond Williams",
        gender: "M"
    },
    {	
    	name: "Jennifer Ingram",
        gender: "F"
    },
    {
    	name: "Bryan Frazer",
        gender: "M"

    },
    {
        name: "David Durr",
        gender: "M"

    },
    {
        name: "Danny Martin",
        gender: "F"

    },
    {
       	name: "Aurora Adney",
       	gender: "F"
    }
]

    for (var i = 0; i < names.length; i++) {
        names[i] = names[i].trim()
    }
    for (var i = 0; i < names.length; i++) {
        var dancer = names[i].split(" ")
        var gender = dancer[0]
        var name = dancer[1]
        if (gender == "F") {
            femaleDancers.enqueue(new Dancer(name, gender))
        } else {
            maleDancers.enqueue(new Dancer(name, gender))
        }
    }
}

function dance(male, females) {
    console.log("The dance partners are: \n")
    while (!females.empty() && !males.empty()) {
        person = females.dequeue()
        putStr("Female dancer is: " + person.name)
        person = males.dequeue()
        console.log(" and the make dancer is: " + person.name)
    }
    console.log()
}

// Test program

var maleDancers = new Queue()
var femaleDancers = new Queue()
getDancers(maleDancers, femaleDancers)
dance(maleDancers, femaleDancers)
if (!femaleDancers.empty()) {
    console.log(femaleDancers.front().name + " is waiting to dance.")
}
if (!maleDancers.empty()) {
    console.log(maleDancers.front().name + " is waiting to dance.")
}
  
