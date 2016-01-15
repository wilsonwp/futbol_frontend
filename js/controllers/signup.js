'use strict';

// signup controller
app.controller('SignupFormController', ['$scope', '$http', '$state','SignResource', function($scope, $http, $state,SignResource) {
    $scope.user = {};
    $scope.authError = null;
    $scope.signup = function($response) {

        SignResource.save($scope.user);
        console.log($response) ;
    }

  }])
 ;