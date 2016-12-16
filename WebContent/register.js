var app= angular.module('arapp',[]);
/*app.config([ '$routeProvider', '$locationProvider',
                function($routeProvider, $locationProvider) {
                    $routeProvider.when('signup.html#/home', {
                        templateUrl : 'home.html',
                        controller : 'arcontroller1',
                        redirectTo : 'home.html'
                    })
                    $routeProvider.when('/', {
                        templateUrl : 'signup.html',
                        controller : 'arcontroller'
                    }).otherwise({
                        redirectTo : 'signup.html'
                    });
                    //$locationProvider.html5Mode(true); //Remove the '#' from URL.
                }
            ]);*/
 app.controller('arcontroller',function($scope,$window){
	 $scope.register= function(){
		// console.log($scope.fullName);
		 localStorage.setItem('fullName',$scope.fullName)
		 localStorage.setItem('email',$scope.email)
		 localStorage.setItem('uname',$scope.uname)
		 localStorage.setItem('pwd',$scope.pwd)
		 console.log(localStorage.getItem('fullName'));
		 console.log(localStorage.getItem('email'));
		 console.log(localStorage.getItem('uname'));
		 console.log(localStorage.getItem('pwd'));
		 $window.location.href = "SignIn.html";
	 }
 });