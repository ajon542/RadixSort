'use strict';

module.exports = radixSort;

var countingSort = require('./countingSort.js');

function radixSort(a, d) {
    
    // Construct input [0, 5], therefore an array of size 6 is needed
    // for the temporary storage space.
    var input = [21, 56, 32, 10, 27, 38, 11, 34];
    var result = [];
    var result2 = [];

    // Sort.
    countingSort(input, result, 10, 0);
    countingSort(result, result2, 10, 1);

    // Print the sorted array.
    console.log(result2);
}
