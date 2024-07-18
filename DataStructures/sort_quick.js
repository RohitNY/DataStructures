function quickSort(arr, start=0, end=arr.length - 1) {
    if (start < end) {
        pivotIndex = pivot(arr, start, end);
        quickSort(arr, start, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, end);
    }
    return arr;
}

function swap(arr, i, j) {
    [arr[j],arr[i]] = [arr[i], arr[j]];
}

function pivot(arr, start=0, end=arr.length - 1) {
    let pivot = arr[start];
    let swapIndx = start;
    for (var i = 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIndx++;
            swap(arr, swapIndx, i);
            console.log(arr, swapIndx);
        }
    }
    swap(arr, start, swapIndx);
    return swapIndx;
}
