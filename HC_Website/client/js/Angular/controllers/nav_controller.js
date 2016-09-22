happy_cup.controller('nav_controller', function ($scope, $location){
	var views = {
		home : 'home',
		about : 'about',
		blog : 'blog',
		locations : 'locations',
		cafe : 'cafe',
		contact : 'contact',
		cart : 'cart',
		checkout : 'checkout'
	}

	$scope.currentView = views.home
	$scope.shoppingCart = 3

	console.log($scope.currentView)

	
});