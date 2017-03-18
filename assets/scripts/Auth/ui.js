'use strict';

const crudEvents = require('../crud/events');

// this function will make the modals shake left to right quickly when called
function shakeForm() {
  let l = 20;
  for (let i = 0; i < 10; i++)
    $(".modal").animate({
      'margin-left': "+=" + (l = -l) + 'px',
      'margin-right': "-=" + l + 'px'
    }, 50);

}

const signUpSuccess = () => {
  $('#sign-up-primary-button').css('display', 'none');
  $('#signUpModal').modal('hide');
};

const signUpFailure = () => {
  // modals shake to indicate that there was an error signing up.
  shakeForm();
};

const signInSuccess = () => {

  // clears all input fields
  $('.clear-input').val('');

  // Carousel disappears
  $('.container').css('display', 'none');

  // the main view appears showing the users's climbs
  $('.crud-container').css('display', 'unset');

  $('#sign-in-primary-button').css('display', 'none');
  $('#sign-up-primary-button').css('display', 'none');
  $('#signInModal').modal('hide');
  $('#sign-out-button').css('display', 'unset');
  $('#change-password-primary-button').css('display', 'unset');
  $('#create-climb-primary-button').css('display', 'unset');

  // All user's climbs are retrieved to be displayed in table
  crudEvents.onIndex();
};

const signInFailure = () => {
  // modals shake to indicate that there was an error signing in.
  shakeForm();
};

const changePasswordSuccess = () => {
  // clears all input fields
  $('.clear-input').val('');

  $('#changePasswordModal').modal('hide');
};

const changePasswordFailure = () => {
  // modals shake to indicate that there was an error changing password.
  shakeForm();
};

const signOutSuccess = () => {
  $('#sign-out-button').css('display', 'none');
  $('#change-password-primary-button').css('display', 'none');
  $('.crud-container').css('display', 'none');
  $('#sign-up-primary-button').css('display', 'unset');
  $('#sign-in-primary-button').css('display', 'unset');

  // clears all input fields
  $('.clear-input').val('');
  $('.clear-input-show').val('');
  $('.clear-input-create').val('');
  $('.clear-input-update').val('');
  $('.clear-input-destroy').val('');

  // Carousel is shown
  $('.container').css('display', 'unset');
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
