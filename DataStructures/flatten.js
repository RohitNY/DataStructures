function flatten(arr, result =[]){
    console.log(arr, result);
    if(arr.length == 0) return result;
    if(Array.isArray(arr[0])) result = result.concat(arr[0]);
    else result.push(arr[0]);
    return flatten(arr.slice(1), result);
  // add whatever parameters you deem necessary - good luck!
}
