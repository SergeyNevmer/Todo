import React from "react";
import styles from "./Modal.module.css";
import { SvgSelector } from "../SvgSelector/SvgSelector";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

//TODO: If press btn close modal or cancel remove str

export const Modal: React.FC = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.close}>
        <SvgSelector id="close" />
      </div>
      <div className={styles.container}>
        <div className={styles.text}>
          <p>Changing the text description</p>
          <Input placeholder="" />
          <div className={styles.btn}>
            <Button text="Save change" colour="blue" />
            <Button text="Cancel" colour="red" />
          </div>
        </div>
      </div>
    </div>
  );
};
