function radixSort(arr) {
    let maxDigits = mostDigits(arr);
    for (var k = 0; k < maxDigits; k++) {
        let digitBuckets = Array.from({
            length: 10
        }, ()=>[])
        for (i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], k);
            digitBuckets[digit].push(arr[i]);
        }
        arr = [].concat(...digitBuckets);
    }
    return arr;
}

function getDigit(num, place) {
    return Math.floor(num / Math.pow(10, place)) % 10
}

function digitCount(num) {
    return Math.floor(Math.log10(num)) + 1;
}

function mostDigits(arr) {
    let max = 0;
    for (i = 0; i < arr.length; i++) {
        max = Math.max(digitCount(arr[i], max))
    }
    return max;
}
