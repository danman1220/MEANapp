//charactersController.js

/**
 * Controls the "All Characters" view which generates a table of all characters in the database
 * 
 * @Dependencies: CharacterService.js 
 */

angular.module('DnDApp').controller('CharactersController', ['$scope', '$route', 'CharacterService', function($scope, $route, CharacterService) {
	'use strict';

	$scope.players = [];

	$scope.getCharacters = function() {
		CharacterService.query(function(res) {
			console.log(res);
			$scope.characters = res;
			
			//get list of unique players from our query
			$scope.characters.forEach(function(character){
				if (character.hasOwnProperty('player')) {
					if ($scope.players.indexOf(character.player) === -1) {
						$scope.players.push(character.player);
					}
				}
			});
		});
	};

	$scope.deleteCharacter = function (character) {
		console.log(character);
		CharacterService.delete(
			{
				name:     character.player,
				charName: character.name
			}, 
			function(res) {
				//Success
				console.log(res);
			},
			function(err) {
				//Fail
				console.log(err);
			});
		$route.reload();
	};
}]);