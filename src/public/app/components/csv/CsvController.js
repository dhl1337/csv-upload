(() => {
    'use strict';
    angular
        .module('csvUpload')
        .controller('CsvController', ['csvService', CsvController]);

    function CsvController(csvService) {

        const VM = this;

        let getUsers = () => {
            csvService.getUsers.then(users => {
                VM.users = users;
            })
        };

        getUsers();

        let handleFileSelect = (evt) => {
            let file = evt.target.files[0];
            Papa.parse(file, {
                header: false,
                dynamicTyping: false,
                complete(results) {
                    let result = results;
                    let users = result.data;
                    users.forEach(user => {
                        var obj = {
                            'firstName': user[0],
                            'lastName': user[1],
                            'email': user[2],
                            'phoneNumber': user[3]
                        };
                        csvService.addUser(obj).then(data => {
                            console.log(data);
                        })
                    });
                }
            });
        };

        $(document).ready(function () {
            $("#csv-file").change(handleFileSelect);
        });

    }
})();
