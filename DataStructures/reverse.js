function reverse(str, result="") {
    if (str.length <= 0)
        return result;
    result = str.slice(0, 1) + result;
    console.log(result, str);
    return reverse(str.slice(1), result);
    // add whatever parameters you deem necessary - good luck!
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

var swapPairs = function(head) {
    if (!head || !head.next)
        return head;
    let node = head;
    let nextNode = head.next;
    node.next = nextNode.next;
    head = nextNode;
    head.next = node;
    swapPairs(node.next);
    return head;
};

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var removeElement = function(nums, val) {
    let n = nums.length;
    let i = 0;
    while (i < n) {
        if (nums[i] == val) {
            nums[i] = nums[n - 1];
            // nums.pop();
            n--;
        } else {
            i++;
        }
    }
    return nums;
};
