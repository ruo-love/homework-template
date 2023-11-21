import React, { useContext, useEffect } from "react";
import { A7Record } from "../components/A7Record";
import { modeContext } from "../App";
import { A7Tips } from "../components/A7Tips";
import a7Player from "../utils/common/a7Player";
type Props = {};
let player: any;
export const RAR_IQA_PRA: React.FC<Props> = () => {
  const data = useContext(modeContext);
  useEffect(() => {
    return () => {
      player?.unload();
    };
  }, []);
  function start() {
    player?.unload();
    player = a7Player({
      src: data.mp3[0],
      format: ["mp3"],
      autoplay: true,
    });
  }
  return (
    <div>
      <button className="text-red-500 p-4" onClick={start}>
        点击开始
      </button>
      <A7Tips text={data?.templates?.["instruction-cn"]} />
      <div
        className="h-64 overflow-y-scroll"
        dangerouslySetInnerHTML={{ __html: data.text?.replace(/\n/g, "<br/>") }}
      ></div>
      <A7Record type={data?.templates?.module} model={data} />
    </div>
  );
};
