function x(){
    var a = 10;
    function y(){
        console.log(a);     // this will store in a closure
    }
    y();
}
x();


function a(){
    var x = 20;
    function b(){
        console.log(x);
    }
    return b;
}
var c = a();
console.log(c);
// global execution context is delete at this line
c();        // but if we run this then it will give us value "20", because when we return the function it will still sotred the value after the global execution context will end




/*

    Closures:
        Function along with its lexical scope/environment bundles togather forms a closure.

        For Example:
            Function "y" is close around with Function "x", so "y" can access the variables of the Function "x".

    Uses of Closure:
        - Module Design Pattern
        - Currying
        - Functions like once
        - Memoize
        - Maintaining state in async world
        - setTimeOut
        - Iterators and many more....

*/