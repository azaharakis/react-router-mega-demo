/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

module.exports = function() {
  var div = document.getElementById('app');

  Router.run(routes, Router.HistoryLocation, function (Handler) {
    // whenever the url changes, this callback is called again
    React.render(<Handler />, div);
  });
};
