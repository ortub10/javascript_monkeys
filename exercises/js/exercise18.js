let tasks_ar = [];
function init() {
  declareEvents();
  showTasks();
}

function declareEvents() {
  const addBtn = document.querySelector("#add_btn");
  addBtn.addEventListener("click", function () {
    const id_input = document.querySelector("#id_input");
    tasks_ar.push(id_input.value);
    id_input.value = "";
    showTasks();
  });
  const resetBtn = document.querySelector("#reset_btn");
  resetBtn.addEventListener("click", function () {
    tasks_ar = [];
    showTasks();
  });
}

function showTasks() {
  const id_parent = document.querySelector("#id_parent");
  id_parent.innerHTML = "";
  tasks_ar.forEach(function (item) {
    const taskDiv = document.createElement("div");
    taskDiv.innerHTML = item;
    taskDiv.className = "border p-2";
    id_parent.append(taskDiv);
  });
}
init();
