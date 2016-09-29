happy_cup.factory('shop_factory', function(){

	var factory = {};

	

	//-------creating shoppingCart object
	var shoppingCart = {};
	shoppingCart.products = [];
	shoppingCart.countTotals = function() {
		var totalItems = 0;
		var totalPrice = 0;
		for (idx in this.products) {
			totalItems += this.products[idx].qty;
			totalPrice += this.products[idx].subtotal;
		}
		this.totalItems = totalItems;
		this.totalPrice = totalPrice;
	};
	shoppingCart.countTotals();
	//-------

	factory.getShoppingCart = function(callback) {
		callback(shoppingCart);
	};

	factory.addToCart = function(order, callback) {
		var identicalProduct = false;
		for (idx in shoppingCart.products) {
			// if an identical product exists in the cart, 
			// adjust the qty and price of the existing one

			if (shoppingCart.products[idx].id === order.id &&
			shoppingCart.products[idx].grind === order.grind &&
			shoppingCart.products[idx].size === order.size) {

				shoppingCart.products[idx].qty += order.qty;
				shoppingCart.products[idx].subtotal += order.subtotal;
				identicalProduct = true;
				break;
			}

		}
		if (!identicalProduct) {
			shoppingCart.products.push(order);
		}

		shoppingCart.totalItems += order.qty;
		shoppingCart.totalPrice += order.subtotal;
		callback(shoppingCart);
	}


	return factory;
});