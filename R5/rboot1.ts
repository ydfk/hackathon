/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-03-10 14:45:47
 * @LastEditors: ydfk
 * @LastEditTime: 2021-03-11 10:46:47
 */
//通过第一轮的路径上的落点，推算全部路径上落点的规律
export default (command: string, obstacles: number[][], x: number, y: number): boolean => {
  // 记录第一轮走过的所有点
  const paths: number[][] = [];

  let xStep = 0;
  let yStep = 0;

  for (let i = 0; i < command.length; i++) {
    if (command[i] === "R") {
      xStep += 1;
    } else {
      yStep += 1;
    }

    paths[i] = [xStep, yStep];
  }

  //判断是否会撞墙
  if (obstacles != []) {
    for (let obstacle of obstacles) {
      if (obstacle[0] >= x && obstacle[1] >= y) {
        continue;
      }

      if (checkPoint(paths, obstacle[0], obstacle[1], xStep, yStep)) {
        return false;
      }
    }
  }

  // 判断是否会到达终点
  return checkPoint(paths, x, y, xStep, yStep);
};

function checkPoint(paths: number[][], x: number, y: number, xStep: number, yStep: number): boolean {
  // (x-x1)%xStep=0 (y-y1)%yStep = 0
  for (let path of paths) {
    if ((x - path[0]) % xStep == 0 && (y - path[1]) % yStep == 0 && (x - path[0]) / xStep == (y - path[1]) / yStep) {
      return true;
    }
  }

  return false;
}
