angular.module('DnDApp').filter('propertyName', function() {
	return function(name) {
		switch(name){
			case 'player':
				return "Player:";
			case 'name':
				return "Character Name:";
			case 'class':
				return "Character Class:";
			case 'race':
				return "Character Race:";
			default:
				return name;
		};
	}
});