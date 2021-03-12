/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-03-11 21:51:12
 * @LastEditors: ydfk
 * @LastEditTime: 2021-03-12 14:15:36
 */
//O(commandSize + obstaclesSize)
export default (command: string, obstacles: number[][], x: number, y: number): boolean => {
  let dx = 0;
  let dy = 0;
  let cmdLineMap = new Map(); //记录一次循环走过的路径

  cmdLineMap.set("00", 1); //初始化原点

  for (let c of command) {
    if (c == "U") {
      dy++;
    } else {
      dx++;
    }

    cmdLineMap.set(`${dx}${dy}`, 1);
  }

  //判断是否能到达终点
  if (!isPass(x, y, cmdLineMap, dx, dy)) {
    return false;
  }

  //判断是否有障碍
  for (let obstacle of obstacles) {
    const [oX, oY] = obstacle;

    if (oX <= x && oY <= y && isPass(oX, oY, cmdLineMap, dx, dy)) {
      console.log("🚀 ~ 遇到障碍物", oX, oY);
      return false;
    }
  }

  return true;
};

function isPass(x: number, y: number, cmdLineMap: Map<any, any>, dx: number, dy: number): boolean {
  if (cmdLineMap.has(`${x}${y}`)) {
    return true;
  }

  const scale = Math.floor(x / dx); // 缩放倍数
  const [scaleX, scaleY] = [x - scale * dx, y - scale * dy]; // 缩放后的坐标

  //缩放后的坐标是否在路径上
  if (cmdLineMap.has(`${scaleX}${scaleY}`)) {
    return true;
  }

  return false;
}
