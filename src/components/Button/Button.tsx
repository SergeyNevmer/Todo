import React from "react";
import styles from "./Button.module.css";

//Todo make a custom object with settings for the button

type color = "blue" | "green" | "red";

interface IButton {
  id?: string;
  text: string;
  colour: color;
  func?: (event: React.MouseEvent) => void;
}

export const Button: React.FC<IButton> = ({ text, colour, func, id }) => {
  return (
    <button
      onClick={func}
      id={id}
      className={`${styles.btn} ${styles[colour]}`}
    >
      {text}
    </button>
  );
};
