document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("#create-task-form")
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskDescription = e.target["new-task-description"].value;
    createNewTask(taskDescription);
    form.reset();
  })
});

function createNewTask(taskDescription) {
  let ul = document.getElementById("tasks")
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.addEventListener("click", deleteTask)
  btn.textContent = " x"
  li.textContent = `${taskDescription} `
  li.append(btn)
  ul.append(li)
}

function deleteTask(e) {
  e.target.parentNode.remove();
}