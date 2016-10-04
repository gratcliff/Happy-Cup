happy_cup.controller('blogpost_controller', function($scope, $http, $location, $routeParams, content_factory){

	$scope.other_posts = [];
	$scope.post = [];

	content_factory.getContent(function(content){
		for(x in content.blog){
			if(content.blog[x].id == $routeParams.id) {
				console.log(content.blog[x]);
				$scope.post.push(content.blog[x]);
			} else {
				$scope.other_posts.push(content.blog[x]);
			}	
		}	
			
	});

});