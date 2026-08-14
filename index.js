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
})





addbtn.addEventListener("click", function () {
    const text = taskinput.value;
    if (text.trim() === "") {
        return;
    }

   const card = document.createElement("div");
    card.classList.add("task-card");

    const taskText = document.createElement("p");
    taskText.textContent = text;

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttons");


// This is the complete and delete buttons


    const completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-btn");
    completeBtn.textContent = "✓ Complete";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "🗑 Delete";


    buttonContainer.appendChild(completeBtn);
    buttonContainer.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function () {
    card.remove();});

    completeBtn.addEventListener("click", function () {
    taskText.classList.toggle("completed");});


//==================================================

    // Add text and buttons to card
    card.appendChild(taskText);
    card.appendChild(buttonContainer);

    displayarea.appendChild(card);
});