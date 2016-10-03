happy_cup.controller('blogpost_controller', function($scope, $http, $location, $routeParams, content_factory){

	$scope.posts = {};
	$scope.post = [];

	content_factory.getContent(function(content){
			$scope.posts = content.blog;		
	});
	for(x in $scope.posts){
		if($scope.posts[x].id == $routeParams.id) {
			$scope.post.push($scope.posts[x]);
		}
	}

	var s = $scope.post[0].text;
	var htmlObject = document.getElementById('post_content');
	htmlObject.innerHTML = s;		
	
	// function convertText(pos) {
	// 	var s = $scope.post[0].text;
	// 	var htmlObject = document.getElementById('post_content');
	// 	htmlObject.innerHTML = $scope.post[0].text;;		
	// }

	// $scope.newPost = function(){
	// 	var n = $routeParams.id;
	// 	convertText(n);
	// }
});