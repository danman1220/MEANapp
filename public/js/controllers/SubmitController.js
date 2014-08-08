//SubmitController.js

/**
 * Controls the "Submit Character" view which adds a new character to the database
 *
 * @Dependencies: CharacterService
 */
angular.module('DnDApp').controller('SubmitController', ['$scope', 'CharacterService', function($scope, CharacterService) {

	//submitSuccess used to toggle state of submission
	$scope.submitSuccess = false;

	//information objects to store field data
	$scope.player    = {};
	$scope.character = {};

	//used for generating tables
	$scope.playerAttributes = [{name: "name",  alias: "Name"}];
	$scope.attributes       = [{name: "name",  alias: "Character Name"}, 
							   {name: "class", alias: "Character Class"}, 
							   {name: "race",  alias: "Character Race"}, 
							   {name: "level", alias: "Character Level"}];

	//generates a POST request to /api/:name/character/:charname with the data from $scope.character 
	$scope.addData = function() {
		//@TODO - sanitize $scope.character
		//POST
		CharacterService.save(
			{
				name:     $scope.player.name, 
				charName: $scope.character.name
			}, 
			$scope.character, 
			function(res) {
				//SUCCESS - toggle state to success, display success confirm, and clear fields
				$scope.submitSuccess = true;
				$scope.success       = "Submitted " + $scope.player.name + "'s Character " + $scope.character.name;
				$scope.character     = {};
				$scope.player        = {};
			}, 
			function(err) {
				$scope.submitSuccess = false;
				console.log("ERROR: " + err.data);
				$scope.error         = err.data;
			});
	};
}]);