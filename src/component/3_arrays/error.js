/* @flow */

function total (numbers: Array<number>){
    var result = 0;
    for (var i = 0; i < numbers.legth; i++) {
        result += numbers[i];
    }
    return result;
}

total([1, 2, 3, 'hello']);