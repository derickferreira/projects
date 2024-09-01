import { createContext, useState, ReactNode, useContext } from "react";

// interface
interface QuizOption {
  question: string;
  options: string[];
  answer: string;
}

interface QuizContextProps {
  currentQuestionIndex: number;
  score: number;
  questions: QuizOption[];
  setQuizData: (quiz: QuizOption[]) => void;
  handleAnswer: (answer: string) => void;
  nextQuestion: () => void;
}

const QuizContext = createContext<QuizContextProps | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<QuizOption[]>([]);

  const setQuizData = (quiz: QuizOption[]) => {
    setQuestions(quiz);
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestionIndex].answer) {
      setScore((prevScore) => prevScore + 1);

      nextQuestion();
    }
  };

  return (
    <QuizContext.Provider
      value={{
        currentQuestionIndex,
        score,
        questions,
        setQuizData,
        handleAnswer,
        nextQuestion,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("useQuizContext must be used within a QuizProvider");
  }

  return context;
};
