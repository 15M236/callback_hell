
function function1(init, callback) {
    console.log("top1")
    callback(init + 1)
}

function function2(init, callback) {
    console.log("top2")
    callback(init+2)
}

function function3(init, callback) {
    console.log("top3")
    callback(init+3)
}

function doSomething() {
    let x = 0 ;
    function1( x , (x) => {
        console.log(x)
        function2( x , (x) => {
            console.log(x)
            function3( x , (x) => {
                console.log(x)
            })
        })
    })
}

doSomething()