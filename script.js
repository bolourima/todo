let addCartbtn = document.querySelectorAll(".addCard");
// console.log(addCartbtn, "add card button");
let addTaskBox = document.querySelector(".addTask");

// Add Task -ийг ил харагдуулах функц

function addCardFunction() {
  // console.log(addTaskBox, "add Task Box");
  addTaskBox.style.display = "block";
}

// Add card дээр дарах үед Add Task цонх гарч ирэх функц

addCartbtn.forEach(function (item, idx) {
  item.addEventListener("click", addCardFunction);
});



function incardcontent() {
  let titleTextInput = document.getElementById("titleInput");
  let writenTextTitle = titleTextInput.innerText;
  console.log(writenTextTitle);
}

let addTaskButton = document.getElementById("addTaskButton");
// console.log(addTaskButton)
addTaskButton.addEventListener("click", incardcontent());
