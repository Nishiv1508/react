import type { Question, Action } from "../interfaces/QuizInterfaces";
import Options from "./Options";

export default function Question({
  question,
  dispatch,
  answer,
}: {
  question: Question;
  dispatch: React.ActionDispatch<[action: Action]>;
  answer: number;
}) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}
