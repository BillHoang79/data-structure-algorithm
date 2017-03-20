// bad example 
var averageTempDay1 = [72,75,79,79,81,81]
var averageTempDay2 = [81,79,75,75,73,72]

// better example would be a matrix(two dimensional array)
var averageTemp = []
averageTemp[0] = [72,75,79,79,81,81]
averageTemp[1] = [81,79,75,75,73,72]

// javascript does not support matrices, but we can use an array of arrays
// specifying value of each day and each hour seperately
// day 1
averageTemp[0] = []
averageTemp[0][0] = 72
averageTemp[0][1] = 75  
averageTemp[0][2] = 79  
averageTemp[0][3] = 79  
averageTemp[0][4] = 81  
averageTemp[0][5] = 81 

// day 2
averageTemp[0] = []
averageTemp[0][0] = 81
averageTemp[0][1] = 79
averageTemp[0][2] = 75
averageTemp[0][3] = 75
averageTemp[0][4] = 73
averageTemp[0][5] = 72

// visualization chart
/*  [0] [1] [2] [3] [4] [5]   
[0] 72  75  79  79  81  81 
[1] 81  79  75  75  73  73 
*/

// using a nested for loop we can output this data, i = rows, j = columns
function printMatrix(myMatrix) {
    for (var i = 0; i < myMatrix.length; i++) {
        for (var j = 0; j < myMatrix[i].length; j++) {
            console.log(myMatrix[i][j])
        }
    }
}

printMatrix(averageTemp)

// 3 x 3 matrix containing sum of irow + jcolumn + zdepth
var matrix3x3x3 = []
for (var i = 0; i < 3; i++) {
    matrix3x3x3[i] = []
    for (var j = 0; j < 3; j++) {
        matrix3x3x3[i][j] = [] 
        for (var z = 0; z < 3; z++) {
            matrix3x3x3[i][j][z] = i + j + z
        }
    }
}
// output
for (var i = 0; i < matrix3x3x3.length; i++) {
    for (var j = 0; j < matrix3x3x3[i].length; j++) {
        for (var z = 0; z < matrix3x3x3[i][j].length; z++) {
            console.log(matrix3x3x3[i][j][z])
        }
    }
}


