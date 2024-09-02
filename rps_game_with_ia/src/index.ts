// types
type Move = "stone" | "paper" | "scissor";

// selecting elements
const playerOptions = document.querySelectorAll(
  ".player .option"
) as NodeListOf<HTMLDivElement>;

const enemyOptions = document.querySelectorAll(
  ".enemy .option"
) as NodeListOf<HTMLDivElement>;

// logic
const resetOptions = (divArray: NodeListOf<HTMLDivElement>) => {
  divArray.forEach((divValue) => {
    divValue.style.opacity = ".05";
    divValue.setAttribute("data-selected", "false");
  });
};

const iaEnemy = (): Move => {
  resetOptions(enemyOptions);

  const randomIndex = Math.floor(Math.random() * enemyOptions.length);
  const selectedOption = enemyOptions[randomIndex];

  selectedOption.style.opacity = "1";
  selectedOption.setAttribute("data-selected", "true");

  return selectedOption.getAttribute("data-value") as Move;
};

const result = (playerMovement: Move, enemyMovement: Move) => {
  const resultElement = document.querySelector(".result-container span")!;

  if (playerMovement === enemyMovement) {
    resultElement.textContent = "Draw📍";
  } else if (
    (playerMovement === "stone" && enemyMovement === "paper") ||
    (playerMovement === "paper" && enemyMovement === "scissor") ||
    (playerMovement === "scissor" && enemyMovement === "stone")
  ) {
    resultElement.textContent = "You lost🎭";
  } else {
    resultElement.textContent = "You won🏆";
  }
};

// events

playerOptions.forEach((option) => {
  option.addEventListener("click", () => {
    resetOptions(playerOptions);

    option.style.opacity = "1";
    option.setAttribute("data-selected", "true");

    const playerMovement = option.getAttribute("data-value") as Move;
    const enemyMovement = iaEnemy();

    result(playerMovement, enemyMovement);
  });
});
