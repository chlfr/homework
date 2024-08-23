/* Создайте HTML парсер

Используйте любой готовый сайт(необязательно брать целый сайт, можно фрагмент) и скопируйте его html в свой файл с которым вы работает (для удобства можете скрыть содержимое всего контента добавив для div.conten display: none)

            Внутри своего скрипта создайте парсер этого html который сделает полню копию вашего html в объектное представление с атрибутами и дочерними элементами 
            Пройдитесь по этому объекту и выведите данные в HTML в виде списка иерархичного списка
 */

function parseElement(element) {
  // функция, которая будет преобразовывать HTML в массив объектов
  let objDOM = {
    tag: element.tagName.toLowerCase(),
    attributes: {},
    children: [],
  };

  for (let attr of element.attributes) {
    // поиск всех атрибутов
    objDOM.attributes[attr.name] = attr.value;
  }

  for (let child of element.children) {
    // рекурсивно обрабатываем дочерние элементы
    objDOM.children.push(parseElement(child));
  }

  return objDOM;
}

// преобразование HTML в объектное представление
const objHtml = document.body;
const parsedHTML = parseElement(objHtml);

function createListFromObject(obj) {
  // функция для отображения объекта в виде иерархического списка
  const list = document.createElement("ul"); // создаем элемент списка
  const listOther = document.createElement("li"); // иной элемент списка

  listOther.textContent = obj.tag; // заполнение списка текстом
  const attributes = document.createElement("ul"); // создание вложенного списка для атрибутов

  for (let key in obj.attributes) {
    // цикл for...in для перебрать все атрибуты
    const attributesItem = document.createElement("li"); // новый элемент внутри цикла
    attributesItem.textContent = `${key}: ${obj.attributes[key]}`;
    attributes.appendChild(attributesItem);
  }

  listOther.appendChild(attributes); // добавление элементов в главный список
  list.appendChild(listOther);

  for (let child of obj.children) {
    // перебираем все дочерние элементы объекта и создаем новый элемент списка для дочерних объектов
    list.appendChild(createListFromObject(child));
  }

  return list;
}

const res = document.getElementById("content"); // результат
const listItem = createListFromObject(parsedHTML);
res.appendChild(listItem);
