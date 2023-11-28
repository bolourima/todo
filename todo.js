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

// Create empty array
const state = { tasks: [] };

// Main 4 cards
let cardTodo = document.getElementById("todo-cards");
let cardInProgress = document.getElementById("inprogress-cards");
let cardStuck = document.getElementById("stuck-cards");
let cardDone = document.getElementById("done-cards");

// Render Function
function render() {
  const todoTasks = state.tasks.filter((task) => task.status === "todo");
  const inProgressTasks = state.tasks.filter(
    (task) => task.status === "inprogress"
  );
  const stuckTasks = state.tasks.filter((task) => task.status === "stuck");
  const doneTasks = state.tasks.filter((task) => task.status === "done");

  // console.log(state.tasks);

  cardTodo.innerHTML = "";
  cardInProgress.innerHTML = "";
  cardStuck.innerHTML = "";
  cardDone.innerHTML = "";

  // On the To Do card add task function
  todoTasks.forEach((task) => {
    const card = document.createElement("div");
    card.className = "card";

    const checkBtn = `<button class="checkBtn">ok</button>`;

    const titDescDiv = document.createElement("div");
    const taskTitle = document.createElement("p");
    taskTitle.className = "taskTitleStyle";
    taskTitle.textContent = task.title;
    const taskDesc = document.createElement("p");
    taskDesc.className = "taskDescStyle";
    taskDesc.textContent = task.text;

    const twoButtDiv = document.createElement("div");
    twoButtDiv.className = "twoButtDiv";
    const deleteBtn = `<button class="deleteBtn">x</button>`;
    const editBtn = `<button class="editBtn">edit</button>`;

    const priorityDiv = document.createElement("div");
    priorityDiv.className = "priorityDiv";
    priorityDiv.textContent = task.priority;
    console.log(task.priority);

    cardTodo.appendChild(card);
    card.innerHTML += checkBtn;
    card.appendChild(titDescDiv);
    titDescDiv.appendChild(taskTitle);
    titDescDiv.appendChild(taskDesc);
    card.appendChild(twoButtDiv);
    twoButtDiv.innerHTML += deleteBtn;
    twoButtDiv.innerHTML += editBtn;
    cardTodo.appendChild(priorityDiv);

    const check = document.querySelector(".checkBtn");
    check.addEventListener("click", () => {
      cardDone.appendChild(cardTodo);
    });

    
    // const deleteB = document.querySelector(".deleteBtn");

    // deleteB.addEventListener("click", () => {
    //   cardTodo.remove();
    //   // array find filter(task => task.id !== id)
    // });
  });

  // On the In Progress card add task function
  inProgressTasks.forEach((task) => {
    const card = document.createElement("div");
    card.className = "card";

    const checkBtn = `<button class="checkBtn">ok</button>`;

    const titDescDiv = document.createElement("div");
    const taskTitle = document.createElement("p");
    taskTitle.className = "taskTitleStyle";
    taskTitle.textContent = task.title;
    const taskDesc = document.createElement("p");
    taskDesc.className = "taskDescStyle";
    taskDesc.textContent = task.text;

    const twoButtDiv = document.createElement("div");
    twoButtDiv.className = "twoButtDiv";
    const deleteBtn = `<button class="deleteBtn">x</button>`;
    const editBtn = `<button class="editBtn">edit</button>`;

    cardInProgress.appendChild(card);
    card.innerHTML += checkBtn;
    card.appendChild(titDescDiv);
    titDescDiv.appendChild(taskTitle);
    titDescDiv.appendChild(taskDesc);
    card.appendChild(twoButtDiv);
    twoButtDiv.innerHTML += deleteBtn;
    twoButtDiv.innerHTML += editBtn;
  });

  // On the Stuck card add task function
  stuckTasks.forEach((task) => {
    const card = document.createElement("div");
    card.className = "card";

    const checkBtn = `<button class="checkBtn">ok</button>`;

    const titDescDiv = document.createElement("div");
    const taskTitle = document.createElement("p");
    taskTitle.className = "taskTitleStyle";
    taskTitle.textContent = task.title;
    const taskDesc = document.createElement("p");
    taskDesc.className = "taskDescStyle";
    taskDesc.textContent = task.text;

    const twoButtDiv = document.createElement("div");
    twoButtDiv.className = "twoButtDiv";
    const deleteBtn = `<button class="deleteBtn">x</button>`;
    const editBtn = `<button class="editBtn">edit</button>`;

    cardStuck.appendChild(card);
    card.innerHTML += checkBtn;
    card.appendChild(titDescDiv);
    titDescDiv.appendChild(taskTitle);
    titDescDiv.appendChild(taskDesc);
    card.appendChild(twoButtDiv);
    twoButtDiv.innerHTML += deleteBtn;
    twoButtDiv.innerHTML += editBtn;
  });

  // On the Done card add task function
  doneTasks.forEach((task) => {
    const card = document.createElement("div");
    card.className = "card";

    const checkBtn = `<button class="checkBtn">ok</button>`;

    const titDescDiv = document.createElement("div");
    const taskTitle = document.createElement("p");
    taskTitle.className = "taskTitleStyle";
    taskTitle.textContent = task.title;
    const taskDesc = document.createElement("p");
    taskDesc.className = "taskDescStyle";
    taskDesc.textContent = task.text;

    const twoButtDiv = document.createElement("div");
    twoButtDiv.className = "twoButtDiv";
    const deleteBtn = `<button class="deleteBtn">x</button>`;
    const editBtn = `<button class="editBtn">edit</button>`;

    cardDone.appendChild(card);
    card.innerHTML += checkBtn;
    card.appendChild(titDescDiv);
    titDescDiv.appendChild(taskTitle);
    titDescDiv.appendChild(taskDesc);
    card.appendChild(twoButtDiv);
    twoButtDiv.innerHTML += deleteBtn;
    twoButtDiv.innerHTML += editBtn;
  });
}

// Add task Function

function addTaskFunc(event, currentStatus) {
  // console.log(event.target.id);
  let titleTextInput = document.getElementById("titleInput");
  let destTextInput = document.getElementById("descriptionInput");
  let statusSelectRef = document.getElementById("status-select");
  let prioritySelectRef = document.getElementById("priority-select");

  let writenTextTitle = titleTextInput.value.trim();
  let writenDescInput = destTextInput.value.trim();

  if (writenTextTitle !== "" && destTextInput !== "") {
    state.tasks.push({
      title: writenTextTitle,
      text: writenDescInput,
      status: statusSelectRef.value || currentStatus,
      priority: prioritySelectRef.value,
    });

    render();

    // add task box -iig haragduulahgui bolgoh
    addTaskBox.style.display = "none";
  }
}

// when click Check button card go to the done card

// function checkFunc() {
//   cardDone.appendChild(card);
// }
// checkBtn.addEventListener("click", checkFunc);
