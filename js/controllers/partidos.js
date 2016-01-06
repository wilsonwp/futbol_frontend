app
   .controller('PartidosCtrl', function($scope,PartidosResource) {
    $scope.title = "Crear Comentario";
    $scope.button = "Guardar";
    $scope.Comentario = {};
    $scope.saveComentario = function(){
       // console.log($scope.Comentario);
        PartidosResource.save($scope.Comentario);
    }
})
.controller('GetPartidosCtrl', function($scope,PartidosResource) {
   $scope.partidos= PartidosResource.query();
   console.log($scope.partidos);
   
   $scope.formVisibility = false;
   $scope.show_timeline = function(id){
       if($scope.formVisibility == true){
           $scope.formVisibility = false
       }else{
           $scope.formVisibility = true 
       }
       
       
   }
})
;