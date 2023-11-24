let addCartbtn = document.querySelectorAll(".addCard");
// console.log(addCartbtn, "add card button");
let addTaskBox = document.querySelector(".addTask");

// Add Task -ийг ил харагдуулах функц
let currentStatus = "todo"
function addCardFunction(event) {

  currentStatus = event.target.id;
  // console.log(addTaskBox, "add Task Box");
  addTaskBox.style.display = "block";
}

// Add card дээр дарах үед Add Task цонх гарч ирэх функц

addCartbtn.forEach(function (item, idx) {
  item.addEventListener("click", addCardFunction);
});

// Render Function
const state = { tasks: [] };

let cardtodo = document.getElementById("todo");

function render() {
  const todoTasks = state.tasks.filter((task) => task.status === "todo");
  const inprogressTasks = state.tasks.filter(
    (task) => task.status === "inprogress"
  );
  console.log(state.tasks);
  cardtodo.innerHTML = "";

  state.tasks.forEach((task) => {
    const taskTitle = document.createElement("b");
    const taskDesc = document.createElement("p");

    taskTitle.textContent = task.text;
    taskDesc.textContent = task.text;

    cardtodo.appendChild(taskTitle);
    cardtodo.appendChild(taskDesc);
  });
}

// Add task button дээр дарахад content To do рүү очих

function addTaskFunc(event) {
  console.log(event.target.id);
  let titleTextInput = document.getElementById("titleInput");
  let destTextInput = document.getElementById("descriptionInput");

  let writenTextTitle = titleTextInput.value.trim();
  let writenDescInput = destTextInput.value.trim();

  // console.log(writenTextTitle);
  if ((writenTextTitle !== "") & (destTextInput !== "")) {
    state.tasks.push({ text: writenTextTitle, text: writenDescInput, status: currentStatus });
    render();
    addTaskBox.style.display = "none";
  }
}

let addTaskButton = document.getElementById("addTaskButton");
// console.log(addTaskButton)
addTaskButton.addEventListener("click", addTaskFunc);
