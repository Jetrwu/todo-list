const newTaskInput = document.querySelector('#new-task');
const addBtn = document.querySelector('#add-btn');
const todoList = document.querySelector('#todo-list');

function addTask() {
  const taskText = newTaskInput.value.trim();

  if (!taskText) {
    alert('Please enter a task.');
    return;
  }

  const listItem = document.createElement('li');
  listItem.textContent = taskText;

  const doneBtn = document.createElement('button');
  doneBtn.textContent = 'Done';
  doneBtn.classList.add('done-btn');
  doneBtn.addEventListener('click', () => listItem.classList.toggle('completed'));

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', () => listItem.remove());

  listItem.append(doneBtn, deleteBtn);
  todoList.appendChild(listItem);
  newTaskInput.value = '';
}

addBtn.addEventListener('click', addTask);
