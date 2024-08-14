declare const previousOperationText: HTMLDivElement;
declare const currentOperationText: HTMLDivElement;
declare const buttons: NodeListOf<HTMLButtonElement>;
declare class Calculator {
    private previousOperationText;
    private currentOperationText;
    private currentOperation;
    private previousOperation;
    private operation;
    private shouldResetCurrentOperation;
    constructor(previousOperationText: HTMLDivElement, currentOperationText: HTMLDivElement);
    addDigit(digit: string): void;
    processOperation(operation: string): void;
    calculate(): void;
    updateScreen(operationValue?: number | null): void;
    clearAll(): void;
    clearEntry(): void;
    deleteLastDigit(): void;
}
declare const calc: Calculator;
//# sourceMappingURL=index.d.ts.map