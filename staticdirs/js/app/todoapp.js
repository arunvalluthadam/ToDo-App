var app = angular.module("ToDoApp", ['ngResource']);

app.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
});

app.factory("Post", function($resource) {
	return $resource("/api/");
});

app.constant('BASE_URL', 'http://localhost:8000/api');

app.service('Todos', function($http, BASE_URL) {
	var Todos = {};

	Todos.clearCompleted = function(id) {
		return $http.delete(BASE_URL + id + '/');
	}

	Todos.addOne = function(newTodo) {
		return $http.post(BASE_URL, newTodo)
	};

	return Todos
})

app.controller("ToDoCtrl", function($scope, $http, Post, Todos) {

	Post.query(function(data) {
		$scope.todos = data;
	})


	$scope.addToDo = function() {
		Todos.addOne({title: $scope.entryTodo});
	}

	// $scope.addToDo = function() {
	// 	var data = {title: $scope.entryTodo} //, done: false
	// 	$http.post("/api", data).success(function(data, status, headers) {
	// 		alert("Task Added.");
	// 	})

	// 	// $scope.todos.push({title: $scope.entryTodo, done: false})
	// 	// $scope.newTodo = ""

	// 	// var content = new Post;
	// 	// content.title = $scope.entryTodo;
	// 	// // content.done = false;
	// 	// content.$save();


	// 	// $scope.todos.push({title: $scope.entryTodo});
	// 	// var entry = $resource('/api/');

	// 	// Post.save({title: $scope.entryTodo}, function(response) {
	// 	// 	console.log("data is saved")
	// 	// })

	// 	// Post.save({title: $scope.entryTodo});
	// }
	$scope.clearCompleted = function() {
		$scope.todos = $scope.todos.filter(function(item) {
			return !item.done
		})
	}
})