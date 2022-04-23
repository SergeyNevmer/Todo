import React from "react";
import styles from "./Input.module.css";

interface IInput {
  placeholder?: string;
  value?: string;
  func?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<IInput> = ({ placeholder, value, func }) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={func}
    />
  );
};
