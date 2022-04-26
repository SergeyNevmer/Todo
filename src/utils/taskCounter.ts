import { ITodo } from "../redux/types";

export const taskCounter = (arr: Array<ITodo>): number => {
  return arr.reduce((accumulator: number, currentTodo: ITodo): number => {
    return currentTodo.status === false
      ? (accumulator += 1)
      : (accumulator += 0);
  }, 0);
};
