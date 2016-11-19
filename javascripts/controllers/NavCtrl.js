"use strict";

app.controller('NavCtrl', function($scope){
  $scope.navItems = [
    {
      name:"Logout",
      url: "#/Logout"
    }, 
    {
      name:"All Items",
      url:"#/items/list"
    }, 
    {
      name:"New Item",
      url: "#/items/new"
    }
  ];
});