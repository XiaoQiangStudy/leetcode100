# 笔记
### 1. 在 NodeJS 中使用 ES Module
* 要在 NodeJS 中使用 ES Module，需要 v13 以上
* NodeJS 默认使用 CommonJS 作为模块管理，若要将 js 文件作为 module 运行，还须在 pakage.json 中添加 `"type": "module"`例如：
```js
{
  "name": "leetcode100",
  "version": "1.0.0",
  "description": "'leetcode hot 100 的刷题笔记'",
  "main": "index.js",
  "type": "module", //添加该配置后即改为使用 ES Module，同时 CommonJS 方式失效
  //...
}
```
### 2. Node 性能分析
NodeJS v8.5.0起，增加了 W3C 规范的 Performance 实现，只不过放在 perf_hooks 模块中，使用时需要引入该模块：
```js
import { performance } from 'perf_hooks'
```
### 3. 如何获取 node 命令的参数
在 js 文件内使用 `process.argv` 可以获取到 node 命令
例如以下代码：
```shell
node index.js --hello --world
```
在 index.js 中可以使用 `process.argv` 获取到整个命令的数组结果：
```js
[
  '/usr/local/bin/node',
  '/本地物理路径/index.js',
  '--hello',
  '--world'
]
```
### 4. 如何改变 NodeJS 控制台文本的颜色
使用 console.log 等函数进行控制台输出，如果想要改变输出文本的颜色，方法跟浏览器的不一样。需要用到特殊控制符 `\x1b[`，后面跟 `数字+m`，对应不同颜色，例如 `\x1b[31m` 代表红色，用下面代码可以输出一段红色的文本：
```js
console.log('\x1b[31m这段文本是红色的\x1b[0m');
```
其中，字符串结尾的 `\x1b[0m` 是终止颜色的应用，重新恢复默认颜色。
用这种方式来控制文本颜色比较麻烦，不过，有很多第三方的库对此进行来封装，方便我们使用，chalk 就是其一：
```shell
# 安装
npm i chalk -D
```
```js
//使用示例
import chalk from 'chalk';
console.log(`输出：${colors.red("红色文本")}`);
console.log(`输出：${colors.hex('#FF9900')("指定 HEX 色")}`);
```
