'use strict';

const indexClimbsHandlerbars = require('../templates/helpers/index-climbs.handlebars');
const showClimbsHandlerbars = require('../templates/helpers/show-climb.handlebars');

function shakeForm() {
   let l = 20;
   for( let i = 0; i < 10; i++ )
     $(".modal").animate( {
         'margin-left': "+=" + ( l = -l ) + 'px',
         'margin-right': "-=" + l + 'px'
      }, 50);

}

// function resetTitles() {
//   $('#index-show-title').text('show Climbs');
//   $('#createClimbModalLabel').text('Create Climb');
// }

const indexSuccess = (data) => {
  console.table(data.climbs);
  $('.update-delete-container').css('display', 'unset');
  $('.index').css('display', 'unset');

  let indexClimbsHtml = indexClimbsHandlerbars({ climbs: data.climbs });
  $('.table-striped').html(indexClimbsHtml);

  // resetTitles();
};

const indexFailure = (data) => {
  console.log(data);
  // resetTitles();
};

const showSuccess = (data) => {
  console.log(data.climb);
  $('.update-delete-container').css('display', 'unset');
  $('.clear-input-show').val('');

  $('#index-show-title').text('');
  $('.index').text('');

  let showClimbHtml = showClimbsHandlerbars({ climb: data.climb });
  $('.index').html(showClimbHtml);

  // resetTitles();
};

const showFailure = (data) => {
  console.log(data);
  // resetTitles();

  $('#index-show-title').text('ID is not valid or existant');
};

const createSuccess = (data) => {
  console.log(data.book);
  $('.clear-input-create').val('');
  $('#createClimbModal').modal('hide');
  // crudEvents.onIndexAnShow();
};

const createFailure = (data) => {
  console.log(data);
  // $('.clear-input-create').val('');
  shakeForm();
};

const updateSuccess = (data) => {
  console.log(data);
  $('.clear-input-update').val('');
  $('.modal').modal('hide');
};

const updateFailure = (data) => {
  console.log(data);
  // $('.clear-input-update').val('');
  shakeForm();
};

const destroySuccess = (data) => {
  console.log(data);
  $('.clear-input-destroy').val('');
  $('.modal').modal('hide');
};

const destroyFailure = (data) => {
  console.log(data);
  $('.clear-input-destroy').val('');
  shakeForm();
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
  // resetTitles,
};
