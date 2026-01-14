import { QuizAttempt } from "./QuizAttempt";

export interface State {
  enterAnswer(context: QuizAttempt, answer: string): void;
  submit(context: QuizAttempt): void;
}
