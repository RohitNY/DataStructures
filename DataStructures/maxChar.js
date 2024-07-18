function maxChar(str) {
    const container = {};
    let max = 0;
    let maxChar =null;
    str.split('').forEach(element => {
        container[element] = container[element] || 0;
        container[element] = container[element]+1;
        if(element !== maxChar && container[element] > max) {
            max = container[element];
            maxChar = element
        }
    });
    return maxChar;

    return Object.keys(container).reduce((result, key) => {
        if(result == '') return key;
        if(container[key] > container[result]) result = key;
        return result;
    },'');
}