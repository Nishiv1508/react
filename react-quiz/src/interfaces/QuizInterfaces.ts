interface Question {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
}

interface State {
  index: number;
  questions: Question[];
  status: "loading" | "error" | "ready" | "active" | "finished";
  answer: number;
  points: number;
  highScore: number;
  secondsRemaining: number;
}

type Action =
  | {
      type: "dataReceived";
      payload: Question[];
    }
  | {
      type: "newAnswer";
      payload: number;
    }
  | {
      type:
        | "dataFailed"
        | "start"
        | "nextQuestion"
        | "finish"
        | "restart"
        | "tick";
    };

export type { State, Action, Question };
