import React, { useState } from "react";

type ValidationFunction = (value: string) => boolean;

interface InputState {
  enteredValue: string;
  isTouched: boolean;
}

interface UseInput {
  value: string;
  isValid: boolean;
  hasError: boolean;
  valueChangeHandler: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void | undefined;
  inputBlurHandler: (
    event:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>
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
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputState({
      enteredValue: event.target.value,
      isTouched,
    });
  };

  const inputBlurHandler = (
    event:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>
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
