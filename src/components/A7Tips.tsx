import React from "react";
type Props = {
  text: string;
};
export const A7Tips: React.FC<Props> = (props: Props) => {
  return <div className="text-red-400">{props.text}</div>;
};
