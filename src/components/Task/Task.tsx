import React from "react";
import styles from "./Task.module.css";
import { Button } from "../Button/Button";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { removeTodo, changeStatus } from "../../redux/todoSlice";

interface ITask {
  id: string;
  text: string;
  status: boolean;
}

export const Task: React.FC<ITask> = ({ text, id, status }) => {
  const dispatch = useAppDispatch();

  const handleClick = (event: React.MouseEvent): void => {
    const target = event.target as HTMLButtonElement;

    switch (target.name) {
      case "Edit":
        console.log(target.name, target.id);
        break;

      case "Delete":
        dispatch(removeTodo(target.id));
        break;

      default:
        break;
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    //need to change the logic method changeStatus
    dispatch(changeStatus(event.target.id));
  };

  return (
    <li className={styles.task}>
      <div className={styles.text}>
        <input
          id={id}
          className={styles.status}
          type="checkbox"
          checked={status}
          onChange={handleChange}
        />
        <p>{text}</p>
      </div>
      <div className={styles.buttons}>
        <Button func={handleClick} text="Edit" id={id} colour="green" />
        <Button func={handleClick} id={id} text="Delete" colour="red" />
      </div>
    </li>
  );
};
