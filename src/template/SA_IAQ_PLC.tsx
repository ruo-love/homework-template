import React, { useContext, useEffect } from "react";
import { modeContext } from "../App";
import { A7Tips } from "../components/A7Tips";
import { A7Image } from "../components/A7Image";
import a7Player from "../utils/common/a7Player";
import { cutArray } from "../utils/tool";

type Props = {};
let player: any;
export const SA_IAQ_PLC: React.FC<Props> = () => {
  const data = useContext(modeContext);
  useEffect(() => {
    return () => {
      player?.unload();
    };
  }, []);
  return (
    <div>
      <A7Tips text={data?.templates?.["instruction-cn"]} />
      {data.questions &&
        data.questions?.map((item: any, index: number) => {
          return (
            <div key={index}>
              <p className="text-red-300">{item.text}</p>
              <ul>
                {data?.options &&
                  cutArray(data?.options, 4)[index]?.map(
                    (item: any, i: number) => {
                      return (
                        <li key={i}>
                          {i + 1}: {item.text}
                        </li>
                      );
                    }
                  )}
              </ul>
            </div>
          );
        })}
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
