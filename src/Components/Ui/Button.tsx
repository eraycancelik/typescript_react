import React from "react";
import style from "./Button.module.css";
type Props = {
  onClick: () => void;
  message: string;
};
const Button = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className={style.Button}
      role="button"
    >
      {props.message}
    </button>
  );
};

export default Button;
