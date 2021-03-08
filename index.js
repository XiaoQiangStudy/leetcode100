import { colors } from './utils/index.js'
let [,,num] = process.argv;
if(typeof num !== 'undefined'){
    console.log(`运行第 ${num} 题：`);
    import(`./Q${num}/answer.js`);
}else{
    console.error(colors.red("请在运行命令后面输入题目序号！(eg: npm run do 1))"));
}
