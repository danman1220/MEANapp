//app.js
angular.module('DnDApp', ['ngRoute', 'ngResource'])
	.config(['$routeProvider', function($routeProvider) {
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
			.otherwise({
				redirectTo: '/start'
			});
	}]);
