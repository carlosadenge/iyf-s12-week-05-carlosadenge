// ============================================
// TO-DO LIST - Carlos Adenge
// Week 5: DOM Manipulation
// ============================================

const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const clearCompletedBtn = document.getElementById("clear-completed");
const filterBtns = document.querySelectorAll(".filter-btn");

let tasks = [];
let currentFilter = "all";

// ---------- RENDER ----------
function render() {
    todoList.innerHTML = "";

    const filtered = tasks.filter(task => {
        if (currentFilter === "active") return !task.completed;
        if (currentFilter === "completed") return task.completed;
        return true;
    });

    filtered.forEach(task => {
        const li = document.createElement("li");
        li.className = "todo-item" + (task.completed ? " completed" : "");
        li.dataset.id = task.id;

        const span = document.createElement("span");
        span.className = "todo-text";
        span.textContent = task.text;   // IMPORTANT: textContent only (never innerHTML)

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";

        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });

    const activeCount = tasks.filter(t => !t.completed).length;
    itemsLeft.textContent = activeCount === 1 ? "1 item left" : `${activeCount} items left`;
}

// ---------- ADD TASK ----------
function addTask(text) {
    const trimmed = text.trim();
    if (trimmed === "") return;   // refuse empty or spaces-only

    tasks.push({
        id: Date.now(),
        text: trimmed,
        completed: false
    });

    todoInput.value = "";
    render();
}

// ---------- EVENT DELEGATION (ONE listener on the list) ----------
todoList.addEventListener("click", function (e) {
    const li = e.target.closest(".todo-item");
    if (!li) return;

    const id = Number(li.dataset.id);

    // Toggle complete
    if (e.target.classList.contains("todo-text")) {
        const task = tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            render();
        }
    }

    // Delete
    if (e.target.classList.contains("delete-btn")) {
        tasks = tasks.filter(t => t.id !== id);
        render();
    }
});

// ---------- DOUBLE-CLICK TO EDIT (Bonus) ----------
todoList.addEventListener("dblclick", function (e) {
    if (!e.target.classList.contains("todo-text")) return;

    const li = e.target.closest(".todo-item");
    const id = Number(li.dataset.id);
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    const input = document.createElement("input");
    input.className = "edit-input";
    input.value = task.text;

    e.target.replaceWith(input);
    input.focus();

    function saveEdit() {
        const newText = input.value.trim();
        if (newText !== "") {
            task.text = newText;
        }
        render();
    }

    input.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter") {
            saveEdit();
        } else if (ev.key === "Escape") {
            render();
        }
    });

    input.addEventListener("blur", saveEdit);
});

// ---------- FORM SUBMIT ----------
todoForm.addEventListener("submit", function (e) {
    e.preventDefault();          // prevent page reload
    addTask(todoInput.value);
});

// ---------- FILTERS ----------
filterBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        render();
    });
});

// ---------- CLEAR COMPLETED ----------
clearCompletedBtn.addEventListener("click", function () {
    tasks = tasks.filter(t => !t.completed);
    render();
});

// Initial render
render();
