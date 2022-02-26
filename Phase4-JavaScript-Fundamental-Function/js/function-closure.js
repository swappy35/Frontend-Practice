// closure : Nested function defined in another function.
// closure has access to three diff scope chain.
// 1. inner variable/parameter, 2. outer variable/parameter, 3. gobal variable/parameter

let firstname = "John";

function fullname() {
    let middlename = "William";

    // nested function or closure
    function combine() {
        let lastname = "Smith";
        return `${firstname} ${middlename} ${lastname}`;
        
    }
    return combine();
}
let response = fullname();
console.log(response);