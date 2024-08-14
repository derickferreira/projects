const previousOperationText = document.querySelector(
  "#previous_operation"
) as HTMLDivElement;
const currentOperationText = document.querySelector(
  "#current_operation"
) as HTMLDivElement;
const buttons = document.querySelectorAll(
  "#buttons_container button"
) as NodeListOf<HTMLButtonElement>;

// logical
class Calculator {
  private previousOperationText: HTMLDivElement;
  private currentOperationText: HTMLDivElement;
  private currentOperation: string;
  private previousOperation: string;
  private operation: string | null;
  private shouldResetCurrentOperation: boolean;

  constructor(
    previousOperationText: HTMLDivElement,
    currentOperationText: HTMLDivElement
  ) {
    this.previousOperationText = previousOperationText;
    this.currentOperationText = currentOperationText;
    this.currentOperation = "";
    this.previousOperation = "";
    this.operation = null;
    this.shouldResetCurrentOperation = false;
  }

  addDigit(digit: string): void {
    if (digit === "." && this.currentOperationText.innerText.includes("."))
      return;

    if (this.shouldResetCurrentOperation) {
      this.currentOperation = digit;
      this.shouldResetCurrentOperation = false;
    } else {
      this.currentOperation += digit;
    }

    this.updateScreen();
  }

  processOperation(operation: string) {
    if (this.currentOperation === "" && this.operation) {
      this.operation = operation;
      this.updateScreen();
      return;
    }

    if (this.currentOperation === "") return;

    if (this.previousOperation !== "") {
      this.calculate();
    } else {
      this.previousOperation = this.currentOperation;
    }

    this.operation = operation;
    this.currentOperation = "";
    this.updateScreen();
  }

  calculate() {
    let operationValue: number | null = null;
    const previous: number = parseFloat(this.previousOperation);
    const current: number = parseFloat(this.currentOperation);

    if (isNaN(previous) || isNaN(current)) return;

    switch (this.operation) {
      case "+":
        operationValue = previous + current;
        break;
      case "-":
        operationValue = previous - current;
        break;
      case "*":
        operationValue = previous * current;
        break;
      case "/":
        operationValue = previous / current;
        break;
      default:
        return;
    }

    this.updateScreen(operationValue);
    this.previousOperation = operationValue.toString();
    this.currentOperation = "";
    this.operation = null;
    this.shouldResetCurrentOperation = true;
  }

  updateScreen(operationValue: number | null = null) {
    if (operationValue !== null) {
      this.currentOperationText.innerText = operationValue.toString();
      this.previousOperationText.innerText = `${this.previousOperation} ${this.operation}`;
    } else {
      this.currentOperationText.innerText = this.currentOperation;
      this.previousOperationText.innerText = `${this.previousOperation} ${
        this.operation || ""
      }`;
    }
  }

  clearAll() {
    this.currentOperation = "";
    this.previousOperation = "";
    this.operation = null;
    this.updateScreen();
  }

  clearEntry() {
    this.currentOperation = "";
    this.updateScreen();
  }

  deleteLastDigit() {
    this.currentOperation = this.currentOperation.slice(0, -1);
    this.updateScreen();
  }
}

const calc = new Calculator(previousOperationText, currentOperationText);

// events
buttons.forEach((button: HTMLButtonElement) => {
  button.addEventListener("click", (event) => {
    const target = event.target as HTMLButtonElement;
    const value = target.innerText;

    switch (value) {
      case "=":
        calc.calculate();
        break;
      case "C":
        calc.clearAll();
        break;
      case "CE":
        calc.clearEntry();
        break;
      case "DEL":
        calc.deleteLastDigit();
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        calc.processOperation(value);
        break;
      // Numbers and the point
      default:
        calc.addDigit(value);
        break;
    }
  });
});
