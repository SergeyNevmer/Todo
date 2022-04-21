import React from "react";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <p className={styles.text}>Todo List</p>
    </header>
  );
};
