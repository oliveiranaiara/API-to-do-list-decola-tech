
function addTask() {
    const titleInput = document.getElementById('taskTitle');
    const title = titleInput.value.trim();
    
    if (title) {
        fetch('/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: title, completed: false })
        })
        .then(response => response.json())
        .then(task => {
            loadTasks();
            titleInput.value = '';
        });
    }
}

function loadTasks() {
    fetch('/tasks')
        .then(response => response.json())
        .then(tasks => {
            const taskList = document.getElementById('taskList');
            taskList.innerHTML = '';
            tasks.forEach(task => {
                const div = document.createElement('div');
                div.innerHTML = `
                    <div style="display: flex; justify-content: space-between; margin: 10px 0;">
                        <span>${task.title}</span>
                        <button onclick="deleteTask(${task.id})" style="background: #ff4444;">Delete</button>
                    </div>
                `;
                taskList.appendChild(div);
            });
        });
}

function deleteTask(id) {
    fetch(`/tasks/${id}`, {
        method: 'DELETE'
    }).then(() => loadTasks());
}

// Load tasks when page loads
document.addEventListener('DOMContentLoaded', loadTasks);
