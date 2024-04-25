const taskForm = document.getElementById("task-form");
const newTaskInput = document.getElementById("new-task-input");
const parentList = document.getElementById("parent-list");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  li.setAttribute("class", "task-item");
  li.textContent = newTaskInput.value;
  newTaskInput.value = "";
  parentList.appendChild(li);
});
