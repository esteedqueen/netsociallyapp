angular
  .module('netsocially', ['angular-meteor', 'ui.router']);

angular
  .module('netsocially').controller('EventDetailsCtrl', ['$scope', '$stateParams', '$meteor', 
  	function($scope, $stateParams, $meteor) {
  		$scope.event = $meteor.object(Events, $stateParams.eventId, false);
  		$scope.eventId = $stateParams.eventId;

  		$scope.save = function() {
  			$scope.event.save().then(function(numberofDocs) {
  				console.log('save success doc affected', numberofDocs);
  			}, function(error) {
  				console.log('save error', error);
  			});
  		};

  		$scope.reset = function() {
  			$scope.event.reset();
  		};

  	}]);
