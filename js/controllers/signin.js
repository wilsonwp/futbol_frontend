'use strict';

/* Controllers */
  // signin controller
app.controller('SigninFormController', ['$scope', '$http', '$state','$auth', function($scope, $http, $state, $auth) {
    var credentials = {};
    $scope.authError = null;
    $scope.login = function() {
    var credentials= {email:$scope.user.email,password:$scope.user.password};
    $scope.authError = null;
    try{
       $auth.login(credentials).then(function(data) {
                $state.go('app.partidos', {});
              
            });  
    }catch(error){
         $scope.authError = error;
    }
    
    
    };
  }])
;