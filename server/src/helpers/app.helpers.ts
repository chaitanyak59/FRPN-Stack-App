const MAGIC_SAUCE = 6;

export function generateRandomSalt() {
    return Math.floor(Math.random() * 5) + MAGIC_SAUCE;
}