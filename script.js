var app = angular.module('myApp', []);

// 1st controller
app.controller('myCtrl', function($scope, $http, $interval) {

    $scope.search = function(username) {
        $http.get("https://api.github.com/users/" + username)
            .then(onUserComplete, onError); //if onUserComplete doesnt get called the onerror will be called
    };

    var onUserComplete = function(obj) { //you can give any name to this 1st parameter of function, as it recieve a JS object from JSON file so we are just using this with any name and then coppying the same object into another object named user.
        $scope.user = obj.data;
        $http.get($scope.user.repos_url)
            .then(onRepos, onError);
    };

    var onRepos = function(response) { // response : the JS object you get from user.repos_url
        $scope.repos = response.data; //this will send the 'complete array of repositories' under the name repos
    };

    var onError = function() {
        $scope.errorMessage = "Not able to find this"; //only displayed if function is called
    };

    var decrementCountdown = function() {
        $scope.countdown -= 1;
        if ($scope.countdown < 1) {
            $scope.search($scope.username);
        }
    };
    var startCountdown = function() {
        $interval(decrementCountdown, 1000, $scope.countdown);
    };


    $scope.heading = "GitHub Viewer";
    $scope.username = "angular"; //default username ->nothing
    $scope.repoSortOrder = "";
    $scope.countdown = 5;
    startCountdown();
});