happy_cup.controller('cart_controller', function ($scope, $location, $timeout, user_factory, shop_factory){

	$scope.cartSaved = false;

	shop_factory.getShoppingCart(function(cart){
		$scope.currentCart = cart;
		$scope.currentCart.edited = false;
		
	});

	$scope.updateCart = function() {
		shop_factory.updateCart($scope.currentCart, function(newCart){
			$scope.currentCart = newCart;
			$scope.currentCart.edited = false;
			$scope.cartSaved = 'Your cart has been saved'
			$timeout(function(){
				$scope.cartSaved = false;
			}, 1000)
		});
	}

	$scope.removeProduct = function(idx, arrayName) {
		
		$timeout(function(){
			shop_factory.removeProduct(idx, arrayName,  function(newCart) {
				$scope.currentCart = newCart;
				$scope.currentCart.edited = false;
				$scope.cartSaved = 'Your cart has been updated'
			})
		}, 250);

		$timeout(function(){
			$scope.cartSaved = false;
		}, 1000);
	};


});