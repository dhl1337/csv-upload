(() => {
    'use strict';
    angular
        .module('csvUpload')
        .controller('CsvController', ['csvService', CsvController]);

    function CsvController (csvService) {

        let handleFileSelect = (evt) => {
            let file = evt.target.files[0];
            Papa.parse(file, {
                header: false,
                dynamicTyping: false,
                complete(results) {
                    let result = results;
                    let users = result.data;
                    users.forEach((user) => {
                        var obj = {
                            'lastName': user[0],
                            'firstName': user[1],
                            'email': user[2],
                            'speciality': user[3],
                            'site': user[4],
                            'phoneNumber': user[5]
                        };
                        csvService.addUser(obj).then((data) => {
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
