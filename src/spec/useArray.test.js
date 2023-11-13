import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import useArray from "../hooks/useArray";

describe("useArray Hook", () => {
  it("should initialize with an empty array", () => {
    const { result } = renderHook(() => useArray());

    expect(result.current.value).toEqual([]);
    expect(result.current.isEmpty()).toBe(true);
  });

  it("should update array on push", () => {
    const { result } = renderHook(() => useArray());

    act(() => {
      result.current.push("item1");
      result.current.push("item2");
    });

    expect(result.current.value).toEqual(["item1", "item2"]);
    expect(result.current.isEmpty()).toBe(false);
  });

  it("should remove item from array", () => {
    const { result } = renderHook(() => useArray(["item1", "item2", "item3"]));

    act(() => {
      result.current.remove(1);
    });

    expect(result.current.value).toEqual(["item1", "item3"]);
  });

  it("should reverse array", () => {
    const { result } = renderHook(() => useArray([1, 2, 3]));

    act(() => {
      result.current.reverse();
    });

    expect(result.current.value).toEqual([3, 2, 1]);
  });

  it("should sort array", () => {
    const { result } = renderHook(() => useArray([3, 1, 2]));

    act(() => {
      result.current.sort((a, b) => a - b);
    });

    expect(result.current.value).toEqual([1, 2, 3]);
  });

  it("should update item in array", () => {
    const { result } = renderHook(() =>
      useArray(["apple", "banana", "cherry"])
    );

    act(() => {
      result.current.update(1, "grape");
    });

    expect(result.current.value).toEqual(["apple", "grape", "cherry"]);
  });

  it("should clear array", () => {
    const { result } = renderHook(() => useArray(["item1", "item2", "item3"]));

    act(() => {
      result.current.clear();
    });

    expect(result.current.value).toEqual([]);
    expect(result.current.isEmpty()).toBe(true);
  });
});
