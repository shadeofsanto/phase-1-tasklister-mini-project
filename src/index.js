document.addEventListener("DOMContentLoaded", () => {
     addingEventListeners()
})

function addingEventListeners() {
    document
      .getElementById("create-task-form")
      .addEventListener("submit", handleFormSubmit)
}

function handleFormSubmit(e) {
  e.preventDefault()
  // console.log(e)
  const task = e.target["new-task-description"].value
  console.log(task)

  displayTask(task)
}

function displayTask(toDoTask) {
  const taskUl = document.getElementById("tasks")
  const taskLi = document.createElement("li")
  const deleteBtn = document.createElement("button")
  deleteBtn.textContent = "x"
  deleteBtn.addEventListener("click", deleteTask)
  taskLi.textContent = toDoTask + " "
  taskLi.appendChild(deleteBtn)
  taskUl.appendChild(taskLi)
}

function deleteTask(e) {
  e.target.parentNode.remove()
}