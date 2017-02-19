'use strict';

const indexClimbsHandlerbars = require('../templates/helpers/index-climbs.handlebars');
const showClimbsHandlerbars = require('../templates/helpers/show-climb.handlebars');


const indexSuccess = (data) => {
  console.table(data.climbs);
  $('.view').css('display', 'initial');
  $('.view').text('');

  let indexClimbsHtml = indexClimbsHandlerbars({ climbs: data.climbs });
  $('.view').html(indexClimbsHtml);
};

const indexFailure = (data) => {
  console.log(data);
};

const showSuccess = (data) => {
  console.log(data.climb);
  $('.clear-input-show').val('');

  $('.view').text('');

  let showClimbHtml = showClimbsHandlerbars({ climbs: data.climb });
  $('.view').html(showClimbHtml);
};

const showFailure = (data) => {
  console.log(data);
};

const createSuccess = (data) => {
  console.log(data.book);
  $('.clear-input-create').val('nice! another?');
};

const createFailure = (data) => {
  console.log(data);
  $('.clear-input-create').val('Hmmm... try again');

};

const updateSuccess = (data) => {
  console.log(data);
  $('.clear-input-update').val('Sweeeet');
};

const updateFailure = (data) => {
  console.log(data);
  $('.clear-input-update').val('Hmmm... try again');
};

const destroySuccess = (data) => {
  console.log(data);
  $('.clear-input-destroy').val('climb destroyed! more?');
};

const destroyFailure = (data) => {
  console.log(data);
  $('.clear-input-destroy').val('Hmmm... try again');
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
};
