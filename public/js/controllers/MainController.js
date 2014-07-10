angular.module('DnDApp').controller('MainController', ['$scope', 'CharacterService', function($scope, CharacterService) {
	$scope.information = 'Something';

	//information objects to store field data
	$scope.player = {};
	$scope.character = {};

	//used for generating tables
	$scope.playerAttributes = [{name: "name", alias: "Name"}];
	$scope.attributes = [{name: "name", alias: "Character Name"}, {name:"class", alias: "Character Class"}, {name:"race", alias: "Character Race"}];

	$scope.addData = function() {
		//POST
		CharacterService.save({name: $scope.player.name, charName: $scope.character.name}, $scope.character, null, function(res) {
			console.log(res.data.error);
		});
	};
	$scope.serverTest = function(name) {
		//GET
		CharacterService.get({name: $scope.query.player, charName: $scope.query.character}, function(character) {
			$scope.field = character;
		});	
	};
}]);