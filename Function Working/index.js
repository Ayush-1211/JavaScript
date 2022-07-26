// Before executing the program, Global Execution Context will be created and Push this in the Call Stack
// In the Global Execution Context there are two parts: 1) Memory   2) Code

var x = 1;
a();    // When this line execute it will go to that function & create its new Execution Context inside the Global Execution Context and Push this Context in the Call Stack
b();
console.log(x);     // After executing above all functions this line will be execute 

function a(){       
    var x = 10;
    console.log(x);     // After executing this function Execution Context for this function will be pop out from the Call stack
}

function b(){
    var x = 100;
    console.log(x);
}

// After Executed all the lines Global Execution Context will be pop out from the Call stack



/*
        Global Object:
            Anything outside the function is in the Global Space.
            Anything defined outside the function is called Global Object.
        
        This & Window:
            This both are already defined in the Global Space of JS engine. 
            Both are same. (this === window) --> (output: true)

            Syntax:
                console.log(window.x);
                console.log(this.x);
*/