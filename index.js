// const { spy } = require("chai");



// receivesAFunction(callback): receives a function and calls it
function receivesAFunction (spy) {
    spy()
}

// returnsANamedFunction()
// const returnsANamedFunction = function () {

// }
function returnsANamedFunction() {
    return function named (){
    }
}

// returnsAnAnonymousFunction():

function returnsAnAnonymousFunction() {
     return (function() {
    
    })
}


