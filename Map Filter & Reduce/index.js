const arr = [5, 1, 3, 2, 6];


// -------------------- Map -------------------- //
function double(x){
    return x*2;
}

function triple(x){
    return x * 3;
}

function binary(x){
    return x.toString(2);
}

const output = arr.map(double);
console.log(output);

const output2 = arr.map(triple);
console.log(output2);

const output3 = arr.map(binary);
console.log(output3);


// Another Way to write //
/* 

const output3 = arr.map(function binary(x){
    return x.toString(2);
});
console.log(output3); 

const output3 = arr.map((x) =>
    x.toString(2)
);
console.log(output3); 

*/


// -------------------- Filter -------------------- //

function isOdd(x){
    return x % 2;
}

function isEven(x){
    return x % 2 === 0;
}

const output4 = arr.filter(isOdd);
console.log(output4);

const output5 = arr.filter(isEven);
console.log(output5);

// Another Way to write //
/* 

const output4 = arr.filter(function isOdd(x){
    return x % 2;
});
console.log(output4);


const output4 = arr.filter((x) => x % 2);
console.log(output4);

*/


// -------------------- Reduce -------------------- //

// Sum of All Numbers
const output6 = arr.reduce(function (acc, curr){        // acc = accumulator, curr = current
    acc = acc + curr;
    return acc;
}, 0);      // 0 is for accumulator initialize (acc = 0)
console.log(output6);


// Max Value
const output7 = arr.reduce(function (max, curr){
    if(curr > max){
        max = curr;
    }
    return max;
}, 0);      // 0 is for max initialize (max = 0)
console.log(output7);




// -------------------- More Examples -------------------- //

const users = [
    { firstName: "Ayush", lastName: "Prajapati", age: 22},
    { firstName: "Drashti", lastName: "Kansare", age: 22},
    { firstName: "Anand", lastName: "Suthar", age: 21},
    { firstName: "Harsh", lastName: "Patel", age: 24}
];

// List of Full Name
const fullName = users.map((x) => x.firstName + " " + x.lastName);
console.log(fullName);


// How many people have same age
const age = users.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});     // At the start our acc is empty
console.log(age);


// Find first name of all users whose age is under 24
const underAge = users.filter((x) => x.age < 24).map((x) => x.firstName);
console.log(underAge);

const underAge2 = users.reduce(function (preVal, currVal){
    if(currVal.age < 24){
        preVal.push(currVal.firstName);
    }
    return preVal;
}, {});
console.log(underAge2);