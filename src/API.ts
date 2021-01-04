import { shuffleArray } from "./utils";

export type Question = {
  category: string;
  difficulty: string;
  question: string;
  type: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type QuestionState = Question & { answers: string[] };

export const fetchQuestions = async (
  amount: number,
  difficulty: Difficulty
): Promise<QuestionState[]> => {
  const URL = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(URL)).json();
  return data.results.map((question: Question) => {
    return {
      ...question,
      answers: [...question.incorrect_answers, question.correct_answer],
    };
  });
};
