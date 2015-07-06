angular
  .module('netsocially').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  	function($urlRouterProvider, $stateProvider, $locationProvider) {
  		
  		$locationProvider.html5Mode(true);

  		$stateProvider
  		  .state('events', {
  		  	url: '/events',
  		  	templateUrl: 'client/events/views/events-list.ng.html',
  		  	controller: 'EventsListCtrl'
  		  })
  		  .state('eventDetails', {
  		  	url: '/events/:eventId',
  		  	templateUrl: 'client/events/views/event-details.ng.html',
  		  	controller: 'EventDetailsCtrl'
  		  });

  		  $urlRouterProvider.otherwise('/events');
  	}]);