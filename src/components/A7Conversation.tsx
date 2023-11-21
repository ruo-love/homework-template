import React from "react";
import { A7Image } from "./A7Image";
import a7Player from "../utils/common/a7Player";
type Props = {
  data: Array<any>;
  source: Array<any>;
};
let player: any = null;
export const A7Conversation: React.FC<Props> = (
  props: Props = { data: [], source: [] }
) => {
  return (
    <div className="flex-col">
      {props.data?.map((item, i) => (
        <div
          key={i}
          className={`flex ${item.position == 2 && "flex-row-reverse"}`}
        >
          <p
            className={`${item.position == 2 && "text-right"} ${
              item["is-checked"] && "text-green-300"
            }`}
          >
            {item.text}
          </p>
          <A7Image
            onClick={() => {
              player?.unload();
              player = a7Player({
                src: props.source[i],
                format: ["mp3"],
                autoplay: true,
              });
            }}
            class="w-8 cursor-pointer"
            src="https://sandbox-learn-h5-beta.saybot.net/learn-h5/img/icon-replay.033bafd1679379ba4a8ec1432b716694.png"
          />
        </div>
      ))}
    </div>
  );
};
