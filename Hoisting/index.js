getName();      // work
console.log(x); // error: x not defined
getName2();     // error: because this is not a function
getName3();     // error: because this is not a function

var x = 7;

function getName(){
    console.log("Namaste Javascript");
}

var getName2 = () => {
    console.log("Namaste Javascript");
}

var getName3 = function() {
    console.log("Namaste Javascript");
}

