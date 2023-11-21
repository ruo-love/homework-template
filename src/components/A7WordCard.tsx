import React from "react";
type Props = {
  text: string;
  hint: string;
  img: string;
};
export const A7WordCard: React.FC<Props> = (props: Props) => {
  return (
    <div className="w-44 text-center shadow-md m-4">
      <img src={props.img} alt="" />
      <p>{props.text}</p>
      <p>{props.hint}</p>
    </div>
  );
};
