/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-03-10 14:36:27
 * @LastEditors: ydfk
 * @LastEditTime: 2021-03-12 14:04:17
 */

import r1 from "./robot2";
import r from "./robot";

// const x = 33;
// const y = 55;
// const command = "URRURRRRRUUUUURRURUURURURUURURUURURUUUUURRRRRUURUURUUUUURRRRRUUUUURUUUURUUUUURUUUUURUUUUU";
// const obstacles: number[][] = [
//   [12, 22],
//   [44, 88],
//   [35, 56],
// ];

// const x = 347;
// const y = 366;
// const command = "URRURRRRRUUUUURRURUURURURUURURUURUR";
// const obstacles: number[][] = [
//   [24, 26],
//   [343, 362],
// ];

const x = 95412346;
const y = 95764134;
const command =
  "URRURRRRRUUUUURRURUURURURUURURUURURUUUUURRRRRUURUURUUUUURRRRRUUUUURUUUURUUUUURUUUUURUUUUUURRURRRRRUUUUURRURUURURURUURURUURURUUUUURRRRRUURUURUUUUURRRRRUUUUURUUUURUUUUURUUUUURUUUUUURRURRRRRUUUUURRURUURURURUURURUURURUUUUURRRRRUURUURUUUUURRRRRUUUUURUUUURUUUUURUUUUURUUUUU";
const obstacles: number[][] = [
  [3, 4],
  [23, 44],
  [452, 543],
  [4563, 8434],
  [86435, 74132],
  [286435, 313543],
  [1354303, 1354643],
  [41821923, 86192632],
];

console.log("终点 x,y", x, y);
console.log("命令 command", command);
console.log("障碍物 obstacles", obstacles);

console.time("优化算法花费时间");
console.log("🚀优化算法运行结果：", r1(command, obstacles, x, y));
console.timeEnd("优化算法花费时间");

console.time("暴力算法花费时间");
console.log("暴力算法运行结果：", r(command, obstacles, x, y));
console.timeEnd("暴力算法花费时间");
