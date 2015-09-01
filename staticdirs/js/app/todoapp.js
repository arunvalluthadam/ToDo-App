var app = angular.module("ToDoApp", ['ngResource']);

// -------------------------------- config section ----------------------------------

app.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
});

app.config(function($httpProvider) {
	$httpProvider.defaults.xsrfCookieName = 'csrftoken';
	$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
});

// ----------------------------- End config section ----------------------------------

app.factory("Post", function($resource) {
	return $resource("/api/:id/", {id: '@id'});
});


app.controller("ToDoCtrl", function($scope, $http, Post) {

	Post.query(function(data) {
		$scope.todos = data;
	})

// -----------------------------------------------------------------------
	$scope.addToDo = function() {
		var data = {title: $scope.entryTodo};
		$http.post('/api/', data).then(function(response) {
			$http.get('/api/').success(function(data) {
				$scope.todos = data;
			});
		});
		$scope.entryTodo = "";
	}
// ------------------------------------------------------------------------

	// $scope.addToDo = function() {
	// 	Post.save({title: $scope.entryTodo, content: "sdfshdkfhsdkfhfkhfsk"});
	// }

	$scope.clearCompleted = function() {
		$scope.todos = $scope.todos.filter(function(item) {
			if (item.done) {
				$http.delete('/api/'+item.id).then(function(response) {
					$http.get('/api/').success(function(data) {
						$scope.todos = data;
					});
				});
			};
		});
	};
});