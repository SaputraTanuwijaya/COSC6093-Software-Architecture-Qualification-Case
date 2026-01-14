import { State } from "./State";
import { QuizAttempt } from "./QuizAttempt";
import { SubmittedState } from "./SubmittedState";

export class DraftState implements State {
  public enterAnswer(context: QuizAttempt, answer: string): void {
    console.log(`[Draft] Answer updated to: "${answer}"`);
    context.currentAnswer = answer;
  }

  public submit(context: QuizAttempt): void {
    console.log("[Draft] Submitting quiz now...");
    context.changeState(new SubmittedState());
  }
}
