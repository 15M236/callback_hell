function function1(init) {
    return init+1
}

function function2(init) {
    return init+2
}

function function3(init) {
    return init+3
}

function doSomething() {
    let x = 0 ;
    x = function3(function2(function1(x)))
    console.log(x)
}

doSomething()