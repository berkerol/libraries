/* global locked:writable guess resetInputs */
/* eslint-disable no-unused-vars */

const createLabel = (htmlFor, innerHTML) => {
  const label = document.createElement('label');
  label.htmlFor = htmlFor;
  label.innerHTML = innerHTML;
  return label;
};

const createTextInput = id => {
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'form-control';
  input.id = id;
  return input;
};

const createTextCol = (className, innerHTML, id) => {
  const col = document.createElement('div');
  col.className = className;
  col.appendChild(createLabel(id, innerHTML));
  col.appendChild(createTextInput(id));
  return col;
};

const createTextRow = (rowClass, colClass, textElements) => {
  const row = document.createElement('div');
  row.className = rowClass;
  for (const textElement of textElements) {
    row.appendChild(createTextCol(colClass, ...textElement));
  }
  return row;
};

const createNumberInput = (id, min, max) => {
  const input = document.createElement('input');
  input.type = 'number';
  input.className = 'form-control';
  input.id = id;
  input.min = min;
  input.max = max;
  return input;
};

const createNumberCol = (className, innerHTML, id, min, max) => {
  const col = document.createElement('div');
  col.className = className;
  col.appendChild(createLabel(id, innerHTML));
  col.appendChild(createNumberInput(id, min, max));
  return col;
};

const createNumberRow = (rowClass, colClass, numberElements) => {
  const row = document.createElement('div');
  row.className = rowClass;
  for (const numberElement of numberElements) {
    row.appendChild(createNumberCol(colClass, ...numberElement));
  }
  return row;
};

const createCheckboxInput = (id, accessKey) => {
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.className = 'form-check-input';
  input.id = id;
  input.accessKey = accessKey;
  return input;
};

const createCheckboxCol = (className, innerHTML, id, accessKey) => {
  const innerCol = document.createElement('div');
  innerCol.className = 'form-check';
  innerCol.appendChild(createCheckboxInput(id, accessKey));
  const label = createLabel(id, innerHTML);
  label.className = 'form-check-label';
  innerCol.appendChild(label);
  const col = document.createElement('div');
  col.className = className;
  col.appendChild(innerCol);
  return col;
};

const createCheckboxRow = (rowClass, colClass, checkboxElements) => {
  const row = document.createElement('div');
  row.className = rowClass;
  for (const checkboxElement of checkboxElements) {
    row.appendChild(createCheckboxCol(colClass, ...checkboxElement));
  }
  return row;
};

const createButton = (className, onclick, accessKey, icon, innerHTML) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `btn btn-${className}`;
  button.setAttribute('onclick', onclick);
  button.accessKey = accessKey;
  button.innerHTML = `<i class="fas fa-${icon}"></i> ${innerHTML}`;
  return button;
};

const createButtonGroup = (buttonGroupClass, buttonElements) => {
  const buttonGroup = document.createElement('div');
  buttonGroup.className = buttonGroupClass;
  for (const buttonElement of buttonElements) {
    buttonGroup.appendChild(createButton(...buttonElement));
  }
  return buttonGroup;
};

const createButtonGroupRow = (rowClass, buttonGroupClass, buttonElements) => {
  const row = document.createElement('div');
  row.className = rowClass;
  row.appendChild(createButtonGroup(buttonGroupClass, buttonElements));
  return row;
};

const createMenuRow = (rowClass, numberClass, buttonClass, numberElement, buttonElements) => {
  const row = document.createElement('div');
  row.className = rowClass;
  row.appendChild(createNumberCol(numberClass, ...numberElement));
  row.appendChild(createButtonGroupRow(buttonClass, 'btn-group', buttonElements));
  return row;
};

const createHeaderMenuRow = (rowClass, buttonClass, headerElements, buttonElements) => {
  const row = document.createElement('div');
  row.className = rowClass;
  const header = document.createElement(headerElements[0]);
  header.className = headerElements[1];
  header.innerHTML = headerElements[2];
  row.appendChild(header);
  row.appendChild(createButtonGroup(buttonClass, buttonElements));
  return row;
};

const write = (className, text) => {
  const child = document.createElement('div');
  child.className = className + ' alert-dismissible fade show';
  child.innerHTML = '<button type="button" class="close" data-dismiss="alert"><span>&times;</span></button>' + text;
  const parent = document.getElementById('text');
  parent.insertBefore(child, parent.children[0]);
};

const exit = (className, text) => {
  write(className, text);
  locked = true;
  write('alert alert-info', 'Restart the game!');
};

const keyDownHandler = e => {
  if (e.keyCode === 13 && !locked) {
    e.preventDefault();
    guess();
  }
};

const keyUpHandler = e => {
  if (e.keyCode === 82) {
    resetInputs();
  }
};
