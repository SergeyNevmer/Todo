import React from "react";
import styles from "./Button.module.css";

//Todo make a custom object with settings for the button

type color = "blue" | "green" | "red";

interface IButton {
  text: string;
  colour: color;
  func?: (event: React.MouseEvent) => void;
}

export const Button: React.FC<IButton> = ({ text, colour, func }) => {
  return (
    <button onClick={func} className={`${styles.btn} ${styles[colour]}`}>
      {text}
    </button>
  );
};
