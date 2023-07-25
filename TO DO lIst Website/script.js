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
