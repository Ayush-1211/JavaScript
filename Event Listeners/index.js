function attachEventListeners() {   // this is work as closure
    let count = 0;
    document.getElementById("clickMe")
        .addEventListener("click", function xyz() {     // this function is callback function
            console.log("Button Clicked", ++count);
        });
}
attachEventListeners();
