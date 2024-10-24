const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addItem() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");

    let taskText = document.createElement("span");
    taskText.innerText = inputBox.value;
    taskText.classList.add("task-text");

    let completeButton = document.createElement("button");
    completeButton.innerHTML = "Completed";
    completeButton.classList.add("complete-btn");
    completeButton.onclick = function () {
      taskText.classList.toggle("checked");
      saveData();
    };

    let removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    removeButton.classList.add("remove-btn");
    removeButton.onclick = function () {
      li.remove();
      saveData();
    };

    li.appendChild(taskText);
    li.appendChild(completeButton);
    li.appendChild(removeButton);
    listContainer.appendChild(li);
  }
  inputBox.value = "";
  saveData();
}

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");

  Array.from(listContainer.querySelectorAll("li")).forEach((li) => {
    const completeButton = li.querySelector(".complete-btn");
    const removeButton = li.querySelector(".remove-btn");
    const taskText = li.querySelector(".task-text");

    completeButton.onclick = function () {
      taskText.classList.toggle("checked");
      saveData();
    };

    removeButton.onclick = function () {
      li.remove();
      saveData();
    };
  });
}
showTask();