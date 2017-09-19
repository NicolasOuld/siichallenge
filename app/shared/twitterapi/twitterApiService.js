'use strict';

angular.module('challengeApp').factory('twitterApiSrv', [
    '$http', '$log', 'urlApiTwitter', 'corsProxy',
    function($http, $log, urlApiTwitter, corsProxy) {

        return {

            /**
             * Authentification au près de l'api twitter.
             * @param apiKey la clef de l'api généré sur le site de twitter
             */
            getTokenBeare: function(apiKey) {

                return $http({
                    method: 'POST',
                    url: corsProxy + urlApiTwitter + 'oauth2/token',
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                      'Authorization': 'Basic ' + apiKey,
                      'Access-Control-Allow-Origin': '*',
                      'dataType': 'json'
                    },
                    data: "grant_type=client_credentials"
                });
            },

            /**
             * Récupère les derniers tweets pour l'utilisateur passé en paramètre
             * @param access_token le token de sécurité twitter
             * @param token_type le type de token (bearer)
             * @param userName Le nom de l'utilisateur dont on veut les tweets
             */
            getLastTweets: function(access_token, token_type, userName) {
              return $http({
                  method: 'GET',
                  url: corsProxy + urlApiTwitter + '1.1/statuses/user_timeline.json?screen_name=' + userName,
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                    'Authorization': token_type + ' ' + access_token,
                    'Access-Control-Allow-Origin': '*'
                  }
              });
            },

            /**
             * Récupère les données d'un utilisateur twitter
             * @param access_token le token de sécurité twitter
             * @param token_type le type de token (bearer)
             * @param userName Le nom de l'utilisateur que l'on veut récupérer
             */
            getUserByName: function(access_token, token_type, userName) {
              return $http({
                  method: 'GET',
                  url: corsProxy + urlApiTwitter + '1.1/users/lookup.json?screen_name=' + userName,
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                    'Authorization': token_type + ' ' + access_token,
                    'Access-Control-Allow-Origin': '*'
                  }
              });
            }
        };
    }
]);
