import chalk from 'chalk'; //用来变更node控制台颜色
import { performance } from 'perf_hooks' //用来分析性能

export const colors = chalk;

/* 通用执行函数，用于性能分析
* @param {function} func 
* @param {string} title
* @return {object}
*/
export function run(func, title=''){
    let start = performance.now();
    //run start
    let result = func();
    //run end
    let end = performance.now();
    let time = end - start;
    if(title !== ""){
        console.log(title + " ---------------------------");
    }
    console.log("运行结果：", result);
    console.log(`耗时：${colors.hex('#FF9900')(time)} 毫秒`);
    console.log("");
    return result;
}

/* 返回指定位数的随机整数
* @param {int} size 位数
* @return {int}
*/
export function randInt(size){
    if(typeof(size) !== 'number' || size <= 0) return 0;
    return parseInt(Math.random() * Math.pow(10, size));
}
