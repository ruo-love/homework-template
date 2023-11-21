const textType = {
  // 没有任何修饰的文字
  NORMAL: "normal",

  // 小括号包裹的文字
  LITTLE: "little",

  // 中括号包裹的文字
  MIDDLE: "middle",
};

export default (text: string) => {
  const resultArr: any = [];
  // 解析重音
  const strArr = text.split(/\[|\]/).map((str, idx) => ({
    text: str,
    type: idx % 2 === 0 ? "normal" : textType.MIDDLE,
  }));
  // 解析不发音
  strArr.forEach((strEle) => {
    if (strEle.type === textType.MIDDLE || !/\(|\)/.test(strEle.text)) {
      resultArr.push(strEle);
    } else {
      const arr = strEle.text.split(/\(|\)/).map((str, idx) => ({
        text: str,
        type: idx % 2 === 0 ? "normal" : textType.LITTLE,
      }));
      resultArr.push(...arr);
    }
  });
  return resultArr;
};
