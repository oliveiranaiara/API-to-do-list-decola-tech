
function addTask() {
    const titleInput = document.getElementById('taskTitle');
    const dueDateInput = document.getElementById('taskDueDate');
    const priorityInput = document.getElementById('taskPriority');
    
    const title = titleInput.value.trim();
    const dueDate = dueDateInput.value;
    const priority = priorityInput.value;
    
    if (title) {
        fetch('/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                title: title, 
                completed: false,
                dueDate: dueDate,
                priority: priority
            })
        })
        .then(response => response.json())
        .then(task => {
            loadTasks();
            titleInput.value = '';
            dueDateInput.value = '';
            priorityInput.value = 'LOW';
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
                const priorityColor = getPriorityColor(task.priority);
                div.innerHTML = `
                    <div class="task-item ${task.completed ? 'completed' : ''}" style="border-left: 4px solid ${priorityColor}">
                        <span class="task-title">${task.title}</span>
                        <span class="task-date">${task.dueDate || 'No due date'}</span>
                        <span class="task-priority" style="background: ${priorityColor}20; color: ${priorityColor}">${task.priority}</span>
                        <button onclick="completeTask(${task.id})" class="complete-btn" ${task.completed ? 'disabled' : ''}>
                            ${task.completed ? 'Completed' : 'Complete'}
                        </button>
                        <button onclick="deleteTask(${task.id})" class="delete-btn">Delete</button>
                    </div>
                `;
                taskList.appendChild(div);
            });
        });
}

function completeTask(id) {
    fetch(`/tasks/${id}/complete`, {
        method: 'PATCH'
    })
    .then(() => loadTasks());
}

function getPriorityColor(priority) {
    switch(priority) {
        case 'HIGH': return '#ff4444';
        case 'MEDIUM': return '#ffaa00';
        case 'LOW': return '#44ff44';
        default: return '#cccccc';
    }
}

function deleteTask(id) {
    fetch(`/tasks/${id}`, {
        method: 'DELETE'
    }).then(() => loadTasks());
}

document.addEventListener('DOMContentLoaded', loadTasks);
