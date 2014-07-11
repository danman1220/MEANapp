//QueryController
angular.module('DnDApp').controller('QueryController', ['$scope', 'CharacterService', function($scope, CharacterService) {

	//TODO - make sure all of $scope.query is defined before we GET
	//makes a GET request to /api/:name/character/:charName
	$scope.serverTest = function(name) {
		//GET
		CharacterService.get({name: $scope.query.player, charName: $scope.query.character}, function(character) {
			// console.log(character);
			$scope.field = character;
		}, function(res) {
			if (res.status === 404) {
				$scope.field = res.data;
			}
		});	
	};

}]);