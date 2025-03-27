/**
 * Write your challenge solution here
 */
const taskList = document.querySelector("#taskList");
const addButton = document.querySelector("#addButton");
const taskInput = document.querySelector("#taskInput");
const totalTasks = document.querySelector("#totalTasks");
const completedTasks = document.querySelector("#completedTasks");
let tasks = 0;
let complete = 0;

addButton.addEventListener("click", (e) => {
  let val = taskInput.value.trim();
  if (val) {
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    const deletebtn = document.createElement("button");
    const taskText = document.createElement("span");

    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("complete-checkbox");
    listItem.classList.add("task-item");
    taskText.innerText = taskInput.value;
    taskText.classList.add("task-text");
    listItem.appendChild(taskText);

    deletebtn.innerText = "delete";
    deletebtn.classList.add("delete-button");
    listItem.classList.add("task-text");
    listItem.appendChild(deletebtn);
    listItem.prepend(checkbox);
    taskList.prepend(listItem);
    deletebtn.addEventListener("click", () => {
      listItem.remove();
      tasks--;
      totalTasks.innerText = `Total tasks: ${tasks}`;
      if (checkbox.checked) {
        complete--;
        completedTasks.innerText = `Completed: ${complete}`;
      }
    });
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        taskText.style.textDecoration = "line-through";
        complete++;
        completedTasks.innerText = `Completed: ${complete}`;
      } else {
        taskText.style.textDecoration = "none";
        complete--;
        completedTasks.innerText = `Completed: ${complete}`;
      }
    });
  }
  tasks++;
  taskInput.value = "";
  totalTasks.innerText = `Total tasks: ${tasks}`;
});
