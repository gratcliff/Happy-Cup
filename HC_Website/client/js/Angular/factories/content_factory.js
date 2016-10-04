happy_cup.factory('content_factory', function(){

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
							img_src : "resources/images/products/happy_heart.png"
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
					],

					subscriptions: [
						{
							id: 7,
							name: 'Six Month Subscription',
							description: 'Happy Cup sent directly to your door for six months! A six month subscription gives you a chance to try one bag each of our current coffee lineup!',
							roasts: [{id: 1, roast_name: "Roaster's Choice"}, {id: 2, roast_name: "The Buzz"}, {id: 3, roast_name: "Boom Boom"}, {id: 4, roast_name: "Morning Madness"}, {id: 5, roast_name: "Decaffeination"}, {id: 6, roast_name: "Happy Heart"}, {id: 7, roast_name: "Pondok Baru"}],
							grinds : [{id : 1, type: 'Whole Bean'}, {id : 2, type:'Espresso'}, {id : 3, type:'Cone Drip Filter'}, {id : 4, type:'Flat Bottom Drip Filter'}, {id : 5, type:'Chemex'}, {id : 6, type:'French Press'}],
							pricing : 105.00,
							img_src: "resources/images/products/6mo_sub.png" 
						},
						{
							id: 8,
							name: 'Twelve Month Subscription',
							description: 'Happy Cup sent directly to your door for an entire year! Choose your favorite roast, or switch things up every month with the roasters choice option.',
							roasts: [{id: 1, roast_name: "Roaster's Choice"}, {id: 2, roast_name: "The Buzz"}, {id: 3, roast_name: "Boom Boom"}, {id: 4, roast_name: "Morning Madness"}, {id: 5, roast_name: "Decaffeination"}, {id: 6, roast_name: "Happy Heart"}, {id: 7, roast_name: "Pondok Baru"}],
							grinds : [{id : 1, type: 'Whole Bean'}, {id : 2, type:'Espresso'}, {id : 3, type:'Cone Drip Filter'}, {id : 4, type:'Flat Bottom Drip Filter'}, {id : 5, type:'Chemex'}, {id : 6, type:'French Press'}],
							pricing : 200.00,
							img_src: "resources/images/products/12mo_sub.png"
						},
					],
					gift_options: [
						{}
					],
				}

				

			};
			content.about = {

			};			
			content.blog = [
				{
					id: 1,
					title: 'onlyinyourstate.com named Happy Cup one of the 12 unique shops to visit in Oregon',
					description: 'Based in Portland, Happy Cup is a unique cafe and coffee roaster using ethicially traded coffee sourced from all over the world. The humanitarian, community oriented company offers employment to adults with disabilities and donates a percentage of their profits to vocational and recreational programming for the disabled community.',
					link_title: 'Full Life Launches Sustainable Coffee Roasting Business',
					url: 'http://www.onlyinyourstate.com/oregon/coffee-shops-oregon/',
					img_url: './resources/images/blog/2016/01/21/1.jpg',
					text: '<p> Based in Portland, Happy Cup is a unique cafe and coffee roaster using ethicially traded coffee sourced from all over the world. The humanitarian, community oriented company offers employment to adults with disabilities and donates a percentage of their profits to vocational and recreational programming for the disabled community. Plus, their coffee is delicious! My personal favorite is the Boom Boom dark roast. Read the full article <a href="http://www.onlyinyourstate.com/oregon/coffee-shops-oregon/">here.</a></p>',
					created_at: '2016-01-21T16:15:37+00:00',
					updated_at: '2016-01-21T16:15:37+00:00',
				},
				{
					id: 2,
					title: 'Happy Cup Killingsworth named one of Portland’s top 10 new cafes',
					description: 'Read Willamette Week’s write up featuring Happy Cup Killingsworth as one of the ten best new cafes in Portland for 2015.',
					link_title: 'Full article here!',
					url: 'http://www.wweek.com/2015/11/10/the-10-best-new-coffee-shops-in-portland/',
					img_url: './resources/images/blog/2015/11/11/1.jpg',
					text: '<p> Read Willamette Week’s write up featuring Happy Cup Killingsworth as one of the ten best new cafes in Portland for 2015.</p> <p>Happy Cup Coffee</p><br><p>446 NE Killingsworth St., 889-0511, <a href = "www.happycup.com">happycup.com</a> <p>Happy Cup exists sort of as an ode to squishy feelings: When I walked into a backroom stacked with beanbags at Happy’s newest location on Killingsworth Street, Portland entertainer Nikki Brown Clown was in the back setting up a book table for her Tuesday-morning gig entertaining preschoolers. Other days, the room might house a sewing club, a book group, or a small press reading. Meanwhile, the coffee is roasted in part by adults with disabilities, and the proceeds from the three cafes flip out to related programs. It’s hard not to feel good about it all. But this is the thing: It’s also one of the better examples of a solidly domestic cafe in town, with decent coffee, two neat copies of&nbsp;<i>The New York Times</i>&nbsp;laid out each day in a gesture of squarely old-school hospitality, an array of couches neither too soft nor too hard, and plenty of corners where you can plug in a laptop or just plain hide. A word, however: That piano in the back looks nice, but don’t sit by it. Just…trust me on that. MATTHEW KORFHAGE.</p> <a href = "http://www.wweek.com/2015/11/10/the-10-best-new-coffee-shops-in-portland/">Full article here!</a>',
					created_at: '2015-11-11T14:04:56+00:00',
					updated_at: '2015-11-11T14:04:56+00:00',
				},
				{
					id: 3,
					title: 'Jobs & Hope', 
					description: 'The Portland Observer stopped by Happy Cup on Killingsworth and came away with an article focused on our mission and the different ways Happy Cup is working to benefit adults with developmental disabilities.',
					link_title: 'Read the full article here',
					url: 'http://portlandobserver.com/news/2015/mar/03/jobs-and-hope/',
					img_url: './resources/images/blog/2015/03/6/1.jpg',
					text: '<p> The Portland Observer stopped by Happy Cup on Killingsworth and came away with an article focused on our mission and the different ways Happy Cup is working to benefit adults with developmental disabilities.  “A small corner of northeast Portland is expanding to create more jobs and hope for adults with developmental disabilities.” </p> <a href = "http://portlandobserver.com/news/2015/mar/03/jobs-and-hope/">Read the full article here</a>.',
					created_at: '2015-03-06T15:24:05+00:00',
					updated_at: '2015-03-06T15:24:05+00:00',
				}, 
				{
					id: 4, 
					description: 'Happy Cup continues to expand opening a third location at 446 NE Killingsworth.  The location serves as the flagship locale for Happy Cup and offers unique single origin coffees as well as a full breakfast and lunch menu.',
					title: 'New Cafe opening on Killingsworth & MLK',
					link_title: ['here', 'here'],
					url: ['http://www.bizjournals.com/portland/blog/sbo/2014/11/socially-minded-happy-cup-coffee-co-adding-a-third.html', 'http://www.bizjournals.com/portland/blog/sbo/2015/01/happy-cup-with-opening-of-new-portland-caf-the.html?ana=twt'],
					img_url: './resources/images/blog/2015/01/15/2.jpg',
					text: '<p> Happy Cup continues to expand opening a third location at 446 NE Killingsworth.  The location serves as the flagship locale for Happy Cup and offers unique single origin coffees as well as a full breakfast and lunch menu.  Come have a pour over and experience the Happy Cup mission.  For more information check the cafe section of our website and read the articles <a href = "http://www.bizjournals.com/portland/blog/sbo/2014/11/socially-minded-happy-cup-coffee-co-adding-a-third.html">here</a> and <a href = "http://www.bizjournals.com/portland/blog/sbo/2015/01/happy-cup-with-opening-of-new-portland-caf-the.html?ana=twt">here</a>.</p>',
					created_at: '2015-01-15T21:13:19+00:00',
					updated_at: '2015-01-15T21:13:19+00:00',
				}
			];
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