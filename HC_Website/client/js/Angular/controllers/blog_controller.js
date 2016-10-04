happy_cup.controller('blog_controller', function($scope, $http, $location, content_factory){

	$scope.posts = {};
	$scope.first_post = [];
	$scope.other_posts = [];

	content_factory.getContent(function(content){
			$scope.posts = content.blog;
			$scope.first_post.push($scope.posts[0]);
			for(var x = 1; x < $scope.posts.length; x++){
				$scope.other_posts.push($scope.posts[x]);
			};
	});

});