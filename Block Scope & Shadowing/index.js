if(true){
    // compound statement (Block)
    var a = 10;
    console.log(a);
}

{
    var a = 10;         // stored in global scope   (we can use "var" outside the block scope)
    let b = 20;         // stored in block scope    (we cannot use "let" outside the block scope)
    const c = 30;       // stored in block socpe    (we cannot use "const" outside the block scope)

    console.log(a);     // 10
    console.log(b);     // 20
    console.log(c);     // 30
}

console.log(a);     // 10
console.log(b);     // error: not defined
console.log(c);     // error: not defined


var x = 100;
let y = 200;    // this is in the global scope
{
    var x = 10;     // 10 (shadowed)
    let y = 20;     // this is in the block scope
    const z = 30;

    console.log(x);     // 10
    console.log(y);     // 20   (this refers to block scope)
}

console.log(x);     // 10
console.log(y);     // 200  (Called from global scope)


/*Lexical Block Scope*/ 
const p = 10;
{
    const p = 100;      // this is in the block scope 
    {
        const p = 200;      // this is in the block scope (different than "p=100" scope) (It will create new block scope)
        console.log(p);     // 200
    }
    console.log(p);     // 100
}
console.log(p);     // 20




/*

    Block:
        Block is a Compound Statements
        We group multiple statements together in a block so that we can use it when JS expects one statement

    Block Scope:
        All variables and functions we can access inside the block
        
        let & const are "block scoped"

*/