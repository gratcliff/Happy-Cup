happy_cup.controller('global_controller', function ($scope, $location, $timeout, content_factory, user_factory, shop_factory){

	$scope.currentView = getCurrentView()
	$scope.pageLoading = true;
	$scope.globalContent = {};
	$scope.userReg = {};
	$scope.userLogin = {};
	// $scope.userRegAlert = true;

	content_factory.getContent(function(content){
			$scope.globalContent = content.global;
			$scope.forms = {}
	});

	user_factory.getCurrentUser(function(currentUser){
		$scope.currentUser = currentUser
	});

	shop_factory.getShoppingCart(function(cart){
		$scope.shoppingCart = cart;
		$scope.pageLoading = false;
	});


	
	$scope.registerUser = function() {
		if ($scope.forms.userRegForm.$valid) {
			
			user_factory.registerUser($scope.userReg, function(userData){
				
				$scope.forms.userRegForm.$setUntouched();
				$scope.forms.userRegForm.$setPristine();
				$scope.userReg = {};
				

				//dismiss modal
				$timeout(function() {
					$('#user-reg-modal').modal('hide')
					$scope.userRegAlert = true;
					$scope.currentUser = userData;
					console.log($scope.currentUser)
				}, 250);

				//dismiss flash alert
				$timeout(function() {
					$scope.userRegAlert = false;
				}, 2000);


				
			});

		}

		
	};

	$scope.loginUser = function() {
		if ($scope.userLogin.email_username && $scope.userLogin.password) {
			user_factory.loginUser($scope.userLogin, function(userData){
				if (userData.error) {
					$scope.userLogin.error = true;
				} else {
					
					//dismiss modal
					$timeout(function() {
						$scope.forms.userLoginForm.$setUntouched();
						$scope.forms.userLoginForm.$setPristine();
						$scope.userLogin = {};
						$('#user-login-modal').modal('hide')
						$scope.userRegAlert = true;
						$scope.currentUser = userData;
						console.log($scope.currentUser)
					}, 250);

					//dismiss flash alert
					$timeout(function() {
						$scope.userRegAlert = false;
					}, 2000);
				}
			});
		} else {
			$scope.userLogin.error = true;
		}
	};

	$scope.resetForm = function(form, modelString) {
		// inputs are only reset when models are valid
		$scope[modelString] = {}
		form.$setUntouched();
		form.$setPristine();
		
	}

	$scope.logout = function() {
		$scope.userLogoutAlert = 'Logging out...'
		user_factory.logout(function(response){
			$scope.currentUser = response;
			$timeout(function() {

					$scope.userLogoutAlert = 'You have successfully logged out.'
					
			}, 1000);

			//dismiss flash alert
			$timeout(function() {

					$scope.userLogoutAlert = false;
					
			}, 2000);
		});
	}


	//event listeners

	$scope.$on('getShoppingCart', function(event, callback){
		callback($scope.shoppingCart);
	});

	$scope.$on('openCoffeeModal', function(event, coffee) {
		$scope.coffeeModal = coffee;
		$scope.modalOrder = {}
		$scope.modalOrder.grind = coffee.grinds[0]
		$scope.modalOrder.qty = coffee.pricing[0]
	});

	$scope.broadcastToCart = function(coffee, order, idx) {
		$scope.addingProduct = true;
		$scope.$broadcast('sendToCart', coffee, order, idx);
	}

	// event listener eceived from shop_controller.addToCart()
	$scope.$on('addedToCart', function(event){
		$scope.addingProduct = false;
	});

	// listens for route changes in order to style header appropriately
	$scope.$on("$routeChangeSuccess", function(event) {
		$scope.currentView = getCurrentView();
	});


	// end of event listeners

	

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