// max non adjustent numbers
let largestNonAdjustent =(arr) => {
    if(arr.length <=2) return Math.max(...arr);

    let result =[];
    result[0] = Math.max(0, arr[0])
    result[1] = Math.max(result[0],arr[1])
    for(var i=2; i< arr.length;i++){
        result[i] = Math.max(arr[i] + result[i-2], result[i-1])
    }
    console.log( result);
    return result[result.length -1];
}