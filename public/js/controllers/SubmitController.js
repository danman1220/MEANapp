//SubmitController: controls the submission of new characters to the server
angular.module('DnDApp').controller('SubmitController', ['$scope', 'CharacterService', function($scope, CharacterService) {

	//information objects to store field data
	$scope.player = {};
	$scope.character = {};

	//submitSuccess used to toggle state of submission
	$scope.submitSuccess= false;

	//used for generating tables
	$scope.playerAttributes = [{name: "name", alias: "Name"}];
	$scope.attributes = [{name: "name", alias: "Character Name"}, {name:"class", alias: "Character Class"}, {name:"race", alias: "Character Race"}];

	//generates a POST request to /api/:name/character/:charname with the data from $scope.character 
	$scope.addData = function() {
		//TODO - sanitize $scope.character
		//POST
		CharacterService.save({name: $scope.player.name, charName: $scope.character.name}, $scope.character, function(res) {
			//SUCCESS - toggle state to success, display success confirm, and clear fields
			$scope.submitSuccess = true;
			$scope.success = "Submitted " + $scope.player.name + "'s Character " + $scope.character.name;
			$scope.character = {};
			$scope.player = {};
		}, 
		function(res) {
			//ERROR - log the error and go on our merry way
			console.log(res.data.error);
		});
	};

}]);