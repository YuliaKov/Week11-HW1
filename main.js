const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', function () {
    const listItem = document.createElement('li')
    listItem.classList.add('list-item')
    const taskText = taskInput.value;
    listItem.textContent = taskText;
    taskList.append(listItem);
    taskInput.value = '';
  });


  taskList.addEventListener('click', function(evt){
    if (evt.target.tagName === 'LI') {
        evt.target.classList.toggle('task-done');
    }
  });