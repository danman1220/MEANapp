//SubmitController
angular.module('DnDApp').controller('SubmitController', ['$scope', 'CharacterService', function($scope, CharacterService) {

	//information objects to store field data
	$scope.player = {};
	$scope.character = {};

	$scope.submitSuccess= false;

	//used for generating tables
	$scope.playerAttributes = [{name: "name", alias: "Name"}];
	$scope.attributes = [{name: "name", alias: "Character Name"}, {name:"class", alias: "Character Class"}, {name:"race", alias: "Character Race"}];

	$scope.addData = function() {
		//POST
		CharacterService.save({name: $scope.player.name, charName: $scope.character.name}, $scope.character, function(res) {
			//SUCCESS
			$scope.submitSuccess = true;
			$scope.success = "Submitted " + $scope.player.name + "'s Character " + $scope.character.name;
			$scope.character = {};
			$scope.player = {};
		}, function(res) {
			//ERROR
			console.log(res.data.error);
		});
	};

}]);