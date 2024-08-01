"use strict";
type CharGenerator = () => string;

// select elements
const cursorDot: HTMLDivElement | null =
  document.querySelector("[data-cursor-dot]");

let timeOutId = 0;

const errorContainer: HTMLDivElement | null =
  document.querySelector("#error_container");

const errorText: HTMLSpanElement | null = document.querySelector("#error");

const inputLength: HTMLInputElement | null = document.querySelector("#length");
const inputLetter: HTMLInputElement | null = document.querySelector("#letter");
const inputNumber: HTMLInputElement | null = document.querySelector("#number");
const inputSymbol: HTMLInputElement | null = document.querySelector("#symbol");

const generatedContainer: HTMLDivElement | null = document.querySelector(
  "#generated_password_container"
);
const generatedPassword: HTMLHeadElement | null = document.querySelector(
  "#generated_password_container h4"
);

const generateBtn: HTMLButtonElement | null =
  document.querySelector("#generate");
const copyBtn: HTMLButtonElement | null = document.querySelector("#copy_btn");

// functions
const getLetterLowerCase: CharGenerator = (): string => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase: CharGenerator = (): string => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber: CharGenerator = (): string => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

const getSymbol: CharGenerator = (): string => {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
};

const generatePassword: (
  gettterLowerCase: CharGenerator,
  getLetterUpperCase: CharGenerator,
  getNumber: CharGenerator,
  getSymbol: CharGenerator
) => void = (
  getLetterLowerCase: CharGenerator,
  getLetterUpperCase: CharGenerator,
  getNumber: CharGenerator,
  getSymbol: CharGenerator
): void => {
  let password: string = "";
  const passwordLenght: number = inputLength ? parseInt(inputLength.value) : 0;

  if (isNaN(passwordLenght) || passwordLenght <= 0) {
    if (errorText && generateBtn) {
      errorText.innerText =
        "Please enter a value equal to or greater than one to generate a password";
      generateBtn.innerText = "generate password";
    }
    errorContainer?.classList.remove("hide");
    timeOutId = setTimeout(() => {
      errorContainer?.classList.add("hide");
    }, 3000);
    return;
  }

  let generators: CharGenerator[] = [];

  if (inputLetter?.checked) {
    generators.push(getLetterLowerCase, getLetterUpperCase);
  }
  if (inputNumber?.checked) {
    generators.push(getNumber);
  }

  if (inputSymbol?.checked) {
    generators.push(getSymbol);
  }

  if (generators.length === 0) {
    if (errorText && generateBtn) {
      errorText.innerText =
        "Please select at least one checkbox to include a character type.";
      generateBtn.innerText = "generate password";
    }
    errorContainer?.classList.remove("hide");
    timeOutId = setTimeout(() => {
      errorContainer?.classList.add("hide");
    }, 2000);
    return;
  }

  if (passwordLenght >= 120) {
    if (errorText && generateBtn) {
      errorText.innerText =
        "Please select a number less than 120 characters. If you wish to have a password longer than 120 characters, you can generate passwords and concatenate them.";
      generateBtn.innerText = "generate password";
    }
    errorContainer?.classList.remove("hide");
    timeOutId = setTimeout(() => {
      errorContainer?.classList.add("hide");
    }, 10000);
    return;
  }

  for (let i: number = 0; i < passwordLenght; i = i + generators.length) {
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
window.addEventListener("mousemove", (event: MouseEvent) => {
  if (cursorDot) {
    const posX = event.clientX;
    const posY = event.clientY;
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
  }
});

generateBtn?.addEventListener("click", (event: Event) => {
  event.preventDefault();

  generatePassword(
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
  );
});

copyBtn?.addEventListener("click", () => {
  const password = generatedContainer?.querySelector("h4")?.innerText;

  if (password) {
    navigator.clipboard.writeText(password).then(() => {
      copyBtn.innerText = "copied password";
    });
  }

  setTimeout(() => {
    copyBtn.innerText = "copy password";
  }, 1000);
});
