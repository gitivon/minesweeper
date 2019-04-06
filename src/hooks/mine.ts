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

// 获取周围地雷数量
const getMineCount = (index: number, mines: number[], position: [number, number]) => {
  return mines.includes(index++) ? -1 : 1;
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
    Array.from({ length: size.x }).forEach((_, x) => {
      tmpMines[x] = [];
      Array.from({ length: size.y }).forEach((__, y) => {
        tmpMines[x][y] = getMineCount(index++, hasMineBoxes, [x, y]);
      })
    });
    return tmpMines;
  }
  const [mines, setMines] = useState<IMines>([]);
  return [mines, () => setMines(getTmpMines())];
}
