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
					'title': 'Sustainable Business Oregon',
					'post': '<a href="http://www.sustainablebusinessoregon.com/articles/2011/12/full-life-launches-sustainable-coffee.html?ana=twt" target="_blank">“Full Life Launches Sustainable Coffee Roasting Business”</a>',
					'created_at': '2011-12-02T14:06:42+00:00',
					'updated_at': '2011-12-02T14:06:42+00:00',
				},
				{
					'title': 'The Little Red Hen',
					'post': '<a href="http://www.alittleredhen.com/a_little_red_hen/2012/02/joe-vithayathil-enthusiastic-about-happy-cup-coffee.html" target="_blank">The Little Red Hen</a>'
					'created_at': ''
				}
			];
			content.contact = {

			};
			content.cafe = {

			};

			callback(content);
		
	}


	return factory;
});