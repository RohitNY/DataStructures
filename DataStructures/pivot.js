function swap(arr, i,j){
    [arr[j], arr[i]] = [arr[i], arr[j]];
}

function pivot(arr, start =0, end=arr.length+1){
    let pivot  = arr[start];
    let swapIndx = start;
    for(var i=1;i< arr.length;i++){
        if(pivot > arr[i]){
            swapIndx++;
            swap(arr, swapIndx,i);
            console.log(arr, swapIndx);
        }
    }
    swap(arr, start, swapIndx);
    return arr;
}