app
   .controller('PartidosCtrl', function($scope,ComentarioResource) {
    $scope.title = "Crear Comentario";
    $scope.button = "Guardar";
    $scope.Comentario = {};
    $scope.saveComentario = function(){
       // console.log($scope.Comentario);
        ComentarioResource.save($scope.Comentario);
    }
})
.controller('GetPartidosCtrl', function($scope,ComentarioResource) {
   $scope.Comentarios = ComentarioResource.query();
})
;