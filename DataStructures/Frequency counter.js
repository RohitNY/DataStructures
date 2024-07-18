//method to accept two arrays 
//and compare their values such that second array contains squared values 
//the frequency should be same

//same([1,2,3],[1,4,9]) should return true
//same([1,2,3],[4,9,1]) should return true
//same([1,2,1],[1,4]) should return false

function same(arr1, arr2) {
    // compare number of elements, if its different return false
    if (arr1.length !== arr2.length)
        return false;

    // create frequency counter objects for each array, that contains count of each item in array
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    // compare these frequency counter objects
    for (let key in frequencyCounter1) {
        //2nd obj should contain key **2 for each key in 1st obj
        if (!(key ** 2 in frequencyCounter2))
            return false;
        //Also they have the same frequency
        if (frequencyCounter1[key] !== frequencyCounter2[key ** 2])
            return false;
    }
    return true;
}
