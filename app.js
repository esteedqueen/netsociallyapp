Parties = new Mongo.Collection("parties");

if (Meteor.isClient) {
	angular
	  .module('netsocially', ['angular-meteor', 'ui-router']);

	angular
	  .module('netsocially').controller('PartiesListCtrl', ['$scope', '$meteor',
	  	  function ($scope, $meteor) {
	  	  	
	  	  	$scope.parties = $meteor.collection(Parties);

	  	  	$scope.remove = function(party) {
	  	  		$scope.parties.remove(party);
	  	  	};

	  	  	$scope.removeAll = function() {
	  	  		$scope.parties.remove();
	  	  	};

	  	  }]);
};

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Parties.find().count() === 0) {

      var parties = [
        {'name': 'Dubstep-Free Zone',
          'description': 'Can we please just for an evening not listen to dubstep.'},
        {'name': 'All dubstep all the time',
          'description': 'Get it on!'},
        {'name': 'Savage lounging',
          'description': 'Leisure suit required. And only fiercest manners.'}
      ];

      for (var i = 0; i < parties.length; i++)
        Parties.insert(parties[i]);

    }
   });
}