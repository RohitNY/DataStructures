const fib = (n, mem =[0,1]) => {
    console.log(`%c${n}, %c${mem}`,"color:red","color:blue");
    if(typeof mem[n] !== 'undefined')return mem[n];
    console.log(`%c Calculating fib for ${n}`,"color:green")
    mem[n] = fib(n-1, mem) + fib(n-2, mem);
    return mem[n];
}