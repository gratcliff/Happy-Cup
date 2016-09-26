happy_cup.controller('global_controller', function ($scope, $location, $timeout, content_factory, user_factory){

	$scope.currentView = getCurrentView()
	$scope.pageLoading = true;
	$scope.globalContent = {}
	$scope.userReg = {}
	// $scope.userRegAlert = true;

	content_factory.getContent(function(content){
			$scope.globalContent = content.global;
			$scope.forms = {}
			
	});

	user_factory.getCurrentUser(function(currentUser){
		$scope.currentUser = currentUser
		$scope.shoppingCart = 3
		$scope.pageLoading = false;
	})


	
	
	






	
	$scope.registerUser = function() {
		if ($scope.forms.userRegForm.$valid) {
			console.log($scope.globalContent)
			user_factory.registerUser($scope.userReg, function(userData){
				
				$scope.forms.userRegForm.$setUntouched();
				$scope.forms.userRegForm.$setPristine();
				$scope.userReg = {};
				$timeout(function() {
					$('#user-reg-modal').modal('hide')
					$scope.userRegAlert = true;
					$scope.currentUser = userData;
					console.log($scope.currentUser)
				}, 250);
				$timeout(function() {
					$scope.userRegAlert = false;
				}, 2000);
				
			});

		}

		
	};

	$scope.resetForm = function(form, modelString) {
		// inputs are only reset when models are valid
		$scope[modelString] = {}
		form.$setUntouched();
		form.$setPristine();
		
	}

	$scope.logout = function() {
		user_factory.logout(function(response){
			$scope.userLogoutAlert = true
			$scope.currentUser = response;
			$timeout(function() {

					$scope.userLogoutAlert = false;
					
			}, 1500);
		});
	}

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