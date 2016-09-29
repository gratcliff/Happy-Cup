happy_cup.factory('content_factory',function(){

	var factory = {};
	var content = {};


	factory.getContent = function(callback){
			content.global = {
			headerLogo : "resources/images/Banners/HC_Logo.png",


			};
			content.shop = {

			};
			content.about = {

			};			
			content.blog = [
				{
					'title': 'onlyinyourstate.com named Happy Cup one of the 12 unique shops to visit in Oregon',
					'link_title': 'Full Life Launches Sustainable Coffee Roasting Business',
					'url': 'http://www.sustainablebusinessoregon.com/articles/2011/12/full-life-launches-sustainable-coffee.html',
					'img_url': '../resources/images/blog/2016/01/21/1.jpg',
					'text': '<p> Based in Portland, Happy Cup is a unique cafe and coffee roaster using ethicially traded coffee sourced from all over the world. The humanitarian, community oriented company offers employment to adults with disabilities and donates a percentage of their profits to vocational and recreational programming for the disabled community. Plus, their coffee is delicious! My personal favorite is the Boom Boom dark roast. Read the full article <a href="http://www.onlyinyourstate.com/oregon/coffee-shops-oregon/">here.</a></p>',
					'created_at': '2016-01-21T16:15:37+00:00',
					'updated_at': '2016-01-21T16:15:37+00:00',
				},
			];
			content.contact = {

			};
			content.cafe = {

			};

			callback(content);
		
	}


	return factory;
});