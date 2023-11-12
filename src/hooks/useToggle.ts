import { useState } from "react";

interface UseToggleState {
  toggle: boolean;
  flip: () => void;
}

const useToggle = (initialValue: boolean = true): UseToggleState => {
  const [toggle, setToggle] = useState<boolean>(initialValue);

  const flip = () => setToggle(!toggle);

  return { toggle, flip };
};

export default useToggle;
