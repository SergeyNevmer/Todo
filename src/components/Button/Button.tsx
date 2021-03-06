import React from "react";
import styles from "./Button.module.css";

type color = "blue" | "green" | "red";
type wording = "Edit" | "Add" | "Delete" | "Cancel" | "Save change";

export interface IButton {
  id?: string;
  text: wording;
  colour: color;
  func?: (event: React.MouseEvent) => void;
}

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
