Events = new Mongo.Collection("events");

if (Meteor.isClient) {
	angular
	  .module('netsocially', ['angular-meteor', 'ui.router']);

	angular
	  .module('netsocially').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
	  	function($urlRouterProvider, $stateProvider, $locationProvider) {
	  		
	  		$locationProvider.html5Mode(true);

	  		$stateProvider
	  		  .state('events', {
	  		  	url: '/events',
	  		  	templateUrl: 'events-list.ng.html',
	  		  	controller: 'EventsListCtrl'
	  		  })
	  		  .state('eventDetails', {
	  		  	url: '/events/:eventId',
	  		  	templateUrl: 'event-details.ng.html',
	  		  	controller: 'EventDetailsCtrl'
	  		  });

	  		  $urlRouterProvider.otherwise('/events');
	  	}]);

	angular
	  .module('netsocially').controller('EventsListCtrl', ['$scope', '$meteor',
	  	  function ($scope, $meteor) {
	  	  	
	  	  	$scope.events = $meteor.collection(Events);

	  	  	$scope.remove = function(event) {
	  	  		$scope.events.remove(event);
	  	  	};

	  	  	$scope.removeAll = function() {
	  	  		$scope.events.remove();
	  	  	};

	  	  }]);

	angular
	  .module('netsocially').controller('EventDetailsCtrl', ['$scope', '$stateParams', 
	  	function($scope, $stateParams) {
	  		$scope.eventId = $stateParams.eventId;
	  	}]);
};

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Events.find().count() === 0) {

      var events = [
        {'title': 'Dubstep-Free Zone',
          'description': 'Can we please just for an evening not listen to dubstep.'},
        {'title': 'All dubstep all the time',
          'description': 'Get it on!'},
        {'title': 'Savage lounging',
          'description': 'Leisure suit required. And only fiercest manners.'}
      ];

      for (var i = 0; i < events.length; i++)
        Events.insert(events[i]);

    }
   });
}