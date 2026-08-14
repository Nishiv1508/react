import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step <= 1) {
      setStep(3);
    } else {
      setStep((step) => step - 1);
    }
  };

  const handleNext = () => {
    if (step >= 3) {
      setStep(1);
    } else {
      setStep((step) => step + 1);
    }
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        X
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>Previous</span>
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              <span>Next</span>
            </Button>
          </div>
        </div>
      )}

      <DateCount />
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <p className="message">
      <h3>Step {step}</h3>
      {children}
    </p>
  );
}

//Children prop has the value between the opening and closing of the react component. If not destructuring then it can be accessed with props.children
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function DateCount() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  const countMinus = () => {
    setCount((c) => c - 1);
    setDate((d) => new Date(d.getTime() - step * 24 * 3600 * 1000));
  };
  const countPlus = () => {
    setCount((c) => c + 1);
    setDate((d) => new Date(d.getTime() + step * 24 * 3600 * 1000));
  };

  const stepMinus = () => {
    setStep((s) => s - 1);
  };
  const stepPlus = () => {
    setStep((s) => s + 1);
  };
  // const handleChange = (e) => {
  //   setCount(Number(e.target.value));
  //   setDate((d) => new Date(d.getTime() + step * 24 * 3600 * 1000));
  // };

  const handleClick = () => {
    setDate(new Date());
    setCount(0);
    setStep(1);
  };

  return (
    <>
      <div>
        <button onClick={stepMinus}>-</button>
        <span>{step}</span>
        <button onClick={stepPlus}>+</button>

        {/* <input
          type="range"
          min={1}
          max={7}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        {step} */}
      </div>

      <div>
        <button onClick={countMinus}>-</button>
        <span>{count}</span>
        {/* <input type="text" value={count} onChange={handleChange} /> */}
        <button onClick={countPlus}>+</button>
      </div>

      <p>{date.toLocaleDateString()}</p>

      <button onClick={handleClick}>Reset</button>
    </>
  );
}

export default App;
