var TodoApp = angular.module("TodoApp", [
  "ngRoute"
]);

TodoApp.config(["$routeProvider", "$locationProvider",
  function ($routeProvider, $locationProvider) {
    $routeProvider.
      when("/", {
        templateUrl: "views/root.html",
        controller: "TodosCtrl"
      }).
      when("#/cool_todos", {
        templateUrl: "views/cool_todos",
        controller: "TodosCtrl"
      });
  }]);

// Adding localStorage to persist data on a front-end
// application. 

// TodoApp.factory("Todos", function () {
//   var todoString = localStorage.getItem("todos");
//   if (todoString) {
//     todos = JSON.parse(todoString);
//   } else {
//     todos = [];
//   };

//   return {
//     add: function (todo) {
//       todos.push(todo);
//       localStorage.setItem("todos", JSON.stringify(todos));
//     },
//     remove: function (todo) {
//       var index = todos.indexOf(todo);
//       todos.splice(indexOf, 1);
//       localStorage.setItem("todos", JSON.stringify(todos));
//     },
//     all: function () {
//       return todos;
//     }
//   }
// });
// Gives you the array
// Factories, Services, etc. are Singletons!!
// TodoApp.service("Todos", Array);
TodoApp.service("Todos", Array);

TodoApp.controller("TodosCtrl", ["$scope", "Todos", function ($scope, Todos) {
  $scope.todos    = Todos;
  $scope.newTodo  = {};

  $scope.addTodo  = function () {
    $scope.todos.push($scope.newTodo);
    $scope.newTodo = {};
  };

  $scope.delete   = function () {
    var index = $scope.todos.indexOf(this.todo);
    $scope.todos.splice(index, 1);
  };

  $scope.edit     = function () {
    this.editing = true;
  };

  $scope.update   = function () {
    this.editing = false;
  };
}]);