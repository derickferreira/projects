"use strict";
// creating or selecting items
const mario = document.querySelector(".mario_avatar");
const pipe = document.querySelector(".mario_pipe");
const clouds = document.querySelector(".mario_clouds");
const volume = document.querySelector("#volume");
const startByn = document.querySelector("#start_game_btn");
const menu = document.querySelector("#menu");
const jumpSound = new Audio("./../sounds/jump.mp4");
const gameOverSound = new Audio("./../sounds/game_over.wav");
let gameStarted = false;
// logic
const playSound = (sound) => {
    sound.currentTime = 0;
    sound.play();
};
const handleJump = () => {
    if (!gameStarted)
        return;
    playSound(jumpSound);
    toggleJumpAnimation();
};
const toggleJumpAnimation = () => {
    if (mario) {
        mario === null || mario === void 0 ? void 0 : mario.classList.toggle("jump");
        setTimeout(() => mario === null || mario === void 0 ? void 0 : mario.classList.remove("jump"), 500);
    }
};
const checkGameOver = (pipePosition, marioPosition) => {
    return pipePosition <= 120 && pipePosition > 0 && marioPosition < 80;
};
const endGame = (pipePosition, marioPosition) => {
    if (pipe && mario && clouds) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;
        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;
        mario.src = "./../images/game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";
        clouds.style.animation = "none";
        playSound(gameOverSound);
        gameStarted = false;
        startByn.style.display = "block";
        menu.style.display = "flex";
    }
};
const gameLoop = () => {
    var _a;
    if (!gameStarted)
        return;
    const pipePosition = (_a = pipe === null || pipe === void 0 ? void 0 : pipe.offsetLeft) !== null && _a !== void 0 ? _a : 0;
    const marioPosition = mario
        ? parseFloat(window.getComputedStyle(mario).bottom)
        : 0;
    console.log(checkGameOver(pipePosition, marioPosition) ? true : false);
    if (checkGameOver(pipePosition, marioPosition)) {
        endGame(pipePosition, marioPosition);
        clearInterval(loop);
    }
};
const loop = setInterval(gameLoop, 10);
// events
startByn.addEventListener("click", () => {
    gameStarted = true;
    menu.style.display = "none";
    startByn.style.display = "none";
    pipe.classList.add("animation");
    clouds.classList.add("animation");
});
document.addEventListener("keydown", handleJump);
//# sourceMappingURL=index.js.map