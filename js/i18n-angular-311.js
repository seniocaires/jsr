var app = angular.module('jsrApp', []);

app.controller('jsrController', function($scope, $http) {

	var lang = window.navigator.language;
	$scope.getMessages = function() {
		$http.get("/jsr/js/msg/msg_311_" + lang + ".json")
		.success(function (response) {
			$scope.msg = response;
		});
	};

	$scope.getMessages();

});
