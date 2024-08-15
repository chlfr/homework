// Создайте систему управления банковскими счетами с использованием классов. Каждый банковский счет должен иметь возможность пополнения, снятия средств и проверки баланса. Используйте try...catch для обработки ошибок, таких как попытка снятия средств, превышающих баланс счета, или попытка пополнения или снятия средств с недопустимой суммой.

/*  1. Создайте класс BankAccount:
      Класс должен иметь конструктор, который принимает начальный баланс.
      Класс должен иметь методы deposit, withdraw и getBalance.
      Используйте try...catch внутри методов для обработки ошибок.
 
 2.Создайте несколько объектов BankAccount и протестируйте методы.
 
 3.Добавьте метод для начисления процентов:
      Метод startInterest(interval, rate) должен использовать setInterval, чтобы начислять проценты на баланс счета через заданные интервалы времени.
      Метод stopInterest() должен останавливать начисление процентов.
 
 4.Добавьте метод для выполнения отложенных транзакций:
      Метод scheduleTransaction(type, amount, delay) должен использовать setTimeout для выполнения транзакции (пополнение или снятие) через заданное время. */

class BankAccount {
  constructor(initialBalance) {
    // конструктор принимающий начальный баланс
    if (initialBalance < 0) {
      throw new Error("Значение баланса не может быть отрицательным.");
    }
    this.balance = initialBalance;
    this.intervalId = null; // переменная для хранения индификатора интервала
  }

  deposit(amount) {
    // метод для добавленя суммы к балансу
    try {
      // метод для обработки ошибок
      if (amount <= 0) {
        throw new Error("Сумма пополнения счета недопустима.");
      }
      this.balance += amount;
      console.log(`Внесенная сумма: ${amount}, Баланс: ${this.getBalance()}`);
    } catch (error) {
      console.error(error.message);
    }
  }

  withdraw(amount) {
    //  метод для снятия суммы с баланса
    try {
      // проверка
      if (amount <= 0) {
        throw new Error("Сумма снятия недопустима.");
      }
      if (amount > this.balance) {
        throw new Error("Недостаточно средств.");
      }
      this.balance -= amount;
      console.log(`Вы сняли: ${amount}. Баланс: ${this.getBalance()}`);
    } catch (error) {
      console.error(error.message);
    }
  }

  getBalance() {
    // возвращение текущего баланса
    return this.balance;
  }

  startInterest(interval, rate) {
    // метод, который начисляет проценты с указанным интервалом и ставкой
    this.stopInterest(); // остановить данный интервал, если он существует
    this.interestInterval = setInterval(() => {
      const interest = (this.balance * rate) / 100;
      this.balance += interest;
      console.log(`Начислены проценты: ${interest}. Баланс: ${this.balance}`);
    }, interval);
  }

  stopInterest() {
    // метод, останавливающий начисление процентов
    if (this.interestInterval !== null) {
      clearInterval(this.interestInterval);
      this.interestInterval = null;
      console.log("Начисление процентов остановлено.");
    }
  }

  scheduleTransaction(type, amount, delay) {
    // метод для выполнения отложенных транзакций
    setTimeout(() => {
      if (type === "deposit") {
        this.deposit(amount);
      } else if (type === "withdraw") {
        this.withdraw(amount);
      } else {
        console.log("Неизвестный тип транзакции.");
      }
    }, delay);
    console.log(`Транзакция: ${type} на сумму ${amount} через ${delay} мс.`);
  }
}

const sonyaAccount = new BankAccount(1000); // новые банковские счета, балас 1000
const mila0903Account = new BankAccount(1000);
const strangerAccount = new BankAccount(1000);

sonyaAccount.deposit(2000); // успешное пополнение счета
strangerAccount.deposit(90);
mila0903Account.deposit(-10); // недоспустимая сумма пополнения

mila0903Account.withdraw(500); // снятие суммы со счета
sonyaAccount.withdraw(5000); // недостаточно средств

strangerAccount.startInterest(4000, 7); // начисление процентов - с итервалом 4 сек и ставкой 7%
mila0903Account.startInterest(2000, 3);

setTimeout(() => strangerAccount.stopInterest(), 5000); // останавливаем начисление процентов через 5 сек

strangerAccount.scheduleTransaction("deposit", 2000, 4000); // запланированное пополнение счета через 4 сек

strangerAccount.scheduleTransaction("withdraw", 1000, 4000); // запланированное снятие суммы со счета
