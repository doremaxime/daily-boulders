'use strict';

// const crudEvents = require('./events.js');
const indexClimbsHandlerbars = require('../templates/helpers/index-climbs.handlebars');
const showClimbsHandlerbars = require('../templates/helpers/show-climb.handlebars');

function resetTitles() {
  $('#index-show-title').text('show Climbs');
  $('#createClimbModalLabel').text('Create Climb');
  $('#update-title').text('Update Climb');
  $('#destroy-title').text('Destroy Climb');
}

const indexSuccess = (data) => {
  console.table(data.climbs);
  $('.update-delete-container').css('display', 'unset');
  $('.index').css('display', 'unset');
  // $('.index').text('');

  let indexClimbsHtml = indexClimbsHandlerbars({ climbs: data.climbs });
  $('.table-striped').html(indexClimbsHtml);

  resetTitles();
};

const indexFailure = (data) => {
  console.log(data);
  $('#index-show-title').text("you haven't logged any yet! get to work!");
  resetTitles();
};

const showSuccess = (data) => {
  console.log(data.climb);
  $('.update-delete-container').css('display', 'unset');
  $('.clear-input-show').val('');

  $('#index-show-title').text('');
  $('.index').text('');

  let showClimbHtml = showClimbsHandlerbars({ climb: data.climb });
  $('.index').html(showClimbHtml);

  resetTitles();
};

const showFailure = (data) => {
  console.log(data);
  resetTitles();

  $('#index-show-title').text('ID is not valid or existant');
};

const createSuccess = (data) => {
  console.log(data.book);
  $('.clear-input-create').val('');
  $('#createClimbModalLabel').text('Create Climb');
  $('#createClimbModal').modal('hide');
  // crudEvents.onIndexAnShow();
};

const createFailure = (data) => {
  console.log(data);
  $('.clear-input-create').val('');
  $('#createClimbModalLabel').text('hmmm... something was not entered right');
};

const updateSuccess = (data) => {
  console.log(data);
  $('.clear-input-update').val('Sweeeet');
  $('#update-title').text('Updated!');
};

const updateFailure = (data) => {
  console.log(data);
  $('.clear-input-update').val('');
  $('#update-title').text('hmmm... something was entered right');
};

const destroySuccess = (data) => {
  console.log(data);
  $('.clear-input-destroy').val('');
  $('#destroy-title').text('bye bye climb');
};

const destroyFailure = (data) => {
  console.log(data);
  $('.clear-input-destroy').val('');
  $('#destroy-title').text('ID is not valid or existant');
};

module.exports = {
  indexSuccess,
  indexFailure,
  showSuccess,
  showFailure,
  createSuccess,
  createFailure,
  updateSuccess,
  updateFailure,
  destroySuccess,
  destroyFailure,
  resetTitles,
};
