let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}




const taskinput = document.getElementById("taskinput");
const addbtn = document.getElementById("addbtn");
const displayarea = document.getElementById("displayarea");
const model = document.getElementById("taskop");
const open = document.getElementById("createbtn");
const cancel = document.getElementById("cancelbtn");
const tasktime = document.getElementById("tasktime");

model.style.display = "none";

open.addEventListener("click", () => {
    model.style.display = "flex";
})

cancel.addEventListener("click", () => {
    taskinput.value = "";
    tasktime.value = "";
    model.style.display = "none";
});

addbtn.addEventListener("click", function () {

    const text = taskinput.value;
    const time = tasktime.value;

    if (text.trim() === "") {
        return;
    }

    const newTask = {
        id: Date.now(),
        text: text,
        time: time,
        priority: taskpriority.value, 
        completed: false
    };

    tasks.push(newTask);

    saveTasks();

    taskinput.value = "";
    tasktime.value = "";

    model.style.display = "none";

    renderTasks();
});







function renderTasks() {

    displayarea.innerHTML = "";

    tasks.forEach(function(task) {

        const card = document.createElement("div");
        card.classList.add("task-card");

        const taskText = document.createElement("p");

        taskText.textContent = task.text;

        if (task.completed) {
            taskText.classList.add("completed");
        }

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("buttons");

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "✓ Complete";
        completeBtn.classList.add("complete-btn");

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑 Delete";
        deleteBtn.classList.add("delete-btn");

        completeBtn.addEventListener("click", function() {

            task.completed = !task.completed;

            saveTasks();
            renderTasks();

        });

        deleteBtn.addEventListener("click", function() {

            tasks = tasks.filter(function(item) {
                return item.id !== task.id;
            });

            saveTasks();
            renderTasks();

        });

        buttonContainer.appendChild(completeBtn);
        buttonContainer.appendChild(deleteBtn);

        card.appendChild(taskText);

        if (task.time) {
            const taskTime = document.createElement("span");
            taskTime.textContent = task.time;
            card.appendChild(taskTime);
        }

        card.appendChild(buttonContainer);

        displayarea.appendChild(card);

        
        const priorityBadge = document.createElement("span");
        const taskpriority = document.getElementById("taskpriority");

        priorityBadge.textContent = taskpriority;
        priorityBadge.classList.add("priorityBadge", taskpriority.toLowerCase());

        card.append(taskText);
        card.append(priorityBadge);
        card.append(buttonContainer);
    });
}


renderTasks()