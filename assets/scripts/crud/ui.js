'use strict';

const indexClimbsHandlerbars = require('../templates/helpers/index-climbs.handlebars');
const showClimbsHandlerbars = require('../templates/helpers/show-climb.handlebars');

function resetTitles() {
  $('#index-show-title').text('show Climbs');
  $('#create-title').text('Create Climb');
  $('#update-title').text('Update Climb');
  $('#destroy-title').text('Destroy Climb');
}

const indexSuccess = (data) => {
  console.table(data.climbs);
  $('.update-delete-container').css('display', 'unset');
  $('.view').css('display', 'unset');
  $('.view').text('');

  let indexClimbsHtml = indexClimbsHandlerbars({ climbs: data.climbs });
  $('.view').html(indexClimbsHtml);

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
  $('.view').text('');

  let showClimbHtml = showClimbsHandlerbars({ climb: data.climb });
  $('.view').html(showClimbHtml);

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
  $('#create-title').text('Create Another Climb!');
};

const createFailure = (data) => {
  console.log(data);
  $('.clear-input-create').val('');
  $('#create-title').text('hmmm... something was not entered right');
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
