import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/style.css";

// context
import { QuizProvider } from "./contexts/QuizContext.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <QuizProvider>
      <App />
    </QuizProvider>
  </>
);
