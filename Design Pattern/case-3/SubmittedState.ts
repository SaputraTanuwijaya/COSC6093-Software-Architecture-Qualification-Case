import { State } from "./State";
import { QuizAttempt } from "./QuizAttempt";

export class SubmittedState implements State {
  public enterAnswer(context: QuizAttempt, answer: string): void {
    console.log(
      "[Error] Cannot edit answers. The quiz has already been submitted."
    );
  }

  public submit(context: QuizAttempt): void {
    console.log("[Error] Already submitted. Please wait for grading.");
  }
}
