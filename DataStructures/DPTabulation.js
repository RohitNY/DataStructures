const fib =(n) => {
    let arr = new Array(n+1).fill(0);
    arr[0] = 0;
    arr[1] = 1;
    for(i=2;i<=n;i++) {
        arr[i] = arr[i-1] +arr[i-2]
    }
    return arr[n];
}

const gridTraveler = (row, col) => {
    let arr = new Array(row+1).fill().map(() =>new Array(col+1).fill(0));
   arr[0][0] = 1
    console.table(arr);
}

const canSum = (targetSum, numbers) => {
    const table = new Array(targetSum +1).fill(false);
    //seed value - if target is 0 then it is always possible to generate 0 by not taking anything
    table[0] = true;
    for(let i=0;i<= table.length;i++){
        if(table[i]===true){
            for(const num of numbers){
                const key = i+num;
                if(key in table) table[key] = true;
            }
        }
    }
    console.log(table)
    return table[targetSum];
}

canSum(7,[5,3,4,7])


const bestSum = (targetSum, numbers) => {
  let table = new Array(targetSum + 1).fill(null);
  table[0] = [];
  for (let i = 0; i <= table.length; i++) {
    if (table[i] !== null) {
      for (const num of numbers) {
        let key = i + num;
        if (
          key in table &&
          (table[key] == null || table[i].length + 1 < table[key])
        ) {
          table[key] = [...table[i], num];
        }
      }
    }
  }
  return table[targetSum]
};

bestSum(8,[2,3,5])