import React from "react";
import styles from "./Modal.module.css";
import { SvgSelector } from "../SvgSelector/SvgSelector";

export const Modal: React.FC = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.close}>
        <SvgSelector id="close" />
      </div>
      <div className={styles.container}>
        <div className={styles.text}></div>
      </div>
    </div>
  );
};
