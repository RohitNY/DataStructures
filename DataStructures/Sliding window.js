function maxSubArraySum(arr, num ) { 
let sum =0;
if(num > arr.length) return sum;
for(var i=0;i<num;i++){
    sum += arr[i];
}

for(var i=num;i<arr.length;i++){
    let temp = sum +arr[i] - arr[i-num];

    sum = Math.max(temp, sum);
}

return sum;
}