/* @flow */
//https://flowtype.org/docs/five-simple-examples.html#nullable-types

(function(){
    function length(x){
        return x.length;
    }
    var total = length('Hello') + length(null);
})
