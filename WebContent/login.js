var logapp= angular.module('loginapp',[]);
logapp.controller('arcontroller2',function($scope,$window){
	 $scope.login= function(){
		 if (($scope.uName == localStorage.getItem('uname')) && ($scope.pd == localStorage.getItem('pwd'))){
			console.log("Entered If loop");	
			 $window.location.href = "home.html";
		 }else
			 {
			 alert("Invalid detail");
			 }
	 }
});
		 