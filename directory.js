angular.module('directoryApp', ['ngAnimate', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');


  $stateProvider
        .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'directoryController as dirList'
      })

        .state('about', {
        url: '/about',
        templateUrl: 'about.html'
        });
    })
    .controller('directoryController', function($scope) {

        var dirList = this;

        dirList.toggle = false;

        dirList.list = [
          {name:'Scoot', age:22, img:'https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg'},
          {name:'Milorad', age:42, img:'https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg'},
          {name:'Pera', age:55, img:'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'},
          {name:'Zivorad', age:33, img:'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'},
        ];

        dirList.addPerson = function() {
          dirList.list.push({name:dirList.name, age: dirList.age});
          dirList.name = '';
          dirList.age = 0;
        };
    });
