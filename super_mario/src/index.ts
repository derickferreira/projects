// creating or selecting items
const mario = document.querySelector(".mario_avatar") as HTMLImageElement;
const pipe = document.querySelector(".mario_pipe") as HTMLImageElement;
const clouds = document.querySelector(".mario_clouds") as HTMLImageElement;
const volume = document.querySelector("#volume") as HTMLInputElement;
const startByn = document.querySelector("#start_game_btn") as HTMLInputElement;
const menu = document.querySelector("#menu") as HTMLDivElement;

const jumpSound = new Audio("./../sounds/jump.mp4");
const gameOverSound = new Audio("./../sounds/game_over.wav");

let gameStarted: boolean = false;

// logic
const playSound = (sound: HTMLAudioElement): void => {
  sound.currentTime = 0;
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
    startByn.style.display = "block";
    menu.style.display = "flex";
  }
};

const gameLoop = (): void => {
  if (!gameStarted) return;
  const pipePosition = pipe?.offsetLeft ?? 0;
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
