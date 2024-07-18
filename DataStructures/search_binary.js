function binarySearch(arr, val){
    var left =0;
    var right = arr.length -1;
    while(left<right) {
       
        var mid = Math.floor(left +(right-left)/2);
        mid2 = Math.floor((left+right)/2);
        console.log(left, right, mid,mid2, arr[mid])
        if(arr[mid] == val) return mid;
        else if(arr[left] == val) return left;
        else if(arr[right] == val) return right;
        else if(arr[mid] > val) right = mid-1;
        else left = mid+1;
    }
    return -1;
  // add whatever parameters you deem necessary - good luck!
}