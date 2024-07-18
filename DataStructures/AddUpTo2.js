addUpTo2 = (n) => n*(n+1)/2;

let t1 = performance.now();
addUpTo2(1000000000);
let t2 = performance.now();
console.log(`Time: ${(t2-t1)/1000} seconds`)