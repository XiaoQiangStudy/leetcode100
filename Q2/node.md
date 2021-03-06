# 第 2 题 两数相加
>难度：中等
## 题干
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例 1：

![示例 1](./files/addtwonumber1.jpg)
```
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
```
示例 2：
```
输入：l1 = [0], l2 = [0]
输出：[0]
```
示例 3：
```
输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]
```

提示：

每个链表中的节点数在范围 [1, 100] 内

0 <= Node.val <= 9

题目数据保证列表表示的数字不含前导零


>来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-two-numbers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

---

## 作答

该题须注意的地方有：
* 链表的定义
* 进位处理
* 由于进位，答案可能比最大的加数多出一位，所以进位存在时循环要继续

以下是作答，只有一层循环，时间复杂度是 O(n)
```js
var addTwoNumbers = function(l1, l2) {
    let n1 = l1, n2 = l2;
    let tmp = sum = new ListNode(), carry = 0;
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
```