happy_cup.factory('user_factory',function(){

	var factory = {};
	var currentUser = {};


	factory.getCurrentUser = function(callback){
			currentUser = 'None'
			callback(currentUser);
		
	};

	factory.registerUser = function(userData, callback){
		currentUser = userData
		callback(currentUser)
	};

	factory.logout = function(callback) {
		currentUser = 'None'
		callback(currentUser);
	};


	return factory;
});