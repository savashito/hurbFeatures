angular.module('app',['ngResource','ngRoute',
	'ui.bootstrap']);

angular.module('app').config(function($routeProvider,$locationProvider){
	$locationProvider.html5Mode(true);
	$routeProvider
		//.when('/t',{templateUrl:'/partials/main/main',controller:'mvMainCtr'})
			
		// .when('/',{ templateUrl: '/partials/main',controller:'mainCtrl'});
		.when('/',{ templateUrl: '/views/1.html',controller:'mainCtrl'})
		.when('/planter',{ templateUrl: '/views/planter.html',controller:'mainCtrl'})
		.when('/sensor',{ templateUrl: '/views/sensor.html',controller:'mainCtrl'});
});

angular.module('app').controller('mainCtrl',function($scope,$window,$location){
	console.log('Scopee');
    console.log("mainController",$scope);
	$scope.test = "Hiii";
	$scope.jobs = [{title:'ventas',desc:"persona que vende"},
	{title:'compras',desc:"persona que fuma"}];
	// retrieve the jquery window element
	var w = angular.element($window);
	// bind a function to the window element
	w.bind('resize',function(){
		$scope.imagenFondo.height = window.innerHeight+'px';
		$scope.$apply();
	});

	$scope.imagenFondo =
	{
		'background-image': "url(img/Nevado_de_Toluca.jpg)",
		'height': window.innerHeight+'px'
	};

	$scope.sensor = function(){
		$location.path( '/sensor' );
		$location.hash('hurb');
	};
	$scope.planter = function(){
		$location.path( 'planter' );
		$location.hash('hurb');

	};

	$scope.tAlert = [
		{name:'Visual',desc:'Esto es visual'},
		{name:'Proximity',desc:'Esto es cerca'},
		{name:'Anywhere',desc:'Esto es lejos'},
	];

/*
	{	'Visual':'esto es visual',
						'Proximity':'Miauuu',
						'Anywhere':'sdcvf ygh fg'
					};
					*/
	// $scope.tAlert = ['Visual','Proximity','Anywhere'];

		// };
	// 
	console.log('me clikesfs');
	  // animate on click
	  /*
	  $("nav a,.down-button a").bind('click',function(){
	  	console.log('me clikesfs');
	  	$('html, body').stop().animate({
	  		scrollTop: $($(this).attr('href1')).offset().top - 120
	  	},1500,'easeInOutExpo');
	  });
	  */
      /*graph.click(function() {
        wrap
          .animate( { height: "hide" }, 2000, name )
          .delay( 800 )
          .animate( { height: "show" }, 2000, name );
      });
*/	
	$scope.checkboxModel = { value1:false,value3:false,value2:false,};
});

angular.module('app').directive('animateButton',function(){
	return {
		link: function postLink(scope, iElement, iAttrs, controller){
			// use jquery UI to make the element draggable :)
			iElement.bind('click',function(){
					console.log('me clikesfs');
					$('html, body').stop().animate({
						scrollTop: $($(this).attr('href1')).offset().top - 30
				},1500,'easeInOutExpo');
			});
	  	/*
			var img = iElement.find('img');
			//iElement.offset({ top: 80, left: 50});
			img.height(256);

			// img.height(5);
			iElement.draggable();

			console.log(iElement);*/

		}
	};
});

angular.module('app').directive('userInfoCard',function(){
  return {
    templateUrl: "directives/userCardInfo.html",
    restrict: "E",
    controller: function($scope){
		console.log("directive",$scope);
		$scope.collapsed = false;
		$scope.knightMe = function(job){
			job.rank = "heroe";
		};
		$scope.collapse = function(){
			$scope.collapsed=!$scope.collapsed;
		};
	},
	//scope: true, // private scope with parent
    scope: {
		jobs:'=', // private scope with parent
	}
  };
});


angular.module('app').directive('draggable',function(){
	return {
		controller: function($scope){

		},

		template: "<div ng-transclude class ='draggable'></div>",
		transclude: true,
		link: function postLink(scope, iElement, iAttrs, controller){
			// use jquery UI to make the element draggable :)
			
			var img = iElement.find('img');
			//iElement.offset({ top: 80, left: 50});
			img.height(256);

			// img.height(5);
			iElement.draggable();

			console.log(iElement);
		}
	};
});

angular.module('app').directive('hurbCombo',function(){
	return {
			controller: function($scope,$window){
				$scope.selected = 0;
				$scope.open = function(){
					console.log('Miau <3 MUahaha');
				};
				$scope.close = function(index){
					// console.log('Close <3 '+index);
					$scope.selected = index;
				};


				// console.log('sel ',$scope.options[$scope.selected]);


				//$scope.options = ["te quiero","Matar!","AHora!!"];
				// $scope.options = $scope.op[$scope.options];
				// console.log($scope.options);
				// console.log('op',$scope.op);
				// $scope.optionsf = $scope.options;
			},
			templateUrl: "directives/hurbCombo.html",
			scope:
			{
				options:'=',
				// op:'='
			}
	};
});

angular.module('app').directive('hurbBgImg',function(){
  return {
    // templateUrl: "directives/userCardInfo.html",
    //restrict: "A",
    controller: function($scope,$window){
		/*
		console.log("directive",$scope);
		$scope.collapsed = false;
		$scope.knightMe = function(job){
			job.rank = "heroe";
		};
		$scope.collapse = function(){
			$scope.collapsed=!$scope.collapsed;
		};
		*/
		var w = angular.element($window);
		// bind a function to the window element
		w.bind('resize',function(){
			$scope.imagenFondo.height = window.innerHeight+'px';
			$scope.$apply();
		});

		// fix-attachment
		console.log('scopeFix',$scope.fix);

		// console.log('op',$scope.op);
		$scope.imagenFondo =
		{
			'background-image': "url("+$scope.src+")",
			'height': window.innerHeight+'px'
		};
		// $scope.miau = $scope.fix=='fix';
		/*
		if($scope.fix){
			$scope.imagenFondo.
		}*/
		// $sscope.$apply();
	
	},
	templateUrl: "directives/hurbBgImg.html",
	transclude: true,
	scope:{
		src:'@src',
		fix:'@fix',
	}
  };
});