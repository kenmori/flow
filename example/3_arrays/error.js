/* @flow */
//https://flowtype.org/docs/five-simple-examples.html#nullable-types

function total (numbers: Array<number>){
    var result = 0;
    for (var i = 0; i < numbers.legth; i++) {
        result += numbers[i];
    }
    return result;
}

total([1, 2, 3, 'hello']);