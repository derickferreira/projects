"use strict";
// selecting elements
const playerOptions = document.querySelectorAll(".player .option");
const enemyOptions = document.querySelectorAll(".enemy .option");
// logic
const resetOptions = (divArray) => {
    divArray.forEach((divValue) => {
        divValue.style.opacity = ".05";
        divValue.setAttribute("data-selected", "false");
    });
};
const iaEnemy = () => {
    resetOptions(enemyOptions);
    const randomIndex = Math.floor(Math.random() * enemyOptions.length);
    const selectedOption = enemyOptions[randomIndex];
    selectedOption.style.opacity = "1";
    selectedOption.setAttribute("data-selected", "true");
    return selectedOption.getAttribute("data-value");
};
const result = (playerMovement, enemyMovement) => {
    const resultElement = document.querySelector(".result-container span");
    if (playerMovement === enemyMovement) {
        resultElement.textContent = "Draw📍";
    }
    else if ((playerMovement === "stone" && enemyMovement === "paper") ||
        (playerMovement === "paper" && enemyMovement === "scissor") ||
        (playerMovement === "scissor" && enemyMovement === "stone")) {
        resultElement.textContent = "You lost🎭";
    }
    else {
        resultElement.textContent = "You won🏆";
    }
};
// events
playerOptions.forEach((option) => {
    option.addEventListener("click", () => {
        resetOptions(playerOptions);
        option.style.opacity = "1";
        option.setAttribute("data-selected", "true");
        const playerMovement = option.getAttribute("data-value");
        const enemyMovement = iaEnemy();
        result(playerMovement, enemyMovement);
    });
});
