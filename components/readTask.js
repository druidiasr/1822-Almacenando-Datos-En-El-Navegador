import { createTask } from "./addTask.js";

export const readTask = () => {
   const list = document.querySelector("[data-list]");
   console.log(list);

   const taskList = JSON.parse(localStorage.getItem("task")) || [];
   
   taskList.forEach((task) => {
      list.appendChild(createTask(task));
   });
};
