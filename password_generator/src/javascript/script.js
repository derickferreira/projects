"use strict";
// select elements
const cursorDot = document.querySelector("[data-cursor-dot]");
let timeOutId = 0;
const errorContainer = document.querySelector("#error_container");
const errorText = document.querySelector("#error");
const inputLength = document.querySelector("#length");
const inputLetter = document.querySelector("#letter");
const inputNumber = document.querySelector("#number");
const inputSymbol = document.querySelector("#symbol");
const generatedContainer = document.querySelector(
  "#generated_password_container"
);
const generatedPassword = document.querySelector(
  "#generated_password_container h4"
);
const generateBtn = document.querySelector("#generate");
const copyBtn = document.querySelector("#copy_btn");
// functions
const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
const getNumber = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};
const getSymbol = () => {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
};
const generatePassword = (
  getLetterLowerCase,
  getLetterUpperCase,
  getNumber,
  getSymbol
) => {
  let password = "";
  const passwordLenght = inputLength ? parseInt(inputLength.value) : 0;
  if (isNaN(passwordLenght) || passwordLenght <= 0) {
    if (errorText && generateBtn) {
      errorText.innerText =
        "Please enter a value equal to or greater than one to generate a password";
      generateBtn.innerText = "generate password";
    }
    errorContainer === null || errorContainer === void 0
      ? void 0
      : errorContainer.classList.remove("hide");
    timeOutId = setTimeout(() => {
      errorContainer === null || errorContainer === void 0
        ? void 0
        : errorContainer.classList.add("hide");
    }, 3000);
    return;
  }
  let generators = [];
  if (
    inputLetter === null || inputLetter === void 0
      ? void 0
      : inputLetter.checked
  ) {
    generators.push(getLetterLowerCase, getLetterUpperCase);
  }
  if (
    inputNumber === null || inputNumber === void 0
      ? void 0
      : inputNumber.checked
  ) {
    generators.push(getNumber);
  }
  if (
    inputSymbol === null || inputSymbol === void 0
      ? void 0
      : inputSymbol.checked
  ) {
    generators.push(getSymbol);
  }
  if (generators.length === 0) {
    if (errorText && generateBtn) {
      errorText.innerText =
        "Please select at least one checkbox to include a character type.";
      generateBtn.innerText = "generate password";
    }
    errorContainer === null || errorContainer === void 0
      ? void 0
      : errorContainer.classList.remove("hide");
    timeOutId = setTimeout(() => {
      errorContainer === null || errorContainer === void 0
        ? void 0
        : errorContainer.classList.add("hide");
    }, 2000);
    return;
  }
  if (passwordLenght >= 120) {
    if (errorText && generateBtn) {
      errorText.innerText =
        "Please select a number less than 120 characters. If you wish to have a password longer than 120 characters, you can generate passwords and concatenate them.";
      generateBtn.innerText = "generate password";
    }
    errorContainer === null || errorContainer === void 0
      ? void 0
      : errorContainer.classList.remove("hide");
    timeOutId = setTimeout(() => {
      errorContainer === null || errorContainer === void 0
        ? void 0
        : errorContainer.classList.add("hide");
    }, 10000);
    return;
  }
  for (let i = 0; i < passwordLenght; i = i + generators.length) {
    generators.forEach(() => {
      const randomValue =
        generators[Math.floor(Math.random() * generators.length)]();
      password += randomValue;
    });
  }
  password = password.slice(0, passwordLenght);
  if (generatedContainer && generatedPassword && generateBtn) {
    generatedContainer.classList.remove("hide");
    generatedPassword.innerText = password;
    generateBtn.innerText = "generate another password";
  }
};
// events
window.addEventListener("mousemove", (event) => {
  if (cursorDot) {
    const posX = event.clientX;
    const posY = event.clientY;
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
  }
});
generateBtn === null || generateBtn === void 0
  ? void 0
  : generateBtn.addEventListener("click", (event) => {
      event.preventDefault();
      generatePassword(
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
      );
    });
copyBtn === null || copyBtn === void 0
  ? void 0
  : copyBtn.addEventListener("click", () => {
      var _a;
      const password =
        (_a =
          generatedContainer === null || generatedContainer === void 0
            ? void 0
            : generatedContainer.querySelector("h4")) === null || _a === void 0
          ? void 0
          : _a.innerText;
      if (password) {
        navigator.clipboard.writeText(password).then(() => {
          copyBtn.innerText = "copied password";
        });
      }
      setTimeout(() => {
        copyBtn.innerText = "copy password";
      }, 1000);
    });
