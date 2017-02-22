/* @flow */
//https://flowtype.org/docs/five-simple-examples.html#dynamic-code


//アノテーションがついていないのにエラーになる
(function (){
    function foo(x) {
        return x.length;
    }
    var res = foo('Hello') + foo(42);
})
