const inputBox = document.getElementById("input-box");
const tasks = document.getElementById("tasks");
function addTask () {
    if (inputBox.value === '') {
        alert ("you should write a task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        tasks.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
        inputBox.value = "";
        saveData();
}

tasks.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
        saveData();
    }   else if (e.target.tagName = "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }

 }, false);

 function saveData() {
    localStorage.setItem("data",tasks.innerHTML);
 }

 function showTasks() {
    tasks.innerHTML = localStorage.getItem("data");
 }

 showTasks();
