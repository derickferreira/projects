// creating or selecting items
const mario = document.querySelector(".mario_avatar") as HTMLImageElement;
const pipe = document.querySelector(".mario_pipe") as HTMLImageElement;
const clouds = document.querySelector(".mario_clouds") as HTMLImageElement;
const volumeInput = document.querySelector("#volume input") as HTMLInputElement;
const startBtn = document.querySelector("#start_game_btn") as HTMLButtonElement;
const pauseBtn = document.querySelector("#pause_btn") as HTMLButtonElement;
const menu = document.querySelector("#menu") as HTMLDivElement;

const jumpSound = new Audio("./../sounds/jump.mp4");
const gameOverSound = new Audio("./../sounds/game_over.wav");

let gameStarted: boolean = false;
let gamePaused: boolean = false;
let loop: number;

// logic

const playSound = (sound: HTMLAudioElement): void => {
  sound.currentTime = 0;

  let volumeValue = parseFloat(volumeInput.value);

  if (isNaN(volumeValue) || volumeValue < 0 || volumeValue > 100) {
    volumeValue = 50;
  }

  sound.volume = volumeValue / 100; // Ajustando o volume para o intervalo de 0 a 1
  sound.play();
};

const handleJump = (): void => {
  if (!gameStarted) return;
  playSound(jumpSound);
  toggleJumpAnimation();
};

const toggleJumpAnimation = (): void => {
  if (mario) {
    mario?.classList.toggle("jump");
    setTimeout(() => mario?.classList.remove("jump"), 500);
  }
};

const checkGameOver = (
  pipePosition: number,
  marioPosition: number
): boolean => {
  return pipePosition <= 120 && pipePosition > 0 && marioPosition < 80;
};

const endGame = (pipePosition: number, marioPosition: number): void => {
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
    startBtn.style.display = "block";
    menu.style.display = "flex";
  }
};

const gameLoop = (): void => {
  if (!gameStarted || gamePaused) return;
  const pipePosition = pipe?.offsetLeft ?? 0;
  const marioPosition = mario
    ? parseFloat(window.getComputedStyle(mario).bottom)
    : 0;

  if (checkGameOver(pipePosition, marioPosition)) {
    endGame(pipePosition, marioPosition);
    clearInterval(loop);
  }
};

const restartGame = (): void => {
  gameStarted = true;
  gamePaused = false;
  menu.style.display = "none";
  startBtn.style.display = "none";
  pipe.classList.add("animation");
  clouds.classList.add("animation");
  mario.src = "./../images/mario.gif";
  mario.style.width = "150px";
  mario.style.marginLeft = "0";
  loop = window.setInterval(gameLoop, 10);
};

const togglePauseGame = (): void => {
  gamePaused = !gamePaused;

  if (gamePaused) {
    pipe.style.animationPlayState = "paused";
    clouds.style.animationPlayState = "paused";
    mario.style.animationPlayState = "paused";
    pauseBtn.textContent = "Resume";
  } else {
    pipe.style.animationPlayState = "running";
    clouds.style.animationPlayState = "running";
    mario.style.animationPlayState = "running";
    pauseBtn.textContent = "Pause";
  }
};

// events
startBtn.addEventListener("click", () => {
  if (gameStarted) {
    restartGame();
  } else {
    gameStarted = true;
    gamePaused = false;
    menu.style.display = "none";
    startBtn.style.display = "none";
    pipe.classList.add("animation");
    clouds.classList.add("animation");
    loop = window.setInterval(gameLoop, 10);
  }
});

pauseBtn.addEventListener("click", togglePauseGame);
document.addEventListener("keydown", handleJump);
