import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState("Click the button");
  const [count, setCount] = useState(0);

  async function getAdvice(e) {
    // e.preventDefault();
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      if (!res.ok) {
        setAdvice("Got some error");
      }
      const data = await res.json();
      setCount((c) => c + 1);
      setAdvice(data.slip.advice);
    } catch (e) {
      alert(e);
    }
  }
  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <>
      <h1>Hello, get a random advice</h1>
      <button onClick={getAdvice}>Get</button>
      <Message count={count} advice={advice} />
    </>
  );
}

function Message(props) {
  return (
    <>
      <h2>{props.advice}</h2>
      <p>You have read {props.count} advices</p>
    </>
  );
}

export default App;
