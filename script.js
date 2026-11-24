
// Vibrant colors taken from the original photo
const avg = (r + g + b) / 3;
const boost = 1.65;

const R = Math.min(255, Math.max(0, avg + (r - avg) * boost));
const G = Math.min(255, Math.max(0, avg + (g - avg) * boost));
const B = Math.min(255, Math.max(0, avg + (b - avg) * boost));

let color = `rgb(${R}, ${G}, ${B})`;

let fontSize;

if (brightness > 210) {
    fontSize = 7;
}
else if (brightness > 155) {
    fontSize = 6;
}
else if (brightness > 95) {
    fontSize = 5;
}
else {
    fontSize = 4;
}
