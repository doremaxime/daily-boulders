'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');
const store = require('../store');

const onIndexAnShow = function (event) {
  event.preventDefault();
  let climbId = $('#climb-id').val();
console.log(climbId);
  if (climbId.length === 0){
      api.index()
      .then(ui.indexSuccess)
      .catch(ui.indexFailure);
  } else {
    api.show(climbId)
    .then(ui.showSuccess)
    .catch(ui.showFailure);
  }

};

const onCreate = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.create(data)
    .then(ui.createSuccess)
    .catch(ui.createFailure)
    ;
};

const onUpdate = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.update(data)
    .then(ui.updateSuccess)
    .catch(ui.updateFailure)
    ;
};

// const onDestroy = function (event) {
//   event.preventDefault();
//
//   api.signOut()
//     .then(() => {
//       delete store.user;
//       return store;
//     })
//     .then(ui.signOutSuccess)
//     .catch(ui.error)
//     ;
// };

const addHandlers = () => {
  $('.index-and-show-climb').on('submit', onIndexAnShow);
  $('.create-climb').on('submit', onCreate);
  $('.update-climb').on('submit', onUpdate);
};

module.exports = {
  onIndexAnShow,
  onCreate,
  onUpdate,
  // onDestroy,
  // addHandlers,
  addHandlers,
};
