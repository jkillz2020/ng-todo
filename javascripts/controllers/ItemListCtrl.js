"use strict";
app.controller("ItemListCtrl", function($scope, ItemFactory){
  $scope.items = [];

  let getItems = function(){
    ItemFactory.getItemList().then(function(fbItems){
      $scope.items=fbItems;
  })
}

getItems();


  $scope.addNewItem = function(){
    $scope.newTask.isCompleted=false;
    ItemFactory.postNewItem($scope.newTask).then(function(itemId){
    getItems();
    $scope.newTask= {};
    $scope.showListView = true;
    })
  }

  $scope.deleteItem = function(itemId){
    console.log("you deleted item", itemId);
    ItemFactory.deleteItem(itemId).then(function(response){
      console.log("here now", response)
      getItems();
    })
  }
})