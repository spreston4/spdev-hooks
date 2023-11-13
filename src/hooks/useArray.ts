import { useState } from "react";

interface UseArrayState<T> {
  value: Array<T>;
  set: (value: Array<T>) => void;
  push: (item: T) => void;
  remove: (index: number) => void;
  reverse: () => void;
  sort: (callback?: (a: T, b: T) => number) => void;
  update: (index: number, item: T) => void;
  isEmpty: () => boolean;
  clear: () => void;
}

const useArray = <T>(initialValue: Array<T> = []): UseArrayState<T> => {
  const [value, setValue] = useState<Array<T>>(initialValue);

  const set = (newValue: Array<T>) => setValue(newValue);

  const push = (item: T) => setValue((oldValue) => [...oldValue, item]);

  const remove = (index: number) =>
    setValue((oldValue) => oldValue.filter((_, i) => index !== i));

  const reverse = () => setValue([...value].reverse());

  const sort = (callback: ((a: T, b: T) => number) | undefined) =>
    setValue([...value].sort(callback));

  const update = (index: number, item: T) =>
    setValue((oldValue) =>
      oldValue.map((element, i) => (i === index ? item : element))
    );

  const isEmpty = () => value.length === 0;

  const clear = () => setValue([]);

  return { value, set, push, remove, reverse, sort, update, isEmpty, clear };
};

export default useArray;
