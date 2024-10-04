// Initialize main variable

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

//Display tasks
const displayTask = () => {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        taskList.innerHTML += `
            <li class='mb-5'>
                ${task}
                <button class="ml-5 bg-blue-300 text-white p-2 rounded-md" onclick='editTask(${index})'>edit</button>
                <button class="bg-red-300 text-white p-2 rounded-md" onclick='deleteTask(${index})'>delete</button>
            </li>
        `;
    });
}

// Create task
const createTask = () => {
    const newTask = document.getElementById('new-task').value;
    document.getElementById('new-task').value = '';

    if(newTask){
        tasks.push(newTask);
        saveTask();
        displayTask();
    }
}

// Enter event for create button
document.getElementById('new-task').addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        createTask();
    }
});


// Edit task
const editTask = (index) => {
    const updatedTask = prompt("Edit task: ", tasks[index]);

    if(updatedTask){
        tasks[index] = updatedTask;
        saveTask();
        displayTask();
    }
}

// Delete task
const deleteTask = (index) => {
    tasks.splice(index, 1);
    saveTask();
    displayTask();
}

// Save task
const saveTask = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

displayTask();