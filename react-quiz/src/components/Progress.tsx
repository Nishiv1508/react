export default function Progress({
  index,
  numQuestions,
  points,
  maxPossiblePoints,
  answer,
}: {
  index: number;
  numQuestions: number;
  points: number;
  maxPossiblePoints: number;
  answer: number;
}) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + +!Number.isNaN(answer)} />
      <p>
        Question: <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}
