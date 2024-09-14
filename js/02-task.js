const refs = {
  mainForm: document.querySelector("#mainForm"),
  list: document.querySelector(".js-list"),
};

const taskList = [];
let taskId = 0;

refs.mainForm.addEventListener("submit", handleFormSubmit);
refs.list.addEventListener("click", handleTaskClick);

function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;

  const taskValue = form.elements.task.value.trim();

  refs.list.insertAdjacentHTML("beforeend", createTaskItem(taskValue));

  form.reset();
  console.log(taskList);
}

function handleTaskClick(event) {
  console.log(event.target);
  if (event.target.tagName === "SPAN" || event.target.tagName === "LI") {
    const liEl = event.target.closest("li");
    liEl.classList.toggle("line-through");

    const liId = Number(liEl.dataset.id);

    const currentTaskObj = taskList.find((task) => task.taskId === liId);

    currentTaskObj.isDone = !currentTaskObj.isDone;
  } else if (event.target.tagName === "BUTTON") {
    const liEl = event.target.closest("li");
    const liId = Number(liEl.dataset.id);

    const indexToDelete = taskList.findIndex((task) => task.taskId === liId);

    taskList.splice(indexToDelete, 1);

    updateTaskList();
    // liEl.remove();
  }
  console.log(taskList);
}

function createTaskItem(text) {
  taskId += 1;
  const taskObj = {
    text,
    isDone: false,
    taskId,
  };

  taskList.push(taskObj);

  const taskNumber = taskList.length;

  return `<li data-id="${taskId}"><span>${taskNumber}. ${text}</span><button>Delete</button></li>`;
}

function updateTaskItem(task, i) {
  return `<li data-id="${task.taskId}" class="${
    task.isDone ? "line-through" : ""
  }"><span>${i}. ${task.text}</span><button>Delete</button></li>`;
}

function updateTaskList() {
  const newMarkup = taskList.reduce(
    (markup, task, i) => markup + updateTaskItem(task, i + 1),
    ""
  );

  refs.list.innerHTML = newMarkup;
}
