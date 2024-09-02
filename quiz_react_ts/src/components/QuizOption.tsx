import { useQuizContext } from "./../contexts/QuizContext";

const QuizOption = ({ option }: { option: string }) => {
  const { handleAnswer } = useQuizContext();

  return (
    <div className="answer_container">
      <button onClick={() => handleAnswer(option)}>{option}</button>
    </div>
  );
};
export default QuizOption;
