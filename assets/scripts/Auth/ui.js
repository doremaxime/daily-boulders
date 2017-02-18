'use strict';

const success = () => {
};

const signUpSuccess = (data) => {
  console.log(data);
  $('#sign-up-title').text('Great, now sign-in!');
};

const signUpFailure = (data) => {
  console.log(data);
  $('#sign-up-title').text('E-mail already taken or passwords did not match');
};

const signInSuccess = (data) => {
  console.log(data);
  $('#sign-up').css('display', 'none');
  $('#sign-in').css('display', 'none');
  $('#sign-out').css('display', 'unset');
  $('#change-password').css('display', 'unset');
  $('#change-password-title').text('Change Password!');
  $('#sign-in-title').text('Sign in!');
  $('#sign-up-title').text('Sign up!');
  $('.clear-input').val('');
};

const signInFailure = (data) => {
  console.log(data);
  $('#sign-in-title').text('Wrong e-mail or Password');
};

const failure = () => {
};

const changePasswordSuccess = (data) => {
  console.log(data);
  $('#change-password-title').text('Change Password!');
  $('.clear-input').val('');
};

const changePasswordFailure = (data) => {
  console.log(data);
  $('#change-password-title').text('Current password is wrong');
};

const signOutSuccess = (data) => {
  console.log(data);
  $('#sign-up').css('display', 'unset');
  $('#sign-in').css('display', 'unset');
  $('#sign-out').css('display', 'none');
  $('#change-password').css('display', 'none');
  $('.clear-input').val('');
  $('.clear-input-show').val('');
  $('.clear-input-create').val('');
  $('.clear-input-update').val('');
  $('.clear-input-destroy').val('');
};

module.exports = {
  failure,
  success,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
};
