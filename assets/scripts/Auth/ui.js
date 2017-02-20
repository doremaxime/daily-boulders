'use strict';

const crud = require('../crud/ui');
// const indexClimbsHandlerbars = require('../templates/helpers/index-climbs.handlebars');
const crudEvents = require('../crud/events');

const signUpSuccess = (data) => {
  console.log(data);
  $('#sign-up-primary-button').css('display', 'none');
  $('#signUpModal').modal('hide');
};

const signUpFailure = (data) => {
  console.log(data);
  $('#signInModalLabel').text('E-mail already taken or passwords did not match');
};

const signInSuccess = (data) => {
  console.log(data);
  $('.clear-input').val('');
  $('.crud-container').css('display', 'unset');
  $('#sign-in-primary-button').css('display', 'none');
  $('#sign-up-primary-button').css('display', 'none');
  $('#sign-out-button').css('display', 'unset');
  $('#change-password-primary-button').css('display', 'unset');
  $('#signUpModalLabel').text('Sign up!');
  $('#signInModalLabel').text('Sign in!');
  $('#signInModal').modal('hide');
  $('.container').css('display', 'none');
  crudEvents.onIndexAnShow();
  $('#create-climb-primary-button').css('display', 'unset');
};

const signInFailure = (data) => {
  console.log(data);
  $('#signInModalLabel').text('Wrong email or password');
};

const changePasswordSuccess = (data) => {
  console.log(data);
  $('.clear-input').val('');
  $('#changePasswordModal').modal('hide');
  $('#changePasswordModalLabel').text("Change Password");
};

const changePasswordFailure = (data) => {
  console.log(data);
  $('#changePasswordModalLabel').text("Current password does not match");
};

const signOutSuccess = (data) => {
  console.log(data);
  $('#sign-out').css('display', 'none');
  $('#change-password').css('display', 'none');
  $('.crud-container').css('display', 'none');
  $('.clear-input').val('');
  $('.clear-input-show').val('');
  $('.clear-input-create').val('');
  $('.clear-input-update').val('');
  $('.clear-input-destroy').val('');
  $('.table-striped').css('display', 'none');
  crud.resetTitles();

  $('#change-password-primary-button').css('display', 'none');
  $('#sign-up-primary-button').css('display', 'unset');
  $('#sign-in-primary-button').css('display', 'unset');
  $('#create-climb-primary-button').css('display', 'none');
  $('#sign-out-button').css('display', 'none');
  $('.container').css('display', 'unset');
};

const signOutFailure = (data) => {
  console.log(data);
};

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
};
