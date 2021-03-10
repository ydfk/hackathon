/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-03-10 14:45:47
 * @LastEditors: ydfk
 * @LastEditTime: 2021-03-10 15:34:46
 */

//暴力算法
export default (command: string, obstacles: number[][], x: number, y: number): boolean => {
  return isPass(command, x, y, 0,0,0) > 0
};

function isPass(command: string, x: number, y: number, dx: number, dy: number, count: number): number {
  for (let c of command) {
    if (c === "R") {
      dx++;
    } else {
      dy++;
    }

    count++;

    if (dx == x && dy == y) {
      return count;
    }
  }

  if (dx > x || dy > y) {
    return -1;
  } else {
    return isPass(command, x, y, dx, dy, count);
  }
}
