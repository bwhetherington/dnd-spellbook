import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";

const LOW_R = 50, HIGH_R = 150,
    LOW_G = 200, HIGH_G = 0,
    LOW_B = 220, HIGH_B = 120;

const r = (level) => LOW_R + (HIGH_R - LOW_R) / 10 * level;
const g = (level) => LOW_G + (HIGH_G - LOW_G) / 10 * level;
const b = (level) => LOW_B + (HIGH_B - LOW_B) / 10 * level;

export const levelColor = (level) => `rgb(${r(level)}, ${g(level)}, ${b(level)})`;
export const grayTextColor = `rgb(192, 192, 192)`;
