//DBManagerController

angular.module('DnDApp').controller('DBManagerController', ['$scope', 'CharacterService', function($scope, CharacterService) {
    $scope.deleteCharacters = function(player) {
        console.log("DELETING");
        if(player){
            CharacterService.delete({name: player}, function(res) {
                //Success
                console.log(res);
            },
            function(err) {
                //Failure
                console.log(err);
            });
        } else {
            CharacterService.delete(function(res) {
                //Success
                console.log(res);
            },
            function(err) {
                //Failure
                console.log(err);
            });
        }
    };
}]);