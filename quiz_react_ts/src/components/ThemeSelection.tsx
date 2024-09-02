import { useQuizContext } from "./../contexts/QuizContext";
import { QuizData } from "./../data/quizData";

const ThemeSelection = () => {
  const { setQuizData } = useQuizContext();

  const handleSelection = (quizType: keyof typeof QuizData) => {
    setQuizData(QuizData[quizType]);
  };

  return (
    <div className="theme_selection">
      <button onClick={() => handleSelection("triviaQuiz")}>Trivia Quiz</button>
      <button onClick={() => handleSelection("movieQuiz")}>Movie Quiz</button>
      <button onClick={() => handleSelection("sportQuiz")}>Sports Quiz</button>
      <button onClick={() => handleSelection("musicQuiz")}>Music Quiz</button>
      <button onClick={() => handleSelection("geograpphyQuiz")}>
        Geography Quiz
      </button>
      <button onClick={() => handleSelection("historyQuiz")}>
        History Quiz
      </button>
      <button onClick={() => handleSelection("scienceQuiz")}>
        Science Quiz
      </button>
      <button onClick={() => handleSelection("artQuiz")}>Art Quiz</button>
      <button onClick={() => handleSelection("politicsQuiz")}>
        Politics Quiz
      </button>
      <button onClick={() => handleSelection("mixedQuiz")}>Mixed Quiz</button>
    </div>
  );
};

export default ThemeSelection;
