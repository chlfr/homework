// Напишите скрипт для генерации случайных паролей с заданной длиной и набором символов (буквы, цифры, специальные символы).
// Добавьте возможность выбора параметров (например, включение/исключение определенных типов символов).

function passwordGenerator(
  length,
  includeLetter,
  includeNumbers,
  includeSpecial
) {
  // символы для генерации пароля
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const special = "!@#$%^&*()_-+=<>?/[]{}|~";

  // склеиваем все выбранные наборы символов
  let set = "";

  if (includeLetter) {
    set += letters;
  }
  if (includeNumbers) {
    set += number;
  }
  if (includeSpecial) {
    set += special;
  }

  // проверяем, выбраны ли какие-нибудь символы
  if (set === "") {
    console.error("Not selected");
    return;
  }

  let password = "";

  // генерация пароля
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * set.length);
    password += set[randomIndex];
  }

  return password;
}

// использование функции
const passwordLength = 8; // длина пароля
const useLetters = true; // алфавит
const useNumbers = true; // цифры
const useSpecial = true; //специальные символы

const generatedPassword = passwordGenerator(
  passwordLength,
  useLetters,
  useNumbers,
  useSpecial
);
console.log("Password generator:", generatedPassword); // результат
