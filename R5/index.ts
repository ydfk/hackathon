/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-03-10 14:36:27
 * @LastEditors: ydfk
 * @LastEditTime: 2021-03-11 17:26:21
 */

import r1 from "./rboot1";
import r from "./rboot";

// const x = 33;
// const y = 55;
// const command = "URRURRRRRUUUUURRURUURURURUURURUURURUUUUURRRRRUURUURUUUUURRRRRUUUUURUUUURUUUUURUUUUURUUUUU";
// const obstacles: number[][] = [
//   [12, 22],
//   [44, 88],
// ];

const x = 75412346;
const y = 45764134;
const command = "URR";
const obstacles: number[][] = [];

console.log("终点 x,y", x, y);
console.log("命令 command", command);
console.log("障碍物 obstacles", obstacles);

console.time("花费时间");
console.log("优化算法运行结果：", r1(command, obstacles, x, y));
console.timeEnd("优化算法花费时间");

console.time("暴力算法花费时间");
console.log("暴力算法运行结果：", r(command, obstacles, x, y));
console.timeEnd("暴力算法花费时间");
