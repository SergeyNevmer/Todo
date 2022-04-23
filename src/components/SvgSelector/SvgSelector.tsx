import React from "react";
import styles from "./SvgSelector.module.css";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { changeFlag } from "../../redux/flagSlice";

interface ISvgSelector {
  id: string;
}

export const SvgSelector: React.FC<ISvgSelector> = ({ id }) => {
  const dispatch = useAppDispatch();

  const handleClick = (event: React.MouseEvent): void => {
    dispatch(changeFlag());
  };

  switch (id) {
    case "close":
      return (
        <svg
          className={styles.close}
          data-name="Livello 1"
          id="Livello_1"
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleClick}
        >
          <title />
          <path d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z" />
          <path d="M92.12,35.79a3,3,0,0,0-4.24,0L64,59.75l-23.87-24A3,3,0,0,0,35.88,40L59.76,64,35.88,88a3,3,0,0,0,4.25,4.24L64,68.25l23.88,24A3,3,0,0,0,92.13,88L68.24,64,92.13,40A3,3,0,0,0,92.12,35.79Z" />
        </svg>
      );
    default:
      return <svg></svg>;
  }
};
