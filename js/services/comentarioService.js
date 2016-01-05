'use strict';
angular.module('app')
        .factory('ComentarioResource',function($resource){
           return $resource('http://localhost:8000/comentarios/:id',{id: "@id"}); 
        });

