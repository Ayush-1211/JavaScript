// Q.1
function x() {
    var i = 1;
    setTimeout(function () {
        console.log(i);
    }, 3000);
    console.log("Namaste JavaScript");
}
x();


// Q.2
function a() {
    for (var i = 1; i <= 5; i++) {    // this will give us output "6" every time loop will run, 
                                      // because in closure variable "i" will not change it refers all the time when the loop will run
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste JavaScript");
}
a();



// Q.3
function p() {
    for (let i = 1; i <= 5; i++) {    // this will give us correct output because "let" is block scope so whenever loop will run 
                                      // and function calls, it will create new variable everytime instead of refers one variable again and again
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste JavaScript");
}
p();


// Q.4
function q() {
    for (var i = 1; i <= 5; i++) {  // here "var" is work because we create another function "close" so this function will
                                    // work as a "closure". So whenver loop will run "close" function will call and it will
                                    // create "i" variable everytime. So we do not require "let" as a block scope.
        function close(x) {
            setTimeout(function () {
                console.log(x);
            }, x * 1000);
        }
        close(i);
    }
    console.log("Namaste JavaScript");
}
q();