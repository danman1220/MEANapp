//CharacterService.js

/**
 * Creates a $resource that is used to communicate with the server.
 * 
 * @Dependencies: ngResource
 */
angular.module('DnDApp').factory('CharacterService', ['$resource', function($resource) {
    'use strict';

	//Gives us a $resource which can be used to communicate RESTfully, 
	//update isn't included by default, so we write it here
	return $resource('/api/:name/character/:charName', {name: '@player', charName: '@name'}, 
        {
    		'update': {method: 'PUT'}
    	});
}]);