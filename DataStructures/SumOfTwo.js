function SumOfTwo(arr, target) {
    let seen = {};
    for (var i = 0; i < arr.length; i++) {
        const val = target - arr[i];
        if (seen.hasOwnProperty(val))
            return [i, seen[val]];
        seen[arr[i]] = i;
    }
    return null;
}
