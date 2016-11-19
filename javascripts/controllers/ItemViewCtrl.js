"use strict";

app.controller('ItemViewCtrl', function($scope, $routeParams, ItemFactory){
  $scope.selectedItem = {};
  let itemId = $routeParams.id;
  
  ItemFactory.getSingleItem(itemId).then(function(oneItem){
    $scope.selectedItem = oneItem;
  })
})