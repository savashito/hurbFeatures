angular.module('app',['ngResource','ngRoute',
	'ui.bootstrap']);

angular.module('app').config(function($routeProvider,$locationProvider){
	$locationProvider.html5Mode(true);
	console.log('Muaiais');
	$routeProvider
		//.when('/t',{templateUrl:'/partials/main/main',controller:'mvMainCtr'})
			
		.when('/',{ templateUrl: '/partials/main',controller:'mainCtrl'});
});

angular.module('app').controller('mainCtrl',function($scope){
	console.log('Scopee');
	$scope.test = "Hiii";
	$scope.jobs = [{title:'ventas',desc:"persona que vende"},
	{title:'compras',desc:"persona que fuma"}];

});

