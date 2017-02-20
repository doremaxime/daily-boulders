'use strict';

const crud = require('../crud/ui.js');

const signUpSuccess = (data) => {
  console.log(data);
  $('#sign-up-primary-button').css('display', 'none');

  $('#signUpModalLabel').text('Now go sign up');

};

const signUpFailure = (data) => {
  console.log(data);
  // $('#signInModalLabel').text('E-mail already taken or passwords did not match');
};

const signInSuccess = (data) => {
  console.log(data);
  $('#sign-out').css('display', 'unset');
  $('.clear-input').val('');
  $('.crud-container').css('display', 'unset');
  $('#sign-in-primary-button').css('display', 'none');
  $('#change-password-primary-button').css('display', 'unset');
  $('#signUpModalLabel').text('Sign up!');
  $('#signInModalLabel').text('Sign in!');
};

const signInFailure = (data) => {
  console.log(data);
  $('#signInModalLabel').text('Wrong email or password');
};

const changePasswordSuccess = (data) => {
  console.log(data);
  // $('#change-password-title').text('Change Password!');
  $('.clear-input').val('');
};

const changePasswordFailure = (data) => {
  console.log(data);
  // $('#change-password-title').text('Current password is wrong');
};

const signOutSuccess = (data) => {
  console.log(data);
  // $('#sign-up').css('display', 'unset');
  // $('#sign-in').css('display', 'unset');
  $('#sign-out').css('display', 'none');
  $('#change-password').css('display', 'none');
  $('.crud-container').css('display', 'none');
  $('.clear-input').val('');
  $('.clear-input-show').val('');
  $('.clear-input-create').val('');
  $('.clear-input-update').val('');
  $('.clear-input-destroy').val('');
  $('.view').css('display', 'none');
  crud.resetTitles();


  $('#change-password-primary-button').css('display', 'none');
  $('#sign-up-primary-button').css('display', 'unset');
  $('#sign-in-primary-button').css('display', 'unset');
  // $('.fade').css('display', 'unset');
};

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
};
