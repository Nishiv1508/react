import type { Action } from "../interfaces/QuizInterfaces";

export default function FinishScreen({
  points,
  maxPossiblePoints,
  highScore,
  dispatch,
}: {
  points: number;
  maxPossiblePoints: number;
  highScore: number;
  dispatch: React.ActionDispatch<[action: Action]>;
}) {
  const percentage = (points / maxPossiblePoints) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {percentage.toFixed(2)}%)
      </p>

      <p className="highscore">(Highscore: {highScore} points)</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}
