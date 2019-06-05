var app = angular.module("app", ["ngRoute", 'ngMaterial', 'ngMessages']);






app.controller("schoolHistoryController", function ($scope) {
    $scope.msg = "I love Paris";
});


app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl : "/views/home.html"
    });
    $routeProvider.when("/workHistory", {
        templateUrl : "/views/work_history.html",
        controller : "workHistoryController"
    });
    $routeProvider
    .when("/schoolHistory", {
        templateUrl : "/views/school_history.html",
        controller : "schoolHistoryController"
    });
});











