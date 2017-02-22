'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');

const onIndex = function () {
    api.index()
    .then(ui.indexSuccess)
    .catch(ui.indexFailure);
};

const onCreate = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.create(data)
    .then(ui.createSuccess)
    .then(onIndex)
    .catch(ui.createFailure)
    ;
};

const onUpdate = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.update(data)
    .then(ui.updateSuccess)
    .then(onIndex)
    .catch(ui.updateFailure);
};

const onDestroy = function (event) {
  event.preventDefault();

let id = $(event.target).data('id');

  api.destroy(id)
    .then(ui.destroySuccess)
    .then(onIndex)
    .catch(ui.destroyFailure)
    ;
};

const addHandlers = () => {
  $('.create-climb').on('submit', onCreate);
  $('.update-climb').on('submit', onUpdate);
  $('.index').on('click', '.update', onUpdate);
  $('.index').on('click', '.destroy', onDestroy);
};


module.exports = {
  onIndex,
  onCreate,
  onUpdate,
  onDestroy,
  addHandlers,
};
