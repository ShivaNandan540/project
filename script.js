function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    li.onclick = function () {
        li.style.textDecoration =
            li.style.textDecoration === "line-through"
                ? "none"
                : "line-through";
    };

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}


// Search Tasks
document.getElementById("searchInput").addEventListener("input", function () {
    const searchText = this.value.toLowerCase();
    const tasks = document.querySelectorAll("#taskList li");

    tasks.forEach(function (task) {
        if (task.textContent.toLowerCase().includes(searchText)) {
            task.style.display = "list-item";
        } else {
            task.style.display = "none";
        }
    });
});