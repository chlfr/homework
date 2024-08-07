/* Глубокое копирование объекта

Требования
Функция должна принимать один аргумент — объект, который необходимо скопировать.
Функция должна возвращать новый объект, который является полной копией исходного.
Функция должна корректно обрабатывать вложенные объекты и массивы.
Функция должна корректно обрабатывать примитивные типы данных (числа, строки, булевы значения, null, undefined).
Функция не должна использовать внешние библиотеки для копирования объектов.
 */

// Объект для тестирования

const complexObject = {
  name: "Test Object",
  age: 42,
  isActive: true,
  scores: [95, 88, 76, 100],
  address: {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345",
    geo: {
      lat: 40.7128,
      lng: -74.006,
    },
  },
  tags: ["test", "example", "sample"],
  metadata: {
    version: 1.0,
    contributors: [
      { name: "Alice", role: "Author" },
      { name: "Bob", role: "Reviewer" },
    ],
  },
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
    },
    preferences: {
      language: "en",
      timezone: "UTC",
    },
  },
  preferences: {
    colorScheme: "light",
    fontSize: 14,
    layout: {
      header: "fixed",
      footer: "static",
    },
  },
  history: [
    { event: "created", timestamp: "2023-10-01T10:00:00Z" },
    { event: "updated", timestamp: "2023-10-02T12:00:00Z" },
  ],
};

function getDeepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    // проверка на null или не объект

    return obj; // возврат копии
  }

  if (Array.isArray(obj)) {
    // проверяем массивы используя цикл for

    let arrayClone = []; // новый массив
    for (let i = 0; i < obj.length; i++) {
      arrayClone[i] = getDeepClone(obj[i]); // глубокое копирование всех элементов
    }

    return arrayClone; // возврат копии
  }

  const objClone = {}; // новый объект

  for (const key in obj) {
    // обработка объектов используя цикл for...in
    if (obj.hasOwnProperty(key)) {
      // метод hasOwnProperty проверяет, действительно ли obj имеет данное свойство (не унаследованое от прототипа)
      objClone[key] = getDeepClone(obj[key]); // глубокое копирование свойства
    }
  }

  return objClone; // возврат копии
}

const copyObj = getDeepClone(complexObject);
console.log(copyObj); // результат
