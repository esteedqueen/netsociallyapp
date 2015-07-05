Parties = new Mongo.Collection("parties");

if (Meteor.isClient) {
	angular
	  .module('netsocially', ['angular-meteor', 'ui.router']);

	angular
	  .module('netsocially').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
	  	function($urlRouterProvider, $stateProvider, $locationProvider) {
	  		
	  		$locationProvider.html5Mode(true);

	  		$stateProvider
	  		  .state('parties', {
	  		  	url: '/parties',
	  		  	templateUrl: 'parties-list.ng.html',
	  		  	controller: 'PartiesListCtrl'
	  		  })
	  		  .state('partyDetails', {
	  		  	url: '/parties/:partyId',
	  		  	templateUrl: 'party-details.ng.html',
	  		  	controller: 'PartyDetailsCtrl'
	  		  });

	  		  $urlRouterProvider.otherwise('/parties');
	  	}]);

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

	angular
	  .module('netsocially').controller('PartyDetailsCtrl', ['$scope', '$stateParams', 
	  	function($scope, $stateParams) {
	  		$scope.partyId = $stateParams.partyId;
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