//DBManagerController

angular.module('DnDApp').controller('DBManagerController', ['$scope', 'CharacterService', function($scope, CharacterService) {
    'use strict';

    $scope.deleteCharacters = function(player) {
        console.log('DELETING');
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

    //Creates a list of all players currently in the database
    $scope.players = [];
    $scope.populatePlayers = function() {
        CharacterService.query(function(res) {
            var charList = res;
            charList.forEach(function(character) {
                if (character.hasOwnProperty('player')) {
                    if ($scope.players.indexOf(character.player) === -1) {
                        $scope.players.push(character.player);
                    }
                }
            });
        },
        function(err) {
            //error
            console.log(err);
        });
    };
}]);