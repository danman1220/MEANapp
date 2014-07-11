//characters controller
angular.module('DnDApp').controller('CharactersController', ['$scope', 'CharacterService', function($scope, CharacterService) {
	CharacterService.query(function(res) {
		console.log(res);
		$scope.characters = res;
	});
}]);