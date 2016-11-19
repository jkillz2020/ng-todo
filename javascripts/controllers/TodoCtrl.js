"use strict";

app.controller('TodoCtrl', function($scope, ItemFactory){
  $scope.welcome = "hello";
  $scope.showListView = true;
  $scope.newTask = {};
  $scope.items = [];

  let getItems = function(){
ItemFactory.getItemList().then(function(fbItems){
  $scope.items=fbItems;
})
}

getItems();

  $scope.allItems = function(){
    console.log("you clicked all items");
    $scope.showListView = true;
  }
  $scope.newItem = function(){
    console.log("you clicked new item");
    $scope.showListView = false;
  }

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