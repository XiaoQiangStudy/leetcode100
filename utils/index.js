import chalk from 'chalk'; //用来变更node控制台颜色
import { performance } from 'perf_hooks' //用来分析性能

export const colors = chalk;

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
