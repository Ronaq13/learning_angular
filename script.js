var app = angular.module('myApp', []);

// 1st controller
app.controller('myCtrl', function($scope, $http) {
    $scope.message = "I got it";
    var onUserComplete = function(obj) {
        $scope.user = obj.data;
    };
    var onerror = function() {
        $scope.message = "Could not connect with the server";
    };

    $http.get("https://api.github.com/users/Ronaq13")
        .then(onUserComplete, onerror); //if onUserComplete doesnt get called the onerror will be called
});