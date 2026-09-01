import Header from "./components/Header";
import Loader from "./components/Loader";
import Main from "./components/Main";
import ErrorMsg from "./components/ErrorMsg";
import { useEffect, useReducer } from "react";
import StartScreen from "./components/StartScreen";

interface Question {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
}

interface State {
  questions: Question[];
  status: "loading" | "error" | "ready" | "active" | "finished";
}

type Action =
  | {
      type: "dataReceived";
      payload: Question[];
    }
  | {
      type: "dataFailed";
    };

const initialState: State = {
  questions: [],

  //loading, error, ready, active, finished
  status: "loading",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error" };

    default:
      throw new Error("Action Unkown");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { questions, status } = state;
  // we can also erite: const [{question, status}, dispatch] = useReducer(reducer, initialState)  immediate destructuring
  const numQuestions = questions.length;

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => {
        dispatch({ type: "dataFailed" });
        console.error(err);
      });
  }, []);

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <ErrorMsg />}
        {status === "ready" && <StartScreen numQuestions={numQuestions} />}
      </Main>
    </div>
  );
}

export default App;
