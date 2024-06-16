import { useState } from "react";

function useToggleState(initialValue = false) {
  const [status, setStatus] = useState(initialValue);

  const handleToggle = (value) => {
    if (value !== null && value !== undefined) {
      setStatus(value);
      return;
    }
    setStatus(!status);
  };
  return [status, handleToggle];
}

export default useToggleState;
