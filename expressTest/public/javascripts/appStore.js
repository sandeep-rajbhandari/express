/**
 * Created by sandeep on 11/29/2014.
 */
var app=angular.module('appStore',['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("index.html");
    $stateProvider
        .state('todo', {
        url: "/todo",
        templateUrl:'views/todo.html'
    })
        .state('home',{
        url:"/index"
    })
})