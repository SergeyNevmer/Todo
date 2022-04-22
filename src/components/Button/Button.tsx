import React from "react";
import styles from "./Button.module.css";

type color = "blue" | "green" | "red";
type wording = "Edit" | "Add" | "Delete";

export interface IButton {
  id?: string;
  text: wording;
  colour: color;
  func?: (event: React.MouseEvent) => void;
}

//Todo make a custom object with settings for the button

export const Button: React.FC<IButton> = ({ text, colour, func, id }) => {
  return (
    <button
      onClick={func}
      id={id}
      className={`${styles.btn} ${styles[colour]}`}
      name={text}
    >
      {text}
    </button>
  );
};
