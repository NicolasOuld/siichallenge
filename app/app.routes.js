'use strict';

angular.module('challengeApp').config(
    [
      '$stateProvider',
      '$urlRouterProvider',

        function ($stateProvider, $urlRouterProvider) {

          $stateProvider.state('site', {
            'abstract': true
          })
          .state('tweets', {
              url: '/tweets',
              templateUrl: 'app/components/tweetList/tweetListView.html',
              controller: 'tweetsListCtrl as tweetsListCtrl',
          })
          $urlRouterProvider.otherwise('/tweets');
        }
    ]);
