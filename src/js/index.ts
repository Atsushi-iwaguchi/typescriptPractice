import "../css/index.css";
import { getNewTodo, Todo } from "./todo";
import { getElementById } from "./utils/dom";

let todoList: Todo[] = [];

document.addEventListener("DOMContentLoaded", () => {
  const registerButton = getElementById("register");
  registerButton.addEventListener("click", () => {
    //新しいtodoをDOMから取得する
    todoList.push(getNewTodo());

    //todo一覧を表示する
  });
});
