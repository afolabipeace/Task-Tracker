var array = [];
var array = JSON.parse(localStorage.getItem('taskList')) || [];
document.addEventListener('DOMContentLoaded', function () {
    renderTasks();
});

function addTask() {
    // object.task = document.querySelector('.task-input').value;
    // object.date = document.querySelector('.date-input').value;
    // object.time = document.querySelector('.time-input').value;
    var taskObject = {
        task: document.querySelector('.task-input').value,
        date: document.querySelector('.date-input').value,
        time: document.querySelector('.time-input').value
    };
    if (taskObject.task === '' || taskObject.date === '' || taskObject.time === '') {
        alert('Please fill in all fields before adding a task.');
        return;
    }
    array.push(taskObject);
    localStorage.setItem('taskList', JSON.stringify(array));
    // taskList.innerHTML = '';
    // for (var i = 0; i < array.length; i++) {
    //     taskList.innerHTML += '<div class="task-item">' + array[i].task + array[i].date + array[i].time + '</div>';
    // }    
    alert(taskObject.task + ' ' + taskObject.time + ' ' + taskObject.date + ' has been added to the task list.');
    console.log(array);
    document.querySelector('.task-input').value = '';
    document.querySelector('.date-input').value = '';
    document.querySelector('.time-input').value = '';
    renderTasks();
}

function renderTasks() {
    // Using document.getElementById instead of querySelector
    var tableBody = document.getElementById('taskDisplay');
    
    if (!tableBody) return; // Exit if the table body isn't found

    // Clear previous rows before re-rendering
    tableBody.innerHTML = '';

    // Loop through the array and build table rows (<tr>) and cells (<td>)
    for (var i = 0; i < array.length; i++) {
        tableBody.innerHTML += '<tr>' +
            '<td>' + array[i].task + '</td>' +
            '<td>' + array[i].date + '</td>' +
            '<td>' + array[i].time + '</td>' +
            '<td>' +
                '<button class="btnAction" onclick="deleteTask(' + i + ')">Delete</button> ' +
                '<button class="btnAction" onclick="editTask(' + i + ')">Edit</button>' +
            '</td>' +
            '</tr>';
    }
}

// function deleteTask(index) {
//     array.splice(index, 1);
//     localStorage.setItem('taskList', JSON.stringify(array));
//     renderTasks();
// }
// function editTask(index){
//     var taskObject = array[index];
//     document.querySelector('.task-input').value = taskObject.task;
//     document.querySelector('.date-input').value = taskObject.date;
//     document.querySelector('.time-input').value = taskObject.time;

//     array.splice(index, 1);

//     // 3. Update localStorage and refresh the table
//     localStorage.setItem('taskList', JSON.stringify(array));

//     renderTasks();
// }