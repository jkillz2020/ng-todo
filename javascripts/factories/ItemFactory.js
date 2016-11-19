"use strict";

app.factory('ItemFactory', function($q, $http, FIREBASE_CONFIG){

  var getItemList=function(){
    return $q((resolve, reject)=>{
      $http.get(`${FIREBASE_CONFIG.databaseURL}/Items.json`)
        .success(function(response){
          let items =[];
          Object.keys(response).forEach(function(key){
            response[key].id=key;
            items.push(response[key]);
          });
          resolve(items);
        })
        .error(function(errorResponse){
          reject(errorResponse);
        })
    })
  }

  var postNewItem = function(newItem){
    return $q((resolve, reject)=>{
      $http.post(`${FIREBASE_CONFIG.databaseURL}/Items.json`, 
        JSON.stringify({
        assignedTo: newItem.assignedTo,
        isCompleted: newItem.isCompleted,
        task: newItem.task
      })
    )
      .success(function(postResponse){
        resolve(postResponse);
      })
      .error(function(postError){
        reject(postError);
      })
    })
  }

  var deleteItem =  function(itemId){
    return $q((resolve, reject) => {
      $http.delete(`${FIREBASE_CONFIG.databaseURL}/Items/${itemId}.json`)
      .success(function(deleteResponse){
        console.log("success")
        resolve(deleteResponse);
      })
      .error(function(deleteError){
        reject(deleteError);
      })
    })
  }





  return {getItemList:getItemList,
          postNewItem:postNewItem,
          deleteItem:deleteItem
        }
})