document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let prioColor = "red"
  let dropDown = document.getElementById("drop-down")
  dropDown.addEventListener("change", (e) => {
    prioColor = e.target.value
  });
  let form = document.querySelector("#create-task-form")
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskDescription = e.target["new-task-description"].value;
    const dueDate = e.target["date-due"].value
    createNewTask(taskDescription, dueDate, prioColor);
    form.reset();
    prioColor = "red";
  })
});

function createNewTask(taskDescription, dueDate, prioColor) {
  let ul = document.getElementById("tasks")
  let li = document.createElement("li");
  let btn = document.createElement("button");
  let editBtn = document.createElement("button");
  let editInput = document.createElement("input")
  editInput.setAttribute("id", "edit-input")
  btn.textContent = " x"
  editBtn.textContent = " edit"
  editBtn.style.marginLeft = "5px"
  li.textContent = `${taskDescription}, Day:${dueDate}`
  li.style.color = prioColor;
  let editTask = () => {
    let editedValue = editInput.value
    li.textContent = `${editedValue}, Day:${dueDate}`
    li.append(editInput, btn, editBtn)
    editInput.value = ""
  }
  btn.addEventListener("click", deleteTask)
  editBtn.addEventListener("click", editTask)
  li.append(editInput, btn, editBtn)
  ul.append(li)
}
// unhide inputbox
//hide todo
//take editinput value and push to new todo


function deleteTask(e) {
  e.target.parentNode.remove();
}