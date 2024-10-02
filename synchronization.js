/*     Для закрепления работы с localStorage и событиями storage, давайте создадим задачу, которая будет включать синхронизацию данных между двумя открытыми окнами или вкладками браузера. Эта задача поможет вам понять, как использовать localStorage для хранения данных и как реагировать на изменения данных в localStorage с помощью события storage.
Задача: Синхронизация заметок между окнами
    Создайте приложение для управления заметками, которое позволяет пользователю добавлять, редактировать и удалять заметки. Все заметки должны сохраняться в localStorage. Приложение должно синхронизировать заметки между двумя открытыми окнами или вкладками браузера в реальном времени.
Шаги
Создайте базовую структуру HTML:
    Создайте текстовое поле для ввода новой заметки.
    Создайте кнопку для добавления заметки.
    Создайте контейнер для отображения списка заметок.
    Создайте стили для отображения заметок.
Создайте JavaScript для управления заметками и синхронизации данных с использованием localStorage и события storage:
    Функции для добавления, редактирования и удаления заметок.
    Функции для сохранения и загрузки заметок из localStorage.
    Обработчик события storage для синхронизации заметок между окнами.Q
Дополнительные задачи
    Добавьте возможность редактирования заметок:
    Добавьте кнопку для редактирования заметки и функцию для обновления заметок в localStorage.
    Добавьте возможность поиска заметок:
    Добавьте текстовое поле для ввода поискового запроса и фильтруйте заметки по этому запросу.
 */

    const noteList = document.getElementById('noteList'); // элементы dom
    const noteInput = document.getElementById('noteInput');
    const noteAdd = document.getElementById('noteAdd');
    const searchInput = document.getElementById('searchInput');

    
    const loadNotes = () => { //заметки из localStorage
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        renderNotes(notes);
    };
    
    function renderNotes(notes) {     // функция для вывода заметок на экран
        noteList.innerHTML = '';
        notes.forEach((note, index) => {
            const li = document.createElement('li');
            li.textContent = note;
            
            const editButton = document.createElement('button');
            editButton.textContent = 'Редактировать';
            editButton.onclick = () => editNote(index);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Удалить';
            deleteButton.onclick = () => deleteNote(index);

            li.appendChild(editButton);
            li.appendChild(deleteButton);
            noteList.appendChild(li);
        });
    };
    

    function addNote() {  // добавление заметки
        const noteText = noteInput.value.trim();
        if (noteText) {
            const notes = JSON.parse(localStorage.getItem('notes')) || [];
            notes.push(noteText);
            localStorage.setItem('notes', JSON.stringify(notes));
            noteInput.value = '';
            renderNotes(notes);
        }
    };
    
    function editNote(index) {  // редактирование заметки
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        const newNote = prompt('Редактировать заметку:', notes[index]);
        if (newNote !== null) {
            notes[index] = newNote;
            localStorage.setItem('notes', JSON.stringify(notes));
            renderNotes(notes);
        }
    }
    

    function deleteNote(index) {  // удаления заметки
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        renderNotes(notes);
    }
    
    noteAdd.addEventListener('click', noteAdd); // обработчик событий

    window.addEventListener('storage', (event) => { // слушатель событий для синхронизации между окнами
        if (event.key === 'notes') {
            loadNotes();
        }
    });

    loadNotes();  // загрузка заметок