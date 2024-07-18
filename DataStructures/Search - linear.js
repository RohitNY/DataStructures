const linearSearch = (arr, val) => arr.indexOf(val);

const linearSearch2 = (arr, val) => {
    for(let i=0; i< arr.length; i++) {
        if(arr[i] === val) return i;
    }
    return -1;
}

//Big O  - O(n)