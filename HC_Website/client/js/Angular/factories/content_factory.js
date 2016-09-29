happy_cup.factory('content_factory',function(){

	var factory = {};
	var content = {};


	factory.getContent = function(callback){
			content.global = {
			headerLogo : "resources/images/Banners/HC_Logo.png",


			};
			content.home = {
				products : {
					coffee : [
						{
							id : 1,
							name : 'The Buzz',
							roast : 'Medium Roast',
							description : 'A sweet coffee with notes of ripe blueberries and rich dark chocolate. Pleasantly complex with a smooth silky body and a clean brisk finish.',
							// qty_available : ['12oz', '2lbs', '5lbs'],
							grinds : [{id : 1, type: 'Whole Bean'}, {id : 2, type:'Espresso'}, {id : 3, type:'Cone Drip Filter'}, {id : 4, type:'Flat Bottom Drip Filter'}, {id : 5, type:'Chemex'}, {id : 6, type:'French Press'}],
							pricing : [
								{qty: '12oz', price: 12.99},
								{qty: '2lbs', price: 24.99},
								{qty: '5lbs', price: 49.99}
							],
							img_src : "resources/images/products/the_buzz.png"
						},
						{
							id : 2,
							name : 'Boom! Boom!',
							roast : 'Dark Roast',
							description : 'The rich, nutty, smoky, bold flavors of our Dark Roast are a classic blend for the dark coffee enthusiast.',
							// qty_available : ['12oz', '2lbs', '5lbs'],
							grinds : [{id : 1, type: 'Whole Bean'}, {id : 2, type:'Espresso'}, {id : 3, type:'Cone Drip Filter'}, {id : 4, type:'Flat Bottom Drip Filter'}, {id : 5, type:'Chemex'}, {id : 6, type:'French Press'}],
							pricing : [
								{qty: '12oz', price: 12.99},
								{qty: '2lbs', price: 24.99},
								{qty: '5lbs', price: 49.99}
							],
							img_src : "resources/images/products/boomboom.png"
						},
						{
							id : 3,
							name : 'Morning Madness',
							roast : 'Espresso Roast',
							description : 'A blend of Organic, Rainforest Alliance and Direct Trade coffees that combine to produce a smooth and luxurious coffee. Rich chocolate and a hint of roasted nuts lead by a touch of clean citrus.',
							// qty_available : ['12oz', '2lbs', '5lbs'],
							grinds : [{id : 1, type: 'Whole Bean'}, {id : 2, type:'Espresso'}, {id : 3, type:'Cone Drip Filter'}, {id : 4, type:'Flat Bottom Drip Filter'}, {id : 5, type:'Chemex'}, {id : 6, type:'French Press'}],
							pricing : [
								{qty: '12oz', price: 12.99},
								{qty: '2lbs', price: 24.99},
								{qty: '5lbs', price: 49.99}
							],
							img_src : "resources/images/products/morning_madness.png"
						},
						{
							id : 4,
							name : 'Decaffeination',
							roast : 'Decaf',
							description : 'Crisp and sweet with hints of bakers chocolate and roasted nuts. A well balanced taste, not your typical decaf.',
							// qty_available : ['12oz', '2lbs', '5lbs'],
							grinds : [{id : 1, type: 'Whole Bean'}, {id : 2, type:'Espresso'}, {id : 3, type:'Cone Drip Filter'}, {id : 4, type:'Flat Bottom Drip Filter'}, {id : 5, type:'Chemex'}, {id : 6, type:'French Press'}],
							pricing : [
								{qty: '12oz', price: 12.99},
								{qty: '2lbs', price: 24.99},
								{qty: '5lbs', price: 49.99}
							],
							img_src : "resources/images/products/decaf.png"
						},
						{
							id : 5,
							name : 'Happy Heart',
							roast : 'Single Origin - Ethiopia',
							description : 'Kossa Geshe is a vibrant Ethiopian natural from a single farm in the Limmu Kossa District near the Kebena Forest. A fruit-forward, creamy, full-bodied coffee. Honey-sweetness and juicy berries give way to a floral, tea-like finish.',
							// qty_available : ['12oz', '2lbs', '5lbs'],
							grinds : [{id : 1, type: 'Whole Bean'}, {id : 2, type:'Espresso'}, {id : 3, type:'Cone Drip Filter'}, {id : 4, type:'Flat Bottom Drip Filter'}, {id : 5, type:'Chemex'}, {id : 6, type:'French Press'}],
							pricing : [
								{qty: '12oz', price: 12.99},
								{qty: '2lbs', price: 24.99},
								{qty: '5lbs', price: 49.99}
							],
							img_src : "resources/images/products/happy_heart.jpg"
						},
						{
							id : 6,
							name : 'Pondok Baru',
							roast : 'Single Origin - Sumatra',
							description : 'Produced in the Aceh district of northern Sumatra by a group of 80 farming families. Full bodied with a syrupy mouthfeel. Strong, rich, and earthy, with a hint of bakers chocolate.',
							// qty_available : ['12oz', '2lbs', '5lbs'],
							grinds : [{id : 1, type: 'Whole Bean'}, {id : 2, type:'Espresso'}, {id : 3, type:'Cone Drip Filter'}, {id : 4, type:'Flat Bottom Drip Filter'}, {id : 5, type:'Chemex'}, {id : 6, type:'French Press'}],
							pricing : [
								{qty: '12oz', price: 12.99},
								{qty: '2lbs', price: 24.99},
								{qty: '5lbs', price: 49.99}
							],
							img_src : "resources/images/products/pondok_baru.png"
						},
					]
				}

				

			};
			content.about = {

			};
			content.blog = {

			};
			content.contact = {

			};
			content.cafe = {

			};

			callback(content);
		
	}

	factory.getPageContent = function(page, callback) {
		callback(content[page])
	}


	return factory;
});