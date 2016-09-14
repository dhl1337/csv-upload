(() => {
    'use strict';
    angular
        .module('csvUpload')
        .service('csvService', ['$http', csvService]);

    function csvService ($http) {

        this.addUser = (user) => {
          return $http.post('/api/v1/users', user).then(response => response.data);
        };

        this.getUsers = () => {
            return $http.get('/api/v1/users').then(response => response.data);
        };

    }
})();