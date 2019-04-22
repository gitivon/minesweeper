import { useState } from 'react';

const getRandomNums = (range: number, count: number) => {
  const result: number[] = [];
  while (result.length < count) {
    const i = Math.floor(Math.random() * range);
    if (!result.includes(i)) {
      result.push(i);
    }
  }
  return result;
}

export type IMines = number[][];

// 获取周围地雷数量
const getMineCount = (
  index: number, 
  mines: number[], 
  position: [number, number],
  size: IStageSize,
  ) => {
  // 如果自己是雷
  if (mines.includes(index)) {
    return -1;
  }
  const [x, y] = position;
  let count = 0;
  for(let i = x - 1; i <= x + 1; i++) {
    if (i < 0 || i >= size.y) {
      continue;
    }
    for(let j = y - 1; j <= y + 1; j++) {
      if (j < 0 || j >= size.x) {
        continue;
      }
      // 计算坐标对应的 index
      const currentIndex = i * size.x + j;
      if (mines.includes(currentIndex)) {
        count++;
      }
    }
  }
  return count;
}

export interface IStageSize {
  x: number;
  y: number;
}

type IMines = number[][];

export const useMine = (size: IStageSize, count: number): [IMines, () => void] => {
  const getTmpMines = () => {
    const tmpMines: IMines = [];
    let index = 0;
    // 生产随机地雷
    const hasMineBoxes = getRandomNums(size.x * size.y, count);
    // 安装地雷
    Array.from({ length: size.y }).forEach((_, x) => {
      tmpMines[x] = [];
      Array.from({ length: size.x }).forEach((__, y) => {
        tmpMines[x][y] = getMineCount(index++, hasMineBoxes, [x, y], size);
      })
    });
    return tmpMines;
  }
  const [mines, setMines] = useState<IMines>([]);
  return [mines, () => setMines(getTmpMines())];
}
