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
app.controller('test',function($scope,$http) {
    getFunction($scope, $http);

    $scope.test1 = function (data) {
        console.log("/test/" + data)

        var response = $http.get('/test/' + data);
        response.success(function (data, status, headers, config) {
            getFunction($scope, $http);
        });
        response.error(function (data, status, headers, config) {
            alert("AJAX2 failed!")
        })
    }


    $scope.addTask = function() {
        console.log($scope.form.task)
        var response = $http.post('/test/post',$scope.form);
        response.success(function (data, status, headers, config) {
            getFunction($scope, $http);
            $scope.form.task="";
        });
        response.error(function (data, status, headers, config) {
            alert("post failed!")
        })
    }

    $scope.delete = function(data) {
        console.log(data)
        var response = $http.put('/test/delete',{post:2});
        response.success(function (data, status, headers, config) {
            getFunction($scope, $http);
        });
        response.error(function (data, status, headers, config) {
            alert("post failed!")
        })
    }

})

var getFunction=function($scope,$http,event,data){
    var responsePromise = $http.get("/test")

    responsePromise.success(function (data, status, headers, config) {
        $scope.lists = data;
    });
    responsePromise.error(function (data, status, headers, config) {
        alert("AJAX failed!");
    });
}