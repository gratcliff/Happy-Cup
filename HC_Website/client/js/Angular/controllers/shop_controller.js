happy_cup.controller('shop_controller', function ($scope, $timeout, content_factory, shop_factory){

	content_factory.getPageContent('home', function(content){
		$scope.products = content.products;
		$scope.coffeeModal = {}
	});

	$scope.productDisplay = {
		"showCoffee" : true,
		"showMerch" : false
	};


	
	$scope.showCoffee = function (){
		$scope.productDisplay.showCoffee = true;
		$scope.productDisplay.showMerch = false;
	}

	$scope.showMerch = function (){
		$scope.productDisplay.showCoffee = false;
		$scope.productDisplay.showMerch = true;
	}

	$scope.openCoffeeModal = function(coffee, idx) {
		coffee.idx = idx
		$scope.coffeeModal = coffee;
		$scope.modalOrder = {}
		$scope.modalOrder.grind = coffee.grinds[0]
		$scope.modalOrder.qty = coffee.pricing[0]
	};

	$scope.addCoffeeToCart = function(coffee, order, idx) {
		$scope.products.coffee[idx].addingProduct = true;
		$scope.addingProduct = true;
		var data = {
			id: coffee.id,
			qty: 1,
			name: coffee.name,
			roast: coffee.roast,
			size: order.qty,
			grind: order.grind,
			subtotal: order.qty.price
		};
			
		shop_factory.addCoffeeToCart(data, function(newCart) {
			// emits event to global controller
			$scope.$emit('addedToCart', newCart);
			$timeout(function(){
				delete $scope.products.coffee[idx].addingProduct
				$scope.addingProduct = false;
			}, 1000);
		});

	}
	
})