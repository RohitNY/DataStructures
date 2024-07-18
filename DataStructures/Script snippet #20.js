function capitalizeFirst (arr, result =[]) {
    if(arr.length ==0) return result;
  // add whatever parameters you deem necessary - good luck!
  console.log(arr, result);
  result.push( arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
  arr.shift()
  return capitalizeFirst(arr, result);
}