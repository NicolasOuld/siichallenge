'use strict';

angular.module('challengeApp').factory('twitterApiSrv', [
    '$http', '$log', 'urlApiTwitter',
    function($http, $log, urlApiTwitter) {

        return {

            /**
             * Récupération d'un point de controle
             * @param id l'id du point de controle
             * @returns Object Json du point de controle
             */
            getTokenBeare: function(apiKey) {

                return $http({
                    method: 'POST',
                    url: urlApiTwitter + 'oauth2/token',
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                      'Authorization': 'Basic ' + apiKey,
                      'Access-Control-Allow-Origin': '*',
                      'dataType': 'json'
                    },
                    data: { grant_type: 'client_credentials' }
                });
            },
        };
    }
]);
