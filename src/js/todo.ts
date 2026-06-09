import { getElementById, getInputElementById } from "./utils/dom";

/**
 * todoの型定義
 */
export type Todo = {
  name: string;
  person: string;
  deadline: string;
};

/**
 * DOMのinput要素から新しいtodoの値を取得する
 */

export const getNewTodo = (): Todo => ({
  name: getInputElementById("new-todo-name").value,
  person: getInputElementById("new-person").value,
  deadline: getInputElementById("new-deadline").value,
});
