// expectation is input array is sorted
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {console.log(left, right)
        sum = arr[left] + arr[right];
        if(sum==0) return [arr[left], arr[right]];
        if(sum > 0) right--;
        else left++;
    }
    return [arr[left], arr[right]];
}


function sumZero2(arr){
    let left = 0;
    let right = arr.length -1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum ==0) return [arr[left], arr[right]];
        else if(sum > 0) right--;
        else left ++;
    }
}