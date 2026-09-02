import type { Action } from "../interfaces/QuizInterfaces";

export default function NextButton({
  dispatch,
  answer,
  index,
  numQuestions,
}: {
  dispatch: React.ActionDispatch<[action: Action]>;
  answer: number;
  index: number;
  numQuestions: number;
}) {
  if (Number.isNaN(answer)) return;

  if (index < numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }

  if (index === numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }
}
