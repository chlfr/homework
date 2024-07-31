//Создайте программу для вычисления математических выражений, заданных в виде строки (например, "3 + 5 * (2 - 8)").
//Реализуйте поддержку основных арифметических операций и скобок.

function calculator(expression) { // функция для вычисления выражений 
  const operators = { // операторы
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  const precedence = { // приоритеты
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
  };

  const values = []; // массив для хранения чисел(значений)
  const ops = []; // массив для хранения операторов 

  const applyOperator = () => {
    const b = values.pop(); //  извлекает верхний элемент из массива values и присваивает его переменной b
    const a = values.pop(); // извлекает следующий верхний элемент из массива values и присваивает его переменной a
    const op = ops.pop(); //  извлекает верхний элемент из массива ops и присваивает его переменной op (представляет собой оператор, который будет применён к значениям a и b)
    values.push(operators[op](a, b)); // применение оператора к значениям a и b
  };

  const processExpression = (expr) => {
    let i = 0;
    while (i < expr.length) { // цикл продолжается до тех пор, пока не будут обработаны все символы в строке expr
      let char = expr[i];

      if (char === " ") { // пропуск пробелов
        i++;
        continue;
      }

      if (!isNaN(char)) { // если текущий символ является числом (т.е. не NaN), то число прочитывается
        let num = "";

        while (i < expr.length && !isNaN(expr[i])) {
          num += expr[i];
          i++;
        }
        values.push(parseFloat(num));
        continue;
      }

      if (char === "(") { // текущий символ - открывающая скобка
        ops.push(char);
      }

      else if (char === ")") { // текущий символ - закрывающая скобка
        while (ops.length && ops[ops.length - 1] !== "(") {
          applyOperator();
        }
        ops.pop(); 
      }

      else if (operators[char]) { // текущий символ - оператор
        while (
          ops.length &&
          precedence[ops[ops.length - 1]] >= precedence[char]
        ) {
          applyOperator();
        }
        ops.push(char);
      }

      i++;
    }

    // оставшиеся операции
    while (ops.length) {
      applyOperator();
    }

    return values.pop();
  };

  return processExpression(expression);
}

// использование
const expression = "3 + 5 * (2 - 8)";
const result = calculator(expression);
console.log(result); // результат 
