//using frequency counter

function validAnagram(str1, str2) {
    if(str1.length != str2.length) return false;
    let frequencyCounter1 = {};
    let frequencyCounter2 ={};
    for(let i in [...str1]){
     frequencyCounter1[i] = (frequencyCounter1|| 0) +1;
    }

    for(let i in [...str2]){
     frequencyCounter2[i] = (frequencyCounter2|| 0) +1;
    }

    for(let key in frequencyCounter1) {
        if(!frequencyCounter2[key] || frequencyCounter1[key] != frequencyCounter2[key]) return false;
    }
    return true;
}