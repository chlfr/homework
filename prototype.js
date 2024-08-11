/* Создайте систему управления событиями, которая включает функции-конструкторы для событий и участников. Каждое событие будет иметь название, дату и список участников. Каждый участник будет иметь имя и email. Используйте функции-конструкторы для создания объектов событий и участников, а также методы для управления этими объектами.

Шаги:
1. Создайте функцию-конструктор для участников: 
    Функция-конструктор Participant должна принимать имя и email участника и инициализировать их как свойства объекта.

2. Создайте функцию-конструктор для событий:
    Функция-конструктор Event должна принимать название и дату события и инициализировать их как свойства объекта.
    Инициализируйте пустой массив для хранения участников.

3. Добавьте методы на прототип Event:
    Метод addParticipant(participant), который добавляет участника к событию(метод должен проверять что участник действительно является объектом созданным от конструктора  Partisipants и только после этого добавлять).
    Метод listParticipants(), который выводит список всех участников события.
    Метод findParticipantByEmail(email), который находит участника по email.

4. Создайте несколько объектов событий и участников, и протестируйте методы. */

function Participant(name, email) {
  // конструктор для участников
  this.name = name;
  this.email = email;
}

function Event(title, date) {
  // конструктор для событий
  this.title = title;
  this.date = date;
  this.participants = []; // пустой массив для хранения участников
}

Event.prototype.addParticipant = function (participant) {
  // метод addParticipant на прототип Event (для добавления участника)
  if (participant instanceof Participant) {
    // проверяем, что участник действительно является объектом созданным от конструктора Partisipants
    this.participants.push(participant); // добавляем участника
  } else {
    console.log("Ошибка: участник должен быть объектом - Participant."); // ошибка, если участник не является объектом
  }
};

Event.prototype.listParticipants = function () {
  // метод listParticipants на прототип Event (список участников)
  if (this.participants.length === 0) {
    console.log("Нет участников в событии.");
  } else {
    console.log("Список всех участников события:");
    this.participants.forEach(function (participant) {
      console.log(`Имя: ${participant.name}, Email: ${participant.email}`);
    });
  }
};

Event.prototype.findParticipantByEmail = function (email) {
  // метод findParticipantByEmail на прототип Event (для поиска участников по их email)
  const search = this.participants.find(
    (participant) => participant.email === email
  ); // проверяем, совпадает ли адрес электронной почты текущего участника с переданным параметром email
  if (search) {
    console.log(`Участник найден: Имя: ${search.name}, Email: ${search.email}`);
  } else {
    console.log("Участника с таким Email нет.");
  }
};

// тестируем методы
const event1 = new Event("Вебинар по Front-end Разработке");
const event2 = new Event("ASMR мастер-класс по созданию сайта с нуля");

const participant1 = new Participant("Дана", "dana19@gmail.com");
const participant2 = new Participant("Наталья", "nata@icloud.com");
const participant3 = new Participant("Мари", "m.carson@gmail.com");

event1.addParticipant(participant1); // успешно добавленный участник
event2.addParticipant(participant2);
event2.addParticipant(participant3);

event1.listParticipants(); // вывод списка участников
event2.listParticipants();

event1.findParticipantByEmail("nata@icloud.com"); // участник не найден
event2.findParticipantByEmail("nata@icloud.com"); // учатсник найден
