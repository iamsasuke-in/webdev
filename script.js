document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('todoInput');
  const addButton = document.getElementById('addBtn');
  const list = document.getElementById('todoList');

  addButton.addEventListener('click', function () {
      addTodo();
  });

  function addTodo() {
      const todoText = input.value.trim();
      if (todoText !== '') {
          const li = document.createElement('li');
          li.innerHTML = `
              <span>${todoText}</span>
              <button class="delete-btn">Delete</button>
          `;
          list.appendChild(li);
          input.value = '';
          li.querySelector('.delete-btn').addEventListener('click', function () {
              removeTodo(li);
          });
      }
  }

  function removeTodo(li) {
      li.remove();
  }
});
