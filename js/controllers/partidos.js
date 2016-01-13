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
.controller('GetPartidosCtrl', function($scope,$sce,PartidosResource) {
   $scope.partidos= PartidosResource.query();
   
   $scope.formVisibility = false;
   $scope.show_timeline = function(comentarios){
       if($scope.formVisibility == true){
           $scope.formVisibility = false
       }else{
           $scope.formVisibility = true 
       }
           $scope.comentarios = comentarios;
             console.log(comentarios);  
         $scope.trustAsHtml = function(value) {
            return $sce.trustAsHtml(value);
        };
       
       
   }
  
       
    

})
;