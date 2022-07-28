setTimeout(function(){  // this function is callback function
    console.log("Timer");
}, 5000);

function x(y){
    console.log("x");
    y();
}
x(function y(){
    // this is callback function
    console.log("y");
});

/*
        Callback Function:
            If you call one function and pass another function in that function then it is called callback function.
*/ 