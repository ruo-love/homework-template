import React, { useContext } from "react";
import { modeContext } from "../App";
import { A7Tips } from "../components/A7Tips";
import { A7Image } from "../components/A7Image";
import a7Player from "../utils/common/a7Player";

type Props = {};
let player: any;
export const LA_IA_SCR: React.FC<Props> = () => {
  const data = useContext(modeContext);
  return (
    <div>
      <A7Tips text={data?.templates?.["instruction-cn"]} />
      <ul>
        {data.options?.map((item: any, index: number) => {
          return (
            <li key={index}>
              {index + 1}: {item.text}
            </li>
          );
        })}
      </ul>
      <A7Image
        onClick={() => {
          player?.unload();
          player = a7Player({
            src: data.mp3[0],
            format: ["mp3"],
            autoplay: true,
          });
        }}
        class="w-8"
        src="https://sandbox-learn-h5-beta.saybot.net/learn-h5/img/trumpet.83a639637c629eb9d7c4e3eb1f861593.png"
      />
    </div>
  );
};
