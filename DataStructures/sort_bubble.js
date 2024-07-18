function bubbleSort(arr) {
    var noSwaps;
    for (var i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (var j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1])
            if (arr[j] > arr[j + 1]) {
                [arr[j],arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwaps = false;
            }

        }
        if (noSwaps)
            break;
    }
    return arr;
}
