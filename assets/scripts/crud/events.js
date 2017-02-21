'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');

const onIndexAnShow = function () {
  // event.preventDefault();
  // let climbId = $('#climb-id').val();
  // console.log(climbId);
  // if (climbId.length === 0) {
    api.index()
    .then(ui.indexSuccess)
    .catch(ui.indexFailure);
  // } else {
  //   api.show(climbId)
  //   .then(ui.showSuccess)
  //   .catch(ui.showFailure);
  // }

};

// const onIndexFromSignIn = function (event) {
//   console.log(1);
//   event.preventDefault();
//   api.index()
//     .then(ui.indexSuccess)
//     .catch(ui.indexFailure);
// };

const onCreate = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.create(data)
    .then(ui.createSuccess)
    .then(onIndexAnShow)
    .catch(ui.createFailure)
    ;
};

const onUpdate = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.update(data)
    .then(ui.updateSuccess)
    .then(onIndexAnShow)
    .catch(ui.updateFailure)
    ;
};

const onDestroy = function (event) {
  event.preventDefault();

let id = $(event.target).data('id');

  api.destroy(id)
    .then(ui.destroySuccess)
    .then(onIndexAnShow)
    .catch(ui.destroyFailure)
    ;
};

const addHandlers = () => {
  // $('.index-and-show-climb').on('submit', onIndexAnShow);
  $('.create-climb').on('submit', onCreate);
  $('.update-climb').on('submit', onUpdate);
  // $('.destroy-climb').on('submit', onDestroy);

  // $('#delete-button').on('click', onDestroy);

  $('.index').on('click', '.trash', onDestroy);
};


module.exports = {
  onIndexAnShow,
  // onIndexFromSignIn,
  onCreate,
  onUpdate,
  onDestroy,
  addHandlers,
};
