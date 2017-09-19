'use strict';

angular.module('challengeApp', [
  'ui.router'
]).value('localStorage', window.localStorage)
  .value('apiKey', 'ZURaS2xEQ1BkVWgzUXVFdEl4eXB2ZnluRDpIZWpzUVpLdW1FeEFOcVZTVWtObGRLMlJOU3NjQkRXZmxxOTRiUFN2YVVCS1RJcFZtMw==')
  .value('urlApiTwitter', 'https://api.twitter.com/')
  .value('corsProxy', 'https://cors-anywhere.herokuapp.com/')

  .run(['twitterApiSrv', '$log', 'apiKey', 'localStorage',

        function (twitterApiSrv, $log, apiKey, localStorage) {
          $log.debug("getTokenBeare");
          twitterApiSrv.getTokenBeare(apiKey).then(
              function (response) {
                $log.info("Récupération de acces_token réussie");

                var token_type = response.data.token_type;
                var access_token = response.data.access_token;
                localStorage.setItem('token_type', token_type);
                localStorage.setItem('access_token', access_token);
              }, function (error) {
                $log.error("Erreur lors de la récupération de acces_token");
                $log.error(error);
              }
          );
        }])
;
