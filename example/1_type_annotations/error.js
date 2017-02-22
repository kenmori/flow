/* @flow */
//https://flowtype.org/docs/five-simple-examples.html#adding-type-annotations

// error code
function foo(x: string, y: number): string {
    return x.length * y;
}

foo("Hello", 42);
