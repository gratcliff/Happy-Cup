happy_cup.controller('shop_controller', function ($scope, content_factory){

	content_factory.getPageContent('home', function(content){
		$scope.products = content.products;
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
	
})