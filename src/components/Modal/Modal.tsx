import React, { useState } from "react";
import styles from "./Modal.module.css";
import { SvgSelector } from "../SvgSelector/SvgSelector";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { removeId } from "../../redux/idSlice";
import { changeFlag } from "../../redux/flagSlice";
import { editText } from "../../redux/todoSlice";

//TODO: If press btn close modal or cancel remove str

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
        console.log(id, text);
        dispatch(editText({ id: id, text: text }));
        setText("");
        dispatch(removeId());
        dispatch(changeFlag());
        break;

      case "Cancel":
        console.log(target);
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
