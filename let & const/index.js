console.log(a);     // For "let" we must initialize variable otherwise this will give us error (Error)
let a = 10;         
console.log(a);     // accessible
//let a = 100;    // this will give us error because we cannot reinitialize value of object "a" again (Error)


const c = 100;      // const must be assign and initialize at the same time & same line


console.log(b);     // It will store in the Global Space as "undefined" (No Error)
var b = 20;
console.log(b);     
var b = 200;        // this will work (No Error)



/*

    let & const not stored in the Global Space. They both will be stored in a separate space.
    
    window.a --> this command not give us any result because "a" is not in the Global Space (same for "this")

    Note: Always prefer to use "let" and "const"
            const => More Strict
            let   => Strict
            var   => Not Strict
            
    Note: Always try to initialize and declare all the variables on the top of the program
*/
