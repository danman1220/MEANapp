//characters controller
angular.module('DnDApp').controller('CharactersController', ['$scope', 'CharacterService', function($scope, CharacterService) {
	
	$scope.players = [];

	CharacterService.query(function(res) {
		console.log(res);
		$scope.characters = res;
		
		$scope.players.push('ALL');
		$scope.characters.forEach(function(character){
			console.log(character.name);
			if (character.hasOwnProperty('name')) {
				console.log(character.name);
				if ($scope.players.indexOf(character.name) === -1) {
					$scope.players.push(character.name);
				}
			}
		});
	});
}]);