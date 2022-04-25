import React, { useState } from "react";
import styles from "./Modal.module.css";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { SvgSelector } from "../SvgSelector/SvgSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { removeId } from "../../redux/idSlice";
import { changeFlag } from "../../redux/flagSlice";
import { editText } from "../../redux/todoSlice";
import { checkSpaces } from "../../utils/checkSpaces";

export const Modal: React.FC = () => {
  const [text, setText] = useState<string>("");
  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => state.id.id);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };

  const handleClick = (event: React.MouseEvent): void => {
    const target = event.target as HTMLButtonElement;

    switch (target.name) {
      case "Save change":
        if (!text || !checkSpaces(text)) {
          setText("");
          return;
        }

        dispatch(editText({ id: id, text: text }));
        dispatch(removeId());
        dispatch(changeFlag());
        break;

      case "Cancel":
        dispatch(removeId());
        dispatch(changeFlag());
        break;

      default:
        break;
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.close}>
        <SvgSelector id="close" />
      </div>
      <div className={styles.container}>
        <div className={styles.text}>
          <p>Changing the text description</p>
          <Input placeholder="" value={text} func={handleChange} />
          <div className={styles.btn}>
            <Button func={handleClick} text="Save change" colour="blue" />
            <Button func={handleClick} text="Cancel" colour="red" />
          </div>
        </div>
      </div>
    </div>
  );
};
