﻿// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    var app = angular.module('MApp', ['ngMaterial', 'ngCordovaOauth']);

    app.controller('AppCtrl', ['$scope', '$mdDialog', '$cordovaOauth', function ($scope, $mdDialog, $cordovaOauth) {
        var alert;

        $scope.fbLogin = function () {
            console.log("Jai Shri Ram");
            $cordovaOauth.facebook("103140253133912", ["email"])
                .then(function (result) {
                    var accessToken = result.access_token;
                    alert = $mdDialog.alert({
                        title: 'Success',
                        content: accessToken,
                        ok: 'Close'
                    });

                    $mdDialog
                        .show(alert)
                        .finally(function () {
                            alert = undefined;
                        });

                    // console.log("token is" + accessToken);
                    //$scope.createUserWithBaasbox(accessToken, 'facebook', isLink);
                    //$location.path("/profile");
                }, function (error) {

                    alert = $mdDialog.alert({
                        title: 'Error',
                        content: error,
                        ok: 'Close'
                    });

                    $mdDialog
                        .show(alert)
                        .finally(function () {
                            alert = undefined;
                        });

                    //   console.log("There was a problem signing in!  See the console for logs");
                    //  console.log(error);
                });
        }

        $scope.twLogin = function () {
            console.log("Jai Shri Ram");
            $cordovaOauth.twitter(" jIE4YRUAo7RYZXiRZhXXUA", "ZbieDM5VsX8E680ESgPXGRjbTALL1amIKIdrB2aRU")
                .then(function (result) {
                    var accessToken = result;
                    alert = $mdDialog.alert({
                        title: 'Success',
                        content: result,
                        ok: 'Close'
                    });

                    $mdDialog
                        .show(alert)
                        .finally(function () {
                            alert = undefined;
                        });

                }, function (error) {

                    alert = $mdDialog.alert({
                        title: 'Error',
                        content: error,
                        ok: 'Close'
                    });

                    $mdDialog
                        .show(alert)
                        .finally(function () {
                            alert = undefined;
                        });

                });
        }

        $scope.showDialog = function ($event) {
            alert = $mdDialog.alert({
                title: 'Attention',
                content: 'Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.Here are Terms and Conditons later can be retrieved by some API.',
                ok: 'Close'
            });

            $mdDialog
              .show(alert)
              .finally(function () {
                  alert = undefined;
              });
        }
    }]);


    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {




        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();