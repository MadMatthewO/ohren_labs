var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm",
    })
    .when("/workHistory", {
        templateUrl : "../work_history.html",
        controller : "workHistoryController"
    })
    .when("/schoolHistory", {
        templateUrl : "../school_history.html",
        controller : "schoolHistoryController"
    });
});
app.controller("workHistoryController", function ($scope) {
    $scope.msg = "I love London";
});
app.controller("schoolHistoryController", function ($scope) {
    $scope.msg = "I love Paris";
});
