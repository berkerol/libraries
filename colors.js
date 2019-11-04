/* global generateRandomInteger */
/* eslint-disable no-unused-vars */
let colorIndex = 16;
const colorCodes = [[255, 30, 40], [255, 150, 20], [255, 220, 0], [0, 255, 100], [100, 255, 20], [50, 200, 200], [120, 220, 255], [80, 180, 255], [220, 120, 255], [255, 100, 150], [240, 20, 200], [140, 140, 140], [170, 170, 170], [200, 200, 200], [255, 0, 0]];
const colorNames = ['Red', 'Orange', 'Yellow', 'Lime', 'Green', 'Teal', 'Aqua', 'Blue', 'Purple', 'Pink', 'Fuchsia', 'Dark Gray', 'Light Gray', 'Silver'];
const dropdown = document.getElementById('change-color');
const custom = document.getElementById('custom');
for (const i in colorNames) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'dropdown-item';
  button.setAttribute('data-value', i);
  button.innerHTML = colorNames[i];
  dropdown.insertBefore(button, custom);
  if (i === '2' || i === '5' || i === '7' || i === '10' || i === '13') {
    const div = document.createElement('div');
    div.className = 'dropdown-divider';
    dropdown.insertBefore(div, custom);
  }
}

const addCustomColor = () => {
  document.getElementById('customColor').addEventListener('change', function () {
    colorCodes[colorCodes.length - 1] = this.value.match(/[A-Za-z0-9]{2}/g).map(v => parseInt(v, 16));
  });
};

const generateRandomColor = () => {
  return colorCodes[generateRandomInteger(colorCodes.length - 1)];
};
