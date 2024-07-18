function mergeSort(arr){
    if(arr.length <=1) return arr;
    var mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return mergeArrays(left, right);
}




function mergeArrays(arr1, arr2) {
    var i = 0
      , j = 0;
    var arr3 = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            arr3.push(arr1[i]);
            i++;
        } else if (arr2[j] < arr1[i]) {
            arr3.push(arr2[j]);
            j++;
        } else {
            arr3.push(arr1[i]);
            arr3.push(arr1[i]);
            i++;
            j++;
        }
    }
    while (i < arr1.length) {
        arr3.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        arr3.push(arr2[j]);
        j++;
    }
    return arr3;
}
