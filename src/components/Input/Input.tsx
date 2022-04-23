import React from "react";
import styles from "./Input.module.css";

interface IInput {
  placeholder?: string;
}

export const Input: React.FC<IInput> = ({ placeholder }) => {
  return (
    <input className={styles.input} type="text" placeholder={placeholder} />
  );
};
