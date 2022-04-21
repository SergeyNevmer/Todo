import React, { useState } from "react";
import { Header } from "../components/Header/Header";
import { Task } from "../components/Task/Task";
import { Button } from "../components/Button/Button";
import styles from "./App.module.css";
import { addTodo } from "../redux/todoSlice";
import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";

//Todo add status in task

export const App: React.FC = () => {
  const [text, setText] = useState<string>("");
  const todos = useAppSelector((state) => state.todo.todos); // : Array<ITodoObj | []>
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };

  const handleClick = (event: React.MouseEvent): void => {
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <article className={styles.container}>
          <section className={styles.inputSection}>
            <input
              type="text"
              value={text}
              onChange={handleChange}
              placeholder="What needs to be done?"
            />
            <Button text="Add" colour="blue" func={handleClick} />
          </section>
          <section className={styles.taskList}>
            {todos.length >= 1 && (
              <ul className={styles.list}>
                {todos.map((todo) => (
                  <Task key={todo.id} text={todo.text} />
                ))}
              </ul>
            )}
          </section>
        </article>
      </main>
    </>
  );
};
