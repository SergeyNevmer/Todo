import React, { useState } from "react";
import styles from "./App.module.css";
import { Header } from "../components/Header/Header";
import { Task } from "../components/Task/Task";
import { Button } from "../components/Button/Button";
import { Modal } from "../components/Modal/Modal";
import { Input } from "../components/Input/Input";
import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { addTodo } from "../redux/todoSlice";
import { ITodo } from "../redux/types";
import { checkSpaces } from "../utils/checkSpaces";

//TODO: add status in task
//TODO: add custom style for checkbox
//TODO: add animation to tasks
export const App: React.FC = () => {
  const [text, setText] = useState<string>("");
  const todos: Array<ITodo> = useAppSelector((state) => state.todo.todos);
  const flag: boolean = useAppSelector((state) => state.flag.flag);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };

  const handleClick = (): void => {
    if (!text || !checkSpaces(text)) {
      setText("");
      return;
    }

    dispatch(addTodo(text));
    setText("");
  };

  return (
    <>
      {flag && <Modal />}
      <Header />
      <main className={styles.main}>
        <article className={styles.container}>
          <section className={styles.inputSection}>
            <Input
              value={text}
              func={handleChange}
              placeholder="What needs to be done?"
            />
            <Button text="Add" colour="blue" func={handleClick} />
          </section>
          <section className={styles.taskList}>
            {todos.length >= 1 && (
              <ul className={styles.list}>
                {todos.map((todo) => (
                  <Task
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    status={todo.status}
                  />
                ))}
              </ul>
            )}
          </section>
        </article>
      </main>
    </>
  );
};
