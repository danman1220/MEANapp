//QueryController
angular.module('DnDApp').controller('QueryController', ['$scope', 'CharacterService', function($scope, CharacterService) {

	

	$scope.serverTest = function(name) {
		//GET
		CharacterService.get({name: $scope.query.player, charName: $scope.query.character}, function(character) {
			$scope.field = character;
		});	
	};

}]);

//Code goes here