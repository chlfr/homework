/* Создайте интерактивное приложение для управления списком задач (To-Do List) с использованием делегирования событий. Приложение должно позволять добавлять новые задачи, удалять задачи и отмечать задачи как выполненные. Все операции должны выполняться с использованием одного обработчика события на родительском элементе списка.
Шаги
            Создайте базовую структуру HTML:
            Создайте текстовое поле для ввода новой задачи.
            Создайте кнопку для добавления задачи.
            Создайте ненумерованный список (<ul>) для отображения задач.
            Добавьте обработчики событий для элементов:
            Используйте делегирование событий для обработки кликов на кнопках 

HTML:
            Создаем текстовое поле для ввода новой задачи и кнопку для добавления задачи.
            Создаем ненумерованный список (<ul>) для отображения задач.
JavaScript:
            Добавляем обработчик события DOMContentLoaded, чтобы убедиться, что DOM полностью загружен перед выполнением скриптов.
            Создаем функцию addTask для добавления новых задач в список.
            Добавляем обработчик события click для кнопки добавления задачи.
            Используем делегирование событий для управления задачами, добавляя один обработчик события click на родительском элементе списка (<ul>).
Дополнительные задачи
            Добавьте возможность редактирования задачи:
            Добавьте кнопку "Edit" для каждой задачи, которая позволяет редактировать текст задачи.
            удаления и отметки выполнения задач.
 */

document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");

  function addTask() {
    // функция для добавления новой задачи
    const taskText = taskInput.value.trim();
    if (taskText) {
      const listItem = document.createElement("li");
      listItem.textContent = taskText;
      listItem.classList.add("data-list");

      const checkbox = document.createElement("input"); // кнопка выполнения задачи
      checkbox.type = "checkbox";
      checkbox.classList.add("data-completed");
      checkbox.onchange = function () {
        taskList.completedChild(listItem);
      };

      const deleteButton = document.createElement("button"); // кнопка удаления
      deleteButton.textContent = "delete";
      deleteButton.classList.add("data-button");
      deleteButton.onclick = function () {
        taskList.removeChild(listItem);
      };

      listItem.prepend(checkbox); // присваивание кнопки выделения к элементу списка
      taskList.prepend(listItem);

      listItem.appendChild(deleteButton); // присваивание кнопки удаления к элементу списка
      taskList.appendChild(listItem);

      taskInput.value = ""; // очистить поле ввода
    }
  }

  addTaskButton.addEventListener("click", addTask); // обработчик события click для кнопки добавления задачи

  taskList.addEventListener("click", function (event) {
    // делегирование событий для управления задачами (редактирование)
    if (event.target.tagName === "LI") {
      const currentText = event.target.textContent;

      const newText = prompt("edit:", currentText); // запрашиваем новое значение у пользователя
      if (newText !== null && newText.trim() !== "") {
        event.target.textContent = newText; // обновляем текст задачи
      }
    }
  });
});
