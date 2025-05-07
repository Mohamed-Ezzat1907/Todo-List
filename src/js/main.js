// id: Date.now(), 
/*=================================================== */

let inputTask = document.getElementById("taskInput");
let TasksList = document.getElementById("taskList");
let alert = document.getElementById("alert");

let tasks = [];
let i = 0;

function addTask() {
  const taskText = inputTask.value.trim();

  if (taskText !== "") {
    tasks.push({
      id: i, 
      name: taskText,
      done: false
    });

    inputTask.value = null;
    alert.classList.add("hidden");
    display();
  } else {
    alert.classList.remove("hidden");
  }
}

function display() {
  let list = "";

  tasks.forEach((task, index) => {
    list += createTask(task, index);
  });

  TasksList.innerHTML = list;
}

function createTask(task, index) {
  const line = task.done ? "line-through" : "none";

  return `
    <li class="border-b border-gray-200 flex items-center justify-between py-4" style="text-decoration: ${line};">
      <span>${task.name}</span>
      <div>
        <button class=" me-1 text-green-500 hover:text-green-700" onclick='toggle(${index})'>Toggle</button>
        <button class="text-red-500 ms-1 hover:text-red-700 mr-2" onclick='deleteTask(${index})'>Delete</button>
      </div>
    </li>
  `;
}

function toggle(index) {
  tasks[index].done = !tasks[index].done;
  display();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  display();
}
