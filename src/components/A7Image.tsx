import React from "react";
import { act } from "react-dom/test-utils";
type Props = {
  src: string;
  activeSrc?: string;
  active?: boolean;
  onClick?: () => void;
  class?: string;
};
export const A7Image: React.FC<Props> = (
  props: Props = {
    src: "",
    activeSrc: "",
    active: false,
  }
) => {
  return (
    <img
      onClick={() => {
        props.onClick && props.onClick();
      }}
      className={props.class}
      id="pausePlay"
      src={props.active ? props.activeSrc : props.src}
      alt="A7Image"
    />
  );
};
