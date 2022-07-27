// 1. Function Statement (Also known as Function Delclaration) //
a();        // this will run
function a(){
    console.log("a called");
}
a();        // this will run



// 2. Function Expression //
b();        // this will give us error because it cannot find "b"
var b = function(){
    console.log("b called");
}
b();    // this will run


// 3. Anonymous Function //
/* function () {
    // Anonymous function are used when the functions are used as values
} */


// 4. Named Function //
var c = function xyz(){
    console.log(xyz);       // we can use here "xyz"
}
xyz();      // we cannot use here "xyz" because it is local variable, so it must be used in the function itself



// 5. First Class Function (Also known as First Class Citizen) //
/* 
    First Class Function:
        - The ability of functions to be used as values and can be passed as an argument to another functions 
          and can be returned form the functions this ability known as First Class Function in JavaScript.
        - Ability to be used like values
*/
var d = function(param1){
    return function pqr() {

    }
}
console.log(b());