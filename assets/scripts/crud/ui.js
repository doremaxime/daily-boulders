'use strict';

const indexClimbsHandlerbars = require('../templates/helpers/index-climbs.handlebars');

function shakeForm() {
   let l = 20;
   for( let i = 0; i < 10; i++ )
     $(".modal").animate( {
         'margin-left': "+=" + ( l = -l ) + 'px',
         'margin-right': "-=" + l + 'px'
      }, 50);
}

const indexSuccess = (data) => {
  $('.update-delete-container').css('display', 'unset');
  $('.index').css('display', 'unset');
  let indexClimbsHtml = indexClimbsHandlerbars({ climbs: data.climbs });
  $('.table-striped').html(indexClimbsHtml);
};

const indexFailure = () => {
};

// const showSuccess = (data) => {
//   console.log(data.climb);
//   $('.update-delete-container').css('display', 'unset');
//   let showClimbHtml = showClimbsHandlerbars({ climb: data.climb });
//   $('.index').html(showClimbHtml);
// };
//
// const showFailure = (data) => {
//   console.log(data);
// };

const createSuccess = (data) => {
  // console.log(data.book);
  $('.clear-input-create').val('');
  $('#createClimbModal').modal('hide');
  $('#dropdownMenuButton').find('option:first').attr('selected', 'selected');
};

const createFailure = (data) => {
  // console.log(data);
  shakeForm();
};

const updateSuccess = (id) => {
  // console.log(id);
  $('.updateClimbModal'+id).modal('toggle');
  $('.modal-backdrop').remove();
};

const updateFailure = (data) => {
  // console.log(data);
  shakeForm();
};

const destroySuccess = (pass) => {
  console.log(pass);
  // $('.destroyClimbModal'+pass).modal('toggle');
  $('.modal').modal('hide');
};

const destroyFailure = (data) => {
  // console.log(data);
  shakeForm();
};

module.exports = {
  indexSuccess,
  indexFailure,
  // showSuccess,
  // showFailure,
  createSuccess,
  createFailure,
  updateSuccess,
  updateFailure,
  destroySuccess,
  destroyFailure,
};
