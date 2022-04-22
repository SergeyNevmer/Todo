import React from "react";
import styles from "./Task.module.css";
import { Button } from "../Button/Button";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { removeTodo } from "../../redux/todoSlice";

interface ITask {
  id: string;
  text: string;
}

export const Task: React.FC<ITask> = ({ text, id }) => {
  const dispatch = useAppDispatch();

  const handleClick = (event: React.MouseEvent): void => {
    const target = event.target as Element;
    dispatch(removeTodo(target.id));
  };

  return (
    <li className={styles.task}>
      <div className={styles.text}>
        <input className={styles.status} type="checkbox" />
        <p>{text}</p>
      </div>
      <div className={styles.buttons}>
        <Button text="Edit" colour="green" />
        <Button func={handleClick} id={id} text="Delete" colour="red" />
      </div>
    </li>
  );
};
