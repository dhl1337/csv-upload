(() => {
    angular
        .module('csvUpload')
        .config(['$stateProvider','$urlRouterProvider', config]);

    function config ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('csv', {
                url: '/csv',
                templateUrl: '../app/components/csv/csv.html',
                controller: 'CsvController',
                controllerAs: 'csvCtrl'
            });
        $urlRouterProvider.otherwise('/csv');
    }

})();