
angular.module('app').controller('MainController', MainController);

function MainController($mdDialog) 
{
  this.$mdDialog = $mdDialog;
};

MainController.prototype.openDialog = function()
{
  console.log("Properly Working COntroller");
  
  this.$mdDialog.show(
  {
    controller: PokedexController,
    templateUrl: "/views/dialogs/pokedex_dialog.html"
  } );
};