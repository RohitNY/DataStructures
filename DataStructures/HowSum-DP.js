const howSum = (targetSum,numbers,memo={})=>{
    if (targetSum === 0)
        return [];
    if (targetSum < 0)
        return null;
    if (targetSum in memo)
        return memo[targetSum]
    for (const num of numbers) {
        let reminder = targetSum - num;

        const vals = howSum(reminder, numbers, memo);
        if (vals !== null) {
            memo[targetSum] = [...vals, num]
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
}
;

howSum(8, [2, 3, 5])
howSum(300, [2, 14])
