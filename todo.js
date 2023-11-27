let addCartbtn = document.querySelectorAll(".addCard");
// console.log(addCartbtn, "add card button");
let addTaskBox = document.querySelector(".addTask");

// Add Task -ийг ил харагдуулах функц
let currentStatus = "todo";
function addCardFunction(event) {
  let currentStatus = event.target.id;

  let addTaskButton = document.getElementById("addTaskButton");
  addTaskButton.onclick = (event) => addTaskFunc(event, currentStatus);

  addTaskBox.style.display = "block";
}

// Add card дээр дарах үед Add Task цонх гарч ирэх функц

addCartbtn.forEach(function (item, idx) {
  item.addEventListener("click", addCardFunction);
});

// Render Function
const state = { tasks: [] };

let cardTodo = document.getElementById("todo-cards");
let cardInProgress = document.getElementById("inprogress-cards");
let cardStuck = document.getElementById("stuck-cards");
let cardDone = document.getElementById("done-cards");

function render() {
  const todoTasks = state.tasks.filter((task) => task.status === "todo");
  const inProgressTasks = state.tasks.filter(
    (task) => task.status === "inprogress"
  );
  const stuckTasks = state.tasks.filter((task) => task.status === "stuck");
  const doneTasks = state.tasks.filter((task) => task.status === "done");

  console.log(state.tasks);
  cardTodo.innerHTML = "";
  cardInProgress.innerHTML = "";
  cardStuck.innerHTML = "";
  cardDone.innerHTML = "";

  todoTasks.forEach((task) => {
    const card = document.createElement("div");
    card.className = "task";

    const titDescDiv = document.createElement("div");
    const taskTitle = document.createElement("p");
    const taskDesc = document.createElement("p");

    const checkBtn = `<button>ok</button>`;
    checkBtn.className = "checkBtn"

    const twoButtDiv = document.createElement("div");
    const deleteBtn = `<button>x</button>`;
    deleteBtn.className = "deletebutton"

    const editBtn = `<button>edit</button>`;

    taskTitle.textContent = task.title;
    taskDesc.textContent = task.text;

    taskTitle.className = "taskTitleStyle";
    taskDesc.className = "taskDescStyle";

    cardTodo.appendChild(card);
    card.innerHTML += checkBtn;
    card.appendChild(titDescDiv);
    titDescDiv.appendChild(taskTitle);
    titDescDiv.appendChild(taskDesc);
    card.appendChild(twoButtDiv);
    twoButtDiv.innerHTML += deleteBtn;
    twoButtDiv.innerHTML += editBtn;
    // twoButtDiv.appendChild(deleteBtn);
    // twoButtDiv.appendChild(editBtn);
  });

  inProgressTasks.forEach((task) => {
    const taskTitle = document.createElement("p");
    const taskDesc = document.createElement("p");

    taskTitle.textContent = task.title;
    taskDesc.textContent = task.text;

    taskTitle.className = "taskTitleStyle";
    taskDesc.className = "taskDescStyle";

    cardInProgress.appendChild(taskTitle);
    cardInProgress.appendChild(taskDesc);
  });

  stuckTasks.forEach((task) => {
    const taskTitle = document.createElement("p");
    const taskDesc = document.createElement("p");

    taskTitle.textContent = task.title;
    taskDesc.textContent = task.text;

    taskTitle.className = "taskTitleStyle";
    taskDesc.className = "taskDescStyle";

    cardStuck.appendChild(taskTitle);
    cardStuck.appendChild(taskDesc);
  });

  doneTasks.forEach((task) => {
    const taskTitle = document.createElement("p");
    const taskDesc = document.createElement("p");

    taskTitle.textContent = task.title;
    taskDesc.textContent = task.text;

    taskTitle.className = "taskTitleStyle";
    taskDesc.className = "taskDescStyle";

    cardDone.appendChild(taskTitle);
    cardDone.appendChild(taskDesc);
  });
}

// Add task button дээр дарахад content To do рүү очих

function addTaskFunc(event, currentStatus) {
  console.log(event.target.id);
  let titleTextInput = document.getElementById("titleInput");
  let destTextInput = document.getElementById("descriptionInput");
  let statusSelectRef = document.getElementById("status-select");
  console.log(statusSelectRef.value, currentStatus);

  let writenTextTitle = titleTextInput.value.trim();
  let writenDescInput = destTextInput.value.trim();

  // console.log(writenTextTitle);
  if (writenTextTitle !== "" && destTextInput !== "") {
    state.tasks.push({
      title: writenTextTitle,
      text: writenDescInput,
      status: statusSelectRef.value || currentStatus,
    });

    titleTextInput.innerText = "";
    destTextInput.innerText = "";

    render();

    addTaskBox.style.display = "none";
  }
}
