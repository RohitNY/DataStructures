"use strict";
//console.log(this)

function logthis(x, y) {
console.log(this);
    console.log(x,y)
}


const obj = {
    num:10,
}
var bindLog = logthis.bind(obj,10,20)

bindLog(30)

logthis.call(obj, 1,2)

logthis.apply(obj, [10,20])


function* genNumbers(){
    yield 1;
    yield 2;
    return 3;
}
const generator = genNumbers();
console.log(generator.next())
console.log(generator.next())




