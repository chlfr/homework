//Создайте скрипт для шифрования и дешифрования текста с использованием простых алгоритмов, таких как Цезарев шифр или шифр Виженера.
//Реализуйте функцию для шифрования и дешифрования текста с использованием более сложных алгоритмов, таких как AES.

// цезарев шифр
function caesarCipher(str, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"; // переменная с алфавитом
  let encrypted = "";

  for (let char of str.toLowerCase()) {
    //

    if (alphabet.includes(char)) {
      // проверка - является ли символ буквой
      let newIndex = (alphabet.indexOf(char) + shift) % 26; // 26 - число букв в алфавите (используется, чтобы оставаться в пределах алфавита)
      encrypted += alphabet[newIndex];
    } else {
      encrypted += char; //  если это не буква, то добавляем символ
    }
  }
  return encrypted; // шифруем
}

function caesarDecipher(str, shift) {
  // функция вызывает caesarCipher для расшифровки
  return caesarCipher(str, -shift);
}

// использование
const originalText = "second homework";
const shift = 2;
const encryptedText = caesarCipher(originalText, shift);
const decryptedText = caesarDecipher(encryptedText, shift);

console.log("original:", originalText);
console.log("encrypted:", encryptedText);
console.log("decrypted:", decryptedText); // результаты - оригинальный текст\зашифрованный\дешифрованный

// шифр виженера
function vigenereCipher(plaintext, key) {
  // функция принимает текст и ключ
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let encrypted = "";
  key = key.toLowerCase(); // ключ

  for (let i = 0, j = 0; i < plaintext.length; i++) {
    const char = plaintext[i].toLowerCase();

    if (alphabet.includes(char)) {
      // проверка - является ли символ буквой (как и в цезарев шифр)
      const shift = alphabet.indexOf(key[j % key.length]); // индекс символа из ключа
      const newIndex = (alphabet.indexOf(char) + shift) % 26;
      encrypted += alphabet[newIndex];
      j++; // индекс ключа увеличивается, только если символ является буквой
    } else {
      encrypted += char; // если это не буква, то просто добавляем символ (как и в цезарев шифр)
    }
  }
  return encrypted;
}

function vigenereDecipher(ciphertext, key) {
  // зашифрованный текст и ключ
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let decrypted = "";
  key = key.toLowerCase();

  for (let i = 0, j = 0; i < ciphertext.length; i++) {
    const char = ciphertext[i].toLowerCase();

    if (alphabet.includes(char)) {
      // проверка - является ли символ буквой аналогично примеру выше
      const shift = alphabet.indexOf(key[j % key.length]);
      const newIndex = (alphabet.indexOf(char) - shift + 26) % 26; // +26 для обработки отрицательных индексов (26 - колчиество букв в алфавите)
      decrypted += alphabet[newIndex];
      j++; // индекс ключа увеличивается, только если символ является буквой (аналогично прошлому примеру)
    } else {
      decrypted += char; // если это не буква, то просто добавляем символ (то же самое, что и в прошлом варианте)
    }
  }
  return decrypted;
}

// использование
const originalTextVigenere = "second homework";
const key = "key";
const encryptedTextVigenere = vigenereCipher(originalTextVigenere, key);
const decryptedTextVigenere = vigenereDecipher(encryptedTextVigenere, key);

console.log("original:", originalTextVigenere);
console.log("encrypted:", encryptedTextVigenere);
console.log("decrypted:", decryptedTextVigenere); // результат
