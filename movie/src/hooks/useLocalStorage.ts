import { useState, useEffect } from "react";

export default function useLocalStorage<T>(
  initialState: T,
  key: string,
): readonly [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState(() => {
    const storedValue: string = localStorage.getItem(key) || "";
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
