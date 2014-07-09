angular.module('DnDApp').controller('MainController', ['$scope', 'CharacterService', function($scope, CharacterService) {
	$scope.information = 'Something';

	$scope.attributes = ["player", "name", "class", "race"];

	$scope.addData = function() {
		//POST
		CharacterService.save({name: $scope.name, charName: $scope.character.name}, $scope.character, null, function(res) {
			console.log(res.data.error);
		});
	};
	$scope.serverTest = function(name) {
		//GET
		CharacterService.get({name: $scope.name, charName: $scope.character.name}, function(character) {
			$scope.field = character;
		});	
	};
}]);