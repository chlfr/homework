/* Задача 1: Анализ данных студентов
У вас есть массив объектов, представляющих студентов. Каждый объект содержит информацию о имени студента, его возрасте и списке оценок. Ваша задача — написать функции для выполнения следующих операций:
        Подсчитать средний возраст студентов.
        Найти студента с наивысшей средней оценкой.
        Создать список студентов, у которых средняя оценка выше определенного порога. */

const students = [
  { name: "Alice", age: 20, grades: [85, 90, 78] },
  { name: "Bob", age: 22, grades: [70, 88, 95] },
  { name: "Charlie", age: 23, grades: [92, 80, 85] },
  { name: "David", age: 21, grades: [75, 85, 89] },
  { name: "Eve", age: 20, grades: [90, 92, 88] },
];

function middleAge(students) {
  // функция вычисления среднего возраста (метод редьюс)
  const totalAge = students.reduce((sum, student) => sum + student.age, 0);
  return totalAge / students.length;
}

function findStudent(students) {
  // функция вычисления студента с наивысшей оценкой через циклы
  let topStudent = null;
  let highestAverage = 0;

  for (const student of students) {
    const averageGrade =
      student.grades.reduce((sum, grade) => sum + grade, 0) /
      student.grades.length; // вычисляем среднюю оценку

    if (averageGrade > highestAverage) {
      // сравниваем средние оценки
      highestAverage = averageGrade;
      topStudent = student;
    }
  }

  return topStudent;
}

function listOfStudents(students, threshold) {
  // функция создания списка студентов со средней оценкой выше опредедленного порога
  return students.filter((student) => {
    const average =
      student.grades.reduce((acc, grade) => acc + grade, 0) /
      student.grades.length;
    return average > threshold;
  });
}

console.log(middleAge(students)); // средний возраст
console.log(findStudent(students)); // студент с наивысшей оценкой
console.log(listOfStudents(students, 83)); // список

/* Задача 2: Управление инвентарем магазина
У вас есть массив объектов, представляющих товары в магазине. Каждый объект содержит информацию о названии товара, его категории, цене и количестве на складе. Ваша задача — написать функции для выполнения следующих операций:
        Подсчитать общую стоимость всех товаров в магазине.
        Найти товар с наибольшим количеством на складе.
        Создать список товаров определенной категории. */

const inventory = [
  { name: "Laptop", category: "Electronics", price: 1000, quantity: 5 },
  { name: "Phone", category: "Electronics", price: 500, quantity: 10 },
  { name: "Shirt", category: "Clothing", price: 30, quantity: 20 },
  { name: "Pants", category: "Clothing", price: 40, quantity: 15 },
  { name: "Shoes", category: "Footwear", price: 60, quantity: 8 },
];

function calculationTotalCost(inventory) {
  // функция для подсчета общей стоимости всех товаров
  return inventory.reduce(
    (total, products) => total + products.price * products.quantity,
    0
  );
}

function findProductWithMaxQuantity(inventory) {
  // функция для нахождения товара с наибольшим количеством на складе через map & math.max
  const maxQuantity = Math.max(...inventory.map((product) => product.quantity));
  return inventory.find((product) => product.quantity === maxQuantity);
}

function filterListByCategory(inventory, category) {
  // функция для создания списка товаров определенной категории
  return inventory.filter((products) => products.category === category);
}

console.log(calculationTotalCost(inventory)); // сумма товаров
console.log(findProductWithMaxQuantity(inventory)); // товар с наибольшим количеством на складе
console.log(filterListByCategory(inventory, "Electronics")); // список товаров определенной категории

/* Задача 3: Управление библиотекой книг
У вас есть массив объектов, представляющих книги в библиотеке. Каждый объект содержит информацию о названии книги, авторе, жанре и годе издания. Ваша задача — написать функции для выполнения следующих операций:
        Найти все книги определенного автора.
        Найти все книги, изданные после определенного года.
        Создать список всех жанров без повторений. */

const library = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    year: 1960,
  },
  { title: "1984", author: "George Orwell", genre: "Dystopian", year: 1949 },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    genre: "Adventure",
    year: 1851,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    year: 1925,
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    year: 1932,
  },
];

function findBooksByAuthor(author) {
  // функция для нахождения всех книг определенного автора
  return library.filter((book) => book.author === author);
}

function findBooksAfterYear(year) {
  // функция для нахождения всех книг, изданных после определенного года
  return library.filter((book) => book.year > year);
}

function uniqueGenres() {
  // функция для создания списка всех жанров без повторений - методы map & Set
  const genres = library.map((book) => book.genre);
  return [...new Set(genres)]; // используем Set для удаления дубликатов
}

console.log(findBooksByAuthor("Herman Melville")); // поиск всех книг определенного автора
console.log(findBooksAfterYear(1932)); // все книги после определенного года
console.log(uniqueGenres()); // список жанров без повторений
