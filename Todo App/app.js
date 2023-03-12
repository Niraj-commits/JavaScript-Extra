let todos = [];

function addTodo() {
  const input = document.getElementById("input");
  const task = input.value.trim();

  if (task === "") {
    return;
  }

  todos.push(task);
  input.value = "";
  renderList();
}

function removeTodo(index) {
  todos.splice(index, 1);
  renderList();
}

function renderList() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  todos.forEach((task, index) => {
    const li = document.createElement("li");
    const taskEl = document.createElement("span");
    taskEl.classList.add("task");
    taskEl.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      removeTodo(index);
    });

    li.appendChild(taskEl);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}
