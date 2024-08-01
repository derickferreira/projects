import { FormEvent, ReactElement, useState } from "react";

export function useForm(steps: ReactElement[]) {
  const [currentStep, setCurrentStep] = useState(0);

  function changeStep(i: number, e?: FormEvent) {
    if (e) e.preventDefault();

    if (i < 0 || i >= steps.length) return;

    setCurrentStep(i);
  }

  return {
    currentStep,
    currentComponent: steps[currentStep],
    isFirstStep: currentStep === 0 ? true : false,
    isLastStep: currentStep === steps.length - 1 ? true : false,
    changeStep,
  };
}
