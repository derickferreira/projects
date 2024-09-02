import ThemeSelection from "../components/ThemeSelection";
import QuizQuestion from "../components/QuizQuestion";
import { useQuizContext } from "./../contexts/QuizContext";

const QuizPage = () => {
  const { currentQuestionIndex, questions, score } = useQuizContext();

  return (
    <div className="quiz_container">
      <ThemeSelection />
      {questions.length > 0 && currentQuestionIndex < questions.length ? (
        <QuizQuestion />
      ) : (
        <p className="score_container">
          Quiz completed! Your score: <span className="score">{score}</span>
        </p>
      )}
    </div>
  );
};

export default QuizPage;
