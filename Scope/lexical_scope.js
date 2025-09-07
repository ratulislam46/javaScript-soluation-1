
function outer() {
    let outerVar = "I am outer";

    function inner() {
        console.log(outerVar);
    }
    inner()
}
outer();

console.log(outerVar);

inner();


// output
// 1. I am outer 