import type { Question, Action } from "../interfaces/QuizInterfaces";

export default function Options({
  question,
  dispatch,
  answer,
}: {
  question: Question;
  dispatch: React.ActionDispatch<[action: Action]>;
  answer: number;
}) {
  const hasAnswered = !Number.isNaN(answer);

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${hasAnswered ? (index === question.correctOption ? "correct" : "wrong") : ""}`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
