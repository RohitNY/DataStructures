function fib(n) {
    if(n==1) return [0];
    if(n==2) return [0,1];
    var first = 0;
    var second = 1;
    var result = [0,1];
    for(var i =2; i <=n;i++){
        var val = first+second;
        result.push(val);
        first= second;
      second = val;
    }
    return result;
}

function fib2(n, arr =[]) {
    if(arr[n]) return arr[n];
    if(n<=1) return n;
    arr[n]= fib2(n-1, arr) + fib2(n-2, arr);
    return arr[n];
}

const pyramid2 = (n, row = 0) => {
    if(row >= n) return;
    const column = 2*n-1;
    const mid = Math.floor(column/2);
    const left = mid-row;
    const right = mid + row;
    let level ='';
    for(let col=0;col<column; col++)
     level += left <=col && right >= col ? "#" : " ";
    console.log(level);
    pyramid2(n, row + 1);
}

var lengthOfLongestSubstring = function(s) {
  let result = [];
    let max = "";
    s.split('').forEach(c => {
        let index = result.indexOf(c);
        if(index>=0){
            if(result.length > max.length) max = result.join("");
            result = result.slice(index+1);
        }
        result.push(c);
    });
    return max;
};


var isPalindrome = function(x) {
    let reverse = "";
    x.split('').forEach(c => {
        reverse = c+reverse; 
    });
    return x.toString() === reverse
};

var romanToInt = function(s) {
    let map = {"I":1, "V": 5, "X":10,"L":50,"C":100,"D":500,"M":1000};
    let result = 0;
    s.split('').forEach(c => {
        result += map[c];
    });
    return result;
};

var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let occuranceS = {};
    let occuranceT = {};
    
    for(let i=0;i<s.length;i++){
        occuranceS[s[i]] =  (occuranceS[s[i]] ||0) + 1;
        occuranceT[t[i]] =  (occuranceT[t[i]] ||0) + 1;
    }
    let sKeys = Object.keys(occuranceS);
    let tKeys = Object.keys(occuranceT);
    if(sKeys.length !== tKeys.length) return false;
    
    return sKeys.every(k => {
        let val = tKeys[k] && sKeys[k] === tKeys[k];
        return val;   
    });
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    if(k === 1) return [nums.sort()[0]];
    let frequency = nums.reduce((result, num) => {
        result[num] = (result[num]||0) +1;
        return result;
    },{});
    //lfrequency = frequency.sort((a,b) => frequency[a] < frequency[b])
    let keys = Object.keys(frequency);
    keys.sort((a,b) => frequency[a] < frequency[b])
    let result = []
    for(let i=0;i<k;i++){
        result.push(keys[i])
    }
    return result;
};

function titleCase(str) {
  let arr = [];
  str.split(' ').forEach(s => {
    console.log(s)
    arr.push(s.splice(0,1,s[0].toUpperCase()))
  });
  return arr.join(' ');
}

titleCase("I'm a little tea pot");