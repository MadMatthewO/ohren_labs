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
    $routeProvider
    .when("/pokedex", {
        templateUrl : "/views/pokedex.html",
        controller : "pokedexController"
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

app.controller("pokedexController", function ($scope, $http) {
    $scope.msg = "I love Paris";
    $scope.testVariable = "";
    $scope.shinyPath = "";
    $scope.pokeName = "";

    $scope.getRequest = function() 
    {
        
        $http.get("https://pokeapi.co/api/v2/pokemon/"+ $scope.pokeName +"/").then(
          function successCallback(response) 
          {
            console.log(response);
            $scope.testVariable = response.data.sprites.front_default;
            $scope.shinyPath = response.data.sprites.front_shiny;
          }, 
          function errorCallback(response) 
          {
            console.log(response);
          }
        );
    };
});
