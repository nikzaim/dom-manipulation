const taskForm = document.getElementById("task-form");
const newTaskInput = document.getElementById("new-task-input");
const taskList = document.getElementById("task-list");
const parentList = document.getElementById("parent-list");
const completedTaskList = document.getElementById("completed-task-list");
const completedParentList = document.getElementById("completed-parent-list");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  li.setAttribute("class", "task-item");
  li.textContent = newTaskInput.value;
  const button = document.createElement("div");
  button.setAttribute("class", "complete-button");
  button.textContent = "✅";
  button.addEventListener("click", () => {
    console.log(parentList);
    parentList.removeChild(li);
    completedParentList.appendChild(li);
    li.classList.replace("task-item", "completed-task-item");
    li.removeChild(button);
    completedTaskList.classList.remove("hidden");
    console.log("today" + parentList.childElementCount);
    if (parentList.childElementCount === 0) {
      taskList.classList.add("hidden");
    }
  });
  li.appendChild(button);

  newTaskInput.value = "";
  parentList.appendChild(li);
  console.log(completedTaskList.childElementCount);
  console.log("today" + parentList.childElementCount);
  // append check button
  if (parentList.childElementCount >= 1) {
    taskList.classList.remove("hidden");
  }
});

if (parentList.childElementCount === 0) {
  taskList.classList.add("hidden");
}
