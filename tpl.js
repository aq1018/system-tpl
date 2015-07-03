'use strict';

var _ = require('underscore');

exports.setDefaultTemplateSettings = function(settings) {
  _.templateSettings = settings;
};

exports.translate = function(load) {
  var compiled = _.template(load.source);
  load.source = 'var _ = require(\'underscore\'); module.exports = ' + compiled.source + ';';
};
