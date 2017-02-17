'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');
const store = require('../store');

const onIndex = function (event) {
  event.preventDefault();
  let climbId = $('#climb-id').val();

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
// const onShow = function (event) {
//   event.preventDefault();
//
//   let data = getFormFields(event.target);
//
//   api.signIn(data)
//   .then((response) => {
//     store.user = response.user;
//     return store.user;
//   })
//     .then(ui.signInSuccess)
//     .catch(ui.signInFailure);
// };
//
// const onCreate = function (event) {
//   event.preventDefault();
//
//   let data = getFormFields(event.target);
//
//   api.changePassword(data)
//     .then(ui.changePasswordSuccess)
//     .catch(ui.changePasswordFailure)
//     ;
// };
//
// const onUpdate = function (event) {
//   event.preventDefault();
//
//   let data = getFormFields(event.target);
//
//   api.changePassword(data)
//     .then(ui.changePasswordSuccess)
//     .catch(ui.changePasswordFailure)
//     ;
// };
//
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
  $('.index-and-show-climb').on('submit', onIndex);
  // $('#create-climb').on('submit', onCreate);
};

module.exports = {
  onIndex,
  // onShow,
  // onCreate,
  // onUpdate,
  // onDestroy,
  // addHandlers,
  addHandlers,
};
