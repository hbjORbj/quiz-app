import React, { useState } from "react";
import { Difficulty, fetchQuestions, QuestionState } from "./API";
import { GlobalStyle, Wrapper } from "./App.styles";
import QuestionCard from "./components/QuestionCard";

export type AnswerObject = {
  question: string;
  answer: string;
  isCorrect: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [index, setIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [isGameOn, setIsGameOn] = useState(false);

  const handleStart = async () => {
    setLoading(true);
    setIsGameOn(true);
    const newQs = await fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
    setQuestions(newQs);
    setScore(0);
    setUserAnswers([]);
    setIndex(0);
    setLoading(false);
  };

  const handleCheckAnswer = (e: any) => {
    if (isGameOn) {
      const answer = e.target.value;
      const isCorrect = questions[index].correct_answer === answer;
      if (isCorrect) setScore((prev) => prev + 1);
      const answerObject = {
        question: questions[index].question,
        answer,
        isCorrect,
        correctAnswer: questions[index].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const handleNextQuestion = () => {
    const nextQ = index + 1;
    if (nextQ === TOTAL_QUESTIONS) {
      setIsGameOn(false);
    } else {
      setIndex(nextQ);
    }
  };

  return (
    <div>
      <GlobalStyle />
      <Wrapper>
        <h1>Random Quiz Time!</h1>
        {!isGameOn ? (
          <button className="start" onClick={handleStart}>
            Start
          </button>
        ) : null}

        {isGameOn ? <p>Score: {score}</p> : null}
        {loading ? <p>Loading Questions...</p> : null}
        {!loading && isGameOn && (
          <QuestionCard
            questionNumber={index + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[index].question}
            answers={questions[index].answers}
            userAnswer={userAnswers ? userAnswers[index] : undefined}
            callback={handleCheckAnswer}
          />
        )}

        {isGameOn &&
        !loading &&
        userAnswers.length === index + 1 &&
        index !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={handleNextQuestion}>
            Next Question
          </button>
        ) : null}
      </Wrapper>
    </div>
  );
};

export default App;
