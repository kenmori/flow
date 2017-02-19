/* @flow */


////1
// error code
function foo(x: string, y: number): string {
    return x.length * y;
}

foo("Hello", 42);

/// fix
function foo(x: string, y: number): number {
    return x.length * y;
}

foo("Hello", 42);


////2

//error code
(function(){
    function length(x){
        return x.length;
    }
    var total = length('Hello') + length(null);
})

////fix
(function(){
    function length(x){
        if( x !== null){
            return x.length;
        } else {
            return 0;
        }
    }
    var total = length('Hello') + length(null)
})

//Flow knows that this code is now safe
/////