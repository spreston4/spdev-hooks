import { useState, ChangeEvent, FocusEvent } from "react";

export type ValidationFunction = (value: string) => boolean;

export interface InputState {
  enteredValue: string;
  isTouched: boolean;
}

export interface UseInput {
  value: string;
  isValid: boolean;
  hasError: boolean;
  valueChangeHandler: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void | undefined;
  inputBlurHandler: (
    event: FocusEvent<HTMLInputElement> | FocusEvent<HTMLTextAreaElement>
  ) => void | undefined;
  resetHandler: () => void;
}

const useInput = (validationFunction: ValidationFunction): UseInput => {
  const [inputState, setInputState] = useState<InputState>({
    enteredValue: "",
    isTouched: false,
  });

  const { enteredValue, isTouched } = inputState;

  const isValid = validationFunction(enteredValue);

  const hasError = !isValid && isTouched;

  const valueChangeHandler = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputState({
      enteredValue: event.target.value,
      isTouched,
    });
  };

  const inputBlurHandler = (
    event: FocusEvent<HTMLInputElement> | FocusEvent<HTMLTextAreaElement>
  ) => {
    setInputState({
      enteredValue,
      isTouched: true,
    });
  };

  const resetHandler = () => {
    setInputState({
      enteredValue: "",
      isTouched: false,
    });
  };

  return {
    value: enteredValue,
    isValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    resetHandler,
  };
};

export default useInput;
