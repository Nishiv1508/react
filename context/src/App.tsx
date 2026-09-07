import Component1 from "./components/Component1";
import DataContext from "./contexts/DataContext.tsx";

function App() {
  return (
    <DataContext>
      <Component1 />
    </DataContext>
  );
}

export default App;
