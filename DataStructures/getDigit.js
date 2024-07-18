function getDigit(num, place) {
    return Math.floor(num / Math.pow(10,place))%10
}

function digitCount(num) {
    return Math.floor(Math.log10(num)) +1;
}

function mostDigits(arr){
    let max =0;
    for(i=0;i<arr.length;i++){
       max= Math.max(digitCount(arr[i], max))
    }
    return max;
}


var preorder = function(root) {
    let result= [];
    preorderNodes = (node) =>{
        result.push(node.val);
        if(!node.children) return;
        
        for(let child of node.children){
            
            if(child)preorderNodes(child);
        }
        
    }
    preorderNodes(root);
    return result
};