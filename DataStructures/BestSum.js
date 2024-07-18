const bestSum = (targetSum, numbers, memo ={}) => {
   if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;
    let shortest = null;
    for(const num of numbers) {
        let remainder = targetSum - num;
        const remainderCombo = bestSum(remainder, numbers, memo);
        if(remainderCombo !==null) {
            const combo = [...remainderCombo, num];
            if(shortest==null || combo.length < shortest.length){
                shortest = combo;

            }
        }
    }
    memo[targetSum] = shortest;
    return shortest;
}

bestSum(8,[1,3,10,25])




const canConstruct =(targetString, strings, memo ={}) => {
    if(targetString in memo) return memo[targetString];
    if(targetString === "") return true;

    for(const str of strings) {
        if(targetString.startsWith(str)){
            const remainder = targetString.slice(str.length);
            if(canConstruct(remainder, strings, memo)) {
                memo[targetString] = true;
                return true;
            }
        }
    }
    memo[targetString] = false;
    return false;
}

canConstruct("skateboard",["ska","bo","ard", "t","boo","e"])