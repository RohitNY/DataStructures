// maximum of two numbers without using any if-else statements, branching, or direct comparisons

let productsWithDivision = (arr) => {
    let r=1;
    let totalProduct  = arr.forEach((a) => r *=a); 
    let result =[];
    arr.forEach((a) => result.push(r/a));
    return result;
}