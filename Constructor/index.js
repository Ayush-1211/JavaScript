function Counter(){     // constructor function name start with Capital letter (Good Way to write)
    var count = 0;
    this.incrementCounter = function () {
        count++;
        console.log(count);
    }
    this.decrementCounter = function () {
        count--;
        console.log(count);
    }
}

var counter1 = new Counter();   // use "new" keyword to use constructor function

counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();