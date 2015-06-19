'use strict';

module.exports = countingSort;

// Counting sort algorithm.
// a: input array.
// b: output sorted array.
// k: temporary working storage size.
function countingSort(a, b, k, f) {
    
    var pos = f;
    
    // Initialise the temporary storage.
    var c = [];
    for (var i = 0; i < k; ++i) {
        c[i] = 0;
    }
    
    // Count each of the items in the input array.
    for (var j = 0; j < a.length; ++j) {
        
        var number = a[j];
        var digit = ~~(number / Math.pow(10, pos)) - ~~(number / Math.pow(10, pos + 1)) * 10;

        c[digit]++;
    }
    
    // Create a running count of the items.
    // This is used to determine each items position in the output
    // array. If we know there are 12 smaller items than the item
    // at c[i] then, the item at c[i] must go in the 13th position
    // of the output array.
    for (var i = 1; i < k; ++i) {
        c[i] = c[i] + c[i - 1];
    }
    
    // Position the items in the output array based on the
    // running count calculated previously.
    // By iterating over the input array from end to start,
    // we guarantee that items are added to the output array
    // from the rightmost side first, hence the algorithm is
    // stable.
    for (var j = a.length - 1; j >= 0; --j) {
        
        var number = a[j];
        var digit = ~~(number / Math.pow(10, pos)) - ~~(number / Math.pow(10, pos + 1)) * 10;

        b[c[digit] - 1] = a[j];
        c[digit]--;
    }
}