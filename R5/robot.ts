/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-03-10 13:53:04
 * @LastEditors: ydfk
 * @LastEditTime: 2021-03-11 22:57:49
 */

export default (command: string, obstacles: number[][], x: number, y: number): boolean => {
  ////记录障碍物位置
  let obstacleMap = new Map();
  for (let obstacle of obstacles) {
    let [i, j] = obstacle;
    obstacleMap.set(`${i}${j}`, 1);
  }

  let dx = 0; //目前走到的x
  let dy = 0; //目前走到的y
  let count = 0; //走过命令位置

  // 循环路线走
  while (dx <= x && dy <= y) {
    ////如果超过命令长度增重新开始 即 循环执行 步骤
    if (count >= command.length) {
      count = 0;
    }

    let cmd = command[count++];
    if (cmd == "U") {
      dy++;
    } else {
      dx++;
    }

    //走到的坐标
    const prop = `${dx}${dy}`;

    //是否是障碍物
    if (obstacleMap.get(prop)) {
      return false;
    }

    //走到终点
    if (dx == x && dy == y) {
      return true;
    }
  }

  return false;
};
