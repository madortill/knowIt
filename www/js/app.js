// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs).
      // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
      // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
      // useful especially with forms, though we would prefer giving the user a little more room
      // to interact with the app.
      if (window.cordova && window.Keyboard) {
        window.Keyboard.hideKeyboardAccessoryBar(true);
      }

      if (window.StatusBar) {
        // Set the statusbar to use the default style, tweak this to
        // remove the status bar on iOS or change it to use white instead of dark colors.
        StatusBar.styleDefault();
      }
    });
  })


  .config(function ($stateProvider, $urlRouterProvider) {
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // // about page
      // .state("about", {
      //   url: "/about",
      //   templateUrl: "templates/about.html"
      // })

      // //memory game page
      // .state("gameMemory", {
      //   url: "/gameMemory",
      //   templateUrl: "templates/gameMemory.html",
      //   controller: "MemoryGameController"
      // })


      // home page
      .state("openingLecture", {
        url: "/openingLecture",
        templateUrl: "templates/openingLecture.html",
        controller: "openingLectureController"
      })


      .state("summaryLecture", {
        url: "/summaryLecture",
        templateUrl: "templates/summaryLecture.html",
        controller: "summaryLectureController"
      })


      .state("juniorALecture", {
        url: "/juniorALecture",
        templateUrl: "templates/juniorALecture.html",
        controller: "juniorALectureController"
      })



      .state("juniorBLecture", {
        url: "/juniorBLecture",
        templateUrl: "templates/juniorBLecture.html",
        controller: "juniorBLectureController"
      })

      .state("seniorALecture", {
        url: "/seniorALecture",
        templateUrl: "templates/seniorALecture.html",
        controller: "seniorALectureController"
      })



      .state("seniorBLecture", {
        url: "/seniorBLecture",
        templateUrl: "templates/seniorBLecture.html",
        controller: "seniorBLectureController"
      })
      // home page
      .state("home", {
        url: "/home",
        templateUrl: "templates/home.html",
        controller: "HomeController"
      });

    // home page when we open the app
    $urlRouterProvider.when("/", "/home");
    $urlRouterProvider.otherwise("/home");
  });
