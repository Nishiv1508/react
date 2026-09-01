export default function StartScreen({
  numQuestions,
}: {
  numQuestions: number;
}) {
  return (
    <div className="start">
      <h2>Wlcome to React Quiz!</h2>
      <h3>{numQuestions} question to test your react mastery</h3>
      <button className="btn btn-ui">Lets's Start</button>
    </div>
  );
}
