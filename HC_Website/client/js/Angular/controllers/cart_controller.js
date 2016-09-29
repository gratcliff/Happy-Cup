happy_cup.controller('cart_controller', function ($scope, $location, $timeout, user_factory, shop_factory){


	shop_factory.getShoppingCart(function(cart){
		cart.edited = false;
		$scope.currentCart = cart;
		
	});

	$scope.updateCart = function() {
		shop_factory.updateCart($scope.currentCart, function(cart){
			$scope.currentCart = cart;
			$scope.currentCart.edited = false;
		});
	}

	$scope.removeProduct = function(product) {
		$timeout(function(){
			
		}, 1000);
	};


});