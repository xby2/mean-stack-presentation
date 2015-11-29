(function () {
	"use strict";

	var app = angular.module("peanutGallery", []);

	var testPostData = [
		{
			title : "Test post 1",
			body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin libero non malesuada feugiat. Nunc in imperdiet ex, sit amet rhoncus neque. Mauris quis arcu nisi.",
			timestamp : "2015-11-28 07:52:00 PM"
		},
		{
			title : "Test post 2",
			body : "Proin ornare sollicitudin viverra. In hac habitasse platea dictumst. Morbi sed cursus ex, vel viverra sapien. Mauris dapibus enim rhoncus ullamcorper fermentum. Ut dignissim, nunc in consequat volutpat, diam felis dapibus magna, et iaculis neque eros non dolor.",
			timestamp : "2015-11-28 07:53:00 PM"
		},
		{
			title : "Test post 3",
			body : "Morbi rutrum elit eu enim pharetra, ut pulvinar orci auctor.",
			timestamp : "2015-11-28 07:54:00 PM"
		}
	]

	app.controller("mainController", [
		"$scope",
		function($scope) {
			$scope.test = "Hello world!";
			$scope.posts = testPostData;
		}
	]);

})();