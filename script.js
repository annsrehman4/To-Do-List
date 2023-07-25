const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="remove-button" onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
}

function removeTask(button) {
    const listItem = button.parentElement;
    taskList.removeChild(listItem);
}

taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
var array=[];
fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then(data => {
      // Once the JSON data is retrieved, store it in the array
      array=data.map(item=>item.title);
      const display=document.getElementById(taskList);
      console.log(array)
    });