/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var config = {
  fingerprint: {
    enabled: false
  }
};

var app = new EmberApp(config);

var removeLibrary = function(name) {
  var legacyFilesToAppend = app.legacyFilesToAppend;
  var pattern             = new RegExp(name + ".js$");
  var filtered            = legacyFilesToAppend.filter(function(file) {
    return !pattern.test(file);
  });

  app.legacyFilesToAppend = filtered;
};

removeLibrary('jquery');

app.import('vendor/ember-validations/dist/ember-validations.js');
app.import('vendor/ember-easyForm/dist/ember-easyForm.js');

module.exports = app.toTree();
