var app = angular.module('jsrApp', []);

app.controller('jsrController', function($scope, $http) {

	var lang = window.navigator.language;
	alert(lang);
	$scope.getMessages = function() {
		$http.get("msg/msg_" + lang + ".json")
		.success(function (response) {
			alert(response);
			$scope.msg = response;
		});
	};

	$scope.getMessages();

});