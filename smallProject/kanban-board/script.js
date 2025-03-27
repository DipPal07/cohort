// alert("hello world");
const newTask = document.querySelector("#new-task");
const pendingTask = document.querySelector("#pending-task");
const boards = document.querySelectorAll(".board");
const tasks = document.querySelectorAll(".task");
function createTask() {
  const text = prompt("Enter your task");
  if (!text) return;
  const task = document.createElement("p");
  task.textContent = text;
  task.classList.add("task");
  task.setAttribute("draggable", true);
  draggable(task);
  newTask.appendChild(task);
}
function draggable(task) {
  task.addEventListener("dragstart", (e) => {
    task.classList.add("flying");
  });
  task.addEventListener("dragend", (e) => {
    task.classList.remove("flying");
  });
}

tasks.forEach(draggable);

boards.forEach((board) => {
  board.addEventListener("dragover", (e) => {
    const task = document.querySelector(".flying");
    if (!task) return;
    board.appendChild(task);
    console.log(e.target);
  });
});
