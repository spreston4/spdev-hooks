import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import useCounter from "../hooks/useCounter";

describe("useCounter", () => {
  describe("with default values", () => {
    const TestComponentDefault = () => {
      const { count, increment, decrement, reset } = useCounter(0);
      return (
        <div>
          <p data-testid="count">{count}</p>
          <button data-testid="increment" onClick={() => increment()}>
            Increment by 5
          </button>
          <button data-testid="decrement" onClick={() => decrement()}>
            Decrement by 3
          </button>
          <button data-testid="reset" onClick={reset}>
            Reset
          </button>
        </div>
      );
    };

    it("should increment, decrement, and reset the counter", () => {
      render(<TestComponentDefault />);

      expect(screen.getByTestId("count")).toHaveTextContent("0");

      fireEvent.click(screen.getByTestId("increment"));
      fireEvent.click(screen.getByTestId("increment"));
      expect(screen.getByTestId("count")).toHaveTextContent("2");

      fireEvent.click(screen.getByTestId("decrement"));
      expect(screen.getByTestId("count")).toHaveTextContent("1");

      fireEvent.click(screen.getByTestId("reset"));
      expect(screen.getByTestId("count")).toHaveTextContent("0");
    });
  });

  describe("with custom values", () => {
    const TestComponentCustom = () => {
      const { count, increment, decrement, reset } = useCounter(0);
      return (
        <div>
          <p data-testid="count">{count}</p>
          <button data-testid="increment" onClick={() => increment(5)}>
            Increment by 5
          </button>
          <button data-testid="decrement" onClick={() => decrement(3)}>
            Decrement by 3
          </button>
          <button data-testid="reset" onClick={reset}>
            Reset
          </button>
        </div>
      );
    };

    it("should increment, decrement, and reset the counter", () => {
      render(<TestComponentCustom />);

      expect(screen.getByTestId("count")).toHaveTextContent("0");

      fireEvent.click(screen.getByTestId("increment"));
      expect(screen.getByTestId("count")).toHaveTextContent("5");

      fireEvent.click(screen.getByTestId("decrement"));
      expect(screen.getByTestId("count")).toHaveTextContent("2");

      fireEvent.click(screen.getByTestId("reset"));
      expect(screen.getByTestId("count")).toHaveTextContent("0");
    });
  });
});
