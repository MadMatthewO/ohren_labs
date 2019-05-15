var app = angular.module("myApp", ["ngRoute", 'ngMaterial', 'ngMessages']);

app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl : "/views/home.html",
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

app.controller('AppCtrl', function($scope) {
    $scope.title1 = 'Button';
    $scope.title4 = 'Warn';
    $scope.isDisabled = true;
    $scope.googleUrl = 'http://google.com';
  });

app.controller("workHistoryController", function ($scope) {
    $scope.msg = "I love London";
});
app.controller("schoolHistoryController", function ($scope) {
    $scope.msg = "I love Paris";
});
