function flip(n) {
    const x = [...n.toString()]
   let y= x.map(a => {
        if(Number(a)< 3){a=3;return;}
    });
   return Number(y.join(''))
}