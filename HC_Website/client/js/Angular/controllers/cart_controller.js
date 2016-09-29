happy_cup.controller('cart_controller', function ($scope, $location, $timeout, user_factory, shop_factory){


	shop_factory.getShoppingCart(function(cart){
		cart.edited = false;
		$scope.currentCart = cart;
		
	});

	$scope.updateCart = function() {
		shop_factory.updateCart($scope.currentCart, function(newCart){
			$scope.currentCart = newCart;
			$scope.currentCart.edited = false;
		});
	}

	$scope.removeProduct = function(idx, arrayName) {
		$timeout(function(){
			shop_factory.removeProduct(idx, arrayName,  function(newCart) {
				$scope.currentCart = newCart;
				$scope.currentCart.edited = false;
			})
		}, 500);
	};


});