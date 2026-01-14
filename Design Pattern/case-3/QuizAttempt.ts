import { State } from "./State";
import { DraftState } from "./DraftState";

export class QuizAttempt {
  private state: State;
  public currentAnswer: string = "";

  constructor() {
    this.state = new DraftState();
  }

  public changeState(state: State): void {
    this.state = state;
  }

  public writeAnswer(answer: string): void {
    this.state.enterAnswer(this, answer);
  }

  public submitQuiz(): void {
    this.state.submit(this);
  }
}
