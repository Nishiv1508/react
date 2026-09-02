import { useEffect } from "react";
import type { Action } from "../interfaces/QuizInterfaces";

export default function Timer({
  dispatch,
  secondsRemaining,
}: {
  dispatch: React.ActionDispatch<[action: Action]>;
  secondsRemaining: number;
}) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const timerId = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return function () {
      clearInterval(timerId);
    };
  }, [dispatch]);

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}
