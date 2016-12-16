var profilelog= angular.module('arapp2',[]);
 profilelog.controller('arcontroller3',function($scope,$location){
	 $scope.fullName= localStorage.getItem('fullName');
	 $scope.email= localStorage.getItem('email');
	 $scope.uname= localStorage.getItem('uname');
	 $scope.pwd= localStorage.getItem('pwd');
	 
 });