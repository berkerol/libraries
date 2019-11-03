/* global $ performance FPSMeter draw */
/* eslint-disable no-unused-vars */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const getTime = typeof performance === 'function' ? performance.now : Date.now;
const FRAME_THRESHOLD = 300;
const FRAME_DURATION = 1000 / 58;
let then = getTime();
let acc = 0;
let animation;
if (typeof jQuery !== 'undefined' && typeof $.fn.modal !== 'undefined') {
  FPSMeter.theme.colorful.container.height = '40px';
}
const meter = new FPSMeter({
  left: canvas.width - 130 + 'px',
  top: 'auto',
  bottom: '12px',
  theme: 'colorful',
  heat: 1,
  graph: 1
});

const addPause = () => {
  document.addEventListener('keyup', e => {
    if (e.keyCode === 80) {
      if (animation === undefined) {
        animation = window.requestAnimationFrame(draw);
      } else {
        window.cancelAnimationFrame(animation);
        animation = undefined;
      }
    }
  });
};

const addResize = () => {
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
};

const startLoop = () => {
  const now = getTime();
  const ms = now - then;
  let frames = 0;
  then = now;
  if (ms < FRAME_THRESHOLD) {
    acc += ms;
    while (acc >= FRAME_DURATION) {
      frames++;
      acc -= FRAME_DURATION;
    }
  }
  meter.tick();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  return frames;
};

const generateRandomNumber = (min, max) => {
  return min + Math.random() * (max - min);
};

const generateRandomInteger = range => {
  return Math.floor(Math.random() * range);
};

const generateRandomRgbColor = () => {
  return [generateRandomInteger(255), generateRandomInteger(255), generateRandomInteger(255)];
};
