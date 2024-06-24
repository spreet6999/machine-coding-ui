import { useState, useEffect } from "react";

function useDebounce({ value = "", delay = 500 }) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  //* Debounce logic
  let timerId;
  useEffect(() => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timerId);
    };
  }, [debouncedValue]);

  return {
    debouncedValue,
    setDebouncedValue,
  };
}

export default useDebounce;
