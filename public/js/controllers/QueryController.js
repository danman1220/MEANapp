//QueryController.js

/**
 * Controls the "Find Character" view which queries the database for characters
 * 
 * @Dependencies: CharacterService
 */
angular.module('DnDApp').controller('QueryController', ['$scope', 'CharacterService', function($scope, CharacterService) {

	//TODO - make sure all of $scope.query is defined before we GET
	//makes a GET request to /api/:name/character/:charName
	$scope.getCharacter = function(name) {
		//GET
		CharacterService.get({name: $scope.query.player, charName: $scope.query.character}, 
			function(character) {
				$scope.character = character;
			}, 
			function(err) {
				if (err.status === 404) {
					$scope.field = err.data;
				}
			});	
	};

}]);