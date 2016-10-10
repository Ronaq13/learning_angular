var app = angular.module('myApp', []);

// 1st controller
app.controller('myCtrl', function($scope, $http) {

    var onUserComplete = function(response) {
        $scope.user = response.data;
    };

    $http.get("https://api.github.com/users/Ronaq13")
        .then(onUserComplete);
});