import React, { useContext } from "react";
import { A7WordCard } from "../components/A7WordCard";
import { A7Record } from "../components/A7Record";
import { modeContext } from "../App";
import { A7Tips } from "../components/A7Tips";
import { A7Conversation } from "../components/A7Conversation";
type Props = {};
export const RA_IQA_DRA: React.FC<Props> = () => {
  const data = useContext(modeContext);
  return (
    <div>
      <A7Tips text={data?.templates?.["instruction-cn"]} />
      <A7WordCard img={data.img} text={data.text} hint={data.hint} />
      <A7Conversation data={data.options} source={data.mp3}/>
      <A7Record type={data?.templates?.module} model={data} />
    </div>
  );
};
