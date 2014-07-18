//app.js

/**
 * Provides initial configuration for the frontend app as a whole
 */
angular.module('DnDApp', ['ngRoute', 'ngResource'])
	.config(['$routeProvider', function($routeProvider) {

		//provides different views in the page for different actions
		$routeProvider
			.when('/start', {
				templateUrl: '../../views/start.html',
				controller: 'MainController'
			})
			.when('/submit', {
				templateUrl: '../../views/submit.html',
				controller: 'SubmitController'
			})
			.when('/query', {
				templateUrl: '../../views/query.html',
				controller: 'QueryController'
			})
			.when('/characters', {
				templateUrl: '../../views/characters.html',
				controller: 'CharactersController'
			})
			.otherwise({
				redirectTo: '/start'
			});
	}]);
