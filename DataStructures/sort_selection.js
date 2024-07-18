function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var smallestInd = i;
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i])
                smallestInd = j;
        }
        if (smallestInd != i)
            [arr[i],arr[smallestInd]] = [arr[smallestInd], arr[i]];
    }
    return arr;
}
