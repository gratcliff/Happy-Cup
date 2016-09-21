happy_cup.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: 'partials/hc_index.html',
		})
		.when('/about',{
			templateUrl: 'partials/hc_about_main.html',
		})
		.when('/blog',{
			templateUrl: 'partials/hc_blog_post.html',
		})
		.when('/locations',{
			templateUrl: 'partials/hc_where_to_buy.html.html',
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
		.when('/checkout',{
			templateUrl: 'partials/hc_shop_checkout.html',
		})
		.when('/payment',{
			templateUrl: 'partials/hc_shop_checkout_payment.html',
		})
		.when('/review',{
			templateUrl: 'partials/hc_shop_checkout_review.html',
		})
		.when('/completed',{
			templateUrl: 'partials/hc_shop_checkout_completed.html',
		})
		.when('/invoice',{
			templateUrl: 'partials/hc_shop_invoice.html',
		})
		.otherwise({
			redirectTo: '/'
		})
});