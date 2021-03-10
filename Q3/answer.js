import { run } from '../utils/index.js'
// Answer1：暴力求解（借助 indexOf），时间复杂度 O(n^2)
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring1 = function(s) {
    let len = 0, subStr = "";
    for(let i = 0; i < s.length; i++){
        let c = s[i];
        let index = subStr.indexOf(c);
        if(index >= 0){
            //stop match： 如果存在重复字符，那么就在子串中把该字符及其前的字符全部删掉，再加上当前字符，形成新的子串
            subStr = subStr.substr(index + 1) + c;
        }else{
            subStr += c;
        }
        len = Math.max(subStr.length , len);//保存最大长度
    }
    return len;
};

// Answer2：滑动窗口，时间复杂度 O(n)
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring2 = function(s) {
    let len = 0, subSet = new Set(), rk = -1;
    for(let i = 0; i < s.length; i++){
        //窗口整体每向右滑动一次，set 移出一位
        if(i > 0){
            subSet.delete(s[i-1]);
        }
        //右指针不断向右移动，直到出现重复字符或到字符串结尾，期间不断向 set 插入字符
        while(rk+1 < s.length && !subSet.has(s[rk+1])){
            subSet.add(s[rk+1]);
            rk++;
        }
        len = Math.max(len, rk - i + 1);
    }
    return len;
};

/* 开始测试
--------------------------------------------------- */
//生成测试参数
function createParams(len){
    let factor = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !@#$%^&()1234567890+-={}|[]\\;':\",./<>?.********";
    let result = "";
    for(let i = 0; i < parseInt(len/100); i++){
        result += factor;
    }
    return result + factor.substr(0, len%100);
}

//运行测试
const Len = 1000000;
let s = createParams(Len);
run(()=> lengthOfLongestSubstring1(s), "暴力求解");
run(()=> lengthOfLongestSubstring2(s), "滑动窗口");

//实验结果
/* 结果显示 暴力求解 与 滑动窗口 的性能差不多，这可能跟测试参数有关
 * 由于所用字符有限，决定了子串的长度不可能太大(最大92)，这导致了无论采用哪种方法，遍历子串的时间复杂度都是 O(1)
 * 想要对比性能，子串要达到一定的长度。
*/

/* 附加实验：indexOf 查找与 Set.has 查找的性能对比
--------------------------------------------------- */
function createParams2(len){
    let str = "", set = new Set()
    for(let i = 0; i < len-2; i++){
        str += 'o';
        set.add(i);
    }
    str += 'go';
    set.add('g').add('o');
    return {str, set, target: 'g'}
}
//运行测试
const Len2 = 1000000;
let {str, set, target} = createParams2(Len2);
console.log(`测试数据长度：str: ${str.length}, set: ${set.size}`);
run(()=> str.indexOf(target), "String.prototype.indexOf");
run(()=> set.has(target), "Set.prototype.has");

//实验结果：Set.has 的性能要远远高于 indexOf，可以从侧面验证 滑动窗口 的性能要大大优于 暴力求解