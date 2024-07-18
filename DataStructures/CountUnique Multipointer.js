function countUnique(arr) {
    if (!arr || arr.length == 0)
        return 0;
    let left = 0;
    let right = 1;
    let count = 1;


    for (left = 0,
    right = 1; right < arr.length; right++) {
        if (arr[left] != arr[right]) {
            left++;
            arr[left] = arr[right];
        }

    }

    return left+1;
}
