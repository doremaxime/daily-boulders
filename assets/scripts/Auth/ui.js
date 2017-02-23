'use strict';

const crudEvents = require('../crud/events');

function shakeForm() {
   let l = 20;
   for( let i = 0; i < 10; i++ )
     $(".modal").animate( {
         'margin-left': "+=" + ( l = -l ) + 'px',
         'margin-right': "-=" + l + 'px'
      }, 50);

}

const signUpSuccess = (data) => {
  console.log(data);
  $('#sign-up-primary-button').css('display', 'none');
  $('#signUpModal').modal('hide');
};

const signUpFailure = (data) => {
  console.log(data);
  shakeForm();
};

const signInSuccess = (data) => {
  console.log(data);
  $('.clear-input').val('');
  $('#signInModal').modal('hide');
  $('.container').css('display', 'none');  // This is the carousel
  $('.crud-container').css('display', 'unset');
  $('#sign-in-primary-button').css('display', 'none');
  $('#sign-up-primary-button').css('display', 'none');
  $('#sign-out-button').css('display', 'unset');
  $('#change-password-primary-button').css('display', 'unset');
  $('#create-climb-primary-button').css('display', 'unset');
  crudEvents.onIndex();
};

const signInFailure = (data) => {
  console.log(data);
  shakeForm();
};

const changePasswordSuccess = (data) => {
  console.log(data);
  $('.clear-input').val('');
  $('#changePasswordModal').modal('hide');
};

const changePasswordFailure = (data) => {
  console.log(data);
  shakeForm();
};

const signOutSuccess = (data) => {
  console.log(data);
  $('#sign-out-button').css('display', 'none');
  $('#change-password-primary-button').css('display', 'none');
  $('.crud-container').css('display', 'none');
  $('#sign-up-primary-button').css('display', 'unset');
  $('#sign-in-primary-button').css('display', 'unset');
  $('.clear-input').val('');
  $('.clear-input-show').val('');
  $('.clear-input-create').val('');
  $('.clear-input-update').val('');
  $('.clear-input-destroy').val('');
  $('.container').css('display', 'unset'); // This is the carousel
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
