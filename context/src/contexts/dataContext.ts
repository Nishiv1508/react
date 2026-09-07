import { createContext } from "react";

interface Data {
  data: string;
  date: string;
}

const dataContext = createContext<Data | null>(null);

export default dataContext;
