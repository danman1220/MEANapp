angular.module('DnDApp').factory('CharacterService', ['$resource', function($resource) {
	return $resource('/api/:name/character/:charName', null, {
		'query': {method: 'GET', isArray: false},
		'update': {method: 'PUT'}
	});
}]);