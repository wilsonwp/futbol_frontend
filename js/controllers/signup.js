'use strict';

// signup controller
app.controller('SignupFormController', ['$scope', '$http', '$state','SignResource', function($scope, $http, $state,SignResource) {
    $scope.user = {};
    $scope.authError = null;
    $scope.signup = function($response) {
            try {
                SignResource.save($scope.user);
               $scope.authError = "Debe Iniciar Sesión";
                $state.go('access.signin', {});
            }catch(err){
                $scope.authError = "Ha ocurrido un Error";
            }
            
        
    }

  }])
 ;