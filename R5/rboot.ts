/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-03-10 13:53:04
 * @LastEditors: ydfk
 * @LastEditTime: 2021-03-10 14:29:59
 */

console.log("rboot =>", rboot("URR", [], 3, 2));

function rboot(command: string, obstacles: number[][], x: number, y: number): boolean {
  let dx = 0;
  let dy = 0;
  debugger;
  //1.计算 命令中 r和u的数量
  for (let c of command) {
    if (c === "R") {
      dx++;
    } else {
      dy++;
    }
  }
  debugger;
  // 拿到走到终点的次数。
  const ans = isPassed(command, x, y, dx, dy);

  if (ans == -1) {
    return false;
  }

  for (let obstacle of obstacles) {
    const cnt = isPassed(command, obstacle[0], obstacle[1], dx, dy);
    //不等于-1，说明经过了，然后再看这个点和终点哪个次数多。ans多，说明这个点在ans前面，返回false。
    if (cnt != -1 && cnt < ans) {
      return false;
    }
  }

  return true;
}

// 判断是否经过该点，经过返回走的次数，没经过返回-1。
function isPassed(command: string, x: number, y: number, dx: number, dy: number): number {
  // 计算走到第x-1或y-1层需要多少轮
  const round = Math.min(x / dx, y / dy);
  // 前几轮的总次数
  let cnt = command.length * round;
  // 在第x-1或y-1层时的位置。
  dx *= round;
  dy *= round;
  // 正好就是要找的点，直接返回。
  if (dx == x && dy == y) {
    return cnt;
  }

  // 遍历第x层或y层，如果经过，那么答案一定会遍历到。
  for (let c of command) {
    // 要按command的顺序走
    if (c == "U") {
      dy++;
    } else {
      dx++;
    }

    // 不要忘了每遍历一次，次数都要加1
    cnt++;
    // 一旦找到，直接返回所需要的次数。
    if (dx == x && dy == y) {
      return cnt;
    }
  }

  return -1;
}
