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
			content.blog = {

			};
			content.contact = {

			};
			content.cafe = {

			};

			callback(content);
		
	}


	return factory;
});