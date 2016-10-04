happy_cup.controller('shop_controller', function ($scope, $timeout, content_factory, shop_factory){

	content_factory.getPageContent('home', function(content){
		$scope.products = content.products;
		$scope.coffeeModal = {}
	});

// console.log($scope.products);

	$scope.productDisplay = {
		"showCoffee" : true,
		"showSubs" : false,
		"showMerch" : false
	};


	
	$scope.showCoffee = function (){
		$scope.productDisplay.showCoffee = true;
		$scope.productDisplay.showMerch = false;
		$scope.productDisplay.showSubs = false;
	}

	$scope.showSubs = function (){
		$scope.productDisplay.showCoffee = false;
		$scope.productDisplay.showMerch = false;
		$scope.productDisplay.showSubs = true;
	}

	$scope.showMerch = function (){
		$scope.productDisplay.showCoffee = false;
		$scope.productDisplay.showMerch = true;
		$scope.productDisplay.showSubs = false;
	}

	$scope.openCoffeeModal = function(coffee, idx) {
		coffee.idx = idx
		$scope.$emit('openCoffeeModal', coffee)
		
	};

	$scope.$on('sendToCart', function(event, coffee, order, idx) {
		$scope.addCoffeeToCart(coffee, order, idx);
	});

	$scope.addCoffeeToCart = function(coffee, order, idx) {
		$scope.products.coffee[idx].addingProduct = true;
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
			
			
			$timeout(function(){
				delete $scope.products.coffee[idx].addingProduct
				// emits completion event to global controller
				$scope.$emit('addedToCart');
			}, 1000);
		});

	}

	$scope.addSubscriptionsToCart = function(sub, order, idx){
		$scope.products.subscriptions[idx].addingProduct = true;
		var data = {
			id: sub.id,
			qty: 1,
			name: sub.name,
			roast: order.roast,
			grind: order.grind,
			subtotal: order.price
		};

		shop_factory.addSubscriptionsToCart(data, function (newCart){

			$timeout(function(){
				delete $scope.products.subscriptions[idx].addingProduct
				$scope.$emit('addedToCart');
			}, 1000);
		});
	}
	
})