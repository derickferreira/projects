import { useQuizContext } from "../contexts/QuizContext";
import { Quiz } from "../data/quizData";

const ThemeSelection = () => {
  const { setQuizData } = useQuizContext();
  console.log(setQuizData);

  return <div>ThemeSelection</div>;
};

export default ThemeSelection;
