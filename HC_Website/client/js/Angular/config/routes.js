happy_cup.config(function($routeProvider, $interpolateProvider){
	$interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');

  

	$routeProvider
		.when('/',{
			templateUrl: 'partials/hc_index.html',
		})
		.when('/about',{
			templateUrl: 'partials/hc_about_main.html',
		})
		.when('/blog',{
			templateUrl: 'partials/hc_blog_main.html',
		})
		.when('/locations',{
			templateUrl: 'partials/hc_locations.html',
		})
		.when('/cafe',{
			templateUrl: 'partials/hc_cafe.html',
		})
		.when('/contact',{
			templateUrl: 'partials/hc_contact.html',
		})
		.when('/cart',{
			templateUrl: 'partials/hc_shop_cart.html',
		})
		.when('/cart/checkout',{
			templateUrl: 'partials/hc_shop_checkout.html',
		})
		.when('/cart/payment',{
			templateUrl: 'partials/hc_shop_checkout_payment.html',
		})
		.when('/cart/review',{
			templateUrl: 'partials/hc_shop_checkout_review.html',
		})
		.when('/cart/completed',{
			templateUrl: 'partials/hc_shop_checkout_completed.html',
		})
		.when('/cart/invoice',{
			templateUrl: 'partials/hc_shop_invoice.html',
		})
		.otherwise({
			redirectTo: '/'
		})
});


happy_cup.directive('moveToTop', function(){
	return {
		restrict: 'A',
		link: function(scope, $elm) {
			$elm.on('click', function(){
				$("body").scrollTop(0);
			});
		}
	}
});