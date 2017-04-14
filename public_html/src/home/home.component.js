(function() {
    'use strict';
    
    angular.module('ProConsulting').component('homePageComponent', {
        transclude: true,
        templateUrl: 'src/home/home.component.html',
        controller: controller 
    });
           
    controller.$inject = ['$log', '$scope', '$rootScope'];
    
    function controller($log, $scope, $rootScope) {
        var $ctrl = this;
        
        
        $ctrl.$onInit = function() {
            
            
        };
        
        
    };
})();