// Selectors
const todoInput = document.querySelector(".todoInput");
const button = document.querySelector("button");
// Event Listeners
button.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", (evt) => {
  if (evt.key === "Enter") {
    addTodo();
    todoInput.value = null;
  } else {
    return;
  }
});

// Functions
function addTodo() {
  // Check for valid input
  if (todoInput.value.length === 0) {
    return;
  }
  // Add new todo item to list
  else {
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo");
    const todoList = document.getElementsByClassName("todo-list");
    todoList[0].appendChild(newTodo);

    const newDeleteButton = document.createElement("button");
    newDeleteButton.type = "submit";
    newDeleteButton.classList.add("delete-button");
    newDeleteButton.addEventListener("click", (event) => {
      removeTodo(event);
    });
    newTodo.appendChild(newDeleteButton);

    const newIcon = document.createElement("i");
    newIcon.classList.add("fas");
    newIcon.classList.add("fa-trash");
    newDeleteButton.appendChild(newIcon);

    // Reset text box to be empty
    todoInput.value = null;
  }
}

function removeTodo(event) {
  const element = event.target;
  const parent = element.parentElement;
  parent.remove();
}
