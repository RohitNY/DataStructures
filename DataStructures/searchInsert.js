var searchInsert = function(nums, target) {
    let left = 0;
    let right= nums.length - 1;
    let mid = 0;
    while(left <= right) {
        mid = Math.floor((right - left)/2 + left);
        if(nums[mid] == target) return mid;
        if(nums[mid] < target) { left = mid + 1;}
        else { right = mid - 1;}
    }
    
        if(nums[mid] < target) mid++;
        else if(mid > 0) mid--;
    
    return mid;
};

var nextGreatestLetter = function(letters, target) {
    let low = 0;
    let high = letters.length - 1;
    while(low <= high) {
        let mid = Math.floor(low + (high - low)/2);
        if(letters[mid] == target) return letters[mid + 1];
        if(letters[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return letters[low % letters.length];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let pos = findPos(nums, target);
    if(pos == -1) return [-1, -1];
    let left = pos;
    let right = pos;
    while(left >= 0 && nums[left] == target) {
        left--;
    }
    while(right < nums.length && nums[right] == target) right++;
    return[left, right];
};

var findPos = function(nums, target) {
    let low = 0;
    let high = nums.length -1;
    let mid;
    while(low <= high) {
        mid = Math.floor(low + (high-low)/2);
        if(nums[mid]== target) return mid;
        if(nums[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
};


var reverse = function(x) {
   let b = x.toString();
    b= [...b];
    let count = 0;
   while(count < b.length) {
       b.unshift(b.pop());
      console.log(b);
       count++;
   }
    return b;
};