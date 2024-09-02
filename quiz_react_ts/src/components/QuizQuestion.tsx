import { useQuizContext } from "./../contexts/QuizContext";
import QuizOption from "./QuizOption";

const QuizQuestion = () => {
  const { currentQuestionIndex, questions } = useQuizContext();
  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) return <p>Loading...</p>;

  return (
    <div>
      <h2>{currentQuestion.question}</h2>
      <div className="answer_container">
        {currentQuestion.options.map((option, index) => (
          <QuizOption key={index} option={option} />
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
