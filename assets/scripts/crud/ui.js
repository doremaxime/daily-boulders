'use strict';

const indexSuccess = (data) => {
  console.table(data.climbs);
};

const indexFailure = (data) => {
  console.log(data);
};

const showSuccess = (data) => {
  console.log(data.climb);
};

const showFailure = (data) => {
  console.log(data);
};

const createSuccess = (data) => {
  console.log(data.book);
};

const createFailure = (data) => {
  console.log(data);
};

const updateSuccess = (data) => {
  console.log(data);
};

const updateFailure = (data) => {
  console.log(data);
};

const destroySuccess = (data) => {
  console.log(data);
};

const destroyFailure = (data) => {
  console.log(data);
};

const success = () => {
};

const failure = () => {
};

module.exports = {
  failure,
  success,
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
