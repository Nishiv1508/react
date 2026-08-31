import { useEffect } from "react";

export default function useKey(key: string, onCloseMovie: () => void) {
  useEffect(
    function () {
      const callback = (e: KeyboardEvent) => {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          onCloseMovie();
        }
      };
      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [key, onCloseMovie],
  );
}
