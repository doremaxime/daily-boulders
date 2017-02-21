'use strict';

const crud = require('../crud/ui');
// const indexClimbsHandlerbars = require('../templates/helpers/index-climbs.handlebars');
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
  // $('#signInModalLabel').text('E-mail already taken or passwords did not match');
  shakeForm();
};

const signInSuccess = (data) => {
  console.log(data);
  $('.clear-input').val('');
  $('.crud-container').css('display', 'unset');
  $('#sign-in-primary-button').css('display', 'none');
  $('#sign-up-primary-button').css('display', 'none');
  $('#sign-out-button').css('display', 'unset');
  $('#change-password-primary-button').css('display', 'unset');
  // $('#signUpModalLabel').text('Sign up!');
  // $('#signInModalLabel').text('Sign in!');
  $('#signInModal').modal('hide');
  crudEvents.onIndexAnShow();
  $('#create-climb-primary-button').css('display', 'unset');

  // This is the carousel
  $('.container').css('display', 'none');
};

const signInFailure = (data) => {
  console.log(data);
  // $('#signInModalLabel').text('Wrong email or password');
  shakeForm();

};

const changePasswordSuccess = (data) => {
  console.log(data);
  $('.clear-input').val('');
  // $('#changePasswordModalLabel').text("Change Password");
  $('#changePasswordModal').modal('hide');
};

const changePasswordFailure = (data) => {
  console.log(data);
  // $('#changePasswordModalLabel').text("Current password does not match");
  shakeForm();
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

  // This is the carousel
  $('.container').css('display', 'initial');
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
