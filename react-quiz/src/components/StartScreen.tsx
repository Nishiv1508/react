import type { Action } from "../interfaces/QuizInterfaces";

export default function StartScreen({
  numQuestions,
  dispatch,
}: {
  numQuestions: number;
  dispatch: React.ActionDispatch<[action: Action]>;
}) {
  return (
    <div className="start">
      <h2>Wlcome to React Quiz!</h2>
      <h3>{numQuestions} question to test your react mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Lets's Start
      </button>
    </div>
  );
}
