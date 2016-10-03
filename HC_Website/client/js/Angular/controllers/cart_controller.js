happy_cup.controller('cart_controller', function ($scope, $location, $timeout, user_factory, shop_factory){

	$scope.cartSaved = false;


	$scope.$emit('getShoppingCart', function(cart){
			$scope.currentCart = cart;
	});

	// shop_factory.getShoppingCart(function(cart){
	// 	$scope.currentCart = cart;
	// 	$scope.currentCart.unsavedChanges = false;
	// });

	$scope.updateCart = function() {

		shop_factory.updateCart($scope.currentCart, function(newCart){
			$scope.currentCart = newCart;
			$scope.currentCart.unsavedChanges = false;
			$scope.cartSavedMessage = true;
			$timeout(function(){
				$scope.cartSavedMessage = false;
			}, 1000)
		});
	}

	$scope.removeProduct = function(idx, arrayName) {
		
		$timeout(function(){
			shop_factory.removeProduct(idx, arrayName,  function(newCart) {
				$scope.currentCart = newCart;
				$scope.currentCart.unsavedChanges = false;
				$scope.cartSavedMessage = true;
			})
		}, 100);

		$timeout(function(){
			$scope.cartSavedMessage = false;
		}, 1000);
	};

	$scope.submitCoupon = function() {
		$scope.invalidCoupon = false;
		shop_factory.submitCoupon($scope.currentCart, function(newCart){
			if (!newCart.coupon.valid) {
				$scope.invalidCoupon = true;
			}
			$scope.currentCart = newCart;
		});
	}


});