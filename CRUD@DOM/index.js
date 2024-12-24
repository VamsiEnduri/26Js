function addTask() {
    let inputTag = document.querySelector("input");
    let inputTagValue = inputTag.value.trim();

    if (inputTagValue === "") {
        alert("Task cannot be empty!");
        return;
    }

    let tasks = document.getElementById("tasks");

    let li = document.createElement("li");

    // Task Title
    let taskTitle = document.createElement("h2");
    taskTitle.textContent = inputTagValue;

    // Edit Button
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");

    // Delete Button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    // Add elements to the list item
    li.appendChild(taskTitle);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    li.style.listStyleType = "none";

    tasks.appendChild(li);
    inputTag.value = "";

    // Edit Button Event
    editBtn.addEventListener("click", () => editTask(li));

    // Delete Button Event
    deleteBtn.addEventListener("click", () => deleteTask(li));
}

function editTask(listItem) {
    let taskTitle = listItem.querySelector("h2");
    let newTask = prompt("Edit task", taskTitle.textContent);

    if (newTask !== null && newTask.trim() !== "") {
        taskTitle.textContent = newTask;
    }
}

function deleteTask(listItem) {
    let confirmDelete = confirm("Are you sure?");
    if (confirmDelete) {
        listItem.remove();
    }
}

// crud
// creation
// read
//upadte
//  dlete