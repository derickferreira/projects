"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playSound = void 0;
const playSound = (sound) => {
    sound.currentTime = 0;
    sound.play();
};
exports.playSound = playSound;
//# sourceMappingURL=playSound.js.map