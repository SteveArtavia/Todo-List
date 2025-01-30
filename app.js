const tasks = JSON.parse(localStorage.getItem('tasks')) || [];


const displayTask = () => {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        taskList.innerHTML += `
            <li class='grid grid-cols-2 p-5 items-center'>
                <div class='task'>${task}</div>
                <div class='buttons'>
                    <button class="ml-5 border-2 text-white p-2 rounded-md" onclick='editTask(${index})'>✏️</button>

                    <button class="text-white border-2 p-2 rounded-md" onclick='deleteTask(${index})'>❌</button>

                    <button class="ml-5 border-2 text-white p-2 rounded-md">✅</button>
                </div>
            </li><hr>
        `;
    });

    taskList.scrollTop = taskList.scrollHeight;
}

const createTask = () => {
    const newTask = document.getElementById('new-task').value;
    document.getElementById('new-task').value = '';

    if(newTask){
        tasks.push(newTask);
        saveTask();
        displayTask();
    }
}

document.getElementById('new-task').addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        createTask();
    }
});

const editTask = (index) => {
    const updatedTask = prompt("Edit task: ", tasks[index]);

    if(updatedTask){
        tasks[index] = updatedTask;
        saveTask();
        displayTask();
    }
}

const deleteTask = (index) => {
    if(confirm('Estas seguro que quieres eliminar esta tarea?')){
        tasks.splice(index, 1);
        saveTask();
        displayTask();   
    }
}

const saveTask = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

displayTask();

const completeTask = () => {

}