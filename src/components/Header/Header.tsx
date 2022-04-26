import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { taskCounter } from "../../utils/taskCounter";
import { useAppSelector } from "../../hooks/useAppSelector";
import { ITodo } from "../../redux/types";

export const Header: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const todos: Array<ITodo> = useAppSelector((state) => state.todo.todos);

  useEffect(() => {
    setCount(taskCounter(todos));
  }, [todos]);

  return (
    <header className={styles.header}>
      <div>
        <p className={styles.logo}>Todo List</p>
      </div>
      <div>
        <p className={styles.taskInfo}>
          <span>{count}</span> unfinished tasks
        </p>
      </div>
    </header>
  );
};
