import React, { useContext, useEffect } from "react";
import { A7WordCard } from "../components/A7WordCard";
import { A7Record } from "../components/A7Record";
import { modeContext } from "../App";
import { A7Tips } from "../components/A7Tips";
import a7Player from "../utils/common/a7Player";
import { A7Image } from "../components/A7Image";
type Props = {};
const base64 = `data:image/png;base64,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`;
let player: any = null;
export const RAR_IQ_SECT: React.FC<Props> = () => {
  const data = useContext(modeContext);
  useEffect(() => {
    return () => {
      player?.unload();
    };
  }, []);
  return (
    <div>
      <A7Tips text={data?.templates?.["instruction-en"]} />
      <div className="flex">
        {data?.mp3?.length > 0 &&
          (data.mp3 as string[]).map((item, i) => {
            return (
              <A7Image
                key={i}
                onClick={() => {
                  player?.unload();
                  player = a7Player({
                    src: item,
                    format: ["mp3"],
                    autoplay: true,
                  });
                }}
                class="w-8"
                src={base64}
              />
            );
          })}
      </div>
      <A7Record type={data?.templates?.module} model={data} />
    </div>
  );
};
