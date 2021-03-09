import { run, randInt } from '../utils/index.js';
import { ListNode } from './ListNode.js'
//Answer1：
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    /* js 链表如何定义？
    [2,4,3] 对应链表为：h1 = {2, m1}, m1 = {4, m2}, m2 = {3} , l1 = h1
    [5,6,4] 对应链表为：h2 = {5, n1}, n1 = {6, n2}, n2 = {4} , l2 = h2
    //演绎：
    sum.val = l1.val + l2.val + carry = 2 + 5 + 0 = 7
    sum.next.val = l1.next.val + l2.next.val + carry = 4 + 6 + 0 = 10 % 10 = 0, carry = 1
    sum.next.next.val = l1.next.next.val + l2.next.next.val + carry = 3 + 4 + 1 = 8
    */
    let n1 = l1, n2 = l2;
    let sum = new ListNode(), s = sum, carry = 0;
    while(1){
        let v1 = n1 ? n1.val : 0;
        let v2 = n2 ? n2.val : 0;
        //相加
        s.val = v1 + v2 + carry;
        //获得进位
        if(s.val > 9) {
            s.val %= 10;
            carry = 1;
        }else{
            carry = 0;
        }
        //进入下一层循环
        if( (n1 && n1.next) || (n2 && n2.next) || carry){
            s = s.next = new ListNode();
            n1 = n1 && n1.next;
            n2 = n2 && n2.next;
        }else{
            break;
        }
    }
    return sum;
};

//Answer1 代码简化：
var addTwoNumbers = function(l1, l2) {
    let n1 = l1, n2 = l2;
    let sum = new ListNode(), tmp = sum, carry = 0;
    while(n1 || n2 || carry){
        let v1 = n1 ? n1.val : 0;
        let v2 = n2 ? n2.val : 0;
        //相加
        let s = v1 + v2 + carry;
        //获得进位
        carry = s > 9 ? 1 : 0;
        //进入下一层循环
        tmp = tmp.next = new ListNode(s % 10);
        n1 = n1 && n1.next;
        n2 = n2 && n2.next;
    }
    return sum.next;
};

/* 开始测试
--------------------------------------------------- */
//生成测试参数
function createParams(len){
    let l1 = new ListNode(randInt(1)), l2 = new ListNode(randInt(1));
    let n1 = l1, n2 = l2;
    for(let i = 1; i < len; i++){
        n1 = n1.next = new ListNode(randInt(1));
        n2 = n2.next = new ListNode(randInt(1));
    }
    return {l1, l2}
}

//运行测试
const Len = 3;
let {l1, l2} = createParams(Len);
console.log(l1.toArray(), l2.toArray());// Len 过大时建议注释本句
let result = run(()=> addTwoNumbers(l1, l2));
console.log('Result: ', result.toArray());// Len 过大时建议注释本句
