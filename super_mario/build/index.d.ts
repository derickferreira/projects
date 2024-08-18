declare const mario: HTMLImageElement;
declare const pipe: HTMLImageElement;
declare const clouds: HTMLImageElement;
declare const volumeInput: HTMLInputElement;
declare const startBtn: HTMLButtonElement;
declare const pauseBtn: HTMLButtonElement;
declare const menu: HTMLDivElement;
declare const jumpSound: HTMLAudioElement;
declare const gameOverSound: HTMLAudioElement;
declare let gameStarted: boolean;
declare let gamePaused: boolean;
declare let loop: number;
declare const playSound: (sound: HTMLAudioElement) => void;
declare const handleJump: () => void;
declare const toggleJumpAnimation: () => void;
declare const checkGameOver: (pipePosition: number, marioPosition: number) => boolean;
declare const endGame: (pipePosition: number, marioPosition: number) => void;
declare const gameLoop: () => void;
declare const restartGame: () => void;
declare const togglePauseGame: () => void;
//# sourceMappingURL=index.d.ts.map