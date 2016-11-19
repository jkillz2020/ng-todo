"use strict";

app.run(function(FIREBASE_CONFIG){
  firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider) {
  $routeProvider
    .when('/items/list', {
      templateUrl: 'partials/item-list.html',
      controller: 'ItemListCtrl'
    })
    .when('/items/new', {
      templateUrl: 'partials/item-new.html',
      controller: 'ItemNewCtrl'
    })
    .otherwise('/items/list')
})