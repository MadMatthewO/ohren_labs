angular.module('app').controller('PokedexController', PokedexController);

function PokedexController($mdDialog, $http) 
{
    this.$mdDialog = $mdDialog;
    this.$http = $http;

    this.pokeName = "";
    this.pokemonList = [];
    this.mainSpriteUrl = "";
    this.selectedPokemon = null;

    this.getAllPokemon();
    
}

PokedexController.prototype.close = function()
{
    this.$mdDialog.hide();
};

PokedexController.prototype.shinySwitch = function()
{
    this.mainSpriteUrl = this.selectedPokemon.sprites.front_shiny;
}

PokedexController.prototype.defaultSwitch = function()
{
    this.mainSpriteUrl = this.selectedPokemon.sprites.front_default;
}

PokedexController.prototype.getAllPokemon = function() 
{
    
    this.$http.get("https://api.github.com/repos/sindresorhus/pokemon/contents/data/en.json").then(
        function successCallback(response) 
        {
        this.pokemonList = JSON.parse(atob(response.data.content));
        }.bind(this), 
        function errorCallback(response) 
        {
        console.log(response);
        }
    );
};
PokedexController.prototype.getPokemonId = function(pokemon)
{
    this.pokeName = pokemon;
    this.getRequest();
};

PokedexController.prototype.getRequest = function() 
{
    let pokemon = null;

    this.$http.get("https://pokeapi.co/api/v2/pokemon/"+ (this.pokeName).toLowerCase() +"/").then(
        function successCallback(response) 
        {
        pokemon = response.data;
        this.selectedPokemon = response.data;
        this.mainSpriteUrl = response.data.sprites.front_default;

        this.$http.get("https://pokeapi.co/api/v2/pokemon-species/"+ this.selectedPokemon.id +"/").then(
            function successCallback(response) 
            {
                let flavorTexts = response.data.flavor_text_entries;
                let currentFlavorText = "";
                flavorTexts.forEach(function(flavorText){
                    if(flavorText.language.name === "en") currentFlavorText = flavorText.flavor_text;
                });
                this.selectedPokemon.pokemonDesc = currentFlavorText;
            }.bind(this), 
            function errorCallback(response) 
            {
                this.selectedPokemon.pokemonDesc = "Error: Uh oh, looks like we couldn't find a description for your pokemon.";
            });


        }.bind(this), 
        function errorCallback(response) 
        {
        this.selectedPokemon.types[0].type.name = "No Type";
        console.log(response);
        }.bind(this)
    );

};
