// У вас есть массив объектов, представляющих покупки, сделанные в течение месяца. Каждый объект содержит информацию о дате покупки, категории (например, "Еда", "Одежда", "Развлечения") и сумме покупки. Ваша задача — использовать reduce для выполнения следующих операций:

// Подсчитать общую сумму всех покупок.
// Подсчитать сумму покупок по каждой категории.
// Разбить платежи по месяцам

const purchases = [
  { date: "Feb", category: "Food", amount: 50 },
  { date: "Feb", category: "Clothing", amount: 100 },
  { date: "Feb", category: "Entertainment", amount: 75 },
  { date: "Mar", category: "Food", amount: 25 },
  { date: "Mar", category: "Clothing", amount: 200 },
  { date: "Mar", category: "Entertainment", amount: 50 },
  { date: "Mar", category: "Food", amount: 100 },
  { date: "Mar", category: "Clothing", amount: 150 },
  { date: "Apr", category: "Entertainment", amount: 100 },
  { date: "Apr", category: "Food", amount: 100 },
  { date: "Apr", category: "Clothing", amount: 100 },
  { date: "Apr", category: "Clothing", amount: 100 },
  { date: "Jun", category: "Food", amount: 100 },
  { date: "Jun", category: "Entertainment", amount: 100 },
  { date: "Jun", category: "Food", amount: 100 },
  { date: "Jun", category: "Entertainment", amount: 100 },
  { date: "Jul", category: "Clothing", amount: 100 },
  { date: "Jul", category: "Entertainment", amount: 100 },
  { date: "Jul", category: "Food", amount: 100 },
  { date: "Jul", category: "Clothing", amount: 100 },
];

/* пример: let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
console.log(result); */

// общая сумма
const amountByPurchases = purchases.reduce(
  (sum, purchase) => sum + purchase.amount,
  0
); // reduce используется для преобразования массива в одно значение

// сумма по категориям
const amountByCategory = purchases.reduce((acc, purchase) => {
  acc[purchase.category] = (acc[purchase.category] || 0) + purchase.amount; // проверяем, существует ли уже сумма для категории. если нет, то используем 0 как начальное значение и прибавлем (оператор || - или)
  return acc;
}, {}); // второой {} - это начальное значение аккумулятора - пустой (сводные данные будут накапливаться в этом объекте)

// сумма по месяцам
const amountByMonth = purchases.reduce((acc, purchase) => {
  const month = purchase.date; // месяц из даты
  acc[month] = (acc[month] || 0) + purchase.amount;
  return acc;
}, {});

console.log("Общая сумма всех покупок:", amountByPurchases); // вся сумма покупок
console.log("Сумма покупок по каждой категории:", amountByCategory); // список сумм по каждой категории
console.log("Платежи по месяцам:", amountByMonth); // платежи по месяцам
