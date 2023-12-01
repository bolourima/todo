let addCartbtn = document.querySelectorAll(".addCard");
let addTaskBox = document.querySelector(".addTask");
let titleTextInput = document.getElementById("titleInput");
let destTextInput = document.getElementById("descriptionInput");
let statusSelectRef = document.getElementById("status-select");
let prioritySelectRef = document.getElementById("priority-select");
let taskCounttext = document.getElementById("taskCounttext");

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

    const checkBtn = document.createElement("button");
    checkBtn.className = "checkBtn";
    checkBtn.innerHTML = "ok";
    checkBtn.id = task.id;

    const titDescDiv = document.createElement("div");
    const taskTitle = document.createElement("p");
    taskTitle.className = "taskTitleStyle";
    taskTitle.textContent = task.title;
    const taskDesc = document.createElement("p");
    taskDesc.className = "taskDescStyle";
    taskDesc.textContent = task.text;

    const twoButtDiv = document.createElement("div");
    twoButtDiv.className = "twoButtDiv";
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerHTML = "x";
    deleteBtn.id = task.id;

    const editBtn = document.createElement("button");
    editBtn.className = "editBtn";
    editBtn.innerHTML = "edit";
    editBtn.id = task.id;

    const priorityDiv = document.createElement("div");
    priorityDiv.className = "priorityDiv";
    priorityDiv.textContent = task.priority;

    cardTodo.appendChild(card);

    deleteBtn.onclick = function (event) {
      let taskIdToDelete = event.target.id;
      // console.log(taskIdToDelete);
      state.tasks = state.tasks.filter((task) => task.id !== taskIdToDelete);
      render();
    };
    editBtn.onclick = function (event) {
      writenTextTitle.value = taskTitle.textContent;
      writenDescInput.value = taskDesc.textContent;
      taskId.value = task.id;
      let taskIdToDelete = event.target.id;
      state.tasks = state.tasks.filter((task) => task.id !== taskIdToDelete);
      addTaskBox.style.display = "flex";
      addTaskBox.style.flexDirection = "column";
      task.text = "";
      task.title = "";
    };

    checkBtn.onclick = function (event) {
      let taskIdtoDone = event.target.id;
      state.tasks = state.tasks.map((task) => {
        if (task.id === taskIdtoDone) {
          return { ...task, status: "done" };
        }
      });
      render();
    };
    function taskCount() {
      let tasknum = cardTodo.childElementCount;
      taskCounttext.textContent = tasknum;
      console.log("tasknum", tasknum);
      // console.log("taskcounttext", taskCounttext);
    }
    taskCount();

    card.appendChild(checkBtn);
    card.appendChild(titDescDiv);
    titDescDiv.appendChild(taskTitle);
    titDescDiv.appendChild(taskDesc);
    titDescDiv.appendChild(priorityDiv);
    card.appendChild(twoButtDiv);
    twoButtDiv.appendChild(deleteBtn);
    twoButtDiv.appendChild(editBtn);
  });

  // On the In Progress card add task function
  inProgressTasks.forEach((task) => {
    const card = document.createElement("div");
    card.className = "card";

    const checkBtn = document.createElement("button");
    checkBtn.className = "checkBtn";
    checkBtn.innerHTML = "ok";
    checkBtn.id = task.id;

    const titDescDiv = document.createElement("div");
    const taskTitle = document.createElement("p");
    taskTitle.className = "taskTitleStyle";
    taskTitle.textContent = task.title;
    const taskDesc = document.createElement("p");
    taskDesc.className = "taskDescStyle";
    taskDesc.textContent = task.text;

    const twoButtDiv = document.createElement("div");
    twoButtDiv.className = "twoButtDiv";
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerHTML = "x";
    deleteBtn.id = task.id;

    const editBtn = document.createElement("button");
    editBtn.className = "editBtn";
    editBtn.innerHTML = "edit";
    editBtn.id = task.id;

    const priorityDiv = document.createElement("div");
    priorityDiv.className = "priorityDiv";
    priorityDiv.textContent = task.priority;

    cardInProgress.appendChild(card);

    deleteBtn.onclick = function (event) {
      let taskIdToDelete = event.target.id;
      // console.log(taskIdToDelete);
      state.tasks = state.tasks.filter((task) => task.id !== taskIdToDelete);
      render();
    };
    editBtn.onclick = function (event) {
      writenTextTitle.value = taskTitle.textContent;
      writenDescInput.value = taskDesc.textContent;
      taskId.value = task.id;
      let taskIdToDelete = event.target.id;
      state.tasks = state.tasks.filter((task) => task.id !== taskIdToDelete);
      addTaskBox.style.display = "flex";
      addTaskBox.style.flexDirection = "column";
      task.text = "";
      task.title = "";
    };

    checkBtn.onclick = function (event) {
      let taskIdtoDone = event.target.id;
      state.tasks = state.tasks.map((task) => {
        if (task.id === taskIdtoDone) {
          return { ...task, status: "done" };
        }
      });
      render();
    };

    card.appendChild(checkBtn);
    card.appendChild(titDescDiv);
    titDescDiv.appendChild(taskTitle);
    titDescDiv.appendChild(taskDesc);
    titDescDiv.appendChild(priorityDiv);
    card.appendChild(twoButtDiv);
    twoButtDiv.appendChild(deleteBtn);
    twoButtDiv.appendChild(editBtn);
  });

  // On the Stuck card add task function
  stuckTasks.forEach((task) => {
    const card = document.createElement("div");
    card.className = "card";

    const checkBtn = document.createElement("button");
    checkBtn.className = "checkBtn";
    checkBtn.innerHTML = "ok";
    checkBtn.id = task.id;

    const titDescDiv = document.createElement("div");
    const taskTitle = document.createElement("p");
    taskTitle.className = "taskTitleStyle";
    taskTitle.textContent = task.title;
    const taskDesc = document.createElement("p");
    taskDesc.className = "taskDescStyle";
    taskDesc.textContent = task.text;

    const twoButtDiv = document.createElement("div");
    twoButtDiv.className = "twoButtDiv";
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerHTML = "x";
    deleteBtn.id = task.id;

    const editBtn = document.createElement("button");
    editBtn.className = "editBtn";
    editBtn.innerHTML = "edit";
    editBtn.id = task.id;

    const priorityDiv = document.createElement("div");
    priorityDiv.className = "priorityDiv";
    priorityDiv.textContent = task.priority;

    cardStuck.appendChild(card);

    deleteBtn.onclick = function (event) {
      let taskIdToDelete = event.target.id;
      // console.log(taskIdToDelete);
      state.tasks = state.tasks.filter((task) => task.id !== taskIdToDelete);
      render();
    };
    editBtn.onclick = function (event) {
      writenTextTitle.value = taskTitle.textContent;
      writenDescInput.value = taskDesc.textContent;
      taskId.value = task.id;
      let taskIdToDelete = event.target.id;
      state.tasks = state.tasks.filter((task) => task.id !== taskIdToDelete);
      addTaskBox.style.display = "flex";
      addTaskBox.style.flexDirection = "column";
      task.text = "";
      task.title = "";
    };

    checkBtn.onclick = function (event) {
      let taskIdtoDone = event.target.id;
      state.tasks = state.tasks.map((task) => {
        if (task.id === taskIdtoDone) {
          return { ...task, status: "done" };
        }
      });
      render();
    };

    card.appendChild(checkBtn);
    card.appendChild(titDescDiv);
    titDescDiv.appendChild(taskTitle);
    titDescDiv.appendChild(taskDesc);
    titDescDiv.appendChild(priorityDiv);
    card.appendChild(twoButtDiv);
    twoButtDiv.appendChild(deleteBtn);
    twoButtDiv.appendChild(editBtn);
  });

  // On the Done card add task function
  doneTasks.forEach((task) => {
    const card = document.createElement("div");
    card.className = "card";

    const checkBtn = document.createElement("button");
    checkBtn.className = "checkBtn";
    checkBtn.innerHTML = "ok";
    checkBtn.id = task.id;

    const titDescDiv = document.createElement("div");
    const taskTitle = document.createElement("p");
    taskTitle.className = "taskTitleStyle";
    taskTitle.textContent = task.title;
    const taskDesc = document.createElement("p");
    taskDesc.className = "taskDescStyle";
    taskDesc.textContent = task.text;

    const twoButtDiv = document.createElement("div");
    twoButtDiv.className = "twoButtDiv";
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerHTML = "x";
    deleteBtn.id = task.id;

    const editBtn = document.createElement("button");
    editBtn.className = "editBtn";
    editBtn.innerHTML = "edit";
    editBtn.id = task.id;

    const priorityDiv = document.createElement("div");
    priorityDiv.className = "priorityDiv";
    priorityDiv.textContent = task.priority;

    cardDone.appendChild(card);

    deleteBtn.onclick = function (event) {
      let taskIdToDelete = event.target.id;
      // console.log(taskIdToDelete);
      state.tasks = state.tasks.filter((task) => task.id !== taskIdToDelete);
      render();
    };
    editBtn.onclick = function (event) {
      writenTextTitle.value = taskTitle.textContent;
      writenDescInput.value = taskDesc.textContent;
      taskId.value = task.id;
      let taskIdToDelete = event.target.id;
      state.tasks = state.tasks.filter((task) => task.id !== taskIdToDelete);
      addTaskBox.style.display = "flex";
      addTaskBox.style.flexDirection = "column";
      task.text = "";
      task.title = "";
    };

    checkBtn.onclick = function (event) {
      let taskIdtoDone = event.target.id;
      state.tasks = state.tasks.map((task) => {
        if (task.id === taskIdtoDone) {
          return { ...task, status: "done" };
        }
      });
      render();
    };

    card.appendChild(checkBtn);
    card.appendChild(titDescDiv);
    titDescDiv.appendChild(taskTitle);
    titDescDiv.appendChild(taskDesc);
    titDescDiv.appendChild(priorityDiv);
    card.appendChild(twoButtDiv);
    twoButtDiv.appendChild(deleteBtn);
    twoButtDiv.appendChild(editBtn);
  });
}
// Add task Function
let writenTextTitle;
let writenDescInput;
let taskId;
function addTaskFunc(event, currentStatus) {
  // console.log(event.target.id);
  writenTextTitle = titleTextInput.value.trim();
  writenDescInput = destTextInput.value.trim();
  taskId = Math.random().toString(16).slice(2);

  if (writenTextTitle !== "" && destTextInput !== "") {
    state.tasks.push({
      title: writenTextTitle,
      text: writenDescInput,
      status: statusSelectRef.value || currentStatus,
      priority: prioritySelectRef.value,
      id: taskId,
    });
    render();
    titleTextInput.value = "";
    destTextInput.value = "";
 
    
    addTaskBox.style.display = "none";
  }
}
