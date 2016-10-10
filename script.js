var app = angular.module('myApp', []);

// 1st controller
app.controller('myCtrl', function($scope, $http) {
    // $scope.message = "I got it"; //always displayed if in view you called 'message'
    $scope.heading = "GitHub Viewer";
    $scope.username = ""; //default username
    var onUserComplete = function(obj) { //you can give any name to this 1st parameter of function, as it recieve a JS object from JSON file so we are just using this with any name and then coppying the same object into another object named user.
        $scope.user = obj.data;
    };
    var onerror = function() {
        $scope.errorMessage = "Not able to find this"; //only displayed if function is called
    };

    //  $http.get("https://api.github.com/users/Ronaq13")
    //    .then(onUserComplete, onerror); //if onUserComplete doesnt get called the onerror will be called


    $scope.search = function(username) {
        $http.get("https://api.github.com/users/" + username)
            .then(onUserComplete, onerror); //if onUserComplete doesnt get called the onerror will be called
    };

});