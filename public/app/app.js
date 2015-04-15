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
	$scope.totalPrice = 0;
	console.log("1 totalPrice",$scope.totalPrice)
	$scope.tAlert = [
		{name:'Visual',desc:'Use LEDs to indicate what are the needs of your plant',price:1,value:true},
		{name:'Proximity',desc:'When your near by, your phone will recive notifications of the health and needs of your plant',price:3,value:false},
		{name:'Anywhere',desc:'Recive notifications from anywhere. Know how your plants are doing while traveling or at work/school.',price:5,value:false},
	];

	$scope.tMusic = [
		{name:'Beep',desc:'The sensor will beep to let you know that your plants need something. Different tones and frequency indicate different things',price:1,value:false},
		{name:'Basic',desc:'Play music to your plants (requires bluetooth or wifi). Your plant will become happy and grow healtier with music.',price:10,value:false},
		{name:'High definition',desc:'Play high definition music to your plants! (requires bluetooth or wifi). Your plant will become happy and grow healtier with music. Also great ambience for your self!',price:50,value:false},
	];

	$scope.tSensor = [
		{name:'Sun sensor',desc:'Indicate exactly how many hours of sun light your plant needs',price:1,value:true},
		{name:'Moisture sensor',desc:'Indicates exacly how much water your plant needs. Your plant will never dry or drown again',price:1,value:false},
		{name:'Temperature sensor',desc:'Know when your plant is hot or cold!',price:1,value:false},
	];

	$scope.tSoil = [
		{name:'Basic    (macronutrients)',desc:'Know what type and how much ferlizer you plant needs',price:10,value:true},
		{name:'Specific (micronutrients)',desc:'Know what micronutients the soil is missing so your plant grows as healthy and fast as possible',price:50,value:false},
		{name:'Ph ',desc:'Know if your plant can absorve the nutrients and how to improve its absorbtion',price:5,value:false},
	];

	$scope.tPower = [
		{name:'basic batteries',desc:'1 month batery. We will remember you when to charge your sensor',price:1,value:true},
		{name:'Extended life',desc:'1 year batteries! worry less about charging!',price:5,value:false},
		{name:'Solar power',desc:'Never worry of charging your battery (includes extendend life battery, and solar recharging system in case cloudy or solar cells ocluded by leaves).',price:10,value:false},
	];

	$scope.tDepth = [
		{name:'Extended (30 cm)',desc:'Extended soil sensor to reach deeper roots. (the nutrients and ph of the soil near the roots is what matters)',price:1,value:true},
		{name:'Super long (1 m)',desc:'Super long sensor to reach those deep roots. (the nutrients and ph of the soil near the roots is what matters)',price:5,value:false},
		{name:'Super long (1 m)',desc:'Super long sensor to reach those deep roots. (the nutrients and ph of the soil near the roots is what matters)',price:5,value:false},
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
	// $scope.checkboxModel = { value1:false,value3:false,value2:false,};
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
				$scope.price = 0;
				console.log('options',$scope.options);
				console.log('totalPr',$scope.totalPrice.totalPrice);
				function updatePrice(){

					$scope.totalPrice.totalPrice-=$scope.price;					
					$scope.price = 0;
					for (var i = $scope.options.length - 1; i >= 0; i--) {
						var op = $scope.options[i];
						if(op.value)
							$scope.price += op.price  ;
					}
					// update global scope price
					$scope.totalPrice.totalPrice+=$scope.price;
					console.log('upPrice ',$scope.totalPrice.totalPrice);
				}
				updatePrice();
				$scope.selected = 0;
				$scope.open = function(){
					console.log('Miau <3 MUahaha');
					updatePrice();
				};

				$scope.close = function(index){
					// console.log('Close <3 '+index);
					$scope.selected = index;
					$scope.visible = true;
				};
				$scope.hide = function(){
					$scope.visible = false;
					// console.log('Close <3 '+index);
					// $scope.selected = index;
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
				totalPrice:'='
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