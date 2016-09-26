happy_cup.factory('content_factory',function(){

	var factory = {};
	var content = {};


	factory.getContent = function(callback){
			content.global = {
			headerLogo : "resources/images/Banners/HC_Logo.png",


			};

			callback(content);
		
	}


	return factory;
});