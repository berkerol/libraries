/* global locked:writable guess resetInputs */
/* eslint-disable no-unused-vars */

const createLabel = (htmlFor, innerHTML) => {
  const label = document.createElement('label');
  label.className = 'form-label';
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

const createDropdownItem = (dataValue, innerHTML) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'dropdown-item';
  button.setAttribute('data-bs-value', dataValue);
  button.innerHTML = innerHTML;
  return button;
};

const createDropdownMenu = (id, buttonElements) => {
  const menu = document.createElement('div');
  menu.className = 'dropdown-menu';
  menu.id = id;
  for (const buttonElement of buttonElements) {
    menu.appendChild(createDropdownItem(...buttonElement));
  }
  return menu;
};

const createDropdownCol = (className, buttonElement, id, buttonElements) => {
  const col = document.createElement('div');
  col.className = className;
  const button = createButton(...buttonElement);
  button.removeAttribute('onclick');
  button.setAttribute('data-bs-toggle', 'dropdown');
  col.appendChild(button);
  col.appendChild(createDropdownMenu(id, buttonElements));
  return col;
};

const createDropdownRow = dropdownElements => {
  const row = document.createElement('div');
  row.className = 'btn-group btn-group-lg btn-group-center';
  for (const dropdownElement of dropdownElements) {
    row.appendChild(createDropdownCol('btn-group btn-group-lg', ...dropdownElement));
  }
  return row;
};

const createDatalist = (inputId, id, options) => {
  document.getElementById(inputId).setAttribute('list', id);
  const datalist = document.createElement('datalist');
  datalist.id = id;
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  for (const option of options) {
    const element = document.createElement('option');
    element.value = option;
    datalist.appendChild(element);
  }
  return datalist;
};

const deleteOptionFromDatalist = (id, option) => {
  const datalist = document.getElementById(id);
  for (const element of datalist.children) {
    if (element.value === option) {
      datalist.removeChild(element);
      return;
    }
  }
};

const createElement = (tagName, innerHTML, className) => {
  const element = document.createElement(tagName);
  element.innerHTML = innerHTML;
  if (className) {
    element.className = className;
  }
  return element;
};

const createRow = (rowClass, cols) => {
  const row = document.createElement('div');
  row.className = rowClass;
  for (const col of cols) {
    row.appendChild(col);
  }
  return row;
};

const createModalButton = (buttonGroup, index) => {
  const settingsButton = buttonGroup.children[index];
  settingsButton.removeAttribute('onclick');
  settingsButton.setAttribute('data-bs-toggle', 'modal');
  settingsButton.setAttribute('data-bs-target', '#settings');
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
  modalClose.className = 'btn-close';
  modalClose.setAttribute('data-bs-dismiss', 'modal');
  modalHeader.appendChild(modalClose);
  modalContent.appendChild(modalHeader);
  const form = document.createElement('form');
  for (const modalElement of modalElements) {
    const row = document.createElement('div');
    row.className = 'row';
    for (const colElement of modalElement) {
      const colElementType = colElement[colElement.length - 1];
      if (colElementType === 'text') {
        row.appendChild(createTextCol('col mb-3', ...colElement));
      } else if (colElementType === 'number') {
        row.appendChild(createNumberCol('col mb-3', ...colElement));
      } else if (colElementType === 'check') {
        row.appendChild(createCheckboxCol('col my-auto', ...colElement));
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
  modalSave.setAttribute('data-bs-dismiss', 'modal');
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
  child.innerHTML = '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>' + text;
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
