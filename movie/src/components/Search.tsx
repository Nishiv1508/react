import { useEffect, useRef } from "react";

export default function Search({
  query,
  setQuery,
}: {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}) {
  const inputElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function callback(e: KeyboardEvent) {
      if (document.activeElement === inputElement.current) {
        return;
      }

      if (e.code === "Enter") {
        inputElement.current?.focus();
        setQuery("");
      }
    }

    document.addEventListener("keydown", callback);

    return () => document.addEventListener("keydown", callback);
  }, [setQuery]);

  // useEffect(() => {
  //   const ele = document.querySelector(".search");
  //   if (ele instanceof HTMLInputElement) {
  //     ele.focus();
  //   }
  // }, []);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement}
    />
  );
}
