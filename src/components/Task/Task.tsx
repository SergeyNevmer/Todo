import React from "react";
import styles from "./Task.module.css";
import { Button } from "../Button/Button";

interface ITask {
  text: string;
}

export const Task: React.FC<ITask> = ({ text }) => {
  return (
    <li className={styles.task}>
      <div className={styles.text}>
        <input className={styles.status} type="checkbox" />
        <p>{text}</p>
      </div>
      <div className={styles.buttons}>
        <Button text="Edit" colour="green" />
        <Button text="Delete" colour="red" />
      </div>
    </li>
  );
};
