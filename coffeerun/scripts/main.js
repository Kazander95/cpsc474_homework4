(function(window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
  var SERVER_URL = 'http://localhost:2403/coffeeorders';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var CheckList = App.CheckList;
  var Validation = App.Validation;
  var RemoteDataStore = App.RemoteDataStore;
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  var remoteDS = new RemoteDataStore(SERVER_URL);
  var myTruck = new Truck('ncc-1701', remoteDS);
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
  window.myTruck = myTruck;
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function(data){
    myTruck.createOrder.call(myTruck, data);
    checkList.addRow.call(checkList, data);
  });

  formHandler.addInputHandler(Validation.isCompanyEmail);
  console.log(formHandler);
})(window);
