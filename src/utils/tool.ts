export function cutArray(array: Array<any>, size: number): Array<any> {
  let res: Array<any> = [];
  for (let i = 0; i < array.length; i = size + i) {
    res.push(array.slice(i, size + i));
  }

  return res;
}
