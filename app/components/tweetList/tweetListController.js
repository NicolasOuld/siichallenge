'use strict';
angular.module('challengeApp')
    .controller('tweetsListCtrl',
    [
        '$scope',
        '$log',
        '$http',
        'twitterApiSrv',
        function ($scope, $log, $http, twitterApiSrv) {
          
          var vm = this;
          
          vm.currentPage = 0;
          vm.pageSize = 10;
            
          var access_token  = localStorage.getItem('access_token');
          var token_type = localStorage.getItem('token_type');

          vm.users = [];
          vm.tweets = [];
          
          vm.numberOfPages = function () {
              return Math.ceil(vm.tweets.length/vm.pageSize);                
          };

          vm.getTweets = function (userName) {
            twitterApiSrv.getLastTweets(access_token, token_type, userName).then(
              function (response) {
                $log.info("Récupération des tweets de " + userName + " réussie");

                var tweets = [];
                angular.forEach(response.data, function(data) {
                  var tweet = {};

                  tweet.id = data.id;
                  tweet.created_at = data.created_at;
                  tweet.text = data.text;

                  vm.tweets.push(tweet);
                });
                //vm.tweets.push(tweets);
                console.log("vm.tweets : ", vm.tweets);
                return tweets;
              }, function (error) {
                $log.error("Erreur lors de la récupération de acces_token");
                $log.error(error);
              }
            );
          };

          vm.getUser = function (userName) {
            twitterApiSrv.getUserByName(access_token, token_type, userName).then(
              function (response) {
                $log.info("Récupération de acces_token réussie");

                console.log("response : ", response);
                // Car le web service de twitter renvoie un tableau avec un seul élément
                var data = response.data[0];
                var user = {};

                user.id = data.id;
                user.name = data.name;
                user.profile_image_url = data.profile_image_url;
                user.description = data.description;

                vm.users.push(user);
                console.log("vm.user : ", vm.users);
              }, function (error) {
                $log.error("Erreur lors de la récupération de acces_token");
                $log.error(error);
              }
            );
          };

          vm.init = function () {
            var users = ["SIIcanada", "CanadiensMTL"];

            angular.forEach(users, function(user) {
              vm.getUser(user);
              vm.getTweets(user);

            });
          }

          vm.init();
      }]);
