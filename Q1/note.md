# 第 1 题 两数之和
>难度：简单
## 题干
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

你可以按任意顺序返回答案。

示例 1：
```
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```
示例 2：
```
输入：nums = [3,2,4], target = 6
输出：[1,2]
```
示例 3：
```
输入：nums = [3,3], target = 6
输出：[0,1]
```

提示：
2 <= nums.length <= 103

-109 <= nums[i] <= 109

-109 <= target <= 109

只会存在一个有效答案

> 来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

---

## 作答
解法一：直接使用暴力遍历，需要套两层循环，时间复杂度为 O(n^2)；
```js
var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; i++){
        for(var j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
    return [];
};
```
解法二：采用哈希表，只需一层循环，时间复杂度为 O(n)，
        哈希表的标准用法是使用 Map，但在此题中，由于 key 为整型，且仅涉及查找操作，用 Object 模拟的 Map，会比标准 Map 稍快

**使用标准 Map 作为哈希表**
```js
var twoSumMap = function(nums, target) {
    var map = new Map();
    for(var i = 0; i < nums.length; i++){
        if(map.has(target - nums[i])){
            return [map.get(target - nums[i]), i];
        }
        map.set(nums[i], i);
    }
    return [];
};
```
**使用 Object 作为哈希表**
```js
var twoSumObj = function(nums, target) {
    var map = Object.create(null);
    for(var i = 0; i < nums.length; i++){
        if(map[target - nums[i]] !== undefined){
            return [map[target - nums[i]], i];
        }
        map[nums[i]] = i;
    }
    return [];
};
```

## 实验结果
当 Len = 100000, 得到以下结果：

暴力遍历，耗时：12399.070360988379 毫秒

借助 Map，耗时：31.736593008041382 毫秒

借助 Object，耗时：11.32388499379158 毫秒