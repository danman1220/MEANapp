angular.module('DnDApp').factory('CharacterService', ['$resource', function($resource) {

	//Gives us a $resource which can be used to communicate RESTfully, 
	//query wants an object, not an array,
	//update isn't included by default, so we write it here
	return $resource('/api/:name/character/:charName', null, {
		'query': {method: 'GET', isArray: false},
		'update': {method: 'PUT'}
	});
}]);