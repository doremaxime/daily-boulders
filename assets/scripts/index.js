'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const authEvents = require('./auth/events.js');
const crudEvents = require('./crud/events.js');

// On Document ready
$(() => {
  setAPIOrigin(location, config);
  authEvents.addHandlers();
  crudEvents.addHandlers();
  $('.no-fouc').removeClass('no-fouc')
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');
