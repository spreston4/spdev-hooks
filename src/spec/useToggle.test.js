import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import useToggle from "../hooks/useToggle";

describe("useToggle", () => {
  const TestComponent = () => {
    const { toggle, flip } = useToggle(true);

    return (
      <div>
        <p data-testid="toggle">{toggle.toString()}</p>
        <button data-testid="flip" onClick={flip}>
          Flip
        </button>
      </div>
    );
  };

  it("should toggle between true and false", () => {
    render(<TestComponent />);

    expect(screen.getByTestId("toggle")).toHaveTextContent("true");

    fireEvent.click(screen.getByTestId("flip"));
    expect(screen.getByTestId("toggle")).toHaveTextContent("false");

    fireEvent.click(screen.getByTestId("flip"));
    expect(screen.getByTestId("toggle")).toHaveTextContent("true");
  });
});
