happy_cup.factory('shop_factory', function(){

	var factory = {};

	

	//-------creating shoppingCart object
	var shoppingCart = {};
	shoppingCart.coffee = [];
	shoppingCart.subscriptions = [];
	shoppingCart.merch = [];
	shoppingCart.unsavedChanges = false;
	shoppingCart.coupon = {code: undefined, valid:false, discount: 0};
	shoppingCart.checkoutStatus = {
		payment : false,
		review : false,
		complete : false
	}
	
	shoppingCart.countTotals = function() {
		var totalItems = 0;
		var totalPrice = 0;
		for (idx in this.coffee) {
			totalItems += this.coffee[idx].qty;
			totalPrice += this.coffee[idx].subtotal;
		}
		for (idx in this.merch) {
			totalItems += this.merch[idx].qty;
			totalPrice += this.merch[idx].subtotal;
		}
		this.totalItems = totalItems;
		this.totalPrice = totalPrice;
	};
	shoppingCart.countTotals();
	//------- done creating shopping cart

	factory.getShoppingCart = function(callback) {
		callback(shoppingCart);
	};

	factory.addCoffeeToCart = function(order, callback) {
		var identicalProduct = false;
		for (idx in shoppingCart.coffee) {
			// if an identical product exists in the cart, 
			// adjust the qty and price of the existing one

			if (shoppingCart.coffee[idx].id === order.id &&
			shoppingCart.coffee[idx].grind === order.grind &&
			shoppingCart.coffee[idx].size === order.size) {

				shoppingCart.coffee[idx].qty += order.qty;
				shoppingCart.coffee[idx].subtotal += order.subtotal;
				identicalProduct = true;
				break;
			}

		}
		if (!identicalProduct) {
			shoppingCart.coffee.push(order);
		}

		shoppingCart.totalItems += order.qty;
		shoppingCart.totalPrice += order.subtotal;
		callback(shoppingCart);
	}

	factory.updateCart = function(cart, callback){
		var nonZeroQtyCheck = [];
		for (idx in cart.coffee) {
			if (cart.coffee[idx].qty !== 0) {
				nonZeroQtyCheck.push(cart.coffee[idx]);
			}
		}
		shoppingCart.coffee = nonZeroQtyCheck;

		nonZeroQtyCheck = [];

		for (idx in cart.merch) {
			if (cart.merch[idx].qty !== 0) {
				nonZeroQtyCheck.push(cart.merch[idx]);
			}
		}

		shoppingCart.merch = nonZeroQtyCheck;
		shoppingCart.countTotals();



		callback(shoppingCart);
	};

	factory.removeProduct = function(idx, arrayName, callback) {
		shoppingCart[arrayName].splice(idx, 1);
		shoppingCart.countTotals();
		callback(shoppingCart);

	}

	factory.submitCoupon = function(cart, callback) {
		var couponCode = cart.coupon.code;
		//post the coupon code to server and verify validity and discount

		var check = Math.random();
		if (check >= 0.5) {
			cart.coupon.valid = true;
			cart.coupon.discount = 0.15;
		}
		callback(shoppingCart);
	};


	return factory;
});