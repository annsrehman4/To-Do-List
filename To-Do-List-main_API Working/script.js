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
var array = [];
function fetcData() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => {
      // Once the JSON data is retrieved, store it in the array
      array.push(...json);
      const container = document.getElementById("taskList");
      array.forEach((todo) => {
        // Step 2: Create a new <li> element
        const newLi = document.createElement("li");

        // Step 3: Set content for the new <li> element (optional)
        newLi.textContent = todo.title; // You can add any content you want inside the <li> element.

        // Step 4: Append the new <li> element to the <ul> element
        container.appendChild(newLi);
      });
    });
}
fetcData();
