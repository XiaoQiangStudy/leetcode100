/**
 * Definition for singly-linked list.
 */
export function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

ListNode.prototype.toArray = function(){
    let list = this;
    let arr = [];
    while(list){
        arr.push(list.val);
        list = list.next;
    }
    return arr;
}