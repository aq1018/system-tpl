'use strict';

var _ = require('underscore');

exports.setDefaultTemplateSettings = function(settings) {
  _.templateSettings = settings;
};

exports.translate = function(load) {
  let compiled = _.template(load.src);
  load.source = compiled.source;
};
