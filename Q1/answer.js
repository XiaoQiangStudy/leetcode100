import {run} from '../utils/index.js';
//Answer1: 暴力遍历
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
//Answer2: 借助 Map
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
//Answer3: 借助 Object
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
//Answer3.2: 借助 Object(小优化)
var twoSumObj2 = function(nums, target) {
    var map = Object.create(null);
    var n2;
    for(var i = 0; i < nums.length; i++){
        n2 = map[target - nums[i]];
        if(n2 !== undefined){
            return [n2, i];
        }
        map[nums[i]] = i;
    }
    return [];
};

/* 开始测试
--------------------------------------------------- */
//生成测试参数
function createParams(len){
    let nums = [];
    for(let i = 0; i < len; i++){
        nums.push(i);
    }
    return {nums, target: nums[len-1] + nums[len-2]}
}

const Len = 100000;
let {nums, target} = createParams(Len);
run(()=> twoSum(nums, target), "暴力遍历");
run(()=> twoSumMap(nums, target), "借助 Map");
run(()=> twoSumObj(nums, target), "借助 Object");
run(()=> twoSumObj2(nums, target), "借助 Object（优化）");

export default {}