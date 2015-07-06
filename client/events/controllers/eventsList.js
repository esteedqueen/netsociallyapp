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