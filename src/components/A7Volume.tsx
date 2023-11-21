import React, { useEffect, useState } from "react";
type Props = {
  volume: number;
};
export const A7Volume: React.FC<Props> = (props: Props) => {
  const [volumeArr, setVolumeArr] = useState<Array<number>>([]);
  useEffect(() => {
    if (props.volume < 0) return setVolumeArr([]);
    const _arr = [...volumeArr.slice(-9), (props.volume / 100) * 50];
    setVolumeArr(_arr);
  }, [props.volume]);
  return (
    <ul className="flex items-end">
      {volumeArr?.map((v, i) => (
        <li
          style={{ height: v + "px" }}
          className="bg-green-400 w-1 mx-2 rounded-md"
          key={i}
        ></li>
      ))}
    </ul>
  );
};
