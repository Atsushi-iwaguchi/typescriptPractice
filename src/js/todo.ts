import {
  createElement,
  getElementById,
  getInputElementById,
} from "./utils/dom";

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
 * @returns Todo
 */

export const getNewTodo = (): Todo => ({
  name: getInputElementById("new-todo-name").value,
  person: getInputElementById("new-person").value,
  deadline: getInputElementById("new-deadline").value,
});

/**
 * DOMにTodo一覧を表示する
 */
export const appendTodoList = (todoList: Todo[]) => {
  removeTodoElement();
  todoList.forEach((todo) => {
    const nameTd = createElement("td", todo.name);
    const personTd = createElement("td", todo.person);
    const deadline = createElement("td", todo.deadline);
    const tr = createElement("tr");
    tr.appendChild(nameTd);
    tr.appendChild(personTd);
    tr.appendChild(deadline);
    const tBody = getElementById("todo-list");
    tBody.appendChild(tr);
  });
};

/**
 * DOMのTodo一覧全てを削除する
 */
const removeTodoElement = () => {
  const tBody = getElementById("todo-list");
  while (tBody.firstChild) {
    tBody.firstChild.remove();
  }
};
