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

app.controller("pokedexController", function ($scope, $http, $mdDialog) {
    $scope.msg = "I love Paris";
    $scope.testVariable = "";
    $scope.shinyPath = "";







    $scope.openDialog = function(){
        $mdDialog.show({
          controller: function($scope, $mdDialog)
          {
            $scope.pokeName = "";
            $scope.pokemonList = [];
            $scope.mainSpriteUrl = "";
            $scope.selectedPokemom = null;

            $scope.close = function()
            {
                $mdDialog.hide();
            };



            $scope.getRequest = function() 
            {
                let pokemon = null;
                $http.get("https://pokeapi.co/api/v2/pokemon/"+ $scope.pokeName +"/").then(
                  function successCallback(response) 
                  {
                    console.log(response);
                    pokemon = response.data;
                    $scope.selectedPokemom = response.data;
                    $scope.mainSpriteUrl = response.data.sprites.front_default;
                  }, 
                  function errorCallback(response) 
                  {
                    console.log(response);
                  }
                ).then(function()
                {
                    $http.get("https://pokeapi.co/api/v2/pokemon-species/"+ pokemon.id +"/").then(
                        function successCallback(response) 
                        {
                            let flavorTexts = response.data.flavor_text_entries;
                            let currentFlavorText = "";
                            flavorTexts.forEach(function(flavorText){
                                if(flavorText.language.name === "en") currentFlavorText = flavorText.flavor_text;
                            });
                            console.log(currentFlavorText);
                            $scope.selectedPokemom.pokemonDesc = currentFlavorText;
                        }, 
                        function errorCallback(response) 
                        {
                          console.log(response);
                        }
                      );
                });


            };



            $scope.getAllPokemon = function() 
            {
                
                $http.get("https://api.github.com/repos/sindresorhus/pokemon/contents/data/en.json").then(
                  function successCallback(response) 
                  {
                    //console.log(atob(response.data.content));
                    $scope.pokemonList = JSON.parse(atob(response.data.content));
                    console.log($scope.pokemonList[2]);
                  }, 
                  function errorCallback(response) 
                  {
                    console.log(response);
                  }
                );
            };

            $scope.getAllPokemon();
          },
          templateUrl: "/views/dialogs/pokedex_dialog.html"
        });
      };

    

});
