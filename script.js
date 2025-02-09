// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
    // Function to add a new task
    addTaskBtn.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      }
    });
  
    // Function to create a new task item
    function addTask(taskText) {
      const li = document.createElement('li');
      li.textContent = taskText;
  
      // Add delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('deleteBtn');
      deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
      });
  
      // Add complete functionality
      li.addEventListener('click', () => {
        li.classList.toggle('completed');
      });
  
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    }
  });