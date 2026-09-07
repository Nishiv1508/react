import { useContext } from "react";
import dataContext from "../contexts/dataContext";

export default function Component2() {
  const context = useContext(dataContext);
  if (context === null) throw new Error("Problem occured in showing data");
  const { data, date } = context;
  return (
    <div>
      {data} <p>Date: {date}</p>
    </div>
  );
}
