/**
 * Created by sandeep on 11/29/2014.
 */
var app=angular.module('appStore',['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("index.html");
    $stateProvider
        .state('todo', {
        url: "/todo",
        templateUrl: "todo.html"
    })
        .state('home',{
        url:"/home"
    })
        .state('completed',{
            url:"/completed",
            templateUrl:"completed.html"
        })
        .state('stateChange',{
            url:"/stateChange/:id",
            controller:"changeStateCtrl"
        })
})
app.controller('test',function($scope,$http){
        var responsePromise = $http.get("/test")

        responsePromise.success(function (data, status, headers, config) {
            $scope.lists = data;
        });
        responsePromise.error(function (data, status, headers, config) {
            alert("AJAX failed!");
        });

    $scope.$on('complete change',function(event,data) {
        var responsePromise = $http.get("/test")

        responsePromise.success(function (data, status, headers, config) {
            $scope.lists = data;
        });
        responsePromise.error(function (data, status, headers, config) {
            alert("AJAX failed!");
        });
    });
     $scope.test1=function(data){
        console.log("/test/"+data)
         var response=$http.get('/test/'+data);
         response.success(function(data, status, headers, config) {
             $scope.$emit("complete change",{})
    });
   response.error(function(data, status, headers, config) {
        alert("AJAX2 failed!")
    })}


})
app.controller('changeStateCtrl',function($scope,$http,$routeParams){

   // var response=$http.put('/test'+ $routeParams.id);
//    response.error(function(data, status, headers, config) {
//        alert("AJAX failed!");
//    });


})