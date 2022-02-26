// callback fn -> when we pass a function inside another function as a argument
            // -> the argument function is callback

// let x = function(){
//     console.log("This is X function");
// }

// let y = function (a) {
//     console.log("This is Y function");
//     console.log(a);
// }

// y();
// y(10);
// y(x());

let a = function(num1, num2){
    return num1+num2;
}
let b = function(num1, num2){
    return num1-num2;
}
let c = function(num1, num2){
    return num1*num2;
}
let d = function(num1, num2){
    return num1/num2;
}

let calc = function(num1, num2, op){
    return op(num1, num2);
}

var x = 50, y = 20;

console.log(`add of ${x} & ${y} = ${calc(x, y, a)}`);
console.log(`sub of ${x} & ${y} = ${calc(x, y, b)}`);
console.log(`mul of ${x} & ${y} = ${calc(x, y, c)}`);
console.log(`div of ${x} & ${y} = ${calc(x, y, d)}`);