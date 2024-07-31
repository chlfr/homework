//Создайте программу для вычисления математических выражений, заданных в виде строки (например, "3 + 5 * (2 - 8)").
//Реализуйте поддержку основных арифметических операций и скобок.

/* const calculator = (a, b, operator) => {
  let res = 0;

  switch (operator) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "*":
      return a * b;
      break;
    case "/":
      return a / b;
      break;

    default:
      return a + b;
  }
};

console.log(calculator("3 + 5 * (2 - 8)")); // -13
console.log(calculator("10 + 2 * 6")); // 22
console.log(calculator("100 * 2 + 12")); // 212
console.log(calculator("100 * ( 2 + 12 )")); // 1400
console.log(calculator("100 * ( 2 + 12 ) / 14")); // 100 */

/* function calculator(expression) {
  // конструкция try..catch для исключений т.е.try - для правильно веденных выражений, а catch для некорректных выражений
  try {
    // eval - встроенная функция для вычисления мат.выражения
    const result = eval(expression); //
    return result;
  } catch (error) {
    // error в скобках - переменная
    return "ERROR";
  }
}

// использование
const expression = "3 + 5 * (2 - 8)";
const result = calculator(expression);
console.log(`${result}`); */

function calculator(expression) {
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  const precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
  };

  const values = [];
  const ops = [];

  const applyOperator = () => {
    const b = values.pop();
    const a = values.pop();
    const op = ops.pop();
    values.push(operators[op](a, b));
  };

  const processExpression = (expr) => {
    let i = 0;
    while (i < expr.length) {
      let char = expr[i];

      // Если пробел - просто пропустить
      if (char === " ") {
        i++;
        continue;
      }

      // Если текущий символ - число, то прочитать число
      if (!isNaN(char)) {
        let num = "";

        while (i < expr.length && !isNaN(expr[i])) {
          num += expr[i];
          i++;
        }
        values.push(parseFloat(num));
        continue;
      }

      // Если текущий символ - открывающая скобка
      if (char === "(") {
        ops.push(char);
      }

      // Если текущий символ - закрывающая скобка
      else if (char === ")") {
        while (ops.length && ops[ops.length - 1] !== "(") {
          applyOperator();
        }
        ops.pop(); // Убираем '('
      }

      // Если текущий символ - оператор
      else if (operators[char]) {
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

    // Применяем оставшиеся операции
    while (ops.length) {
      applyOperator();
    }

    return values.pop();
  };

  return processExpression(expression);
}

// Пример использования
const expression = "3 + 5 * (2 - 8)";
const result = calculator(expression);
console.log(result); // Вывод: -13
