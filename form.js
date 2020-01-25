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

const createModalButton = (buttonGroup, index) => {
  const settingsButton = buttonGroup.children[index];
  settingsButton.removeAttribute('onclick');
  settingsButton.setAttribute('data-toggle', 'modal');
  settingsButton.setAttribute('data-target', '#settings');
  return buttonGroup;
};

const createModal = modalElements => {
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  const modalHeader = document.createElement('div');
  modalHeader.className = 'modal-header';
  const modalTitle = document.createElement('h4');
  modalTitle.className = 'modal-title';
  modalTitle.innerHTML = 'Settings';
  modalHeader.appendChild(modalTitle);
  const modalClose = document.createElement('button');
  modalClose.type = 'button';
  modalClose.className = 'close';
  modalClose.setAttribute('data-dismiss', 'modal');
  modalClose.innerHTML = '<span>&times;</span>';
  modalHeader.appendChild(modalClose);
  modalContent.appendChild(modalHeader);
  const form = document.createElement('form');
  for (const modalElement of modalElements) {
    const row = document.createElement('div');
    row.className = 'form-row';
    for (const colElement of modalElement) {
      const colElementType = colElement[colElement.length - 1];
      if (colElementType === 'text') {
        row.appendChild(createTextCol('form-group col', ...colElement));
      } else if (colElementType === 'number') {
        row.appendChild(createNumberCol('form-group col', ...colElement));
      } else if (colElementType === 'check') {
        row.appendChild(createCheckboxCol('form-group col my-auto', ...colElement));
      }
    }
    form.appendChild(row);
  }
  const modalBody = document.createElement('div');
  modalBody.className = 'modal-body';
  modalBody.appendChild(form);
  modalContent.appendChild(modalBody);
  const modalFooter = document.createElement('div');
  modalFooter.className = 'modal-footer';
  const modalSave = createButton('primary', 'save()', 'a', 'save', 'S<u>a</u>ve');
  modalSave.setAttribute('data-dismiss', 'modal');
  modalFooter.appendChild(modalSave);
  modalContent.appendChild(modalFooter);
  const modalDialog = document.createElement('div');
  modalDialog.className = 'modal-dialog';
  modalDialog.appendChild(modalContent);
  const modal = document.createElement('div');
  modal.className = 'modal fade';
  modal.id = 'settings';
  modal.tabIndex = '-1';
  modal.appendChild(modalDialog);
  document.body.insertBefore(modal, document.body.children[0]);
};

const createAlert = (type, text) => {
  const child = document.createElement('div');
  child.className = `alert alert-${type} alert-dismissible fade show`;
  child.innerHTML = '<button type="button" class="close" data-dismiss="alert"><span>&times;</span></button>' + text;
  const parent = document.getElementById('text');
  parent.insertBefore(child, parent.children[0]);
};

const exit = (type, text) => {
  createAlert(type, text);
  locked = true;
  createAlert('info', 'Restart the game!');
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
