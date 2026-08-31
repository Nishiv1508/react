import { useRef } from "react";
import useKey from "../hooks/useKey";

export default function Search({
  query,
  setQuery,
}: {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}) {
  const inputElement = useRef<HTMLInputElement>(null);

  useKey("Enter", function () {
    if (document.activeElement === inputElement.current) {
      return;
    }
    inputElement.current?.focus();
    setQuery("");
  });

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
