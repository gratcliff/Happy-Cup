happy_cup.controller('nav_controller', function ($scope, $location){

	$scope.currentView = getCurrentView()
	$scope.shoppingCart = 3




	
	$scope.$watch('currentView', function)
	function getCurrentView(){
		// adds styling to navbar
		// reads current route, and returns the element between the first and second '/' in the route
		// if route is /cart/checkout, function returns 'cart'
		// if route is '', return 'home'
		
		var view = $location.path().split('/')[1]
		if (!view) {
			view = 'home'
		}
		return view
	}
});