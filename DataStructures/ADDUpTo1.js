function addUpto(n) {
    let total =0;
    for(var i=1; i<=n;i++) {
        total +=i;
    }
    return total;
}

let t1 = performance.now();
addUpto(1000000000);
let t2 = performance.now();
console.log(`Time: ${(t2-t1)/1000} seconds`)