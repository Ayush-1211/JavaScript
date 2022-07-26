function a(){
    var b = 10;         // "b" can be accessible in the function "a"
    console.log(x);     // "x" is defined in the Global Space so this is accessible anywhere
    c();
    function c(){
        console.log(b);     // function "c" is in the function "a" so var "b" can be accessible 
        console.log(x);     // accessible
    }
}

a();
var x = 20;
console.log(b);     // var "b" is defined in the function "a" so this can be not accessible



/*

    Lexical Environment:
        Lexical Environment is created when Global Execution Context is created.

        Lexical Environment = Local Memory + Reference of Lexical Environment of Parent

        For Example:
            Function "c" is inside the Function "a", so Lexical Parent of "c" is "a"
            Function "a" is inside the Global Execution Context, so Lexical Parent of "a" is Global Execution Context
            This whole chain of Lexical Environment is called Scope Chain.

*/