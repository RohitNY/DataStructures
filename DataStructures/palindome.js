function isPalindrome(str){
    if(str.length <=0) return true;
    let left = 0;
    let right = str.length -1;
    function check(str, left, right){
        console.log(str, left, right);
        if(left >= right ) return true;
        if(str[left] != str[right]) return false;
        return check(str, ++left, --right);
    }
    return check(str, left, right);
}


function someRecursive(arr, callback){
    console.log(arr);
    if(arr.length == 0) return false;
    console.log(callback(arr[0]));
    return callback(arr[0]) || someRecursive(arr.slice(1), callback);
  // add whatever parameters you deem necessary - good luck!
}


