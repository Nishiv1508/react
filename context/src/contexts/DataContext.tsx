import dataContext from "./dataContext";

function DataContext({ children }: { children: React.ReactNode }) {
  const data: string = "Hello";
  const date: string = new Date().toLocaleDateString();
  return (
    <dataContext.Provider value={{ data, date }}>
      {children}
    </dataContext.Provider>
  );
}

export default DataContext;
