export function countSheeps(arr: (boolean | undefined | null)[]) {
    const result = arr.reduce((count: number, x: boolean | undefined | null) => {
      return x === true ? count + 1 : count;
    }, 0);
    return result;
  }