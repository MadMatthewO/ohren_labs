var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/views/home.html",
    })
    .when("/workHistory", {
        templateUrl : "/views/work_history.html",
        controller : "workHistoryController"
    });
    $routeProvider
    .when("/schoolHistory", {
        templateUrl : "/views/school_history.html",
        controller : "schoolHistoryController"
    });
});
app.controller("workHistoryController", function ($scope) {
    $scope.msg = "I love London";
});
app.controller("schoolHistoryController", function ($scope) {
    $scope.msg = "I love Paris";
});
