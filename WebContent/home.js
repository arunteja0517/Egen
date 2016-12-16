var applog= angular.module('arapp1',[]);
 applog.controller('arcontroller1',function($scope,$location){
	 $scope.fullName= localStorage.getItem('fullName');
 });