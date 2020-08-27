/* global canvas generateRandomNumber generateRandomInteger */
/* eslint-disable no-unused-vars */
const backgroundCanvas = document.createElement('canvas');
const backgroundCtx = backgroundCanvas.getContext('2d');

const star = {
  colors: [[255, 255, 255], [240, 240, 240], [225, 225, 225], [210, 210, 210], [195, 195, 195], [180, 180, 180]],
  highestAlpha: 1,
  highestRadius: 2,
  lowestAlpha: 0.5,
  lowestRadius: 1,
  total: canvas.width * canvas.height / 10000
};

let stars = [];

function paintStar (x, y, radius, color) {
  backgroundCtx.fillStyle = color;
  backgroundCtx.beginPath();
  backgroundCtx.moveTo(x, y);
  backgroundCtx.arc(x, y, radius, 0, 2 * Math.PI);
  backgroundCtx.fill();
}

function resizeHandler () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  star.total = canvas.width * canvas.height / 10000;
  stars = [];
  for (let i = 0; i < star.total; i++) {
    stars.push({
      x: canvas.width * Math.random(),
      y: canvas.height * Math.random(),
      radius: generateRandomNumber(star.lowestRadius, star.highestRadius),
      color: star.colors[generateRandomInteger(star.colors.length)],
      alpha: generateRandomNumber(star.lowestAlpha, star.highestAlpha)
    });
  }
  backgroundCanvas.width = canvas.width;
  backgroundCanvas.height = canvas.height;
  backgroundCtx.clearRect(0, 0, backgroundCtx.width, backgroundCtx.height);
  for (const s of stars) {
    paintStar(s.x, s.y, s.radius, `rgba(${s.color[0]}, ${s.color[1]}, ${s.color[2]}, ${s.alpha})`);
  }
}
