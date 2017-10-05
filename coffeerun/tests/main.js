(function(process) {
  'use strict';

  /*These new versions of truck.js and datastore.js have the window Object
  changed to the process object, since window isn't defined in node.js.
  It seems a little silly but otherwise node.js couldn't load the modules
  */
  eval(require('fs').readFileSync('tests/truck.js', 'utf8'));
  eval(require('fs').readFileSync('tests/datastore.js', 'utf8'));
  var App = process.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var myTruck = new Truck('ncc-1701', new DataStore());
  process.myTruck = myTruck;
  eval(require('fs').readFileSync('tests/test_truck.js', 'utf8'));
  eval(require('fs').readFileSync('tests/test_datastore.js', 'utf8'));

})(process);
