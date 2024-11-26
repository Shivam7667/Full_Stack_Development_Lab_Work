document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.className = 'task';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', toggleComplete);

        const taskLabel = document.createElement('span');
        taskLabel.textContent = taskText;

        const upButton = document.createElement('button');
        upButton.textContent = 'Up';
        upButton.addEventListener('click', moveUp);

        const downButton = document.createElement('button');
        downButton.textContent = 'Down';
        downButton.addEventListener('click', moveDown);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', deleteTask);

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskLabel);
        taskItem.appendChild(upButton);
        taskItem.appendChild(downButton);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
        newTaskInput.value = '';
    }

    function toggleComplete(event) {
        const taskItem = event.target.parentElement;
        taskItem.classList.toggle('completed');
    }

    function deleteTask(event) {
        const taskItem = event.target.parentElement;
        taskList.removeChild(taskItem);
    }

    function moveUp(event) {
        const taskItem = event.target.parentElement;
        const previousTask = taskItem.previousElementSibling;
        if (previousTask) {
            taskList.insertBefore(taskItem, previousTask);
        }
    }

    function moveDown(event) {
        const taskItem = event.target.parentElement;
        const nextTask = taskItem.nextElementSibling;
        if (nextTask) {
            taskList.insertBefore(nextTask, taskItem);
        }
    }
});
